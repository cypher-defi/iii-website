'use client'

import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'

type FormState = {
  empresa: string
  cargo: string
  industria: string
  sat_general: number
  sat_organizacion: number
  sat_calidad_tecnica: number
  sat_claridad: number
  sat_utilidad: number
  sat_profundidad: number
  sat_aplicabilidad: number
  sat_relevancia: number
  ritmo: string
  carga: string
  sat_interaccion: number
  sat_materiales: number
  kumas_nivel: number
  kumas_dominio: number
  kumas_claridad: number
  kumas_impacto: number
  kumas_valor: number
  duracion: string
  log_lugar: number
  log_soporte: number
  log_acceso: number
  log_comodidad: number
  nps: number
  participar_futuras: string
  cada_2_anios: string
  temas_prioritarios: string[]
  otro_tema: string
  desafio_tecnico: string
  mas_valioso: string
  mejorar: string
  comentarios_adicionales: string
}

const INITIAL: FormState = {
  empresa: '', cargo: '', industria: '',
  sat_general: 0, sat_organizacion: 0, sat_calidad_tecnica: 0, sat_claridad: 0,
  sat_utilidad: 0, sat_profundidad: 0, sat_aplicabilidad: 0, sat_relevancia: 0,
  ritmo: '', carga: '',
  sat_interaccion: 0, sat_materiales: 0,
  kumas_nivel: 0, kumas_dominio: 0, kumas_claridad: 0, kumas_impacto: 0, kumas_valor: 0,
  duracion: '',
  log_lugar: 0, log_soporte: 0, log_acceso: 0, log_comodidad: 0,
  nps: -1, participar_futuras: '', cada_2_anios: '',
  temas_prioritarios: [], otro_tema: '', desafio_tecnico: '',
  mas_valioso: '', mejorar: '', comentarios_adicionales: '',
}

function RatingScale({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          style={{
            width: '44px', height: '44px',
            border: `2px solid ${value === n ? '#DA2428' : '#e0e0e0'}`,
            background: value === n ? '#DA2428' : '#ffffff',
            color: value === n ? '#ffffff' : '#666666',
            borderRadius: '6px', fontSize: '15px', fontWeight: 700, cursor: 'pointer',
          }}
        >
          {n}
        </button>
      ))}
    </div>
  )
}

function NPSScale({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {Array.from({ length: 11 }, (_, i) => i).map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            style={{
              width: '42px', height: '42px',
              border: `2px solid ${value === n ? '#DA2428' : '#e0e0e0'}`,
              background: value === n ? '#DA2428' : '#ffffff',
              color: value === n ? '#ffffff' : '#666666',
              borderRadius: '6px', fontSize: '14px', fontWeight: 700, cursor: 'pointer',
            }}
          >
            {n}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
        <span style={{ fontSize: '11px', color: '#9b9b9b' }}>Nada probable</span>
        <span style={{ fontSize: '11px', color: '#9b9b9b' }}>Muy probable</span>
      </div>
    </div>
  )
}

function RadioGroup({
  options, value, onChange,
}: {
  options: { label: string; value: string }[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          style={{
            padding: '10px 20px',
            border: `2px solid ${value === opt.value ? '#DA2428' : '#e0e0e0'}`,
            background: value === opt.value ? '#DA2428' : '#ffffff',
            color: value === opt.value ? '#ffffff' : '#666666',
            borderRadius: '6px', fontSize: '14px',
            fontWeight: value === opt.value ? 700 : 400,
            cursor: 'pointer',
          }}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}

function SectionHeader({ number, title }: { number: number; title: string }) {
  return (
    <div style={{
      background: '#3A3A3A', padding: '14px 28px',
      borderBottom: '3px solid #DA2428',
      display: 'flex', alignItems: 'center', gap: '12px',
    }}>
      <div style={{
        background: '#DA2428', color: '#ffffff', width: '24px', height: '24px',
        borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '12px', fontWeight: 800, flexShrink: 0,
      }}>
        {number}
      </div>
      <div style={{ color: '#ffffff', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
        {title}
      </div>
    </div>
  )
}

function Question({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: '20px 28px', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ fontSize: '14px', color: '#444444', fontWeight: 600, marginBottom: '14px', lineHeight: '1.5' }}>
        {label}
      </div>
      {children}
    </div>
  )
}

function TextInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: '100%', padding: '10px 14px',
        border: '1.5px solid #e0e0e0', borderRadius: '6px',
        fontSize: '14px', color: '#444444', background: '#fafafa',
        boxSizing: 'border-box', outline: 'none', fontFamily: 'inherit',
      }}
    />
  )
}

function TextArea({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={4}
      style={{
        width: '100%', padding: '10px 14px',
        border: '1.5px solid #e0e0e0', borderRadius: '6px',
        fontSize: '14px', color: '#444444', background: '#fafafa',
        boxSizing: 'border-box', outline: 'none', resize: 'vertical',
        fontFamily: 'inherit',
      }}
    />
  )
}

const TEMAS = [
  { label: 'Procesos de producción', value: 'procesos' },
  { label: 'Eficiencia energética', value: 'energia' },
  { label: 'Control de calidad', value: 'calidad' },
  { label: 'Innovación tecnológica', value: 'innovacion' },
  { label: 'Automatización', value: 'automatizacion' },
  { label: 'Sostenibilidad', value: 'sostenibilidad' },
]

const SECTION2_RATINGS: { key: keyof FormState; label: string }[] = [
  { key: 'sat_general',        label: '1. Satisfacción general con el seminario' },
  { key: 'sat_organizacion',   label: '2. Organización general del evento' },
  { key: 'sat_calidad_tecnica',label: '3. Calidad técnica de las presentaciones' },
  { key: 'sat_claridad',       label: '4. Claridad de los expositores' },
  { key: 'sat_utilidad',       label: '5. Utilidad del contenido para su trabajo' },
  { key: 'sat_profundidad',    label: '6. Nivel de profundidad técnica' },
  { key: 'sat_aplicabilidad',  label: '7. Aplicabilidad práctica de lo aprendido' },
  { key: 'sat_relevancia',     label: '8. Relevancia de los temas para su industria' },
]

const SECTION4_RATINGS: { key: keyof FormState; label: string }[] = [
  { key: 'kumas_nivel',   label: '1. Nivel técnico del contenido presentado' },
  { key: 'kumas_dominio', label: '2. Dominio del tema por parte del expositor' },
  { key: 'kumas_claridad',label: '3. Claridad en la comunicación (idioma / traducción)' },
  { key: 'kumas_impacto', label: '4. Impacto general de la presentación' },
  { key: 'kumas_valor',   label: '5. Valor diferencial respecto al contenido local' },
]

const SECTION5_RATINGS: { key: keyof FormState; label: string }[] = [
  { key: 'log_lugar',    label: '2. Lugar y condiciones generales del evento' },
  { key: 'log_soporte',  label: '3. Calidad del soporte (audio, traducción, material técnico)' },
  { key: 'log_acceso',   label: '4. Facilidad de acceso al evento' },
  { key: 'log_comodidad',label: '5. Comodidad del espacio' },
]

export default function SurveyForm() {
  const params = useSearchParams()
  const name = decodeURIComponent(params.get('name') || '')
  const email = decodeURIComponent(params.get('email') || '')

  const [form, setForm] = useState<FormState>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function setStr(key: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }
  function setNum(key: keyof FormState, value: number) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }
  function toggleTema(tema: string) {
    setForm((prev) => {
      const current = prev.temas_prioritarios
      if (current.includes(tema)) return { ...prev, temas_prioritarios: current.filter((t) => t !== tema) }
      if (current.length >= 2) return prev
      return { ...prev, temas_prioritarios: [...current, tema] }
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/survey', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, ...form, timestamp: new Date().toISOString() }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      setError('Hubo un error al enviar la encuesta. Por favor intente nuevamente.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <main style={{ minHeight: '100vh', background: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
        <div style={{ width: '100%', maxWidth: '520px', background: '#ffffff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}>
          <div style={{ background: '#3A3A3A', padding: '32px', textAlign: 'center' }}>
            <Image src="/apple-icon.png" width={64} height={64} alt="III" style={{ borderRadius: '10px', display: 'block', margin: '0 auto 12px' }} />
            <div style={{ color: '#cccccc', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>Inversiones Industriales Ibarra</div>
          </div>
          <div style={{ height: '4px', background: '#DA2428' }} />
          <div style={{ padding: '40px 36px', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#DA2428', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', color: '#ffffff', fontWeight: 700, marginBottom: '24px' }}>✓</div>
            <h1 style={{ fontSize: '22px', fontWeight: 700, color: '#444444', margin: '0 0 10px' }}>
              {name ? `¡Gracias, ${name}!` : '¡Gracias por responder!'}
            </h1>
            <p style={{ fontSize: '15px', color: '#DA2428', fontWeight: 600, margin: '0 0 16px' }}>Tu encuesta ha sido enviada.</p>
            <p style={{ fontSize: '14px', color: '#6b6b6b', lineHeight: '1.7', margin: 0 }}>
              Valoramos tu tiempo y opinión. Tus respuestas nos ayudarán a mejorar futuras ediciones del seminario.
            </p>
          </div>
          <div style={{ borderTop: '1px solid #eeeeee', padding: '18px 32px', textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#9b9b9b' }}>© 2026 Inversiones Industriales Ibarra</div>
            <a href="https://www.iii.cl" style={{ fontSize: '12px', color: '#DA2428', textDecoration: 'none', display: 'block', marginTop: '4px' }}>www.iii.cl</a>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main style={{ minHeight: '100vh', background: '#f4f4f4', fontFamily: 'Arial, Helvetica, sans-serif', paddingBottom: '60px' }}>
      {/* Page header */}
      <div style={{ background: '#3A3A3A', padding: '28px 20px', textAlign: 'center' }}>
        <Image src="/apple-icon.png" width={56} height={56} alt="III" style={{ borderRadius: '10px', display: 'block', margin: '0 auto 10px' }} />
        <div style={{ color: '#cccccc', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>Inversiones Industriales Ibarra</div>
      </div>
      <div style={{ height: '4px', background: '#DA2428' }} />
      <div style={{ background: '#3A3A3A', padding: '14px 20px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: '#DA2428', color: '#ffffff', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 18px', borderRadius: '3px' }}>
          Encuesta de Satisfacción · Cemento y Cal
        </div>
      </div>

      <div style={{ maxWidth: '700px', margin: '32px auto', padding: '0 16px' }}>
        {/* Intro card */}
        <div style={{ background: '#ffffff', borderRadius: '10px', padding: '28px 32px', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          <h1 style={{ fontSize: '18px', fontWeight: 700, color: '#3A3A3A', margin: '0 0 6px' }}>Encuesta de Satisfacción</h1>
          <div style={{ fontSize: '13px', color: '#DA2428', fontWeight: 600, marginBottom: '14px' }}>
            1° Seminario Técnico para Cemento y Cal · 14–15 de Abril, 2026
          </div>
          {name && (
            <p style={{ fontSize: '14px', color: '#666666', margin: '0 0 8px', lineHeight: '1.6' }}>
              Estimado/a <strong>{name}</strong>,
            </p>
          )}
          <p style={{ fontSize: '14px', color: '#666666', margin: 0, lineHeight: '1.6' }}>
            Agradecemos su asistencia al seminario. Su opinión es fundamental para mejorar futuras ediciones. La encuesta toma aproximadamente 5 minutos.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* 1. Perfil */}
          <div style={{ background: '#ffffff', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <SectionHeader number={1} title="Perfil del Participante" />
            <Question label="1. Empresa">
              <TextInput value={form.empresa} onChange={(v) => setStr('empresa', v)} placeholder="Nombre de su empresa" />
            </Question>
            <Question label="2. Cargo">
              <TextInput value={form.cargo} onChange={(v) => setStr('cargo', v)} placeholder="Su cargo o posición" />
            </Question>
            <Question label="3. Industria">
              <RadioGroup
                options={[{ label: 'Cemento', value: 'cemento' }, { label: 'Cal', value: 'cal' }]}
                value={form.industria}
                onChange={(v) => setStr('industria', v)}
              />
            </Question>
          </div>

          {/* 2. Evaluación General */}
          <div style={{ background: '#ffffff', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <SectionHeader number={2} title="Evaluación General del Seminario" />
            <div style={{ padding: '14px 28px', borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ fontSize: '12px', color: '#9b9b9b', fontStyle: 'italic' }}>
                Escala: 1 = Muy insatisfecho &nbsp;·&nbsp; 5 = Muy satisfecho
              </div>
            </div>
            {SECTION2_RATINGS.map(({ key, label }) => (
              <Question key={key} label={label}>
                <RatingScale value={form[key] as number} onChange={(v) => setNum(key, v)} />
              </Question>
            ))}
          </div>

          {/* 3. Contenido y Experiencia */}
          <div style={{ background: '#ffffff', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <SectionHeader number={3} title="Contenido y Experiencia Técnica" />
            <Question label="1. Ritmo del contenido (velocidad de las presentaciones)">
              <RadioGroup
                options={[{ label: 'Muy lento', value: 'lento' }, { label: 'Adecuado', value: 'adecuado' }, { label: 'Muy rápido', value: 'rapido' }]}
                value={form.ritmo}
                onChange={(v) => setStr('ritmo', v)}
              />
            </Question>
            <Question label="2. Carga de información durante el seminario">
              <RadioGroup
                options={[{ label: 'Insuficiente', value: 'insuficiente' }, { label: 'Adecuada', value: 'adecuada' }, { label: 'Excesiva', value: 'excesiva' }]}
                value={form.carga}
                onChange={(v) => setStr('carga', v)}
              />
            </Question>
            <Question label="3. Oportunidades de interacción y networking">
              <RatingScale value={form.sat_interaccion} onChange={(v) => setNum('sat_interaccion', v)} />
            </Question>
            <Question label="4. Calidad de los materiales entregados (slides, documentos, etc.)">
              <RatingScale value={form.sat_materiales} onChange={(v) => setNum('sat_materiales', v)} />
            </Question>
          </div>

          {/* 4. KUMAS */}
          <div style={{ background: '#ffffff', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <SectionHeader number={4} title="Presentación Internacional" />
            <div style={{ padding: '14px 28px', borderBottom: '1px solid #f0f0f0' }}>
              <div style={{ fontSize: '12px', color: '#9b9b9b', fontStyle: 'italic' }}>
                Escala: 1 = Muy insatisfecho &nbsp;·&nbsp; 5 = Muy satisfecho
              </div>
            </div>
            {SECTION4_RATINGS.map(({ key, label }) => (
              <Question key={key} label={label}>
                <RatingScale value={form[key] as number} onChange={(v) => setNum(key, v)} />
              </Question>
            ))}
          </div>

          {/* 5. Logística */}
          <div style={{ background: '#ffffff', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <SectionHeader number={5} title="Logística del Evento" />
            <Question label="1. Duración del seminario">
              <RadioGroup
                options={[{ label: 'Muy corta', value: 'corta' }, { label: 'Adecuada', value: 'adecuada' }, { label: 'Muy larga', value: 'larga' }]}
                value={form.duracion}
                onChange={(v) => setStr('duracion', v)}
              />
            </Question>
            {SECTION5_RATINGS.map(({ key, label }) => (
              <Question key={key} label={label}>
                <RatingScale value={form[key] as number} onChange={(v) => setNum(key, v)} />
              </Question>
            ))}
          </div>

          {/* 6. Satisfacción General */}
          <div style={{ background: '#ffffff', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <SectionHeader number={6} title="Satisfacción General y Recomendación" />
            <Question label="1. ¿Qué tan probable es que recomiende este seminario a un colega? (Escala 0–10)">
              <NPSScale value={form.nps} onChange={(v) => setNum('nps', v)} />
            </Question>
            <Question label="2. ¿Le gustaría participar en futuras ediciones?">
              <RadioGroup
                options={[{ label: 'Sí', value: 'si' }, { label: 'No', value: 'no' }]}
                value={form.participar_futuras}
                onChange={(v) => setStr('participar_futuras', v)}
              />
            </Question>
            <Question label="3. ¿Le gustaría que este seminario se realice cada 2 años?">
              <RadioGroup
                options={[{ label: 'Sí', value: 'si' }, { label: 'No', value: 'no' }]}
                value={form.cada_2_anios}
                onChange={(v) => setStr('cada_2_anios', v)}
              />
            </Question>
          </div>

          {/* 7. Priorización */}
          <div style={{ background: '#ffffff', borderRadius: '10px', overflow: 'hidden', marginBottom: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <SectionHeader number={7} title="Priorización y Necesidades Técnicas" />
            <Question label="1. Seleccione los 2 temas que considera más relevantes del seminario">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {TEMAS.map((tema) => {
                  const selected = form.temas_prioritarios.includes(tema.value)
                  const disabled = !selected && form.temas_prioritarios.length >= 2
                  return (
                    <button
                      key={tema.value}
                      type="button"
                      onClick={() => toggleTema(tema.value)}
                      disabled={disabled}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '12px 16px',
                        border: `2px solid ${selected ? '#DA2428' : '#e0e0e0'}`,
                        background: selected ? '#fff5f5' : '#ffffff',
                        borderRadius: '6px', cursor: disabled ? 'not-allowed' : 'pointer',
                        opacity: disabled ? 0.4 : 1, textAlign: 'left',
                      }}
                    >
                      <div style={{
                        width: '18px', height: '18px', borderRadius: '4px', flexShrink: 0,
                        border: `2px solid ${selected ? '#DA2428' : '#cccccc'}`,
                        background: selected ? '#DA2428' : '#ffffff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {selected && <span style={{ color: '#ffffff', fontSize: '11px', fontWeight: 700 }}>✓</span>}
                      </div>
                      <span style={{ fontSize: '14px', color: '#444444', fontWeight: selected ? 600 : 400 }}>{tema.label}</span>
                    </button>
                  )
                })}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', border: '2px solid #e0e0e0', borderRadius: '6px' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '4px', border: '2px solid #cccccc', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#9b9b9b', whiteSpace: 'nowrap' }}>Otro:</span>
                  <input
                    type="text"
                    value={form.otro_tema}
                    onChange={(e) => setStr('otro_tema', e.target.value)}
                    placeholder="Especifique"
                    style={{ flex: 1, border: 'none', outline: 'none', fontSize: '14px', color: '#444444', background: 'transparent', fontFamily: 'inherit' }}
                  />
                </div>
              </div>
              {form.temas_prioritarios.length === 2 && (
                <div style={{ marginTop: '8px', fontSize: '12px', color: '#9b9b9b' }}>Máximo 2 temas seleccionados.</div>
              )}
            </Question>
            <Question label="2. ¿Cuál es el principal desafío técnico que enfrenta actualmente en su trabajo?">
              <TextArea value={form.desafio_tecnico} onChange={(v) => setStr('desafio_tecnico', v)} placeholder="Describa su principal desafío técnico..." />
            </Question>
          </div>

          {/* 8. Comentarios */}
          <div style={{ background: '#ffffff', borderRadius: '10px', overflow: 'hidden', marginBottom: '28px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
            <SectionHeader number={8} title="Comentarios Abiertos" />
            <Question label="1. ¿Qué fue lo más valioso del seminario?">
              <TextArea value={form.mas_valioso} onChange={(v) => setStr('mas_valioso', v)} placeholder="Comparta lo que más valoró..." />
            </Question>
            <Question label="2. ¿Qué aspectos deberíamos mejorar?">
              <TextArea value={form.mejorar} onChange={(v) => setStr('mejorar', v)} placeholder="Sus sugerencias de mejora..." />
            </Question>
            <Question label="3. Comentarios adicionales">
              <TextArea value={form.comentarios_adicionales} onChange={(v) => setStr('comentarios_adicionales', v)} placeholder="Cualquier otro comentario..." />
            </Question>
          </div>

          {error && (
            <div style={{ background: '#fff5f5', border: '1.5px solid #DA2428', borderRadius: '8px', padding: '14px 20px', marginBottom: '20px', fontSize: '14px', color: '#DA2428' }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%', padding: '18px',
              background: loading ? '#cccccc' : '#DA2428',
              color: '#ffffff', border: 'none', borderRadius: '8px',
              fontSize: '16px', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer',
              letterSpacing: '0.5px',
            }}
          >
            {loading ? 'Enviando...' : 'Enviar Encuesta'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '28px', fontSize: '12px', color: '#9b9b9b' }}>
          © 2026 Inversiones Industriales Ibarra &nbsp;·&nbsp;{' '}
          <a href="https://www.iii.cl" style={{ color: '#DA2428', textDecoration: 'none' }}>www.iii.cl</a>
        </div>
      </div>
    </main>
  )
}
