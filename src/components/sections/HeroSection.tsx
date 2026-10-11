import React from "react";
import Image from "next/image";
import { contentData } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowDown, ChevronRight, ShieldCheck, Gauge } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const HeroSection: React.FC = () => {
  const { hero } = contentData;

  return (
    <section
      id="inicio"
      className="relative flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 overflow-hidden bg-[#061848]"
    >
      {/* Background Image with optimized Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-automotive.jpg"
          alt="Oficina de alto padrão JeanCar com veículo 4x4"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center lg:object-[center_35%]"
          quality={75}
        />

        {/* Sophisticated Royal Blue gradient scrims for absolute brand recognition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061848] via-[#062060]/80 to-[#061848]/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061848]/95 via-[#062B91]/75 to-transparent z-10 max-w-4xl" />
        <div className="absolute inset-0 bg-[#0719EA]/25 mix-blend-color-dodge z-10 pointer-events-none" />

        {/* Dynamic speed lines & stripes overlay */}
        <div className="absolute inset-0 bg-speed-lines opacity-30 z-10 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#0719EA]/30 rounded-full blur-3xl pointer-events-none z-10" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#FFDC00]/15 rounded-full blur-3xl pointer-events-none z-10" />
      </div>

      {/* Decorative Brand Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0719EA] via-[#FFDC00] to-[#0719EA] z-30" />

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-2 sm:py-4">
        <div className="max-w-3xl">
          {/* Eyebrow Badge */}
          <div className="mb-3 inline-flex">
            <Badge
              variant="yellow"
              className="px-3 py-0.5 text-xs sm:text-xs font-extrabold tracking-wider shadow-xl shadow-[#061848]/80 bg-[#FFDC00] text-[#090B10] border-none"
              icon={<Gauge className="w-3.5 h-3.5 text-[#090B10]" />}
            >
              {hero.badge}
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.1] font-heading mb-3 sm:mb-4 drop-shadow-lg">
            SUA MÁQUINA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#FFF380] to-[#FFDC00]">
              MERECE ESPECIALISTAS.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xs sm:text-sm md:text-base text-white/95 font-medium leading-relaxed max-w-2xl mb-4 sm:mb-6 drop-shadow-md">
            {hero.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-5 sm:mb-6">
            <Button
              variant="primary"
              size="md"
              href={hero.primaryCta.href}
              isExternal
              className="shadow-2xl shadow-[#FFDC00]/30 font-black text-xs sm:text-sm py-2.5 px-5"
            >
              <WhatsAppIcon className="w-4 h-4 mr-1.5" />
              <span>{hero.primaryCta.text}</span>
            </Button>

            <Button
              variant="outline"
              size="md"
              href={hero.secondaryCta.href}
              className="bg-[#0719EA]/30 border-white/30 hover:border-[#FFDC00] hover:bg-[#0719EA]/50 text-white py-2.5 px-5 text-xs sm:text-sm"
            >
              <span>{hero.secondaryCta.text}</span>
              <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Quick Pillars Chips in brand navy cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3 border-t-2 border-white/20 max-w-2xl">
            {hero.quickStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col bg-[#082269]/70 backdrop-blur-md p-2 sm:p-2.5 rounded-lg border border-[#0719EA]/40">
                <span className="text-sm sm:text-lg font-black text-[#FFDC00] font-heading tracking-tight leading-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-white/90 tracking-wide mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-xs text-white pt-2">
        <div className="hidden sm:flex items-center gap-2 font-bold tracking-wider uppercase text-white/90 bg-[#082269]/80 px-3 py-1 rounded-full border border-white/20 text-[10px] sm:text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FFDC00]" />
          <span>Qualidade • Procedência • Alta Performance</span>
        </div>

        <a
          href="#sobre"
          className="mx-auto sm:mx-0 inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-[#0719EA] hover:bg-[#062B91] border border-[#FFDC00]/60 text-white transition-all shadow-lg group font-bold text-xs"
          aria-label="Rolar para a seção sobre nós"
        >
          <span>Conheça a JeanCar</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#FFDC00] transition-transform group-hover:translate-y-0.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
