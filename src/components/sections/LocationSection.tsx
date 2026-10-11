import React from "react";
import { siteConfig } from "@/config/site";
import { contentData } from "@/data/content";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { MapPin, Navigation, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/Icons";

export const LocationSection: React.FC = () => {
  const { location } = contentData;
  const { contactInfo, links } = siteConfig;

  return (
    <section id="localizacao" className="scroll-mt-20 py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-[#061848] via-[#082368] to-[#051338] relative overflow-hidden border-t-2 border-[#0719EA]/40">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#0719EA]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#FFDC00]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          tag={location.sectionTag}
          title={location.title}
          subtitle={location.subtitle}
          className="mb-5 sm:mb-6"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Card 1: Canal Oficial Direto (Destaque Principal) */}
          <div className="lg:col-span-6 bg-[#0B256B] border-2 border-[#FFDC00] rounded-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group shadow-2xl shadow-[#061848]/80 hover:shadow-[#0719EA]/40 transition-all duration-300">
            {/* Top Accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0719EA] via-[#FFDC00] to-[#0719EA]" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-lg bg-[#062B91] border-2 border-[#FFDC00] flex items-center justify-center text-[#FFDC00] shadow-lg">
                  <WhatsAppIcon className="w-5 h-5 text-[#FFDC00]" />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#FFDC00] text-[#090B10] shadow-md">
                  Canal Principal
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight font-heading mb-1.5 leading-snug">
                  Atendimento & Agendamento
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                  {location.directChannelText}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-white/20 text-xs text-white">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#FFDC00] shrink-0" />
                  <span>Avaliação técnica especializada para veículos 4x4 e premium</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FFDC00] shrink-0" />
                  <span>Respostas diretas e esclarecimento de dúvidas mecânicas</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                href={links.contact}
                isExternal
                className="w-full justify-center shadow-xl shadow-[#FFDC00]/30 font-black gap-2 py-2.5 text-xs sm:text-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Conversar no WhatsApp • {links.whatsappFormatted}</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Card 2 & 3: Instagram e Informações de Unidade */}
          <div className="lg:col-span-6 flex flex-col gap-3.5 sm:gap-4">
            {/* Card Instagram */}
            <div className="bg-[#0B256B] border-2 border-[#0719EA]/60 rounded-xl p-4 sm:p-5 flex flex-col justify-between hover:border-[#FFDC00] transition-all duration-300 shadow-xl">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-[#FFDC00]">
                  <InstagramIcon className="w-3.5 h-3.5 text-[#FFDC00]" />
                  <span>Rede Social Oficial</span>
                </div>
                <h3 className="text-base font-black text-white uppercase tracking-tight font-heading">
                  {links.instagramUsername}
                </h3>
                <p className="text-xs text-white/80 leading-relaxed">
                  {location.instagramText}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-white/15">
                <Button
                  variant="outline"
                  size="sm"
                  href={links.instagram}
                  isExternal
                  className="w-full sm:w-auto bg-[#0719EA] border-[#FFDC00]/50 text-white hover:bg-[#FFDC00] hover:text-[#090B10] font-bold text-xs py-1.5 px-3"
                >
                  <InstagramIcon className="w-3.5 h-3.5 mr-1.5" />
                  <span>Acessar Perfil no Instagram</span>
                  <ArrowUpRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>

            {/* Card Localização Física / Preparado para Integração */}
            <div className="bg-[#0B256B] border-2 border-[#0719EA]/60 rounded-xl p-4 sm:p-5 flex flex-col justify-between flex-1 shadow-xl">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#FFDC00]">
                    <MapPin className="w-3.5 h-3.5 text-[#FFDC00]" />
                    <span>Atendimento Técnico Presencial</span>
                  </div>
                  <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#062B91] text-[#FFDC00] border border-[#FFDC00]/40">
                    4x4 & Premium
                  </span>
                </div>

                <h3 className="text-base font-black text-white uppercase tracking-tight font-heading">
                  Recepção de Veículos e Serviços
                </h3>

                {contactInfo.address.isConfirmed ? (
                  <div className="space-y-1.5 text-xs text-white">
                    <p className="font-bold text-white">
                      {contactInfo.address.street} - {contactInfo.address.neighborhood}
                    </p>
                    <p>{contactInfo.address.city} - {contactInfo.address.state}</p>
                    {contactInfo.address.googleMapsUrl && (
                      <div className="pt-1.5">
                        <Button
                          variant="secondary"
                          size="sm"
                          href={contactInfo.address.googleMapsUrl}
                          isExternal
                          className="text-xs py-1.5"
                        >
                          <Navigation className="w-3 h-3 mr-1" />
                          <span>Abrir Rota no Google Maps</span>
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-1.5 text-xs text-white/85">
                    <p>
                      Para agendar a entrega do seu veículo ou solicitar uma análise técnica de nossa equipe, entre em contato através do nosso canal oficial.
                    </p>
                    <p className="text-[11px] text-[#FFDC00] font-bold">
                      • Atendimento especializado e direcionado para cada projeto.
                    </p>
                  </div>
                )}
              </div>

              {/* Botão para contato para localização */}
              <div className="pt-3 mt-3 border-t border-white/15">
                <a
                  href={links.contact}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#FFDC00] hover:underline"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Solicitar localização via WhatsApp</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
