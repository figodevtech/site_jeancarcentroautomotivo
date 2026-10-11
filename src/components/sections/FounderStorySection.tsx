"use client";

import React, { useState, useRef } from "react";
import { contentData } from "@/data/content";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Play, Pause, Volume2, VolumeX, Quote, Heart, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const FounderStorySection: React.FC = () => {
  const { founderStory } = contentData;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="historia" className="scroll-mt-20 py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-[#061E58] via-[#08246C] to-[#061848] relative overflow-hidden border-t-2 border-[#0719EA]/50">
      {/* Background Lighting & Speed Stripes */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#0719EA]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FFDC00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-speed-lines opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* COLUNA 1: SMARTPHONE MOCKUP 9:16 CALIBRADO PARA COMPENSAR LIMITES DO NAVEGADOR */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[200px] sm:max-w-[215px]">
              
              {/* Smartphone Decorative Outer Shadow & Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#0719EA] via-[#FFDC00] to-[#0719EA] rounded-[40px] blur-md opacity-40 group-hover:opacity-60 transition duration-500" />

              {/* Smartphone Bezel (Mockup Frame) */}
              <div className="relative bg-[#090B10] p-2 sm:p-2.5 rounded-[36px] border-[2.5px] border-[#FFDC00]/90 shadow-2xl shadow-[#061848]/90">
                
                {/* Volume & Power buttons styling on side */}
                <div className="absolute -left-[6px] top-16 w-[3.5px] h-7 bg-[#FFDC00] rounded-l-md" />
                <div className="absolute -left-[6px] top-26 w-[3.5px] h-7 bg-[#FFDC00] rounded-l-md" />
                <div className="absolute -right-[6px] top-20 w-[3.5px] h-8 bg-[#FFDC00] rounded-r-md" />

                {/* Screen Area (9:16 Aspect Ratio) */}
                <div className="relative aspect-[9/16] w-full rounded-[26px] overflow-hidden bg-black border border-white/20">
                  
                  {/* Dynamic Island / Speaker Notch */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-30 w-16 h-3.5 bg-black rounded-full flex items-center justify-between px-2 border border-white/10 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0719EA]/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-black border border-white/20" />
                  </div>

                  {/* HTML5 9:16 Video */}
                  <video
                    ref={videoRef}
                    src={founderStory.videoSrc}
                    playsInline
                    loop
                    className="w-full h-full object-cover"
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />

                  {/* Video Play/Pause Overlay */}
                  {!isPlaying && (
                    <div
                      onClick={togglePlay}
                      className="absolute inset-0 bg-[#061848]/55 backdrop-blur-[2px] flex flex-col items-center justify-center gap-2.5 cursor-pointer z-20 transition-all hover:bg-[#061848]/40"
                    >
                      <button
                        type="button"
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#FFDC00] hover:bg-white text-[#090B10] flex items-center justify-center shadow-xl shadow-[#FFDC00]/60 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
                        aria-label="Assistir entrevista com o Jean"
                      >
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-[#090B10] ml-0.5" />
                      </button>

                      <div className="text-center px-2">
                        <span className="inline-block text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-[#090B10] bg-[#FFDC00] px-2 py-0.5 rounded-full shadow-md">
                          Entrevista do Jean
                        </span>
                        <p className="text-white text-[10px] sm:text-[11px] font-bold mt-1 drop-shadow-md">
                          Toque para ouvir
                        </p>
                      </div>
                    </div>
                  )}

                  {/* In-Video Controls Floating at Bottom when Playing */}
                  {isPlaying && (
                    <div className="absolute bottom-2.5 inset-x-2.5 z-30 flex items-center justify-between bg-black/70 backdrop-blur-md px-2 py-1 rounded-full border border-white/20">
                      <button
                        type="button"
                        onClick={togglePlay}
                        className="text-white hover:text-[#FFDC00] transition-colors p-1"
                        aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                      </button>

                      <span className="text-[9px] font-bold text-white uppercase tracking-wider">
                        História do Jean
                      </span>

                      <button
                        type="button"
                        onClick={toggleMute}
                        className="text-white hover:text-[#FFDC00] transition-colors p-1"
                        aria-label={isMuted ? "Ativar som" : "Desativar som"}
                      >
                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  )}

                  {/* Top Badge Inside Screen */}
                  <div className="absolute top-6 left-2 z-20">
                    <span className="px-1.5 py-0.5 rounded-full bg-[#062B91]/90 backdrop-blur-xs text-[8px] font-bold uppercase tracking-wider text-[#FFDC00] border border-[#FFDC00]/40 shadow-md">
                      História Real
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* COLUNA 2: INFORMAÇÕES EDITORIAIS AO LADO DO CELULAR */}
          <div className="lg:col-span-7 flex flex-col space-y-2.5 sm:space-y-3">
            <SectionHeader
              tag={founderStory.sectionTag}
              title={founderStory.title}
              subtitle={founderStory.subtitle}
            />

            {/* Quote Emocional do Fundador */}
            <div className="relative p-3 sm:p-4 rounded-xl bg-[#0B256B] border-2 border-[#FFDC00] shadow-xl shadow-[#061848]/70">
              <div className="absolute -top-2.5 left-3.5 bg-[#FFDC00] text-[#090B10] px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md">
                <Heart className="w-2.5 h-2.5 fill-[#090B10]" />
                <span>Palavra do Fundador</span>
              </div>

              <Quote className="w-6 h-6 text-[#FFDC00]/20 absolute top-2.5 right-2.5 pointer-events-none" />

              <p className="text-xs sm:text-xs md:text-sm font-semibold text-white italic leading-relaxed pt-0.5">
                &ldquo;{founderStory.quote}&rdquo;
              </p>

              <div className="mt-2 pt-2 border-t border-white/15 flex items-center justify-between">
                <div>
                  <h4 className="text-xs sm:text-sm font-black text-[#FFDC00] uppercase tracking-wide">
                    {founderStory.founderName}
                  </h4>
                  <p className="text-[10px] text-white/80 font-medium">
                    {founderStory.founderRole}
                  </p>
                </div>
                <div className="w-6 h-6 rounded-full bg-[#0719EA] border border-[#FFDC00] flex items-center justify-center text-[9px] font-black text-white">
                  JC
                </div>
              </div>
            </div>

            {/* Descrição e Narrativa */}
            <div className="space-y-1 text-xs text-white/90 leading-relaxed font-normal">
              {founderStory.description.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>

            {/* 3 Marcos / Pilares */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-0.5">
              {founderStory.highlights.map((h, hIdx) => (
                <div key={hIdx} className="p-2 rounded-lg bg-[#082269] border border-[#0719EA]/60 shadow-md">
                  <span className="block text-[9px] font-bold text-[#FFDC00] uppercase tracking-wider">
                    {h.label}
                  </span>
                  <span className="block text-xs font-black text-white mt-0.5 font-heading">
                    {h.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA para Contato Direto */}
            <div className="pt-0.5">
              <Button
                variant="primary"
                size="md"
                href={siteConfig.links.contact}
                isExternal
                className="shadow-xl shadow-[#FFDC00]/30 font-black text-xs sm:text-sm py-2 px-5"
              >
                <WhatsAppIcon className="w-4 h-4 mr-1.5" />
                <span>{founderStory.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
