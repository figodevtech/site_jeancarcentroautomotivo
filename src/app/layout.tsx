import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#062B91",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Especialistas em 4x4 e Veículos Premium`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "JeanCar Centro Automotivo",
    "centro automotivo 4x4",
    "oficina mecânica premium",
    "REMAP",
    "diagnóstico automotivo avançado",
    "manutenção 4x4",
    "veículos premium",
    "revisão automotiva",
    "performance automotiva",
    "Amarok",
    "Hilux",
    "Ranger",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.links.instagram }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    title: `${siteConfig.name} | Especialistas em 4x4 e Veículos Premium`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Especialistas em 4x4 e Premium`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Especialistas em 4x4 e Veículos Premium`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data JSON-LD para SEO Local e Automotivo
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brand/logo.png`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    sameAs: [
      siteConfig.links.instagram,
      siteConfig.links.contact,
    ],
    knowsAbout: [
      "Manutenção Automotiva",
      "Diagnóstico Automotivo Computadorizado",
      "REMAP e Calibração Eletrônica",
      "Veículos 4x4 e Pickups",
      "Veículos Premium",
    ],
    areaServed: {
      "@type": "Country",
      name: "Brasil",
    },
    priceRange: "$$",
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#090B10] text-[#F3F5F8] font-sans antialiased selection:bg-[#0719EA] selection:text-[#FFDC00]">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#FFDC00] focus:text-[#090B10] focus:font-bold focus:rounded-md focus:shadow-lg"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
