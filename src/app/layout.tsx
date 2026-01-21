import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Inversiones Industriales Ibarra | Soluciones de Ingeniería",
  description:
    "Materiales industriales para altas temperaturas, compraventa y soluciones de ingeniería de clase mundial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} font-sans bg-white text-[#0E0E0E] antialiased noise-bg`}
      >
        {children}
      </body>
    </html>
  );
}
