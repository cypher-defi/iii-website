/**
 * RSVP Invite Blast Script
 * Usage: npx tsx src/scripts/send-invites.ts
 *
 * Fill in the ATTENDEES array below before running.
 * Each entry needs a name and email.
 */

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iii.cl'
const SENDER = process.env.SENDER_EMAIL || 'enrique.ibarra@iii.cl'

// ─── ADD YOUR ATTENDEES HERE ─────────────────────────────────────────────────
const ATTENDEES: { name: string; email: string }[] = [
  // { name: 'Juan Pérez', email: 'juan.perez@empresa.com' },
  // { name: 'María González', email: 'maria.gonzalez@empresa.com' },
]
// ─────────────────────────────────────────────────────────────────────────────

function buildInviteEmail(name: string, email: string): string {
  const confirmUrl = `${BASE_URL}/api/rsvp?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&status=confirm`
  const declineUrl = `${BASE_URL}/api/rsvp?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&status=decline`

  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- HEADER -->
          <tr>
            <td style="background:#0E0E0E;padding:36px 40px;text-align:center;">
              <div style="font-size:36px;font-weight:800;color:#ffffff;letter-spacing:10px;line-height:1;">III</div>
              <div style="color:#6b6b6b;font-size:10px;letter-spacing:3px;margin-top:10px;text-transform:uppercase;">Inversiones Industriales Ibarra</div>
            </td>
          </tr>

          <!-- RED ACCENT BAR -->
          <tr>
            <td style="background:#DA2428;padding:0;height:4px;"></td>
          </tr>

          <!-- EVENT BADGE -->
          <tr>
            <td style="background:#0E0E0E;padding:18px 40px;text-align:center;">
              <div style="display:inline-block;background:#DA2428;color:#ffffff;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:6px 18px;border-radius:3px;">
                1° Seminario Técnico · Cemento y Cal
              </div>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:44px 44px 36px;">

              <p style="font-size:15px;color:#0E0E0E;margin:0 0 24px;line-height:1.8;">
                Estimado/a <strong>${name}</strong>,
              </p>

              <p style="font-size:15px;color:#333333;margin:0 0 20px;line-height:1.8;">
                Junto con saludarle, le recordamos que el <strong>1° Seminario Técnico para Cemento y Cal</strong> se llevará a cabo los días <strong>14 y 15 de abril de 2026</strong> en el <strong>DoubleTree by Hilton Hotel Santiago – Vitacura</strong>.
              </p>

              <p style="font-size:15px;color:#333333;margin:0 0 20px;line-height:1.8;">
                Con el fin de coordinar adecuadamente los espacios y servicios que el hotel nos brindará, le solicitamos confirmar su asistencia a la brevedad posible. Esto nos permitirá asegurar una correcta planificación y garantizar el buen desarrollo del seminario, evitando cualquier inconveniente.
              </p>

              <p style="font-size:15px;color:#333333;margin:0 0 36px;line-height:1.8;">
                Le agradecemos pueda responder prontamente haciendo clic en uno de los botones a continuación.
              </p>

              <!-- CTA BUTTONS -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
                <tr>
                  <td width="48%" align="center" style="padding-right:8px;">
                    <a href="${confirmUrl}"
                       style="display:block;background:#DA2428;color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;padding:16px 24px;border-radius:6px;text-align:center;letter-spacing:0.5px;">
                      ✓&nbsp; Confirmo mi asistencia
                    </a>
                  </td>
                  <td width="48%" align="center" style="padding-left:8px;">
                    <a href="${declineUrl}"
                       style="display:block;background:#ffffff;color:#6b6b6b;text-decoration:none;font-size:15px;font-weight:600;padding:16px 24px;border-radius:6px;text-align:center;border:2px solid #e5e5e5;letter-spacing:0.5px;">
                      ✗&nbsp; No podré asistir
                    </a>
                  </td>
                </tr>
              </table>

              <!-- EVENT DETAILS BOX -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;border:1px solid #e5e5e5;border-radius:8px;margin-bottom:28px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <div style="font-size:11px;font-weight:700;color:#0E0E0E;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;">Detalles del evento</div>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-size:13px;color:#9b9b9b;padding-bottom:10px;padding-right:16px;white-space:nowrap;">Evento</td>
                        <td style="font-size:13px;color:#0E0E0E;font-weight:600;padding-bottom:10px;">1° Seminario Técnico para Cemento y Cal</td>
                      </tr>
                      <tr>
                        <td style="font-size:13px;color:#9b9b9b;padding-bottom:10px;padding-right:16px;white-space:nowrap;">Fecha</td>
                        <td style="font-size:13px;color:#0E0E0E;font-weight:600;padding-bottom:10px;">14 y 15 de Abril, 2026</td>
                      </tr>
                      <tr>
                        <td style="font-size:13px;color:#9b9b9b;padding-right:16px;white-space:nowrap;">Lugar</td>
                        <td style="font-size:13px;color:#0E0E0E;font-weight:600;">DoubleTree by Hilton Hotel Santiago – Vitacura</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="font-size:14px;color:#6b6b6b;margin:0;line-height:1.8;">
                Quedamos atentos a sus comentarios.<br/>
                <span style="color:#0E0E0E;font-weight:600;">Saludos cordiales,</span><br/>
                Inversiones Industriales Ibarra
              </p>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#0E0E0E;padding:24px 40px;text-align:center;">
              <div style="font-size:20px;font-weight:800;color:#ffffff;letter-spacing:6px;margin-bottom:12px;">III</div>
              <div style="font-size:12px;color:#6b6b6b;line-height:1.8;">
                Inversiones Industriales Ibarra<br/>
                <a href="https://www.iii.cl" style="color:#DA2428;text-decoration:none;">www.iii.cl</a>
                &nbsp;·&nbsp;
                <a href="mailto:enrique.ibarra@iii.cl" style="color:#DA2428;text-decoration:none;">enrique.ibarra@iii.cl</a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`
}

async function main() {
  if (ATTENDEES.length === 0) {
    console.error('❌  No attendees found. Fill in the ATTENDEES array in send-invites.ts first.')
    process.exit(1)
  }

  console.log(`📨  Sending invites to ${ATTENDEES.length} attendee(s)...\n`)

  for (const attendee of ATTENDEES) {
    try {
      const { data, error } = await resend.emails.send({
        from: `Seminario Técnico III <${SENDER}>`,
        to: attendee.email,
        subject: 'Confirmación de asistencia — 1° Seminario Técnico para Cemento y Cal',
        html: buildInviteEmail(attendee.name, attendee.email),
      })

      if (error) {
        console.error(`❌  ${attendee.name} (${attendee.email}): ${error.message}`)
      } else {
        console.log(`✓  ${attendee.name} (${attendee.email}) — ID: ${data?.id}`)
      }
    } catch (err) {
      console.error(`❌  ${attendee.name} (${attendee.email}):`, err)
    }

    // Small delay to respect rate limits
    await new Promise((r) => setTimeout(r, 200))
  }

  console.log('\n✅  Done.')
}

main()
