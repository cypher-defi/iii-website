import { NextRequest, NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'
import { Resend } from 'resend'

const redis = Redis.fromEnv()
const resend = new Resend(process.env.RESEND_API_KEY)

interface RsvpEntry {
  name: string
  email: string
  status: 'confirm' | 'decline'
  timestamp: string
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const name = decodeURIComponent(searchParams.get('name') || '')
  const email = decodeURIComponent(searchParams.get('email') || '')
  const status = searchParams.get('status') as 'confirm' | 'decline' | null

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iii.cl'

  if (!name || !email || !status || !['confirm', 'decline'].includes(status)) {
    return NextResponse.redirect(new URL('/rsvp?error=invalid', baseUrl))
  }

  // Prevent duplicate submissions
  const existing = await redis.hget('rsvp:responses', email)
  if (existing) {
    return NextResponse.redirect(
      new URL(`/rsvp?status=already&name=${encodeURIComponent(name)}`, baseUrl)
    )
  }

  // Store RSVP
  const entry: RsvpEntry = {
    name,
    email,
    status,
    timestamp: new Date().toISOString(),
  }
  await redis.hset('rsvp:responses', { [email]: JSON.stringify(entry) })

  // Fetch updated full list for notification
  const all = (await redis.hgetall('rsvp:responses')) || {}
  const entries: RsvpEntry[] = Object.values(all).map((v) =>
    typeof v === 'string' ? JSON.parse(v) : v as RsvpEntry
  )
  const confirmed = entries.filter((e) => e.status === 'confirm')
  const declined = entries.filter((e) => e.status === 'decline')

  // Notify dad
  await resend.emails.send({
    from: `Seminario III <${process.env.SENDER_EMAIL}>`,
    to: process.env.DAD_EMAIL!,
    subject: `RSVP Seminario — ${name} ${status === 'confirm' ? '✓ Confirmó' : '✗ Declinó'}`,
    html: buildNotificationHtml({ newEntry: entry, confirmed, declined }),
  })

  return NextResponse.redirect(
    new URL(`/rsvp?status=${status}&name=${encodeURIComponent(name)}`, baseUrl)
  )
}

function buildNotificationHtml({
  newEntry,
  confirmed,
  declined,
}: {
  newEntry: RsvpEntry
  confirmed: RsvpEntry[]
  declined: RsvpEntry[]
}) {
  const isConfirm = newEntry.status === 'confirm'
  const statusColor = isConfirm ? '#16a34a' : '#dc2626'
  const statusLabel = isConfirm ? '✓ Confirmó asistencia' : '✗ Declinó asistencia'

  const rows = (list: RsvpEntry[]) =>
    list
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(
        (e, i) =>
          `<tr style="background:${i % 2 === 0 ? '#f9f9f9' : '#ffffff'}">
            <td style="padding:10px 14px;font-size:14px;color:#4A4A4A;">${e.name}</td>
            <td style="padding:10px 14px;font-size:14px;color:#6b6b6b;">${e.email}</td>
          </tr>`
      )
      .join('')

  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:20px;background:#f4f4f4;font-family:Arial,sans-serif;">
  <div style="max-width:580px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

    <div style="background:#0E0E0E;padding:28px 32px;text-align:center;">
      <img src="https://www.iii.cl/apple-icon.png" width="60" height="60" alt="III" style="border-radius:10px;display:block;margin:0 auto 10px;" />
      <div style="color:#6b6b6b;font-size:10px;letter-spacing:3px;text-transform:uppercase;">Inversiones Industriales Ibarra</div>
    </div>

    <div style="padding:32px;">
      <div style="background:${statusColor}10;border-left:4px solid ${statusColor};padding:18px 20px;border-radius:6px;margin-bottom:28px;">
        <div style="font-size:12px;color:#9b9b9b;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Nueva respuesta recibida</div>
        <div style="font-size:20px;font-weight:700;color:#4A4A4A;">${newEntry.name}</div>
        <div style="font-size:13px;color:#6b6b6b;margin-top:2px;">${newEntry.email}</div>
        <div style="font-size:16px;font-weight:700;color:${statusColor};margin-top:10px;">${statusLabel}</div>
      </div>

      <table style="width:100%;border-collapse:collapse;margin-bottom:28px;">
        <tr>
          <td style="width:50%;padding-right:8px;">
            <div style="background:#f0fdf4;border-radius:8px;padding:20px;text-align:center;">
              <div style="font-size:40px;font-weight:800;color:#16a34a;line-height:1;">${confirmed.length}</div>
              <div style="font-size:12px;color:#6b6b6b;margin-top:6px;text-transform:uppercase;letter-spacing:1px;">Confirmados</div>
            </div>
          </td>
          <td style="width:50%;padding-left:8px;">
            <div style="background:#fef2f2;border-radius:8px;padding:20px;text-align:center;">
              <div style="font-size:40px;font-weight:800;color:#dc2626;line-height:1;">${declined.length}</div>
              <div style="font-size:12px;color:#6b6b6b;margin-top:6px;text-transform:uppercase;letter-spacing:1px;">Declinados</div>
            </div>
          </td>
        </tr>
      </table>

      ${
        confirmed.length > 0
          ? `<div style="margin-bottom:24px;">
              <div style="font-size:11px;font-weight:700;color:#4A4A4A;text-transform:uppercase;letter-spacing:2px;margin-bottom:10px;">
                Confirmados (${confirmed.length})
              </div>
              <table style="width:100%;border-collapse:collapse;border:1px solid #e5e5e5;border-radius:6px;overflow:hidden;">
                ${rows(confirmed)}
              </table>
            </div>`
          : ''
      }

      ${
        declined.length > 0
          ? `<div>
              <div style="font-size:11px;font-weight:700;color:#4A4A4A;text-transform:uppercase;letter-spacing:2px;margin-bottom:10px;">
                Declinados (${declined.length})
              </div>
              <table style="width:100%;border-collapse:collapse;border:1px solid #e5e5e5;border-radius:6px;overflow:hidden;">
                ${rows(declined)}
              </table>
            </div>`
          : ''
      }
    </div>

    <div style="background:#f9f9f9;padding:18px 32px;text-align:center;border-top:1px solid #eeeeee;">
      <div style="font-size:12px;color:#9b9b9b;">
        1° Seminario Técnico para Cemento y Cal &nbsp;·&nbsp; 14–15 Abril 2026<br/>
        DoubleTree by Hilton Santiago – Vitacura
      </div>
    </div>
  </div>
</body>
</html>`
}
