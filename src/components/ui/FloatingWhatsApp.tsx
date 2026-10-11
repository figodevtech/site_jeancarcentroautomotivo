"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { WhatsAppIcon } from "@/components/ui/Icons";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group select-none">
      {/* Tooltip / Badge */}
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-full bg-[#082269] text-white border-2 border-[#FFDC00] text-xs font-bold uppercase tracking-wider shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none">
        Fale no WhatsApp
      </span>

      {/* Button */}
      <a
        href={siteConfig.links.contact}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com JeanCar no WhatsApp (83) 98895-7383"
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-transform duration-300 border-2 border-white/40"
      >
        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 relative z-10 fill-white" />
      </a>
    </div>
  );
};
