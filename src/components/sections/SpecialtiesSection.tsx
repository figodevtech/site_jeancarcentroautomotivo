import React from "react";
import Image from "next/image";
import { contentData } from "@/data/content";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Wrench, Cpu, Gauge, Compass, ArrowUpRight } from "lucide-react";

export const SpecialtiesSection: React.FC = () => {
  const { specialties } = contentData;

  const iconsMap: Record<string, React.ReactNode> = {
    manutencao: <Wrench className="w-5 h-5 text-[#FFDC00]" />,
    diagnostico: <Cpu className="w-5 h-5 text-[#FFDC00]" />,
    remap: <Gauge className="w-5 h-5 text-[#FFDC00]" />,
    "4x4-premium": <Compass className="w-5 h-5 text-[#FFDC00]" />,
  };

  return (
    <section id="especialidades" className="scroll-mt-20 py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-[#061E58] via-[#08256E] to-[#061B52] relative overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0719EA]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#FFDC00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-6 gap-3 sm:gap-4">
          <SectionHeader
            tag={specialties.sectionTag}
            title={specialties.title}
            subtitle={specialties.subtitle}
          />

          <a
            href={siteConfig.links.contact}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#FFDC00] hover:text-white bg-[#0719EA]/40 px-3.5 py-1.5 rounded-full border border-[#FFDC00]/40 transition-colors group shadow-md self-start md:self-end"
          >
            <span>Consultar disponibilidade</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Editorial Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {specialties.items.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between bg-[#0B256B] rounded-xl border-2 border-[#0719EA]/60 hover:border-[#FFDC00] transition-all duration-300 overflow-hidden shadow-xl shadow-[#061848]/60 hover:shadow-2xl hover:shadow-[#0719EA]/30 hover:-translate-y-0.5"
            >
              {/* Image Preview with Zoom on Hover */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#061B52]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B256B] via-transparent to-black/30 pointer-events-none" />

                {/* Big Number Pill in yellow */}
                <div className="absolute top-2 right-2 bg-[#062B91] px-2.5 py-0.5 rounded-full border border-[#FFDC00]/50 text-[10px] font-black text-[#FFDC00] font-heading shadow-md">
                  {item.number}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between space-y-2.5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#0719EA]/50 border border-[#FFDC00]/40 shrink-0">
                      {iconsMap[item.id]}
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight font-heading group-hover:text-[#FFDC00] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-2 border-t border-white/15 flex flex-wrap gap-1">
                  {item.tags.map((tag, tIdx) => (
                    <Badge key={tIdx} variant="yellow" className="text-[9px] px-1.5 py-0.5 bg-[#062B91]/80 text-[#FFDC00] border-[#FFDC00]/30 font-bold">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Dynamic bottom border indicator */}
              <div className="h-1 w-full bg-gradient-to-r from-[#0719EA] via-[#FFDC00] to-[#0719EA] group-hover:h-1.5 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
