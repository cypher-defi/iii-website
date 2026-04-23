import { neon } from '@neondatabase/serverless'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resultados Encuesta | Seminario Técnico III',
}

interface Props {
  searchParams: Promise<{ key?: string }>
}

interface Response {
  id: number
  email: string
  name: string
  submitted_at: string
  data: Record<string, unknown>
}

function ratingLabel(v: unknown) {
  return v && Number(v) > 0 ? `${v}/5` : '—'
}
function npsLabel(v: unknown) {
  return v !== undefined && Number(v) >= 0 ? String(v) : '—'
}
function yesNo(v: unknown) {
  if (v === 'si') return 'Sí'
  if (v === 'no') return 'No'
  return '—'
}
function text(v: unknown) {
  return v && String(v).trim() ? String(v) : '—'
}

export default async function ResultadosPage({ searchParams }: Props) {
  const { key } = await searchParams
  const secret = (process.env.RESULTS_SECRET || 'iii2026').trim()

  if (key !== secret) {
    return (
      <main style={{ minHeight: '100vh', background: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ background: '#fff', borderRadius: '10px', padding: '40px', textAlign: 'center', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <div style={{ fontSize: '32px', fontWeight: 800, color: '#DA2428', letterSpacing: '4px', marginBottom: '12px' }}>III</div>
          <div style={{ fontSize: '15px', color: '#666', marginBottom: '8px' }}>Acceso restringido.</div>
          <div style={{ fontSize: '13px', color: '#9b9b9b' }}>Agregue <code>?key=...</code> a la URL.</div>
        </div>
      </main>
    )
  }

  const sql = neon(process.env.DATABASE_URL!)
  const rows = await sql`
    SELECT id, email, name, submitted_at, data
    FROM survey_responses
    ORDER BY submitted_at DESC
  ` as Response[]

  const th: React.CSSProperties = {
    padding: '10px 14px', fontSize: '11px', fontWeight: 700,
    color: '#ffffff', textTransform: 'uppercase', letterSpacing: '1px',
    whiteSpace: 'nowrap', textAlign: 'left', background: '#3A3A3A',
  }
  const td: React.CSSProperties = {
    padding: '10px 14px', fontSize: '13px', color: '#444',
    borderBottom: '1px solid #f0f0f0', verticalAlign: 'top',
  }
  const tdMuted: React.CSSProperties = { ...td, color: '#9b9b9b' }

  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f4', fontFamily: 'Arial, Helvetica, sans-serif', paddingBottom: '60px' }}>
      {/* Header */}
      <div style={{ background: '#3A3A3A', padding: '24px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: '20px', fontWeight: 800, color: '#ffffff', letterSpacing: '4px' }}>III</div>
          <div style={{ fontSize: '10px', color: '#9b9b9b', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '2px' }}>Inversiones Industriales Ibarra</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ display: 'inline-block', background: '#DA2428', color: '#fff', fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 14px', borderRadius: '3px' }}>
            Resultados Encuesta
          </div>
          <div style={{ fontSize: '12px', color: '#9b9b9b', marginTop: '6px' }}>1° Seminario Técnico · Cemento y Cal · 14–15 Abril 2026</div>
        </div>
      </div>
      <div style={{ height: '4px', background: '#DA2428' }} />

      <div style={{ maxWidth: '1200px', margin: '32px auto', padding: '0 20px' }}>
        {/* Summary */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '28px', flexWrap: 'wrap' }}>
          {[
            { label: 'Respuestas totales', value: rows.length },
            { label: 'Satisfacción promedio', value: rows.length > 0 ? (rows.reduce((sum, r) => sum + (Number(r.data.sat_general) || 0), 0) / rows.filter(r => Number(r.data.sat_general) > 0).length || 0).toFixed(1) + '/5' : '—' },
            { label: 'NPS promedio', value: rows.length > 0 ? (rows.reduce((sum, r) => sum + (Number(r.data.nps) >= 0 ? Number(r.data.nps) : 0), 0) / rows.filter(r => Number(r.data.nps) >= 0).length || 0).toFixed(1) : '—' },
            { label: 'Quieren volver', value: rows.length > 0 ? rows.filter(r => r.data.participar_futuras === 'si').length + '/' + rows.length : '—' },
          ].map(({ label, value }) => (
            <div key={label} style={{ background: '#fff', borderRadius: '8px', padding: '20px 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', minWidth: '160px' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#DA2428' }}>{value}</div>
              <div style={{ fontSize: '12px', color: '#9b9b9b', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</div>
            </div>
          ))}
        </div>

        {rows.length === 0 ? (
          <div style={{ background: '#fff', borderRadius: '10px', padding: '60px', textAlign: 'center', color: '#9b9b9b', fontSize: '15px' }}>
            Aún no hay respuestas registradas.
          </div>
        ) : (
          <div style={{ background: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '900px' }}>
                <thead>
                  <tr>
                    <th style={th}>#</th>
                    <th style={th}>Nombre</th>
                    <th style={th}>Empresa</th>
                    <th style={th}>Cargo</th>
                    <th style={th}>Industria</th>
                    <th style={{ ...th, textAlign: 'center' }}>Sat. General</th>
                    <th style={{ ...th, textAlign: 'center' }}>NPS</th>
                    <th style={{ ...th, textAlign: 'center' }}>Ritmo</th>
                    <th style={{ ...th, textAlign: 'center' }}>Duración</th>
                    <th style={{ ...th, textAlign: 'center' }}>Vuelve</th>
                    <th style={{ ...th, textAlign: 'center' }}>Cada 2 años</th>
                    <th style={th}>Temas prioritarios</th>
                    <th style={th}>Lo más valioso</th>
                    <th style={th}>Mejorar</th>
                    <th style={th}>Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => {
                    const d = row.data
                    const temas = Array.isArray(d.temas_prioritarios) && (d.temas_prioritarios as string[]).length > 0
                      ? (d.temas_prioritarios as string[]).join(', ')
                      : '—'
                    const date = new Date(row.submitted_at).toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
                    return (
                      <tr key={row.id} style={{ background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                        <td style={tdMuted}>{i + 1}</td>
                        <td style={{ ...td, fontWeight: 600 }}>{text(row.name)}</td>
                        <td style={td}>{text(d.empresa)}</td>
                        <td style={td}>{text(d.cargo)}</td>
                        <td style={td}>{text(d.industria)}</td>
                        <td style={{ ...td, textAlign: 'center', fontWeight: 700, color: '#DA2428' }}>{ratingLabel(d.sat_general)}</td>
                        <td style={{ ...td, textAlign: 'center', fontWeight: 700, color: '#DA2428' }}>{npsLabel(d.nps)}</td>
                        <td style={{ ...td, textAlign: 'center' }}>{text(d.ritmo)}</td>
                        <td style={{ ...td, textAlign: 'center' }}>{text(d.duracion)}</td>
                        <td style={{ ...td, textAlign: 'center' }}>{yesNo(d.participar_futuras)}</td>
                        <td style={{ ...td, textAlign: 'center' }}>{yesNo(d.cada_2_anios)}</td>
                        <td style={td}>{temas}</td>
                        <td style={{ ...td, maxWidth: '200px', whiteSpace: 'pre-wrap' }}>{text(d.mas_valioso)}</td>
                        <td style={{ ...td, maxWidth: '200px', whiteSpace: 'pre-wrap' }}>{text(d.mejorar)}</td>
                        <td style={tdMuted}>{date}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
