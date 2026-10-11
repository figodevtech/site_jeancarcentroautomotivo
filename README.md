# JeanCar Centro Automotivo — Website Institucional

Landing page institucional moderna, de alto desempenho e visualmente marcante desenvolvida para a **JeanCar Centro Automotivo**, referência especializada em manutenção, diagnóstico e REMAP para veículos 4x4 e premium.

---

## 🏎️ Tecnologias e Arquitetura

O projeto foi construído utilizando as mais modernas tecnologias do ecossistema React e Next.js:

- **Next.js 16 (App Router)**: Renderização otimizada com suporte a Server Components por padrão.
- **React 19 & TypeScript (Strict)**: Tipagem estrita de todos os dados, componentes e configurações.
- **Tailwind CSS v4**: Sistema de design moderno, baseado em tokens automotivos de alto contraste.
- **Next/Image & Sharp**: Otimização automática e conversão de imagens para formatos de última geração (WebP / AVIF).
- **Lucide React + Custom SVG**: Iconografia técnica automotiva e ícones oficiais de redes sociais.
- **SEO & Structured Data**: Metadados completos (Open Graph, Twitter Cards, Sitemap, Robots.txt) e dados estruturados Schema.org (`AutoRepair` / `AutomotiveBusiness`).

---

## 🎨 Identidade Visual e Cores da Marca

A identidade do site reflete o posicionamento de uma oficina de alta performance (*performance garage / automotive premium*):

| Cor | Hex | Aplicação |
| :--- | :--- | :--- |
| **Azul Elétrico** | `#0719EA` | Reconhecimento de marca, linhas de velocidade, bordas e destaques |
| **Azul Profundo** | `#062B91` | Fundos da barra de chamada institucional e gradientes de profundidade |
| **Amarelo Destaque** | `#FFDC00` | CTAs principais de conversão, indicadores e tags |
| **Grafite** | `#101726` | Cards de conteúdo e superfícies intermediárias |
| **Preto Profundo** | `#090B10` | Fundo principal da aplicação |
| **Cinza Neutro** | `#F3F5F8` | Tipografia de leitura e elementos de suporte |

A logo oficial foi preservada em sua totalidade geométrica e cromática, com corte de fundo transparente de alta definição e suporte a favicons em todas as resoluções.

---

## 📂 Estrutura do Projeto

```text
jeancar-website/
├── public/
│   ├── images/
│   │   ├── brand/       # Logo oficial, ícones e banner Open Graph
│   │   ├── hero/        # Fotografia cinematográfica do veículo 4x4
│   │   ├── services/    # Fotografias das 4 especialidades e oficina
│   │   └── gallery/     # Galeria de bastidores e infraestrutura
│   ├── favicon.ico
│   ├── icon.png
│   └── apple-icon.png
├── src/
│   ├── app/
│   │   ├── globals.css  # Tema Tailwind v4, classes e scroll suave
│   │   ├── layout.tsx   # Metadados SEO, fontes Google (Outfit + Inter) e JSON-LD
│   │   ├── page.tsx     # Composição da landing page e âncoras
│   │   ├── robots.ts    # Diretivas para mecanismos de busca
│   │   └── sitemap.ts   # Sitemap XML gerado dinamicamente
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx # Header sticky com transparência e menu mobile
│   │   │   └── Footer.tsx # Rodapé institucional com ano dinâmico
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx             # Hero cinematográfica com CTAs
│   │   │   ├── AboutSection.tsx            # História e 10+ anos de referência
│   │   │   ├── SpecialtiesSection.tsx      # 4 especialidades técnicas
│   │   │   ├── DifferentialsSection.tsx    # 4 diferenciais com números editoriais
│   │   │   ├── GallerySection.tsx          # Galeria de bastidores com filtros
│   │   │   ├── InstitutionalCtaSection.tsx # Seção azul de alta conversão
│   │   │   └── LocationSection.tsx         # Canais oficiais e suporte a mapas
│   │   └── ui/
│   │       ├── Badge.tsx
│   │       ├── BrandLogo.tsx
│   │       ├── Button.tsx
│   │       ├── CurrentYear.tsx
│   │       ├── Icons.tsx
│   │       └── SectionHeader.tsx
│   ├── config/
│   │   ├── site.ts        # Dados centralizados da empresa e links oficiais
│   │   └── navigation.ts  # Links do menu e âncoras da página
│   ├── data/
│   │   └── content.ts     # Todos os textos, seções e itens da galeria
│   └── lib/
│       └── utils.ts       # Utilitários de classes
├── README.md
├── package.json
└── tsconfig.json
```

---

## 🚀 Como Executar Localmente

### 1. Pré-requisitos
- Node.js 18.18+ ou 20+ instalado.
- Gerenciador de pacotes `npm`.

### 2. Instalação
Navegue até a pasta do projeto e instale as dependências:
```bash
cd jeancar-website
npm install
```

### 3. Iniciar em Modo de Desenvolvimento
```bash
npm run dev
```
Abra [http://localhost:3000](http://localhost:3000) no seu navegador para visualizar o site.

### 4. Validação de Código e Linter
```bash
npm run lint
```

### 5. Compilação de Produção
```bash
npm run build
```
Para testar o build localmente como em produção:
```bash
npm run start
```

---

## ⚙️ Como Personalizar Informações

Para garantir manutenibilidade sem alterar código de componentes, todas as informações estão centralizadas:

### 1. Dados de Contato, Endereço e Redes Sociais
Abra o arquivo `src/config/site.ts`:
- **Instagram**: Altere `links.instagram` ou `links.instagramUsername`.
- **Link de Contato Direto**: Altere `links.contact`.
- **Endereço Físico (Quando Confirmado)**:
  Basta alterar `isConfirmed: true` e preencher os campos:
  ```typescript
  contactInfo: {
    address: {
      isConfirmed: true, // Mude para true quando quiser exibir
      street: "Rua do Centro Automotivo, 123",
      neighborhood: "Bairro",
      city: "João Pessoa",
      state: "PB",
      googleMapsUrl: "https://maps.google.com/?q=...",
    },
    // ...
  }
  ```
  O componente `LocationSection` atualizará instantaneamente a interface com o endereço e o botão para abrir o Google Maps.

### 2. Textos e Conteúdos das Seções
Abra o arquivo `src/data/content.ts` para editar:
- Headlines e textos de cada seção.
- Itens das especialidades e diferenciais.
- Adicionar ou remover fotos da galeria de bastidores.

---

## 🌐 Publicação (Deploy)

### Vercel (Recomendado para Next.js)
1. Suba o repositório para o GitHub ou GitLab.
2. Acesse [vercel.com](https://vercel.com) e importe o repositório.
3. Defina o Root Directory como `jeancar-website` caso o repositório englobe a pasta raiz.
4. O build será realizado automaticamente com `npm run build`.

---

## 📋 Canais Oficiais JeanCar
- **Instagram**: [https://www.instagram.com/jeancarcentroautomotivo/](https://www.instagram.com/jeancarcentroautomotivo/)
- **Link Oficial de Atendimento**: [https://contate.me/jeancarautomotivo](https://contate.me/jeancarautomotivo)
