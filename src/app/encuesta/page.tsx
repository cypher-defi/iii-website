import { Metadata } from 'next'
import { Suspense } from 'react'
import SurveyForm from './SurveyForm'

export const metadata: Metadata = {
  title: 'Encuesta de Satisfacción | 1° Seminario Técnico Cemento y Cal',
}

export default function EncuestaPage() {
  return (
    <Suspense fallback={
      <main style={{ minHeight: '100vh', background: '#f4f4f4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ color: '#9b9b9b', fontSize: '14px' }}>Cargando...</div>
      </main>
    }>
      <SurveyForm />
    </Suspense>
  )
}
