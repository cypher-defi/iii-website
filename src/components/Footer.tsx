"use client";

import Logo from "./Logo";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] text-white pt-24 pb-12 px-6 md:px-12 border-t border-[#333]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <AnimateOnScroll animation="fade-in-up" className="col-span-1 lg:col-span-1">
            <Logo variant="footer" />
            <div className="text-[#6B6B6B] text-sm leading-relaxed">
              Inversiones Industriales Ibarra.
              <br />
              Compromiso con la excelencia industrial y el desarrollo
              tecnológico desde hace más de 25 años.
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in-up" delay={100}>
            <h4 className="text-lg font-semibold mb-6">Navegación</h4>
            <ul className="space-y-3 text-[#6B6B6B] text-sm">
              <li>
                <a href="#inicio" className="hover:text-[#DA2428] transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="hover:text-[#DA2428] transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#industrias"
                  className="hover:text-[#DA2428] transition-colors"
                >
                  Industrias
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-[#DA2428] transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in-up" delay={200}>
            <h4 className="text-lg font-semibold mb-6">Industrias</h4>
            <ul className="space-y-3 text-[#6B6B6B] text-sm">
              <li>
                <a href="#industria-acero" className="hover:text-[#DA2428] transition-colors">
                  Acero
                </a>
              </li>
              <li>
                <a href="#industria-cobre" className="hover:text-[#DA2428] transition-colors">
                  Cobre
                </a>
              </li>
              <li>
                <a href="#industria-cemento" className="hover:text-[#DA2428] transition-colors">
                  Cemento
                </a>
              </li>
              <li>
                <a href="#industria-cal" className="hover:text-[#DA2428] transition-colors">
                  Cal
                </a>
              </li>
            </ul>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in-up" delay={300}>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-[#6B6B6B] text-sm">
              <li>
                <a href="/terminos" className="hover:text-[#DA2428] transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="/privacidad" className="hover:text-[#DA2428] transition-colors">
                  Política de Privacidad
                </a>
              </li>
            </ul>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="fade-in-up" delay={400}>
          <div className="pt-8 border-t border-[#333] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#6B6B6B]">
            <div>
              &copy; 2025 Inversiones Industriales Ibarra. Todos los derechos
              reservados.
            </div>
            <div className="flex gap-4">
              <span>Brand System v1.1</span>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}
