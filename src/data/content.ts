export interface SpecialtyItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface DifferentialItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  isVideo?: boolean;
  videoSrc?: string;
}

export const contentData = {
  hero: {
    badge: "Centro Automotivo Especializado • 4x4 & Premium",
    headline: "SUA MÁQUINA MERECE ESPECIALISTAS.",
    subheadline:
      "Manutenção, diagnóstico e performance para veículos 4x4 e premium. Conheça a experiência JeanCar Centro Automotivo.",
    primaryCta: {
      text: "Entre em contato",
      href: "https://wa.me/5583988957383?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20JeanCar%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.",
    },
    secondaryCta: {
      text: "Conheça a JeanCar",
      href: "#sobre",
    },
    quickStats: [
      { label: "Anos de Referência", value: "10+" },
      { label: "Foco Especializado", value: "4x4 & Premium" },
      { label: "Atendimento", value: "Técnico & Dedicado" },
    ],
  },
  about: {
    sectionTag: "Sobre a JeanCar",
    title: "EXPERIÊNCIA QUE MOVE CONFIANÇA.",
    slogan: "Há mais de 10 anos trazendo serviços automotivos com transparência, tecnologia e qualidade.",
    yearsHighlight: "10+",
    yearsLabel: "Anos sendo referência no ramo automotivo",
    image: "/images/about/equipe-jeancar.webp",
    paragraph1:
      "Na JeanCar Centro Automotivo, conhecimento técnico, atenção aos detalhes e compromisso com cada veículo fazem parte da nossa essência.",
    paragraph2:
      "Somos especializados em manutenção, diagnóstico e soluções para veículos 4x4 e premium. Nossa equipe atua com rigor, transparência e tecnologia de ponta para cuidar da sua máquina.",
    values: [
      {
        title: "Transparência e Confiança",
        description: "Avaliação técnica clara, honesta e sem custos ou procedimentos desnecessários.",
      },
      {
        title: "Tecnologia e Diagnóstico Avançado",
        description: "Equipamentos computadorizados modernos dedicados à eletrônica de utilitários e veículos premium.",
      },
      {
        title: "Qualidade e Cuidado Rigoroso",
        description: "Padrão minucioso de serviço mecânico executado por especialistas qualificados.",
      },
    ],
    ctaText: "Fale com nossos especialistas",
  },
  founderStory: {
    sectionTag: "O Começo de Tudo",
    title: "A HISTÓRIA POR TRÁS DA MÁQUINA",
    subtitle: "Conheça a essência da JeanCar através das palavras de quem construiu essa jornada passo a passo.",
    founderName: "Jean",
    founderRole: "Fundador da JeanCar Centro Automotivo",
    quote: "Lembro que cheguei aqui apenas com uma maleta de ferramentas incompleta. Tenho ela até hoje e, sempre que a vejo, lembro de onde vim, onde estou e onde quero chegar.",
    videoSrc: "/videos/jeancar-institucional.mp4",
    poster: "/images/about/equipe-jeancar.webp",
    description: [
      "Nesta conversa sincera e emocionante, Jean relembra os primeiros passos na profissão, as noites de trabalho duro na oficina e como o amor pelo universo automotivo se transformou na JeanCar que você conhece hoje.",
      "Mais de uma década depois, aquele mesmo compromisso segue vivo em cada diagnóstico, em cada parafuso ajustado e em cada cliente que se torna parte da nossa família.",
    ],
    highlights: [
      { label: "Origem", value: "Paixão Genuína por Motores" },
      { label: "Propósito", value: "Transparência & Cuidado Real" },
      { label: "Conquista", value: "+10 Anos de Referência" },
    ],
    ctaText: "Converse com o Jean e nossa equipe",
  },
  specialties: {
    sectionTag: "Especialidades",
    title: "ESPECIALIZAÇÃO PARA CADA DESAFIO.",
    subtitle:
      "Soluções com foco em precisão, eletrônica avançada e integridade mecânica.",
    featuredNotice: {
      title: "Cuidamos do seu carro como se fosse nosso!",
      image: "/images/services/cuidado-veiculo.webp",
    },
    items: [
      {
        id: "manutencao",
        number: "01",
        title: "Manutenção Automotiva",
        description:
          "Serviços de manutenção preventiva e corretiva com rigor técnico às necessidades e especificações de cada veículo.",
        image: "/images/services/cuidado-veiculo.webp",
        tags: ["Suspensão", "Freios", "Transmissão", "Revisão Geral"],
      },
      {
        id: "diagnostico",
        number: "02",
        title: "Diagnóstico Automotivo",
        description:
          "Investigação aprofundada de falhas com análise técnica de telemetria eletrônica para orientar intervenções assertivas.",
        image: "/images/services/service-diagnostico.webp",
        tags: ["Scanners Avançados", "Rede CAN", "Telemetria", "Sensores"],
      },
      {
        id: "remap",
        number: "03",
        title: "REMAP",
        description:
          "Soluções especializadas de remapeamento eletrônico de injeção e software da ECU, com ajuste e calibração técnica sob medida.",
        image: "/images/services/service-remap.webp",
        tags: ["Otimização de Software", "Calibração ECU", "Resposta do Acelerador"],
      },
      {
        id: "4x4-premium",
        number: "04",
        title: "Veículos 4x4 e Premium",
        description:
          "Atendimento e infraestrutura direcionados ao universo de pickups, SUVs com tração 4x4 e automóveis de alto padrão.",
        image: "/images/services/service-4x4-premium.webp",
        tags: ["Sistemas 4WD / AWD", "Pickups Médias & Grandes", "Linhas Premium"],
      },
    ] as SpecialtyItem[],
  },
  differentials: {
    sectionTag: "Diferenciais",
    title: "MAIS QUE MANUTENÇÃO. COMPROMISSO COM SEU VEÍCULO.",
    motto: "CUIDAMOS DO SEU CARRO COMO SE FOSSE NOSSO!",
    subtitle:
      "Nossa forma de trabalhar é guiada por método, tecnologia, transparência e respeito ao proprietário.",
    items: [
      {
        number: "01",
        title: "Especialização em Veículos 4x4 e Premium",
        description:
          "Conhecimento prático das demandas severas de utilitários de tração integral e das tolerâncias exigidas por veículos sofisticados.",
        highlight: "Foco Exclusivo",
      },
      {
        number: "02",
        title: "Mais de Uma Década de Referência",
        description:
          "Uma trajetória construída com seriedade, conquistando a confiança contínua de clientes exigentes em todo o setor automotivo.",
        highlight: "10+ Anos de História",
      },
      {
        number: "03",
        title: "Foco em Diagnóstico Técnico",
        description:
          "Priorizamos identificar a causa raiz com ferramentas dedicadas, evitando a substituição desnecessária de componentes.",
        highlight: "Precisão Cirúrgica",
      },
      {
        number: "04",
        title: "Atenção Minuciosa aos Detalhes",
        description:
          "Desde a checagem eletrônica até o torque correto em cada parafuso, cada procedimento segue padrões rigorosos de qualidade.",
        highlight: "Rigor Técnico",
      },
    ] as DifferentialItem[],
  },
  gallery: {
    sectionTag: "Bastidores",
    title: "CONHEÇA A JEANCAR POR DENTRO.",
    subtitle:
      "Veja nossa equipe em ação, nossa infraestrutura e os veículos que atendemos diariamente na oficina.",
    ctaInstagram: "Veja mais no nosso Instagram",
    videoShowcase: {
      title: "JeanCar em Ação — Infraestrutura e Projetos 4x4",
      description: "Vídeo completo dos bastidores e processos da oficina JeanCar Centro Automotivo.",
      videoSrc: "/videos/jeancar-projeto.webm",
      poster: "/images/hero/hero-automotive.jpg",
    },
    items: [
      {
        id: "gal-real-equipe",
        title: "Equipe Técnica JeanCar",
        category: "Equipe",
        image: "/images/about/equipe-jeancar.webp",
        alt: "Equipe de mecânicos e profissionais JeanCar Centro Automotivo",
      },
      {
        id: "gal-real-manut",
        title: "Cuidado e Precisão Mecânica",
        category: "Processo",
        image: "/images/services/cuidado-veiculo.webp",
        alt: "Técnico JeanCar realizando manutenção em veículo",
      },
      {
        id: "gal-1",
        title: "Boxes de Atendimento Técnico",
        category: "Infraestrutura",
        image: "/images/gallery/gallery-bays.webp",
        alt: "Boxes modernos e organizados de atendimento mecânico JeanCar",
      },
      {
        id: "gal-3",
        title: "Veículos 4x4 Prontos para Qualquer Desafio",
        category: "4x4 & Offroad",
        image: "/images/gallery/gallery-4x4-trail.webp",
        alt: "Pickup 4x4 em terreno desafiador após preparação",
      },
      {
        id: "gal-4",
        title: "Diagnóstico Computadorizado",
        category: "Tecnologia",
        image: "/images/gallery/gallery-diagnostics.webp",
        alt: "Análise técnica computadorizada de sistemas automotivos",
      },
      {
        id: "gal-6",
        title: "Calibração e Otimização Eletrônica",
        category: "REMAP & Ajuste",
        image: "/images/gallery/gallery-tuning.webp",
        alt: "Ajuste eletrônico de motores e performance",
      },
    ] as GalleryItem[],
  },
  institutionalCta: {
    headline: "SEU VEÍCULO EM BOAS MÃOS.",
    subheadline:
      "Conte com a experiência de quem entende as reais necessidades dos veículos 4x4 e premium.",
    buttonText: "CONVERSE COM A JEANCAR",
  },
  location: {
    sectionTag: "Localização e Contato",
    title: "VENHA CONHECER A JEANCAR.",
    subtitle:
      "Estamos à disposição nos nossos canais oficiais para esclarecer dúvidas e receber seu veículo.",
    directChannelText:
      "Atendimento direto e ágil via link oficial de contato. Clique para iniciar uma conversa com nossa equipe.",
    instagramText:
      "Acompanhe nossos stories diários, serviços recentes, dicas automotivas e bastidores da oficina.",
  },
  footer: {
    companyName: "JeanCar Centro Automotivo",
    tagline: "Especialistas em 4x4 e premium.",
    description:
      "Centro automotivo de alta precisão. Mais de 10 anos oferecendo manutenção técnica, diagnóstico avançado e REMAP para quem não abre mão do melhor para o seu veículo.",
    copyrightNotice: "Todos os direitos reservados.",
  },
};
