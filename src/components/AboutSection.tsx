"use client";

import { Layers, Globe } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <AnimateOnScroll animation="slide-in-left">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-4">
                Sobre Nosotros
              </h2>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-none mb-8 text-[#0E0E0E]">
                Liderazgo basado en la excelencia.
              </h3>
              <div className="w-16 h-1 bg-[#DA2428]"></div>
            </AnimateOnScroll>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <div className="text-lg md:text-xl text-[#0E0E0E] leading-relaxed">
                <p className="mb-8">
                  Somos una empresa que representa a un conjunto destacado de
                  compañías de reconocido prestigio en sus respectivos rubros,
                  abarcando sectores estratégicos como el acero, cobre, cemento,
                  cal, y la industria petroquímica.
                </p>
                <p className="text-[#6B6B6B]">
                  A lo largo de más de 25 años de presencia en el mercado nacional
                  e internacional, hemos consolidado una posición de liderazgo
                  basada en la excelencia, la confiabilidad y el compromiso con
                  nuestros clientes.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Founder Block */}
            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <div className="bg-[#EDEDED] p-8 md:p-12 border-l-4 border-[#DA2428] rounded-tr-3xl rounded-br-3xl transition-transform duration-300 hover:translate-x-2">
                <p className="text-lg text-[#0E0E0E] font-medium mb-6">
                  &ldquo;Nuestra empresa es dirigida por su fundador, un
                  profesional con más de 40 años de trayectoria en procesos
                  productivos claves para la industria a nivel mundial.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-[#6B6B6B]"></div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#6B6B6B]">
                    Dirección General
                  </span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Key Attributes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-[#EDEDED]">
              <AnimateOnScroll animation="fade-in-up" delay={300}>
                <div className="group">
                  <div className="mb-4 text-[#DA2428] transition-transform duration-300 group-hover:scale-110">
                    <Layers className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    Integración Tecnológica
                  </h4>
                  <p className="text-[#6B6B6B] leading-relaxed text-sm">
                    Capacidad de integrar tecnologías, servicios y productos de
                    alta calidad representando a empresas líderes globales.
                  </p>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-in-up" delay={400}>
                <div className="group">
                  <div className="mb-4 text-[#DA2428] transition-transform duration-300 group-hover:scale-110">
                    <Globe className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Puente Global</h4>
                  <p className="text-[#6B6B6B] leading-relaxed text-sm">
                    Objetivo de seguir siendo un puente confiable entre la
                    industria local y las mejores soluciones internacionales.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
