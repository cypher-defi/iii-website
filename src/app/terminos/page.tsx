import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TerminosPage() {
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
          Términos y Condiciones de Uso
        </h1>

        <div className="prose prose-neutral max-w-none text-[#6B6B6B] space-y-8">
          <p>
            Bienvenido a{" "}
            <a href="https://www.iii.cl" className="text-[#DA2428] hover:underline">
              https://www.iii.cl
            </a>{" "}
            (en adelante, el "Sitio Web"). Al acceder y utilizar este Sitio Web,
            aceptas quedar obligado por los presentes Términos y Condiciones. Si
            no estás de acuerdo con ellos, debes abstenerte de utilizar el Sitio
            Web.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              1. Identificación del titular
            </h2>
            <p>
              El Sitio Web es operado por Inversiones Industriales Ibarra (en
              adelante, "iii"), con domicilio en Chile.
            </p>
            <p>
              Correo electrónico de contacto:{" "}
              <a
                href="mailto:enrique.ibarra@iii.cl"
                className="text-[#DA2428] hover:underline"
              >
                enrique.ibarra@iii.cl
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              2. Objeto
            </h2>
            <p>
              El Sitio Web tiene como finalidad proporcionar información sobre la
              empresa, sus actividades, productos, servicios y soluciones
              tecnológicas, así como permitir el contacto con iii.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              3. Uso del Sitio Web
            </h2>
            <p>El usuario se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                Utilizar el Sitio Web de conformidad con la ley, la moral, el
                orden público y estos Términos y Condiciones.
              </li>
              <li>
                No utilizar el Sitio Web con fines ilícitos o lesivos para iii o
                terceros.
              </li>
              <li>
                No introducir virus, malware o cualquier otro elemento que pueda
                afectar el funcionamiento del Sitio Web.
              </li>
            </ul>
            <p className="mt-4">
              iii se reserva el derecho de suspender o limitar el acceso al Sitio
              Web cuando detecte un uso indebido.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              4. Propiedad intelectual
            </h2>
            <p>
              Todos los contenidos del Sitio Web, incluyendo textos, imágenes,
              logotipos, marcas, diseños, código fuente y demás elementos, son
              propiedad de iii o de terceros que han autorizado su uso, y se
              encuentran protegidos por la legislación chilena sobre propiedad
              intelectual.
            </p>
            <p className="mt-4">
              Queda prohibida su reproducción, distribución, comunicación pública
              o modificación sin autorización expresa del titular.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              5. Responsabilidad
            </h2>
            <p>
              El Sitio Web se proporciona "tal como está". iii no garantiza:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>La disponibilidad ininterrumpida del Sitio Web.</li>
              <li>La inexistencia de errores o fallos técnicos.</li>
              <li>
                La total exactitud o actualización permanente de los contenidos.
              </li>
            </ul>
            <p className="mt-4">
              iii no será responsable por daños directos o indirectos derivados
              del uso o imposibilidad de uso del Sitio Web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              6. Enlaces a terceros
            </h2>
            <p>
              El Sitio Web puede contener enlaces a sitios web de terceros. iii
              no se responsabiliza por los contenidos, servicios o políticas de
              privacidad de dichos sitios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              7. Modificaciones
            </h2>
            <p>
              iii se reserva el derecho de modificar en cualquier momento los
              presentes Términos y Condiciones. Las modificaciones entrarán en
              vigor desde su publicación en el Sitio Web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[#0E0E0E] mb-4">
              8. Legislación aplicable y jurisdicción
            </h2>
            <p>
              Estos Términos y Condiciones se rigen por las leyes de la República
              de Chile. Cualquier controversia será sometida a la competencia de
              los tribunales ordinarios de justicia de Chile.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
