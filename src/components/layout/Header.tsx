"use client";

import React, { useState, useEffect } from "react";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Ativar fundo sólido/blur após 20px
      setIsScrolled(currentScrollY > 20);

      // Recolher suavemente ao rolar para baixo após passar do topo (90px)
      // e reaparecer suavemente ao rolar para cima ou no topo
      if (currentScrollY > 90 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out",
          isVisible || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full pointer-events-none",
          isScrolled
            ? "bg-[#062060]/95 backdrop-blur-md border-b-2 border-[#FFDC00] py-3 shadow-2xl shadow-[#062060]/50"
            : "bg-gradient-to-b from-[#061B52]/90 via-[#062060]/50 to-transparent py-5 border-b border-white/10"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFDC00]"
              aria-label="JeanCar Centro Automotivo - Ir para o início"
            >
              <BrandLogo size="sm" priority />
            </a>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-0.5 xl:space-x-1.5 bg-[#082269]/70 px-2.5 xl:px-4 py-1.5 rounded-full border border-white/15 backdrop-blur-md shadow-inner shrink-0"
              aria-label="Navegação principal"
            >
              {navigationConfig.mainNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-2.5 xl:px-3 py-1.5 text-xs xl:text-xs 2xl:text-sm font-bold uppercase tracking-wider text-[#F3F5F8] hover:text-[#FFDC00] hover:bg-white/[0.08] rounded-full transition-all duration-200 relative group whitespace-nowrap shrink-0"
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  <span className="absolute bottom-0 left-2.5 xl:left-3 right-2.5 xl:right-3 h-[2px] bg-[#FFDC00] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
                </a>
              ))}
            </nav>

            {/* CTA Button & Mobile Trigger */}
            <div className="flex items-center gap-2 xl:gap-3 shrink-0">
              <Button
                variant="primary"
                size="sm"
                href={siteConfig.links.contact}
                isExternal
                className="hidden sm:inline-flex shadow-lg shadow-[#FFDC00]/25 gap-1.5 whitespace-nowrap shrink-0 px-3 xl:px-4"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#090B10] shrink-0" />
                <span className="whitespace-nowrap">{navigationConfig.ctaButton.label}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
              </Button>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-md text-[#F3F5F8] bg-[#0719EA]/30 hover:bg-[#0719EA]/50 border border-[#FFDC00]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFDC00] shrink-0"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#FFDC00]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-opacity duration-300",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-[#061334]/85 backdrop-blur-md"
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          className={cn(
            "fixed inset-y-0 right-0 max-w-sm w-full bg-[#081F59] border-l-2 border-[#FFDC00] p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/15">
              <BrandLogo size="sm" />
              <button
                type="button"
                onClick={closeMenu}
                className="p-2 rounded-md text-[#F3F5F8] hover:text-[#FFDC00] hover:bg-white/[0.08]"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-1.5" aria-label="Navegação móvel">
              {navigationConfig.mainNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="px-4 py-3 rounded-lg text-base font-bold uppercase tracking-wider text-[#F3F5F8] hover:text-[#090B10] hover:bg-[#FFDC00] transition-colors flex items-center justify-between whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  <span className="w-2 h-2 rounded-full bg-[#FFDC00] shrink-0" />
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/15 flex flex-col gap-3">
            <Button
              variant="primary"
              size="md"
              href={siteConfig.links.contact}
              isExternal
              className="w-full justify-center gap-2"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#090B10]" />
              <span>{navigationConfig.ctaButton.label}</span>
            </Button>
            <p className="text-xs text-center text-[#FFDC00] font-semibold tracking-wide">
              Especialistas em veículos 4x4 e premium
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
