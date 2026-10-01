"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

interface Visit {
  src: string;
  alt: string;
  caption: string;
  aspectClass: string;
  sizes: string;
}

const visits: Visit[] = [
  {
    src: "/assets/visitas/claudius-peters-ile-napoleon.jpg",
    alt: "Tres personas posan frente al edificio de ladrillo de Claudius Peters, con el logotipo de la empresa en la fachada, durante una visita a sus instalaciones en Île Napoléon, Francia",
    caption: "Claudius Peters — Île Napoléon, Francia",
    aspectClass: "aspect-[3/4]",
    sizes: "(max-width: 767px) 100vw, 36vw",
  },
  {
    src: "/assets/visitas/cadersa-barcelona.jpg",
    alt: "Seis personas posan en una sala de reuniones de Cadersa, con una muestra de componentes industriales al fondo, durante una visita a sus instalaciones en Ripollet, Barcelona, España",
    caption: "Cadersa — Ripollet, Barcelona, España",
    aspectClass: "aspect-[4/3]",
    sizes: "(max-width: 767px) 100vw, 64vw",
  },
];

export default function IndustrialVisitsSection() {
  return (
    <section
      id="visitas"
      aria-labelledby="visitas-heading"
      className="py-24 px-6 md:px-12 bg-[#EDEDED]"
    >
      <div className="max-w-[1400px] mx-auto">
        <AnimateOnScroll animation="slide-in-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#DA2428] mb-4">
            Visitas Industriales
          </p>
          <h2
            id="visitas-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight leading-none mb-6 text-[#0E0E0E]"
          >
            Cerca de Nuestros Partners
          </h2>
          <div className="w-16 h-1 bg-[#DA2428] mb-12" />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up" delay={100}>
          <div className="grid grid-cols-1 md:grid-cols-[9fr_16fr] gap-8 md:gap-6 lg:gap-8 items-start">
            {visits.map((visit) => (
              <figure key={visit.src} className="min-w-0">
                <div
                  className={`relative w-full overflow-hidden ${visit.aspectClass}`}
                >
                  <Image
                    src={visit.src}
                    alt={visit.alt}
                    fill
                    sizes={visit.sizes}
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-4 text-sm font-medium text-[#0E0E0E]">
                  {visit.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
