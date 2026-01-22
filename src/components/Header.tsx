"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#industrias", label: "Industrias" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0E0E0E]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="px-6 md:px-12 py-4">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="relative z-50">
            <Logo variant="header" isScrolled={isScrolled || isMobileMenuOpen} />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#DA2428] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contacto"
              className="text-sm font-medium px-5 py-2.5 rounded-full border border-white/20 text-white hover:bg-[#DA2428] hover:border-[#DA2428] transition-all duration-300"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 p-2 text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-[#0E0E0E]" />

        {/* Decorative elements */}
        <div
          className={`absolute top-0 right-0 w-96 h-96 bg-[#DA2428]/10 rounded-full blur-3xl transition-all duration-700 ${
            isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
          style={{ transform: "translate(30%, -30%)" }}
        />
        <div
          className={`absolute bottom-0 left-0 w-64 h-64 bg-[#DA2428]/5 rounded-full blur-3xl transition-all duration-700 delay-200 ${
            isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
          }`}
          style={{ transform: "translate(-30%, 30%)" }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-center px-8">
          {/* Navigation Links */}
          <nav className="space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`group flex items-center justify-between py-4 border-b border-white/10 transition-[transform,opacity] duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                  isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 80 + 100}ms` }}
              >
                <span className="text-4xl font-semibold text-white group-hover:text-[#DA2428] transition-colors duration-300">
                  {link.label}
                </span>
                <ArrowUpRight
                  className="w-6 h-6 text-white/30 group-hover:text-[#DA2428] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
              </a>
            ))}

            {/* Contact Link - Special styling */}
            <a
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`group flex items-center justify-between py-4 transition-[transform,opacity] duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                isMobileMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${navLinks.length * 80 + 100}ms` }}
            >
              <span className="text-4xl font-semibold text-[#DA2428] group-hover:text-white transition-colors duration-300">
                Contacto
              </span>
              <ArrowUpRight
                className="w-6 h-6 text-[#DA2428]/50 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={1.5}
              />
            </a>
          </nav>

          {/* Bottom info */}
          <div
            className={`absolute bottom-12 left-8 right-8 transition-[transform,opacity] duration-500 ease-out ${
              isMobileMenuOpen
                ? "translate-y-0 opacity-100 delay-500"
                : "translate-y-5 opacity-0 delay-0"
            }`}
          >
            <div className="flex items-center justify-between text-white/40 text-sm">
              <span>Inversiones Industriales Ibarra</span>
              <span>Chile</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
