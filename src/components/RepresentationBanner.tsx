"use client";

import AnimateOnScroll from "./AnimateOnScroll";

interface CompanyLogoProps {
  name: string;
  subtitle?: string;
  website: string;
}

const companies: CompanyLogoProps[] = [
  { name: "DENSIT", subtitle: "do Brasil", website: "https://densit.com.br" },
  { name: "DENSYX", website: "https://densyx.com.br" },
  { name: "ESTANDA", subtitle: "Fundiciones", website: "https://www.estanda.com" },
  { name: "LV", subtitle: "International", website: "https://www.lv-inter.com" },
  { name: "KÜMAŞ", subtitle: "Refractories", website: "https://kumasref.com" },
  { name: "HGH", subtitle: "Infrared", website: "https://hgh-infrared.com" },
  { name: "HASLE", subtitle: "Refractories", website: "https://hasle-refractories.com" },
  { name: "BRX", subtitle: "Sistemas", website: "https://brxsistemas.com.br" },
  { name: "NOVAKEM", website: "https://www.novakem.com.br" },
  { name: "DYNAMIS", website: "https://dynamis-br.com" },
  { name: "UNIKON", website: "https://www.unikon.com.tr" },
  { name: "HEG", subtitle: "Graphite", website: "https://hegltd.com" },
  { name: "DÖKÜM", subtitle: "Potası", website: "https://www.dokumpotasi.com.tr" },
];

function CompanyLogo({ name, subtitle, website }: CompanyLogoProps) {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-center p-6 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300"
    >
      <div className="flex flex-col items-center">
        <span className="text-xl md:text-2xl font-bold text-white/50 group-hover:text-white tracking-tight transition-all duration-300">
          {name}
        </span>
        {subtitle && (
          <span className="text-[10px] md:text-xs text-white/30 group-hover:text-white/60 tracking-widest uppercase mt-1 transition-all duration-300">
            {subtitle}
          </span>
        )}
      </div>
    </a>
  );
}

export default function RepresentationBanner() {
  return (
    <section className="bg-[#0E0E0E] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <AnimateOnScroll animation="fade-in-up">
          <div className="text-center mb-16">
            <span className="text-[#DA2428] text-xs font-semibold tracking-widest uppercase mb-4 block">
              Partners Globales
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Representaciones de Clase Mundial
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Conectamos la industria local con las mejores soluciones internacionales
              a través de alianzas estratégicas con líderes globales.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up" delay={200}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
            {companies.map((company, index) => (
              <CompanyLogo
                key={index}
                name={company.name}
                subtitle={company.subtitle}
                website={company.website}
              />
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up" delay={300}>
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-white/40 text-sm">
              Más de <span className="text-[#DA2428] font-semibold">25 años</span> construyendo relaciones comerciales duraderas
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
