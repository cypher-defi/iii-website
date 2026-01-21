import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-[#DA2428] text-white pt-32 md:pt-40 pb-24 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/assets/hero_section.png"
        alt=""
        fill
        className="object-cover opacity-40"
        priority
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] mb-8 text-white">
              SOLUCIONES
              <br />
              <span className="text-[#0E0E0E]">INDUSTRIALES</span>
              <br />
              INTEGRALES
            </h1>
          </div>
          <div className="lg:col-span-4 pb-2">
            <p className="text-lg md:text-xl font-medium leading-relaxed text-white opacity-90 max-w-md border-l-2 border-[#0E0E0E] pl-6">
              Materiales industriales para altas temperaturas, compraventa y
              soluciones de ingeniería de clase mundial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
