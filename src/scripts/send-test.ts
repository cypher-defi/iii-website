import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iii.cl'
const SENDER = process.env.SENDER_EMAIL || 'enrique.ibarra@iii.cl'

const TEST_RECIPIENTS = [
  { name: 'Enrique Ibarra', email: 'eibarraf@gmail.com' },
]

function buildInviteEmail(name: string, email: string): string {
  const confirmUrl = `${BASE_URL}/api/rsvp?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&status=confirm`
  const declineUrl = `${BASE_URL}/api/rsvp?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&status=decline`

  // Reuse same HTML as send-invites.ts (kept in sync manually)
  return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <tr><td style="background:#3A3A3A;padding:36px 40px;text-align:center;">
          <img src="https://www.iii.cl/apple-icon.png" width="72" height="72" alt="III" style="border-radius:14px;display:block;margin:0 auto 14px;" />
          <div style="color:#cccccc;font-size:10px;letter-spacing:3px;text-transform:uppercase;">Inversiones Industriales Ibarra</div>
        </td></tr>
        <tr><td style="background:#DA2428;padding:0;height:4px;"></td></tr>
        <tr><td style="background:#3A3A3A;padding:18px 40px;text-align:center;">
          <div style="display:inline-block;background:#DA2428;color:#ffffff;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:6px 18px;border-radius:3px;">
            1° Seminario Técnico · Cemento y Cal
          </div>
        </td></tr>
        <tr><td style="padding:44px 44px 36px;">
          <p style="font-size:15px;color:#666666;margin:0 0 24px;line-height:1.8;">Estimado/a <strong>${name}</strong>,</p>
          <p style="font-size:15px;color:#666666;margin:0 0 20px;line-height:1.8;">Junto con saludarle, le recordamos que el <strong>1° Seminario Técnico para Cemento y Cal</strong> se llevará a cabo los días <strong>14 y 15 de abril de 2026</strong> en el <strong>DoubleTree by Hilton Hotel Santiago – Vitacura</strong>.</p>
          <p style="font-size:15px;color:#666666;margin:0 0 20px;line-height:1.8;">Con el fin de coordinar adecuadamente los espacios y servicios que el hotel nos brindará, le solicitamos confirmar su asistencia a la brevedad posible. Esto nos permitirá asegurar una correcta planificación y garantizar el buen desarrollo del seminario, evitando cualquier inconveniente.</p>
          <p style="font-size:15px;color:#666666;margin:0 0 36px;line-height:1.8;">Le agradecemos pueda responder prontamente haciendo clic en uno de los botones a continuación.</p>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
            <tr><td align="center" style="padding-bottom:12px;">
              <a href="${confirmUrl}" style="display:block;background:#DA2428;color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;padding:18px 24px;border-radius:6px;text-align:center;letter-spacing:0.5px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px;display:inline-block;"><path d="M20 6L9 17L4 12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Confirmo mi asistencia
              </a>
            </td></tr>
            <tr><td align="center">
              <a href="${declineUrl}" style="display:block;background:#ffffff;color:#6b6b6b;text-decoration:none;font-size:15px;font-weight:600;padding:18px 24px;border-radius:6px;text-align:center;border:2px solid #e5e5e5;letter-spacing:0.5px;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px;display:inline-block;"><path d="M18 6L6 18M6 6L18 18" stroke="#9b9b9b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>No podré asistir
              </a>
            </td></tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;border:1px solid #e5e5e5;border-radius:8px;margin-bottom:28px;">
            <tr><td style="padding:24px 28px;">
              <div style="font-size:11px;font-weight:700;color:#666666;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;">Detalles del evento</div>
              <table cellpadding="0" cellspacing="0">
                <tr><td style="font-size:13px;color:#9b9b9b;padding-bottom:10px;padding-right:16px;white-space:nowrap;">Evento</td><td style="font-size:13px;color:#666666;font-weight:600;padding-bottom:10px;">1° Seminario Técnico para Cemento y Cal</td></tr>
                <tr><td style="font-size:13px;color:#9b9b9b;padding-bottom:10px;padding-right:16px;white-space:nowrap;">Fecha</td><td style="font-size:13px;color:#666666;font-weight:600;padding-bottom:10px;">14 y 15 de Abril, 2026</td></tr>
                <tr><td style="font-size:13px;color:#9b9b9b;padding-right:16px;white-space:nowrap;">Lugar</td><td style="font-size:13px;color:#666666;font-weight:600;">DoubleTree by Hilton Hotel Santiago – Vitacura</td></tr>
              </table>
            </td></tr>
          </table>
          <p style="font-size:13px;color:#9b9b9b;margin:0;line-height:1.7;">Si tiene alguna consulta, no dude en responder a este correo.<br/>Quedamos atentos a sus comentarios.</p>
        </td></tr>
        <tr><td style="background:#f9f9f9;padding:24px 40px;text-align:center;border-top:1px solid #eeeeee;">
          <img src="https://www.iii.cl/apple-icon.png" width="36" height="36" alt="III" style="border-radius:6px;display:block;margin:0 auto 10px;" />
          <div style="font-size:11px;color:#9b9b9b;line-height:1.8;">
            <strong style="color:#666666;">Inversiones Industriales Ibarra</strong><br/>
            1° Seminario Técnico para Cemento y Cal &nbsp;·&nbsp; 14–15 Abril 2026<br/>
            DoubleTree by Hilton Santiago – Vitacura
          </div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

async function main() {
  for (const r of TEST_RECIPIENTS) {
    const { data, error } = await resend.emails.send({
      from: `Seminario Técnico III <${SENDER}>`,
      to: r.email,
      subject: 'Invitación: 1° Seminario Técnico para Cemento y Cal – Confirmación de Asistencia',
      html: buildInviteEmail(r.name, r.email),
    })
    if (error) console.error(`❌  ${r.name}: ${error.message}`)
    else console.log(`✓  ${r.name} (${r.email}) — ID: ${data?.id}`)
  }
}
main()
