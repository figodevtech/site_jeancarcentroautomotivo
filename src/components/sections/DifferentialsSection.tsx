import React from "react";
import { contentData } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Shield, Clock, Search, CheckCircle, HeartHandshake } from "lucide-react";

export const DifferentialsSection: React.FC = () => {
  const { differentials } = contentData;

  const icons = [
    <Shield key="1" className="w-6 h-6 text-[#FFDC00]" />,
    <Clock key="2" className="w-6 h-6 text-[#FFDC00]" />,
    <Search key="3" className="w-6 h-6 text-[#FFDC00]" />,
    <CheckCircle key="4" className="w-6 h-6 text-[#FFDC00]" />,
  ];

  return (
    <section id="diferenciais" className="scroll-mt-20 py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-[#061B52] via-[#08246C] to-[#061E58] relative overflow-hidden border-t-2 border-b-2 border-[#0719EA]/40">
      {/* Dynamic diagonal performance lines */}
      <div className="absolute inset-0 bg-speed-lines opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#0719EA]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-6 gap-3 sm:gap-4">
          <SectionHeader
            tag={differentials.sectionTag}
            title={differentials.title}
            subtitle={differentials.subtitle}
          />

          {/* Motto Badge Oficial da JeanCar */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#062B91] border-2 border-[#FFDC00] text-white shadow-xl shadow-[#062B91]/50 self-start md:self-end">
            <HeartHandshake className="w-4 h-4 text-[#FFDC00]" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#FFDC00]">
              {differentials.motto}
            </span>
          </div>
        </div>

        {/* Editorial Blocks with Big Yellow Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {differentials.items.map((diff, idx) => (
            <div
              key={diff.number}
              className="relative flex flex-col justify-between p-4 sm:p-5 bg-[#0B256B] rounded-xl border-2 border-[#0719EA]/60 hover:border-[#FFDC00] transition-all duration-300 group shadow-xl shadow-[#061848]/50 hover:shadow-2xl hover:shadow-[#0719EA]/40 hover:-translate-y-0.5"
            >
              {/* Massive Number in Yellow Accent */}
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <span className="text-3xl font-black text-[#FFDC00] font-heading group-hover:scale-105 transition-transform">
                  {diff.number}
                </span>
                <div className="p-2 rounded-lg bg-[#0719EA]/50 border border-[#FFDC00]/40">
                  {icons[idx]}
                </div>
              </div>

              {/* Text content */}
              <div className="pt-3 space-y-1.5 flex-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFDC00] bg-[#062B91] px-2 py-0.5 rounded inline-block">
                  {diff.highlight}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight font-heading leading-snug">
                  {diff.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/80 leading-relaxed font-normal">
                  {diff.description}
                </p>
              </div>

              {/* Top Accent Strip */}
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#FFDC00] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
