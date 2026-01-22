"use client"

import Image from "next/image"
import AnimateOnScroll from "./AnimateOnScroll"

interface CompanyLogoProps {
  name: string
  logo: string
  website: string
  isSvg?: boolean
  showTextWithLogo?: boolean
}

const companies: CompanyLogoProps[] = [
  {
    name: "Densit do Brasil",
    logo: "/assets/logos/densit.png",
    website: "https://densit.com.br"
  },
  {
    name: "Densyx",
    logo: "/assets/logos/densyx.png",
    website: "https://densyx.com.br"
  },
  {
    name: "Fundiciones Estanda",
    logo: "/assets/logos/estanda.png",
    website: "https://www.estanda.com"
  },
  {
    name: "LV International",
    logo: "/assets/logos/lv-international.png",
    website: "https://www.lv-inter.com"
  },
  {
    name: "Kümaş Refractories",
    logo: "/assets/logos/kumas.svg",
    website: "https://kumasref.com",
    isSvg: true
  },
  {
    name: "HGH Infrared",
    logo: "/assets/logos/hgh.png",
    website: "https://hgh-infrared.com"
  },
  {
    name: "Hasle Refractories",
    logo: "/assets/logos/hasle.png",
    website: "https://hasle-refractories.com"
  },
  {
    name: "BRX Sistemas",
    logo: "/assets/logos/brx.png",
    website: "https://brxsistemas.com.br"
  },
  { name: "Novakem", logo: "", website: "https://www.novakem.com.br" },
  {
    name: "Dynamis",
    logo: "/assets/logos/dynamis.png",
    website: "https://dynamis-br.com"
  },
  {
    name: "Unikon",
    logo: "/assets/logos/unikon.png",
    website: "https://www.unikon.com.tr"
  },
  { name: "HEG Graphite", logo: "", website: "https://hegltd.com" },
  {
    name: "Döküm Potası",
    logo: "/assets/logos/dokum-potasi.png",
    website: "https://www.dokumpotasi.com.tr"
  }
]

function CompanyLogo({
  name,
  logo,
  website,
  isSvg,
  showTextWithLogo
}: CompanyLogoProps) {
  // Fallback to text-based logo if no image
  if (!logo) {
    return (
      <a
        href={website}
        target='_blank'
        rel='noopener noreferrer'
        className='group flex items-center justify-center p-6 h-24 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300'
      >
        <span className='text-xl font-bold text-white/40 group-hover:text-white tracking-tight transition-all duration-300'>
          {name}
        </span>
      </a>
    )
  }

  // Special case: show icon + text together (for logos that don't include company name)
  if (showTextWithLogo) {
    return (
      <a
        href={website}
        target='_blank'
        rel='noopener noreferrer'
        className='group flex items-center justify-center gap-2 p-4 h-24 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300'
        title={name}
      >
        <Image
          src={logo}
          alt={name}
          width={40}
          height={32}
          className='h-8 w-auto object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 brightness-0 invert'
        />
        <div className='flex flex-col leading-tight'>
          <span className='text-sm font-bold text-white/50 group-hover:text-white transition-all duration-300 tracking-tight'>
            HASLE
          </span>
          <span className='text-xs font-bold text-white/50 group-hover:text-white transition-all duration-300 tracking-tight'>
            REFRACTORIES
          </span>
        </div>
      </a>
    )
  }

  return (
    <a
      href={website}
      target='_blank'
      rel='noopener noreferrer'
      className='group flex items-center justify-center p-4 h-24 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300'
      title={name}
    >
      <div className='relative w-full h-full flex items-center justify-center'>
        {isSvg ? (
          <img
            src={logo}
            alt={name}
            className='max-h-12 max-w-[120px] w-auto object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 invert'
          />
        ) : (
          <Image
            src={logo}
            alt={name}
            width={120}
            height={48}
            className='max-h-12 w-auto object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300 brightness-0 invert'
          />
        )}
      </div>
    </a>
  )
}

export default function RepresentationBanner() {
  return (
    <section className='bg-[#0E0E0E] py-24 px-6 md:px-12 overflow-hidden'>
      <div className='max-w-[1400px] mx-auto'>
        <AnimateOnScroll animation='fade-in-up'>
          <div className='text-center mb-16'>
            <span className='text-[#DA2428] text-xs font-semibold tracking-widest uppercase mb-4 block'>
              Partners Globales
            </span>
            <h2 className='text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4'>
              Representaciones de Clase Mundial
            </h2>
            <p className='text-white/60 max-w-2xl mx-auto'>
              Conectamos la industria local con las mejores soluciones
              internacionales a través de alianzas estratégicas con líderes
              globales.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation='fade-in-up' delay={200}>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4'>
            {companies.map((company, index) => (
              <CompanyLogo
                key={index}
                name={company.name}
                logo={company.logo}
                website={company.website}
                isSvg={company.isSvg}
                showTextWithLogo={company.showTextWithLogo}
              />
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation='fade-in-up' delay={300}>
          <div className='mt-16 pt-8 border-t border-white/10 text-center'>
            <p className='text-white/40 text-sm'>
              Más de{" "}
              <span className='text-[#DA2428] font-semibold'>25 años</span>{" "}
              construyendo relaciones comerciales duraderas
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
