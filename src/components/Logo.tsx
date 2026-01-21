interface LogoProps {
  variant?: "header" | "footer";
  isScrolled?: boolean;
}

function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="15" cy="8" r="8" fill="currentColor" />
      <path
        d="M4 22H26V40C26 48 31 55 40 55H4V22Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Logo({ variant = "header", isScrolled = false }: LogoProps) {
  if (variant === "footer") {
    return (
      <div className="flex items-center gap-3 mb-6 select-none">
        {/* Three "i" icons */}
        <div className="flex gap-0.5">
          <LogoIcon className="w-5 h-7 text-white" />
          <LogoIcon className="w-5 h-7 text-white" />
          <LogoIcon className="w-5 h-7 text-white" />
        </div>

        {/* Stacked text */}
        <div className="flex flex-col leading-[0.9] font-bold text-lg tracking-tight">
          <span className="text-white">Inversiones</span>
          <span className="text-[#DA2428]">Industriales</span>
          <span className="text-white">Ibarra</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 select-none group">
      {/* Three "i" icons */}
      <div className="flex gap-0.5">
        <LogoIcon className="w-6 h-8 text-white transition-colors duration-300 group-hover:text-[#DA2428]" />
        <LogoIcon className="w-6 h-8 text-white transition-colors duration-300 group-hover:text-[#DA2428]" />
        <LogoIcon className="w-6 h-8 text-white transition-colors duration-300 group-hover:text-[#DA2428]" />
      </div>

      {/* Simplified text */}
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
