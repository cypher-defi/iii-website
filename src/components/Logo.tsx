interface LogoProps {
  variant?: "header" | "footer";
  isScrolled?: boolean;
}

function LogoSymbol({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g fill="currentColor">
        {/* Left i */}
        <circle cx="150" cy="120" r="45" />
        <rect x="110" y="190" width="80" height="130" />
        <rect x="90" y="190" width="120" height="25" />
        <rect x="90" y="295" width="120" height="25" />

        {/* Center i */}
        <circle cx="300" cy="120" r="45" />
        <rect x="260" y="190" width="80" height="130" />
        <rect x="240" y="190" width="120" height="25" />
        <rect x="240" y="295" width="120" height="25" />

        {/* Right i */}
        <circle cx="450" cy="120" r="45" />
        <rect x="410" y="190" width="80" height="130" />
        <rect x="390" y="190" width="120" height="25" />
        <rect x="390" y="295" width="120" height="25" />
      </g>
    </svg>
  );
}

export default function Logo({ variant = "header", isScrolled = false }: LogoProps) {
  if (variant === "footer") {
    return (
      <div className="flex items-center gap-3 mb-6 select-none">
        <LogoSymbol className="w-16 h-12 text-white" />
        <div className="flex flex-col leading-[0.9] font-bold text-lg tracking-tight">
          <span className="text-white">Inversiones</span>
          <span className="text-[#DA2428]">Industriales</span>
          <span className="text-white">Ibarra</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5 select-none group">
      <LogoSymbol className="w-12 h-9 text-white transition-colors duration-300 group-hover:text-[#DA2428]" />
      <div className="hidden sm:flex flex-col leading-[0.85] font-bold text-sm tracking-tight">
        <span className="text-white/90">Inversiones</span>
        <span className={`transition-colors duration-300 ${isScrolled ? "text-[#DA2428]" : "text-[#0E0E0E]"}`}>
          Industriales
        </span>
        <span className="text-white/90">Ibarra</span>
      </div>
    </div>
  );
}
