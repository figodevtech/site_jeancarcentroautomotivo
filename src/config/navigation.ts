import { siteConfig } from "@/config/site";

export interface NavItem {
  label: string;
  href: string;
}

export const navigationConfig: {
  mainNav: NavItem[];
  ctaButton: {
    label: string;
    href: string;
  };
} = {
  mainNav: [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Bastidores", href: "#bastidores" },
    { label: "Especialidades", href: "#especialidades" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "História", href: "#historia" },
    { label: "Localização", href: "#localizacao" },
  ],
  ctaButton: {
    label: "Fale com a JeanCar",
    href: siteConfig.links.contact,
  },
};
