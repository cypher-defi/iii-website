import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#6B6B6B] hover:text-[#DA2428] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-semibold tracking-tight text-[#0E0E0E] mb-8">
          Política de Privacidad
        </h1>

        <div className="prose prose-neutral max-w-none text-[#6B6B6B] space-y-8">
          <p>
            En Inversiones Industriales Ibarra ("iii"), valoramos y respetamos la
            privacidad de los usuarios del Sitio Web, y nos comprometemos a
            proteger sus datos personales conforme a la legislación chilena
            vigente, en particular la Ley Nº 19.628 sobre Protección de la Vida
            Privada.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              1. Responsable del tratamiento
            </h2>
            <ul className="space-y-2">
              <li>
                <strong>Responsable:</strong> Inversiones Industriales Ibarra
              </li>
              <li>
                <strong>Sitio web:</strong>{" "}
                <a
                  href="https://www.iii.cl"
                  className="text-[#DA2428] hover:underline"
                >
                  https://www.iii.cl
                </a>
              </li>
              <li>
                <strong>Correo de contacto:</strong>{" "}
                <a
                  href="mailto:enrique.ibarra@iii.cl"
                  className="text-[#DA2428] hover:underline"
                >
                  enrique.ibarra@iii.cl
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              2. Datos personales recopilados
            </h2>
            <p>iii puede recopilar los siguientes datos personales:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Nombre y apellido.</li>
              <li>Correo electrónico y otros datos de contacto.</li>
              <li>
                Información proporcionada voluntariamente a través de
                formularios.
              </li>
              <li>
                Datos técnicos de navegación (dirección IP, tipo de navegador,
                sistema operativo).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              3. Finalidad del tratamiento
            </h2>
            <p>
              Los datos personales se tratarán con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Responder consultas y solicitudes de contacto.</li>
              <li>
                Proporcionar información sobre servicios o actividades de iii.
              </li>
              <li>Mejorar el funcionamiento y experiencia del Sitio Web.</li>
              <li>Cumplir obligaciones legales o regulatorias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              4. Consentimiento
            </h2>
            <p>
              El envío voluntario de datos personales a través del Sitio Web
              implica el consentimiento del titular para su tratamiento conforme
              a esta Política de Privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              5. Conservación de los datos
            </h2>
            <p>
              Los datos personales se conservarán únicamente durante el tiempo
              necesario para cumplir la finalidad para la cual fueron recopilados
              o mientras exista una obligación legal que lo exija.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              6. Comunicación de datos a terceros
            </h2>
            <p>
              iii no cederá ni comunicará datos personales a terceros, salvo:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                Cuando sea necesario para la prestación de servicios relacionados
                con el Sitio Web.
              </li>
              <li>
                Cuando exista una obligación legal o requerimiento de autoridad
                competente.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              7. Derechos del titular de los datos
            </h2>
            <p>
              El titular de los datos personales puede ejercer los derechos de:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Acceso</li>
              <li>Rectificación</li>
              <li>Cancelación</li>
              <li>Oposición</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, puede enviar una solicitud al correo{" "}
              <a
                href="mailto:enrique.ibarra@iii.cl"
                className="text-[#DA2428] hover:underline"
              >
                enrique.ibarra@iii.cl
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              8. Seguridad de la información
            </h2>
            <p>
              iii adopta medidas razonables de seguridad técnicas y organizativas
              para proteger los datos personales contra accesos no autorizados,
              pérdida, alteración o divulgación.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              9. Uso de cookies
            </h2>
            <p>
              El Sitio Web puede utilizar cookies u otras tecnologías similares
              con fines de funcionamiento, análisis y mejora de la experiencia
              del usuario. El usuario puede configurar su navegador para rechazar
              o eliminar cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              10. Modificaciones a la Política de Privacidad
            </h2>
            <p>
              iii se reserva el derecho de modificar esta Política de Privacidad
              en cualquier momento. Las modificaciones serán publicadas en el
              Sitio Web y entrarán en vigor desde su publicación.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
