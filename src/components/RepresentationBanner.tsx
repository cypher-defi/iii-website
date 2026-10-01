"use client"

import Image from "next/image"
import AnimateOnScroll from "./AnimateOnScroll"

interface Partner {
  name: string
  website: string
  logo?: string
  invertOnly?: boolean
}

const partners: Partner[] = [
  {
    name: "Densit do Brasil",
    logo: "/assets/logos/densit-knockout.png",
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
    name: "Kümaş Refractories",
    logo: "/assets/logos/kumas.svg",
    website: "https://kumasref.com",
    invertOnly: true
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
  { name: "Novakem", website: "https://www.novakem.com.br" },
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
  { name: "HEG Graphite", website: "https://hegltd.com" },
  {
    name: "Döküm Potası",
    logo: "/assets/logos/dokum-potasi.png",
    website: "https://www.dokumpotasi.com.tr"
  },
  {
    name: "Claudius Peters",
    logo: "/assets/logos/claudius-peters.svg",
    website: "https://www.claudiuspeters.com"
  },
  {
    name: "Plattco",
    logo: "/assets/logos/plattco.png",
    website: "https://www.plattco.com"
  },
  {
    name: "Iteca Socadei",
    logo: "/assets/logos/iteca-socadei.png",
    website: "https://www.iteca.fr"
  },
  {
    name: "Cicsa",
    logo: "/assets/logos/cicsa.png",
    website: "https://www.cicsa.com"
  },
  {
    name: "Cadersa",
    logo: "/assets/logos/cadersa.png",
    website: "https://www.cadersa.es"
  }
]

function PartnerTile({ name, website, logo, invertOnly }: Partner) {
  return (
    <a
      href={website}
      target='_blank'
      rel='noopener noreferrer'
      className='group flex h-32 flex-col items-center justify-center gap-2 rounded-xl border border-white/5 p-4 text-center transition-all duration-300 hover:border-white/20 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DA2428] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0E0E0E]'
    >
      {logo ? (
        <>
          <span
            className='flex h-12 w-full items-center justify-center'
            aria-hidden='true'
          >
            <Image
              src={logo}
              alt=''
              width={160}
              height={48}
              className={`h-auto max-h-12 w-auto max-w-full object-contain opacity-50 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 ${
                invertOnly
                  ? "invert grayscale group-hover:grayscale-0"
                  : "brightness-0 invert"
              }`}
            />
          </span>
          <span className='text-xs font-medium leading-4 text-white/50 break-words transition-colors duration-300 group-hover:text-white group-focus-visible:text-white'>
            {name}
          </span>
        </>
      ) : (
        <span className='text-base md:text-lg font-bold leading-tight tracking-tight text-white/50 break-words transition-colors duration-300 group-hover:text-white group-focus-visible:text-white'>
          {name}
        </span>
      )}
      <span className='sr-only'> (abre en una pestaña nueva)</span>
    </a>
  )
}

export default function RepresentationBanner() {
  return (
    <section
      id='partners'
      aria-labelledby='partners-heading'
      className='bg-[#0E0E0E] py-24 px-6 md:px-12 overflow-hidden'
    >
      <div className='max-w-[1400px] mx-auto'>
        <AnimateOnScroll animation='fade-in-up'>
          <div className='text-center mb-16'>
            <span className='text-[#DA2428] text-xs font-semibold tracking-widest uppercase mb-4 block'>
              Partners Globales
            </span>
            <h2
              id='partners-heading'
              className='text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4'
            >
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
            {partners.map((p) => (
              <PartnerTile key={p.name} {...p} />
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
