export interface SiteContactInfo {
  // Configuração centralizada para preenchimento posterior quando confirmado oficialmente
  address: {
    isConfirmed: boolean;
    street?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    googleMapsUrl?: string;
  };
  phone: {
    isConfirmed: boolean;
    display: string;
    e164: string;
  };
  operatingHours?: {
    isConfirmed: boolean;
    weekdays?: string;
    saturday?: string;
    sunday?: string;
  };
}

export const siteConfig = {
  name: "JeanCar Centro Automotivo",
  shortName: "JeanCar",
  tagline: "Especialistas em Veículos 4x4 e Premium",
  description:
    "Conheça a JeanCar Centro Automotivo, especializada em manutenção, diagnóstico e REMAP para veículos 4x4 e premium. Mais de 10 anos sendo referência no ramo automotivo.",
  url: "https://jeancarcentroautomotivo.com.br",
  ogImage: "/images/brand/og-image.png",
  foundedYears: "10+",
  links: {
    instagram: "https://www.instagram.com/jeancarcentroautomotivo/",
    instagramUsername: "@jeancarcentroautomotivo",
    whatsappNumber: "5583988957383",
    whatsappFormatted: "(83) 98895-7383",
    whatsappDirect: "https://wa.me/5583988957383",
    contact: "https://wa.me/5583988957383?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JeanCar%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.",
  },
  // Estrutura centralizada para dados de contato
  contactInfo: {
    address: {
      isConfirmed: false,
      street: "",
      neighborhood: "",
      city: "João Pessoa / Paraíba",
      state: "PB",
      googleMapsUrl: "",
    },
    phone: {
      isConfirmed: true,
      display: "(83) 98895-7383",
      e164: "+5583988957383",
    },
    operatingHours: {
      isConfirmed: false,
      weekdays: "Segunda a Sexta: Em confirmação",
      saturday: "Sábado: Em confirmação",
      sunday: "Fechado",
    },
  } as SiteContactInfo,
};
