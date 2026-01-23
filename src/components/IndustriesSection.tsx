"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

interface IndustryBlockProps {
  id: string;
  tag: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  features?: string[];
  stats?: { title: string; subtitle: string }[];
  isLast?: boolean;
}

function IndustryBlock({
  id,
  tag,
  title,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
  features,
  stats,
  isLast = false,
}: IndustryBlockProps) {
  const contentSection = (
    <AnimateOnScroll
      animation={reversed ? "slide-in-right" : "slide-in-left"}
      className={`p-12 md:p-24 flex flex-col justify-center ${reversed ? "order-1 lg:order-2" : ""}`}
    >
      <span className="text-[#DA2428] font-semibold tracking-widest uppercase text-xs mb-4">
        {tag}
      </span>
      <h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
        {title}
      </h3>
      <p
        className={`text-[#6B6B6B] text-lg leading-relaxed ${features || stats ? "mb-8" : ""}`}
      >
        {description}
      </p>

      {features && (
        <ul className="space-y-3 text-[#EDEDED] font-medium text-sm">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <Check className="text-[#DA2428] w-4 h-4" strokeWidth={1.5} />
              {feature}
            </li>
          ))}
        </ul>
      )}

      {stats && (
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] p-4 border border-[#333] rounded-xl hover:border-[#DA2428] transition-colors duration-300"
            >
              <span className="block text-2xl font-semibold text-white mb-1">
                {stat.title}
              </span>
              <span className="text-xs text-[#6B6B6B]">{stat.subtitle}</span>
            </div>
          ))}
        </div>
      )}
    </AnimateOnScroll>
  );

  const imageSection = (
    <AnimateOnScroll
      animation={reversed ? "slide-in-left" : "slide-in-right"}
      delay={100}
      className={`h-96 lg:h-auto bg-[#1a1a1a] relative overflow-hidden group ${reversed ? "order-2 lg:order-1" : ""}`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
      />
    </AnimateOnScroll>
  );

  return (
    <div
      id={id}
      className={`grid grid-cols-1 lg:grid-cols-2 ${!isLast ? "border-b border-[#333]" : ""}`}
    >
      {reversed ? (
        <>
          {imageSection}
          {contentSection}
        </>
      ) : (
        <>
          {contentSection}
          {imageSection}
        </>
      )}
    </div>
  );
}

const industries = [
  {
    id: "industria-cal",
    tag: "Ingeniería y Diseño",
    title: "Industria de Cal",
    description:
      "A través de nuestras empresas representadas ofrecemos servicios de ingeniería, diseño y consultoría para plantas de cal, asegurando que cada solución se adapte perfectamente a los requisitos de nuestros clientes.",
    imageSrc: "/assets/industria_cal.png",
    imageAlt: "Industria de Cal",
    features: [
      "Consultoría especializada",
      "Adaptación de requisitos",
      "Experiencia comprobada",
    ],
  },
  {
    id: "industria-cobre",
    tag: "Procesos Hidrometalúrgicos",
    title: "Industria del Cobre",
    description:
      "Soluciones de alto nivel para todos los procesos asociados a la producción de cobre, abarcando etapas de fusión, conversión y procesos hidrometalúrgicos. Garantizamos eficiencia y confiabilidad.",
    imageSrc: "/assets/industria_cobre.png",
    imageAlt: "Industria del Cobre",
    reversed: true,
    stats: [
      { title: "Fusión", subtitle: "Optimización de etapas" },
      { title: "Conversión", subtitle: "Resultados óptimos" },
    ],
  },
  {
    id: "industria-cemento",
    tag: "Materiales Antiabrasivos",
    title: "Industria del Cemento",
    description:
      "Amplia gama de soluciones incluyendo quemadores de alta eficiencia, refractarios para hornos, enfriadores y precalentadores. Estas soluciones permiten optimizar la operación y prolongar la vida útil de activos críticos.",
    imageSrc: "/assets/industria_cemento.png",
    imageAlt: "Industria del Cemento",
  },
  {
    id: "industria-acero",
    tag: "Infraestructura",
    title: "Industria del Acero",
    description:
      "Productos esenciales como refractarios para hornos, cucharas, electrodos de grafito y placas exotérmicas. Aseguramos la continuidad y calidad en la obtención de este metal fundamental para el desarrollo.",
    imageSrc: "/assets/industria_acero.png",
    imageAlt: "Industria del Acero",
    reversed: true,
    isLast: true,
  },
];

export default function IndustriesSection() {
  return (
    <section id="industrias" className="bg-[#0E0E0E] text-white">
      {industries.map((industry, index) => (
        <IndustryBlock key={index} {...industry} />
      ))}
    </section>
  );
}
