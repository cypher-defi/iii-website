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
  // ── EMPRESAS ─────────────────────────────────────────────────────────────
  { name: 'Ricardo Galli',         email: 'Galli@brxsistemas.com' },
  { name: 'Jacinto Guedes',        email: 'Jacinto@brxsistemas.com' },
  { name: 'Rodrigo Guedes',        email: 'rodrigo@brxsistemas.com' },
  { name: 'Tiago Salazar Couto',   email: 'tiago@densit.com.br' },
  { name: 'Joseane Berti',         email: 'joseane@densit.com.br' },
  { name: 'Erika Couto',           email: 'erika@densit.com.br' },
  { name: 'Filipe Apostolo',       email: 'filipe@densyx.com.br' },
  { name: 'Tiago Guelfi Freitas',  email: 'tiago.guelfi@dynamis-br.com' },
  { name: 'Jon Begiristain',       email: 'jbegiristain@estanda.com' },
  { name: 'Lars Andersen',         email: 'laa@hasle-refractories.com' },
  { name: 'Michael Bladt',         email: 'mjb@hasle-refractories.com' },
  { name: 'Jerome Duez',           email: 'jerome.duez@hgh-infrared.com' },
  { name: 'Saban Beyoglu',         email: 'saban.beyoglu@kumasref.com' },
  { name: 'Vedat Kanmaz',          email: 'vedat.kanmaz@kumasref.com' },
  { name: 'Krittinee Srisumpan',   email: 'krsr@lv-inter.com' },
  { name: 'Hamber Marques',        email: 'hamber.marques@novakem.com.br' },
  { name: 'Luis Bernartt',         email: 'luizgermanobernartt@gmail.com' },

  // ── CLIENTES ─────────────────────────────────────────────────────────────
  { name: 'Jose Luis Mundaca',     email: 'jose.mundaca@cbb.cl' },
  { name: 'Jose Manuel Sanhueza',  email: 'jose.sanhueza@cbb.cl' },
  { name: 'Patricio Moraga',       email: 'patricio.moraga@cbb.cl' },
  { name: 'Jaime Valdes',          email: 'jaime.valdes@cbb.cl' },
  { name: 'Daniel Velasquez',      email: 'daniel.velasquez@meloncementos.cl' },
  { name: 'Joaquin Nash',          email: 'joaquin.nash@melonservicios.cl' },
  { name: 'Ingrid Soto',           email: 'ingrid.soto@melonservicios.cl' },
  { name: 'Luis Vasquez',          email: 'luis.vasquez@melonservicios.cl' },
  { name: 'Marvi Jimenez',         email: 'marvi.jimenez@melonservicios.cl' },
  { name: 'Pedro Estay',           email: 'pedro.estay@melonservicios.cl' },
  { name: 'Marco Castillo',        email: 'marcos.castillo@melonservicios.cl' },
  { name: 'Gaston Guerrero',       email: 'gaston.guerrero@meloncementos.cl' },
  { name: 'Pablo Sandoval',        email: 'pablo.sandoval@meloncementos.cl' },
  { name: 'Rodrigo Bravo',         email: 'rodrigo.bravo@meloncementos.cl' },
  { name: 'Tomas Troncoso',        email: 'tomas.troncoso@meloncementos.cl' },
  { name: 'Rodrigo Ogaz',          email: 'rodrigo.ogaz@meloncementos.cl' },
  { name: 'Daniel Garrido',        email: 'daniel.garrido@meloncementos.cl' },
  { name: 'Alejandra Castro',      email: 'alejandra.castro@meloncementos.cl' },
  { name: 'Maria Jesus Palacios',  email: 'maria.palacios@meloncementos.cl' },
  { name: 'Diego Silva',           email: 'diego.silva@meloncementos.cl' },
  { name: 'Nicolas Arnau',         email: 'nicolas.arnau@meloncementos.cl' },
  { name: 'Gisella Carvajal',      email: 'gisella.carvajal@polpaicosoluciones.cl' },
  { name: 'Matias Agurto',         email: 'matias.agurto@polpaicosoluciones.cl' },
  { name: 'Jesus Henriquez',       email: 'jesus.henriquez@polpaicosoluciones.cl' },
  { name: 'Andrew Moran',          email: 'Andrew.Moran@polpaicosoluciones.cl' },
  { name: 'Dioniemil Vera',        email: 'Dioniemil.Vera.Osorio@polpaicosoluciones.cl' },
  { name: 'Fernando Rivas',        email: 'fernando.rivas@polpaicosoluciones.cl' },
  { name: 'Oscar Rojas',           email: 'Oscar.Rojas@polpaicosoluciones.cl' },
  { name: 'Andres Thiers',         email: 'athiers@soprocal.cl' },
  { name: 'Santiago Fadic',        email: 'sfadic@soprocal.cl' },
  { name: 'Angel Alvarez',         email: 'angel.alvarez@UNACEM.CL' },
  { name: 'Camilo Jimenez',        email: 'camilo.jimenez@UNICONCHILE.CL' },
  { name: 'Javier Lopez',          email: 'javier.lopez@UNACEM.CL' },
  { name: 'Pedro Berrios',         email: 'pedro.berrios@UNACEM.CL' },
  { name: 'Francisco Aguilera',    email: 'francisco.aguilera@UNACEM.CL' },

  // ── III ──────────────────────────────────────────────────────────────────
  { name: 'Raul Ibarra',           email: 'raul.ibarra@imingenieria.cl' },
  { name: 'Vilma Magnata',         email: 'vilma.magnata@imingenieria.cl' },
  { name: 'Sergio Vidal',          email: 'svidal@uc.cl' },
  { name: 'Guillermo Coloma',      email: 'guillermo@colomaconsultores.cl' },
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
            <td style="background:#3A3A3A;padding:36px 40px;text-align:center;">
              <img src="https://www.iii.cl/apple-icon.png" width="72" height="72" alt="III" style="border-radius:14px;display:block;margin:0 auto 14px;" />
              <div style="color:#cccccc;font-size:10px;letter-spacing:3px;text-transform:uppercase;">Inversiones Industriales Ibarra</div>
            </td>
          </tr>

          <!-- RED ACCENT BAR -->
          <tr>
            <td style="background:#DA2428;padding:0;height:4px;"></td>
          </tr>

          <!-- EVENT BADGE -->
          <tr>
            <td style="background:#3A3A3A;padding:18px 40px;text-align:center;">
              <div style="display:inline-block;background:#DA2428;color:#ffffff;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:6px 18px;border-radius:3px;">
                1° Seminario Técnico · Cemento y Cal
              </div>
            </td>
          </tr>

          <!-- BODY -->
          <tr>
            <td style="padding:44px 44px 36px;">

              <p style="font-size:15px;color:#666666;margin:0 0 24px;line-height:1.8;">
                Estimado/a <strong>${name}</strong>,
              </p>

              <p style="font-size:15px;color:#666666;margin:0 0 20px;line-height:1.8;">
                Junto con saludarle, le recordamos que el <strong>1° Seminario Técnico para Cemento y Cal</strong> se llevará a cabo los días <strong>14 y 15 de abril de 2026</strong> en el <strong>DoubleTree by Hilton Hotel Santiago – Vitacura</strong>.
              </p>

              <p style="font-size:15px;color:#666666;margin:0 0 20px;line-height:1.8;">
                Con el fin de coordinar adecuadamente los espacios y servicios que el hotel nos brindará, le solicitamos confirmar su asistencia a la brevedad posible. Esto nos permitirá asegurar una correcta planificación y garantizar el buen desarrollo del seminario, evitando cualquier inconveniente.
              </p>

              <p style="font-size:15px;color:#666666;margin:0 0 36px;line-height:1.8;">
                Le agradecemos pueda responder prontamente haciendo clic en uno de los botones a continuación.
              </p>

              <!-- CTA BUTTONS - stacked for equal size on mobile -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:36px;">
                <tr>
                  <td align="center" style="padding-bottom:12px;">
                    <a href="${confirmUrl}" style="display:block;background:#DA2428;color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;padding:18px 24px;border-radius:6px;text-align:center;letter-spacing:0.5px;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px;display:inline-block;"><path d="M20 6L9 17L4 12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>Confirmo mi asistencia
                    </a>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <a href="${declineUrl}" style="display:block;background:#ffffff;color:#6b6b6b;text-decoration:none;font-size:15px;font-weight:600;padding:18px 24px;border-radius:6px;text-align:center;border:2px solid #e5e5e5;letter-spacing:0.5px;">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:middle;margin-right:8px;display:inline-block;"><path d="M18 6L6 18M6 6L18 18" stroke="#9b9b9b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>No podré asistir
                    </a>
                  </td>
                </tr>
              </table>

              <!-- EVENT DETAILS BOX -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;border:1px solid #e5e5e5;border-radius:8px;margin-bottom:28px;">
                <tr>
                  <td style="padding:24px 28px;">
                    <div style="font-size:11px;font-weight:700;color:#666666;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;">Detalles del evento</div>
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-size:13px;color:#9b9b9b;padding-bottom:10px;padding-right:16px;white-space:nowrap;">Evento</td>
                        <td style="font-size:13px;color:#666666;font-weight:600;padding-bottom:10px;">1° Seminario Técnico para Cemento y Cal</td>
                      </tr>
                      <tr>
                        <td style="font-size:13px;color:#9b9b9b;padding-bottom:10px;padding-right:16px;white-space:nowrap;">Fecha</td>
                        <td style="font-size:13px;color:#666666;font-weight:600;padding-bottom:10px;">14 y 15 de Abril, 2026</td>
                      </tr>
                      <tr>
                        <td style="font-size:13px;color:#9b9b9b;padding-right:16px;white-space:nowrap;">Lugar</td>
                        <td style="font-size:13px;color:#666666;font-weight:600;">DoubleTree by Hilton Hotel Santiago – Vitacura</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="font-size:14px;color:#6b6b6b;margin:0;line-height:1.8;">
                Quedamos atentos a sus comentarios.<br/>
                <span style="color:#666666;font-weight:600;">Saludos cordiales,</span><br/>
                Inversiones Industriales Ibarra
              </p>

            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#3A3A3A;padding:24px 40px;text-align:center;">
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
        subject: 'Invitación: 1° Seminario Técnico para Cemento y Cal – Confirmación de Asistencia',
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
