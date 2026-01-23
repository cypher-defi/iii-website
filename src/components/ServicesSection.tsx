"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

interface ServiceCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  delay?: number;
}

function ServiceCard({
  imageSrc,
  imageAlt,
  title,
  description,
  delay = 0,
}: ServiceCardProps) {
  return (
    <AnimateOnScroll animation="fade-in-up" delay={delay}>
      <div className="bg-white p-8 group hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#DA2428]/10 rounded-2xl hover:-translate-y-2">
        <div className="h-48 bg-neutral-100 mb-6 overflow-hidden relative rounded-lg">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover md:grayscale md:group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          />
        </div>
        <h3 className="text-xl font-semibold mb-3 group-hover:text-[#DA2428] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[#6B6B6B] mb-6 leading-relaxed text-sm">
          {description}
        </p>
        <a
          href="mailto:enrique.ibarra@iii.cl"
          className="inline-flex items-center text-xs font-semibold uppercase tracking-wider border-b border-[#0E0E0E] pb-0.5 hover:border-[#DA2428] hover:text-[#DA2428] transition-colors duration-300"
        >
          Obtener más información
        </a>
      </div>
    </AnimateOnScroll>
  );
}

const services = [
  {
    imageSrc: "/assets/cucharas_de_cobre.png",
    imageAlt: "Cucharas de Cobre",
    title: "Cucharas de Cobre",
    description:
      "Servicios personalizados que se adaptan a las necesidades específicas para optimizar el proceso industrial.",
  },
  {
    imageSrc: "/assets/clinker.png",
    imageAlt: "Horno de Clinker",
    title: "Horno de Clinker",
    description:
      "Materiales refractarios diseñados para resistir altas temperaturas y condiciones extremas en industrias.",
  },
  {
    imageSrc: "/assets/horno_electrico.png",
    imageAlt: "Asesoría Técnica",
    title: "Asesoría Técnica",
    description:
      "Equipo de expertos disponible para proveer consejo y soporte técnico en la selección de materiales.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#EDEDED] py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <AnimateOnScroll animation="slide-in-left">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0E0E0E]">
              Soluciones Especializadas
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="slide-in-right">
            <a
              href="#contacto"
              className="group bg-white text-[#0E0E0E] px-6 py-3 rounded-full font-medium hover:bg-[#DA2428] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg flex items-center gap-2"
            >
              Solicitar catálogo{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </AnimateOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
