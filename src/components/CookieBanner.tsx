"use client";

import { useState } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-[#EDEDED] p-6 shadow-2xl z-50 transform translate-y-0 transition-transform">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-[#6B6B6B] text-xs">
          <span className="font-semibold text-[#0E0E0E]">Uso de cookies:</span>{" "}
          Utilizamos cookies para garantizar una experiencia de navegación
          fluida. Al continuar, asumimos que acepta el uso de cookies.
        </div>
        <div className="flex gap-4">
          <button className="text-xs font-medium text-[#0E0E0E] hover:underline underline-offset-4">
            Saber Más
          </button>
          <button
            className="bg-white text-[#0E0E0E] border border-gray-200 text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-[#0E0E0E] hover:text-white hover:border-[#0E0E0E] transition-all shadow-sm"
            onClick={() => setIsVisible(false)}
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
