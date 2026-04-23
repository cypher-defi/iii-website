"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

const photos = [
  "/assets/seminario/seminario-01.jpg",
  "/assets/seminario/seminario-02.jpg",
  "/assets/seminario/seminario-03.jpg",
  "/assets/seminario/seminario-04.jpg",
  "/assets/seminario/seminario-05.jpg",
  "/assets/seminario/seminario-06.jpg",
  "/assets/seminario/seminario-07.jpg",
  "/assets/seminario/seminario-08.jpg",
  "/assets/seminario/seminario-09.jpg",
];

const stats = [
  { value: "10", label: "Empresas Internacionales" },
  { value: "2", label: "Días de Presentaciones Técnicas" },
  { value: "25+", label: "Años de Liderazgo Sectorial" },
];

export default function SeminarySection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto">

        {/* Top layout: text left + photo mosaic right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-4">

          {/* Text column */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimateOnScroll animation="slide-in-left">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#DA2428] mb-4">
                Eventos Recientes
              </h2>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-none mb-2 text-[#0E0E0E]">
                Seminario Internacional
              </h3>
              <p className="text-xl md:text-2xl font-medium text-[#6B6B6B] tracking-tight mb-6">
                Industria del Cemento y la Cal
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-8">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B]">
                  14 y 15 de Abril 2026
                </span>
                <span className="text-[#EDEDED] select-none">·</span>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B]">
                  Hotel Hilton BlueTree · Santiago de Chile
                </span>
              </div>
              <div className="w-16 h-1 bg-[#DA2428] mb-8" />
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={100}>
              <p className="text-base md:text-lg text-[#0E0E0E] leading-relaxed mb-5">
                Los días 14 y 15 de abril llevamos a cabo un seminario técnico
                internacional, reafirmando nuestro compromiso con la innovación
                y el desarrollo de soluciones para la industria del cemento y
                la cal.
              </p>
              <p className="text-base md:text-lg text-[#6B6B6B] leading-relaxed mb-10">
                El encuentro consolidó una importante plataforma para el
                intercambio técnico, la generación de alianzas estratégicas y
                el fortalecimiento de relaciones con clientes y socios del
                sector.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in-up" delay={200}>
              <div className="grid grid-cols-3 gap-3 md:gap-6 pt-8 border-t border-[#EDEDED]">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-semibold text-[#DA2428] tracking-tight mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#6B6B6B] leading-snug uppercase tracking-wide font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Photo mosaic: large feature + 2 stacked */}
          <div className="lg:col-span-7">
            <AnimateOnScroll animation="fade-in" delay={150}>
              <div
                className="grid grid-cols-2 grid-rows-2 gap-3 h-[280px] md:h-[380px] lg:h-[480px]"
              >
                <div className="row-span-2 relative overflow-hidden">
                  <Image
                    src={photos[0]}
                    alt="Apertura del Seminario Internacional"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    priority
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={photos[1]}
                    alt="Presentación técnica en el Seminario"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 19vw"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={photos[2]}
                    alt="Participantes del Seminario Internacional"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 19vw"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Filmstrip: 6 remaining photos */}
        <AnimateOnScroll animation="fade-in-up" delay={300}>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 h-36 md:h-44">
            {photos.slice(3).map((photo, i) => (
              <div key={i} className="relative overflow-hidden group">
                <Image
                  src={photo}
                  alt={`Seminario Internacional - imagen ${i + 4}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
              </div>
            ))}
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
