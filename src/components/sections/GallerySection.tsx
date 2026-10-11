"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { contentData } from "@/data/content";
import { siteConfig } from "@/config/site";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Camera, Play, Video } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export const GallerySection: React.FC = () => {
  const { gallery } = contentData;
  const [activeFilter, setActiveFilter] = useState("all");
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const categories = [
    { id: "all", label: "Todos" },
    { id: "Equipe", label: "Equipe Oficial" },
    { id: "Processo", label: "Manutenção Real" },
    { id: "4x4 & Offroad", label: "Veículos 4x4" },
    { id: "Infraestrutura", label: "Oficina" },
    { id: "Tecnologia", label: "Diagnóstico" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? gallery.items
      : gallery.items.filter((item) => item.category === activeFilter);

  const handleStartVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlayingVideo(true);
    }
  };

  return (
    <section id="bastidores" className="scroll-mt-20 py-8 sm:py-10 lg:py-12 bg-gradient-to-b from-[#061E58] via-[#08256E] to-[#061B52] relative overflow-hidden border-t-2 border-[#0719EA]/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#0719EA]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#FFDC00]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-6 gap-3 sm:gap-4">
          <SectionHeader
            tag={gallery.sectionTag}
            title={gallery.title}
            subtitle={gallery.subtitle}
          />

          <Button
            variant="outline"
            size="sm"
            href={siteConfig.links.instagram}
            isExternal
            className="self-start md:self-end border-2 border-[#FFDC00] bg-[#0719EA] text-white hover:bg-[#FFDC00] hover:text-[#090B10] shadow-xl shadow-[#0719EA]/30 font-black text-xs py-1.5 px-3.5"
          >
            <InstagramIcon className="w-3.5 h-3.5 mr-1.5" />
            <span>{gallery.ctaInstagram}</span>
            <ArrowUpRight className="w-3 h-3 ml-1" />
          </Button>
        </div>

        {/* FEATURED: VÍDEO OFICIAL DOS BASTIDORES DA OFICINA (16:9) COM LARGURA CALIBRADA */}
        <div className="max-w-3xl mx-auto mb-6 sm:mb-8 rounded-xl overflow-hidden border-2 border-[#FFDC00] bg-[#0B256B] shadow-2xl shadow-[#061B52]/90 relative group">
          <div className="p-2.5 sm:p-3 bg-gradient-to-r from-[#062B91] via-[#0719EA] to-[#062B91] border-b border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-[#FFDC00] text-[#090B10]">
                <Video className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-black uppercase tracking-tight text-white font-heading leading-tight">
                  {gallery.videoShowcase.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/90">
                  {gallery.videoShowcase.description}
                </p>
              </div>
            </div>

            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFDC00] text-[#090B10] shrink-0">
              Vídeo 16:9 Oficial
            </span>
          </div>

          <div className="relative aspect-video w-full bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src={gallery.videoShowcase.videoSrc}
              controls={isPlayingVideo}
              playsInline
              className="w-full h-full object-contain"
              onPlay={() => setIsPlayingVideo(true)}
              onPause={() => setIsPlayingVideo(false)}
            />

            {!isPlayingVideo && (
              <div
                className="absolute inset-0 bg-[#061848]/60 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 cursor-pointer"
                onClick={handleStartVideo}
              >
                <button
                  type="button"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFDC00] hover:bg-white text-[#090B10] flex items-center justify-center shadow-2xl shadow-[#FFDC00]/50 transition-transform group-hover:scale-110 active:scale-95 cursor-pointer"
                  aria-label="Reproduzir vídeo da oficina JeanCar"
                >
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#090B10] ml-0.5" />
                </button>
                <span className="text-xs font-black uppercase tracking-widest text-white bg-[#062B91]/90 px-3 py-1 rounded-full border border-[#FFDC00]">
                  Assistir Bastidores (16:9)
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4 pb-2.5 border-b border-white/15">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#FFDC00] mr-1.5 flex items-center gap-1">
            <Camera className="w-3.5 h-3.5 text-[#FFDC00]" />
            Filtrar:
          </span>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={cn(
                "px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm",
                activeFilter === cat.id
                  ? "bg-[#FFDC00] text-[#090B10] shadow-lg shadow-[#FFDC00]/30 font-black scale-105"
                  : "bg-[#0B256B] text-white hover:text-[#FFDC00] hover:bg-[#0719EA]/50 border border-[#0719EA]/60"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[16/10] rounded-xl overflow-hidden bg-[#0A1D4E] border-2 border-[#0719EA]/50 hover:border-[#FFDC00] transition-all duration-300 shadow-xl shadow-[#061848]/60 hover:shadow-2xl hover:shadow-[#0719EA]/40 hover:-translate-y-0.5"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061848]/95 via-[#062060]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Category Pill */}
              <div className="absolute top-2.5 left-2.5">
                <span className="px-2.5 py-0.5 rounded-full bg-[#062B91] text-[10px] font-bold uppercase tracking-wider text-[#FFDC00] border border-[#FFDC00]/40 shadow-md">
                  {item.category}
                </span>
              </div>

              {/* Title & Description at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3.5 transform translate-y-0.5 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xs sm:text-sm font-black text-white uppercase tracking-tight font-heading leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
