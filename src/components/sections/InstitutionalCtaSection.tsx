import React from "react";
import { contentData } from "@/data/content";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ShieldCheck, Zap } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const InstitutionalCtaSection: React.FC = () => {
  const { institutionalCta } = contentData;

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#062B91] via-[#0719EA] to-[#062B91] text-white overflow-hidden shadow-2xl">
      {/* Decorative Speed Graphic Lines */}
      <div className="absolute inset-0 bg-speed-lines opacity-20 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FFDC00]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Diagonal Slashes */}
      <div className="absolute inset-y-0 right-1/4 w-32 bg-white/[0.04] skew-x-[-25deg] pointer-events-none" />
      <div className="absolute inset-y-0 right-1/3 w-16 bg-white/[0.03] skew-x-[-25deg] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 backdrop-blur-xs border border-white/20 text-xs font-bold uppercase tracking-widest text-[#FFDC00] mb-6 shadow-inner">
            <Zap className="w-3.5 h-3.5 fill-[#FFDC00]" />
            <span>Padrão de Excelência Automotiva</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight font-heading leading-tight mb-5 drop-shadow-md">
            {institutionalCta.headline}
          </h2>

          {/* Body */}
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-normal mb-8 max-w-2xl">
            {institutionalCta.subheadline}
          </p>

          {/* Yellow CTA Button */}
          <Button
            variant="primary"
            size="lg"
            href={siteConfig.links.contact}
            isExternal
            className="shadow-2xl shadow-black/40 text-[#090B10] font-black text-sm sm:text-base px-8 sm:px-10 py-4"
          >
            <WhatsAppIcon className="w-5 h-5 mr-2 text-[#090B10]" />
            <span>{institutionalCta.buttonText}</span>
            <ArrowUpRight className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Button>

          {/* Reassurance pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-white/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#FFDC00]" />
              Atendimento Especializado
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#FFDC00]" />
              Diagnóstico Preciso
            </span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#FFDC00]" />
              Respeito ao Proprietário
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
