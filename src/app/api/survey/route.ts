import { NextRequest, NextResponse } from 'next/server'
import { neon } from '@neondatabase/serverless'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const sql = neon(process.env.DATABASE_URL!)

  try {
    const body = await request.json()
    const { name, email, timestamp, ...responses } = body

    if (!email) {
      return NextResponse.json({ error: 'Missing email' }, { status: 400 })
    }

    await sql`
      CREATE TABLE IF NOT EXISTS survey_responses (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        name TEXT,
        submitted_at TIMESTAMPTZ DEFAULT NOW(),
        data JSONB NOT NULL
      )
    `

    const existing = await sql`SELECT id FROM survey_responses WHERE email = ${email}`
    if (existing.length > 0) {
      return NextResponse.json({ error: 'Already submitted' }, { status: 409 })
    }

    const entry = { name, email, timestamp, ...responses }
    await sql`
      INSERT INTO survey_responses (email, name, data)
      VALUES (${email}, ${name || null}, ${JSON.stringify(entry)})
    `

    resend.emails.send({
      from: `Seminario III <${process.env.SENDER_EMAIL}>`,
      to: process.env.DAD_EMAIL!,
      subject: `Encuesta Seminario — Nueva respuesta de ${name || email}`,
      html: buildNotificationHtml(entry),
    }).catch((err) => console.error('Notification email failed:', err))

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Survey submission error:', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}

function buildNotificationHtml(e: Record<string, unknown>) {
  const name = String(e.name || '—')
  const email = String(e.email || '—')
  const empresa = String(e.empresa || '—')
  const cargo = String(e.cargo || '—')
  const industria = String(e.industria || '—')
  const nps = e.nps !== -1 ? String(e.nps) : '—'
  const satGeneral = e.sat_general ? `${e.sat_general}/5` : '—'
  const participar = e.participar_futuras === 'si' ? 'Sí' : e.participar_futuras === 'no' ? 'No' : '—'
  const temas = Array.isArray(e.temas_prioritarios) && e.temas_prioritarios.length > 0
    ? (e.temas_prioritarios as string[]).join(', ')
    : '—'
  const masValioso = String(e.mas_valioso || '—')
  const mejorar = String(e.mejorar || '—')

  return `<!DOCTYPE html>
<html>
<body style="margin:0;padding:20px;background:#f4f4f4;font-family:Arial,sans-serif;">
  <div style="max-width:580px;margin:0 auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

    <div style="background:#3A3A3A;padding:28px 32px;text-align:center;">
      <img src="https://www.iii.cl/apple-icon.png" width="56" height="56" alt="III" style="border-radius:10px;display:block;margin:0 auto 10px;" />
      <div style="color:#cccccc;font-size:10px;letter-spacing:3px;text-transform:uppercase;">Inversiones Industriales Ibarra</div>
    </div>
    <div style="height:4px;background:#DA2428;"></div>

    <div style="padding:32px;">
      <div style="background:#fff5f5;border-left:4px solid #DA2428;padding:18px 20px;border-radius:6px;margin-bottom:28px;">
        <div style="font-size:12px;color:#9b9b9b;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px;">Nueva respuesta recibida</div>
        <div style="font-size:20px;font-weight:700;color:#444444;">${name}</div>
        <div style="font-size:13px;color:#6b6b6b;margin-top:2px;">${email}</div>
        <div style="font-size:13px;color:#6b6b6b;margin-top:2px;">${empresa} · ${cargo} · ${industria}</div>
      </div>

      <table style="width:100%;border-collapse:collapse;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;margin-bottom:24px;">
        <tr style="background:#f9f9f9;">
          <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#666666;text-transform:uppercase;letter-spacing:1px;" colspan="2">Métricas clave</td>
        </tr>
        <tr>
          <td style="padding:10px 16px;font-size:13px;color:#9b9b9b;border-top:1px solid #f0f0f0;">Satisfacción general</td>
          <td style="padding:10px 16px;font-size:13px;color:#444444;font-weight:600;border-top:1px solid #f0f0f0;">${satGeneral}</td>
        </tr>
        <tr>
          <td style="padding:10px 16px;font-size:13px;color:#9b9b9b;border-top:1px solid #f0f0f0;">NPS (0–10)</td>
          <td style="padding:10px 16px;font-size:13px;color:#444444;font-weight:600;border-top:1px solid #f0f0f0;">${nps}</td>
        </tr>
        <tr>
          <td style="padding:10px 16px;font-size:13px;color:#9b9b9b;border-top:1px solid #f0f0f0;">Participar en futuras ediciones</td>
          <td style="padding:10px 16px;font-size:13px;color:#444444;font-weight:600;border-top:1px solid #f0f0f0;">${participar}</td>
        </tr>
        <tr>
          <td style="padding:10px 16px;font-size:13px;color:#9b9b9b;border-top:1px solid #f0f0f0;">Temas prioritarios</td>
          <td style="padding:10px 16px;font-size:13px;color:#444444;font-weight:600;border-top:1px solid #f0f0f0;">${temas}</td>
        </tr>
      </table>

      <div style="margin-bottom:16px;">
        <div style="font-size:11px;font-weight:700;color:#666666;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;">Lo más valioso</div>
        <div style="font-size:14px;color:#444444;line-height:1.6;background:#f9f9f9;padding:12px 16px;border-radius:6px;">${masValioso}</div>
      </div>
      <div>
        <div style="font-size:11px;font-weight:700;color:#666666;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;">Aspectos a mejorar</div>
        <div style="font-size:14px;color:#444444;line-height:1.6;background:#f9f9f9;padding:12px 16px;border-radius:6px;">${mejorar}</div>
      </div>
    </div>

    <div style="background:#f9f9f9;padding:16px 32px;text-align:center;border-top:1px solid #eeeeee;">
      <div style="font-size:12px;color:#9b9b9b;">1° Seminario Técnico para Cemento y Cal · 14–15 Abril 2026</div>
    </div>
  </div>
</body>
</html>`
}
