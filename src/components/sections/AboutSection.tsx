import React from "react";
import Image from "next/image";
import { contentData } from "@/data/content";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Award, ArrowUpRight, Users, Sparkles } from "lucide-react";

export const AboutSection: React.FC = () => {
  const { about } = contentData;

  return (
    <section id="sobre" className="scroll-mt-20 py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-[#061848] via-[#092368] to-[#061E58] relative overflow-hidden border-t-2 border-[#0719EA]/40">
      {/* Background ambient lights & speed lines */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#0719EA]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#FFDC00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-speed-lines opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Coluna Visual: FOTO REAL DA EQUIPE JEANCAR (PERFEITAMENTE CENTRALIZADA E ENQUADRADA) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-2xl overflow-hidden border-2 border-[#0719EA] shadow-2xl shadow-[#061848]/90 bg-[#061A4E] group">
              {/* Barra Superior Externa: Identificação sem cobrir nenhum rosto */}
              <div className="px-3.5 py-2 bg-gradient-to-r from-[#062060] via-[#0719EA]/60 to-[#062060] border-b border-[#0719EA]/60 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5 text-[#FFDC00]" />
                  <span>Nossa Equipe de Especialistas</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#062B91] border border-[#FFDC00]/40 text-[10px] font-bold text-[#FFDC00]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  <span>Corpo Técnico Oficial</span>
                </div>
              </div>

              {/* Foto Real 1:1 Quadrada: Exibição Integral Sem Cortes em Rostos */}
              <div className="relative aspect-square w-full bg-[#06153B] overflow-hidden">
                <Image
                  src={about.image}
                  alt="Equipe oficial de mecânicos e gestores da JeanCar Centro Automotivo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-contain object-center group-hover:scale-102 transition-transform duration-500 ease-out"
                  priority
                />
              </div>

              {/* Barra Inferior Externa: 10+ Anos de Referência sem sobrepor a foto */}
              <div className="p-3 sm:p-3.5 bg-gradient-to-r from-[#082269] via-[#062060] to-[#082269] border-t-2 border-[#FFDC00] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#FFDC00] flex items-center justify-center shrink-0 shadow-md shadow-[#FFDC00]/30">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#090B10]" />
                  </div>
                  <div>
                    <span className="block text-sm sm:text-base font-black text-white font-heading leading-tight">
                      {about.yearsHighlight}
                    </span>
                    <span className="block text-[10px] sm:text-[11px] font-bold text-[#FFDC00] uppercase tracking-wider leading-tight">
                      {about.yearsLabel}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="inline-block px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#062B91] text-white border border-white/20">
                    Oficina Própria
                  </span>
                </div>
              </div>

              {/* Borda decorativa de velocidade */}
              <div className="h-1 w-full bg-gradient-to-r from-[#0719EA] via-[#FFDC00] to-[#0719EA]" />
            </div>
          </div>

          {/* Coluna Editorial: Texto e Pilares */}
          <div className="lg:col-span-6 flex flex-col space-y-2.5 sm:space-y-3 pt-1 lg:pt-0">
            <SectionHeader
              tag={about.sectionTag}
              title={about.title}
              subtitle="Compromisso absoluto com a engenharia e integridade mecânica de cada máquina."
            />

            {/* Slogan Banner Real da JeanCar */}
            <div className="p-2 sm:p-2.5 rounded-lg bg-[#0719EA]/25 border-l-4 border-[#FFDC00] text-white">
              <p className="text-[11px] sm:text-xs font-bold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#FFDC00] shrink-0" />
                <span>{about.slogan}</span>
              </p>
            </div>

            <div className="space-y-1.5 text-xs sm:text-xs text-white/90 leading-relaxed font-normal">
              <p>{about.paragraph1}</p>
              <p>{about.paragraph2}</p>
            </div>

            {/* Valores / Pilares com visual azul e amarelo da marca */}
            <div className="space-y-1.5 pt-0.5">
              {about.values.map((val, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-[#082269]/60 border border-[#0719EA]/40">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFDC00] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wide leading-tight">
                      {val.title}
                    </h3>
                    <p className="text-[11px] text-white/80 mt-0.5 leading-normal">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-0.5">
              <Button
                variant="primary"
                size="md"
                href={siteConfig.links.contact}
                isExternal
                className="shadow-xl shadow-[#FFDC00]/25 font-black text-xs sm:text-sm py-2 px-5"
              >
                <span>{about.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
