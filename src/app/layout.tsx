import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const title = "Inversiones Industriales Ibarra | Soluciones de Ingeniería";
const description =
  "Materiales industriales para altas temperaturas, compraventa y soluciones de ingeniería de clase mundial.";
const ogImage = {
  url: "/assets/og-image.jpg",
  width: 1024,
  height: 536,
  alt: "Olla de acero fundido vertiendo metal incandescente dentro de una nave siderúrgica",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: SITE_NAME,
    locale: "es_CL",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
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
