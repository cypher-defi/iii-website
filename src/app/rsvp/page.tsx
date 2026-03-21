import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Confirmación RSVP | Seminario Técnico III',
}

interface Props {
  searchParams: Promise<{ status?: string; name?: string; error?: string }>
}

export default async function RsvpPage({ searchParams }: Props) {
  const { status, name } = await searchParams
  const displayName = name ? decodeURIComponent(name) : ''

  const isConfirm = status === 'confirm'
  const isDecline = status === 'decline'
  const isAlready = status === 'already'
  const isError = !isConfirm && !isDecline && !isAlready

  const content = isConfirm
    ? {
        icon: '✓',
        iconBg: '#16a34a',
        title: `¡Gracias, ${displayName}!`,
        subtitle: 'Tu asistencia ha sido confirmada.',
        body: 'Nos complace contar con tu presencia en el 1° Seminario Técnico para Cemento y Cal. Recibirás más información a medida que se acerque la fecha.',
      }
    : isDecline
    ? {
        icon: '✗',
        iconBg: '#6b6b6b',
        title: `Gracias por responder, ${displayName}.`,
        subtitle: 'Hemos registrado que no podrás asistir.',
        body: 'Lamentamos no poder contar con tu presencia en esta ocasión. Esperamos verte en futuras instancias.',
      }
    : isAlready
    ? {
        icon: '!',
        iconBg: '#DA2428',
        title: 'Ya recibimos tu respuesta.',
        subtitle: 'Tu confirmación fue registrada anteriormente.',
        body: 'Si crees que esto es un error, comunícate con nosotros a enrique.ibarra@iii.cl',
      }
    : {
        icon: '?',
        iconBg: '#6b6b6b',
        title: 'Enlace inválido.',
        subtitle: 'No pudimos procesar tu respuesta.',
        body: 'Por favor comunícate con nosotros directamente a enrique.ibarra@iii.cl',
      }

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#f4f4f4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          background: '#ffffff',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        }}
      >
        {/* Header */}
        <div
          style={{
            background: '#0E0E0E',
            padding: '32px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '32px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '8px',
            }}
          >
            III
          </div>
          <div
            style={{
              color: '#6b6b6b',
              fontSize: '10px',
              letterSpacing: '3px',
              marginTop: '8px',
              textTransform: 'uppercase',
            }}
          >
            Inversiones Industriales Ibarra
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '40px 36px' }}>
          {/* Status icon */}
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: content.iconBg,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                color: '#ffffff',
                fontWeight: 700,
              }}
            >
              {content.icon}
            </div>
          </div>

          <h1
            style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#0E0E0E',
              textAlign: 'center',
              margin: '0 0 10px',
            }}
          >
            {content.title}
          </h1>
          <p
            style={{
              fontSize: '15px',
              color: '#DA2428',
              fontWeight: 600,
              textAlign: 'center',
              margin: '0 0 20px',
            }}
          >
            {content.subtitle}
          </p>
          <p
            style={{
              fontSize: '14px',
              color: '#6b6b6b',
              textAlign: 'center',
              lineHeight: '1.7',
              margin: '0 0 36px',
            }}
          >
            {content.body}
          </p>

          {/* Event details */}
          <div
            style={{
              background: '#f9f9f9',
              border: '1px solid #e5e5e5',
              borderRadius: '8px',
              padding: '20px 24px',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#0E0E0E',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '14px',
              }}
            >
              Detalles del evento
            </div>
            <div style={{ fontSize: '13px', color: '#6b6b6b', lineHeight: '2' }}>
              <div>
                <span style={{ color: '#0E0E0E', fontWeight: 600 }}>Evento: </span>
                1° Seminario Técnico para Cemento y Cal
              </div>
              <div>
                <span style={{ color: '#0E0E0E', fontWeight: 600 }}>Fecha: </span>
                14 y 15 de Abril, 2026
              </div>
              <div>
                <span style={{ color: '#0E0E0E', fontWeight: 600 }}>Lugar: </span>
                DoubleTree by Hilton Santiago – Vitacura
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            borderTop: '1px solid #eeeeee',
            padding: '18px 32px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '12px', color: '#9b9b9b' }}>
            © 2026 Inversiones Industriales Ibarra
          </div>
          <a
            href="https://www.iii.cl"
            style={{ fontSize: '12px', color: '#DA2428', textDecoration: 'none', marginTop: '4px', display: 'block' }}
          >
            www.iii.cl
          </a>
        </div>
      </div>
    </main>
  )
}
