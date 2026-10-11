import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FounderStorySection } from "@/components/sections/FounderStorySection";
import { SpecialtiesSection } from "@/components/sections/SpecialtiesSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { InstitutionalCtaSection } from "@/components/sections/InstitutionalCtaSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#06153B]">
      {/* Header Fixo / Sticky com recolhimento suave ao rolar para baixo */}
      <Header />

      {/* Conteúdo Principal com navegação por âncoras */}
      <main id="conteudo-principal" className="flex-1">
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <SpecialtiesSection />
        <DifferentialsSection />
        <FounderStorySection />
        <InstitutionalCtaSection />
        <LocationSection />
      </main>

      {/* Botão Flutuante de WhatsApp Direto */}
      <FloatingWhatsApp />

      {/* Rodapé Institucional Completo */}
      <Footer />
    </div>
  );
}
