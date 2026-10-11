import React from "react";
import { siteConfig } from "@/config/site";
import { navigationConfig } from "@/config/navigation";
import { contentData } from "@/data/content";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { MessageCircle, ArrowUpRight, ShieldCheck, Wrench, Award } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { CurrentYear } from "@/components/ui/CurrentYear";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#051338] via-[#061848] to-[#040E26] border-t-2 border-[#FFDC00] relative overflow-hidden text-white/80">
      {/* Subtle brand lighting */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0719EA]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#FFDC00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/15">
          {/* Coluna 1: Marca & Descrição */}
          <div className="lg:col-span-5 flex flex-col space-y-5">
            <a
              href="#inicio"
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFDC00]"
              aria-label="JeanCar Centro Automotivo"
            >
              <BrandLogo size="md" />
            </a>
            <p className="text-sm leading-relaxed max-w-md text-white/85">
              {contentData.footer.description}
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-white font-bold bg-[#0719EA]/40 px-3 py-1.5 rounded-full border border-[#FFDC00]/40">
                <ShieldCheck className="w-4 h-4 text-[#FFDC00]" />
                Veículos 4x4 & Premium
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-white font-bold bg-[#0719EA]/40 px-3 py-1.5 rounded-full border border-[#FFDC00]/40">
                <Award className="w-4 h-4 text-[#FFDC00]" />
                10+ Anos de Referência
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-white font-bold bg-[#0719EA]/40 px-3 py-1.5 rounded-full border border-[#FFDC00]/40">
                <Wrench className="w-4 h-4 text-[#FFDC00]" />
                Diagnóstico & REMAP
              </span>
            </div>
          </div>

          {/* Coluna 2: Navegação rápida */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#FFDC00] border-l-2 border-[#FFDC00] pl-2.5">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#FFDC00] transition-colors duration-200 inline-flex items-center gap-1 group font-medium"
                  >
                    <span className="text-[#FFDC00] opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Especialidades */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#FFDC00] border-l-2 border-[#0719EA] pl-2.5">
              Especialidades
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#especialidades" className="hover:text-[#FFDC00] transition-colors font-medium">
                  Manutenção Automotiva
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#FFDC00] transition-colors font-medium">
                  Diagnóstico Eletrônico
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#FFDC00] transition-colors font-medium">
                  REMAP & Calibração
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#FFDC00] transition-colors font-medium">
                  Veículos 4x4 e Premium
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Canais Oficiais */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#FFDC00] border-l-2 border-[#FFDC00] pl-2.5">
              Canais Oficiais
            </h3>
            <div className="flex flex-col space-y-3">
              <a
                href={siteConfig.links.contact}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0719EA]/40 hover:bg-[#FFDC00] hover:text-[#090B10] border border-[#FFDC00]/40 text-white transition-all text-xs font-bold group shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#FFDC00] group-hover:text-[#090B10]" />
                <span className="truncate">Fale Conosco</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0719EA]/40 hover:bg-white/[0.15] border border-white/20 text-white transition-all text-xs font-bold group shadow-md"
              >
                <InstagramIcon className="w-4 h-4 text-[#FFDC00]" />
                <span className="truncate">Instagram Oficial</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-auto opacity-70 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior com direitos autorais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <p>
            © <CurrentYear /> {siteConfig.name}. {contentData.footer.copyrightNotice}
          </p>
          <p className="font-bold text-[#FFDC00] tracking-wide text-center sm:text-right">
            JeanCar Centro Automotivo — Especialistas em 4x4 e premium.
          </p>
        </div>
      </div>
    </footer>
  );
};
