import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  name: "Matheus Barboza Marçal",
  role: "SOFTWARE DEVELOPER",
  location: "Apucarana, PR, Brasil",
  resumeUrl: "/assets/documents/cv.pdf",
  bio: {
    intro: "Desenvolvedor de Software e graduando em Engenharia da Computação.",
    description: "Utilizo minha base em lógica matemática e otimização de performance, adquirida no desenvolvimento de sistemas complexos de jogos, para projetar soluções modernas de software, automações e arquiteturas.",
    profileImage: "/assets/images/profile.jpg"
  },
  socials: [
    { platform: "Github", url: "https://github.com/mtdevdev", icon: "github" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/matheus-mar%C3%A7al-mtdev/", icon: "linkedin" },
    { platform: "Email", url: "mailto:mtdevdev@gmail.com", icon: "mail" }
  ],
  stack: [
    {
      category: "Linguagens de Programação",
      icon: "code",
      items: "C# / Python / Lógica de Programação"
    },
    {
      category: "Engines & Ferramentas",
      icon: "layers",
      items: "Unity (2D/3D) / Git & GitHub / Integração de APIs / AI-Assisted Development / Arquitetura Desktop"
    }
  ],
  projects: [
    {
      id: "oxis-ai",
      title: "Oxis AI",
      date: "JUNHO 2026",
      engine: "Python",
      description: "Aplicativo desktop utilitário global que intercepta e otimiza textos em tempo real via IA, integrado a um painel web de métricas e analytics.",
      longDescription: "Software focado em produtividade desenvolvido através da metodologia de AI-Driven Development (Desenvolvimento Orientado a IA). Fui responsável pela arquitetura da aplicação desktop em Python, estruturação de ganchos (hooks) globais do sistema operacional para interceptação de texto, gerenciamento de estado e memória de contexto do chat, além da integração com APIs de IA e sincronização com um dashboard web.",
      isAvailable: false,
      type: "image",
      coverImage: "/assets/projects/oxis-ai/cover.jpeg",
      role: "Desenvolvedor do Software Desktop",
      teamSize: "3 (Software, Infra/DB & Design)",
      techHighlights: [
        "Python",
        "APIs de IA",
        "Arquitetura de Software",
        "UI/UX",
        "AI-Driven Development"
      ],
      features: [
        "Interceptação de Texto Global",
        "Gerenciamento de Estado",
        "Integração com APIs de IA",
        "Sincronização com Dashboard Web"
      ],
      gallery: [],
    },
    {
      id: "splinteris",
      title: "Splinteris",
      date: "DEZEMBRO 2025",
      engine: "Unity",
      description: "Shooter tático Top-Down onde a manipulação do tempo é a mecânica central. Focado em arquitetura de sistemas, implementando padrões de projeto para manipulação algorítmica do tempo de execução e criação de IA de inimigos baseada em Máquinas de Estado (State Machine).",
      longDescription: "SPLINTERIS é um shooter tático top-down focado em arquitetura de sistemas e engenharia de software aplicada a jogos. Desenvolvi e implementei padrões de projeto para manipulação algorítmica do tempo de execução (Time Scaling), onde a escala de tempo é ajustada dinamicamente com base nos ganchos de input e movimento do jogador. Também projetei e codifiquei uma inteligência artificial complexa para os inimigos baseada em Máquinas de Estado Finitas (Finite State Machines), e construí um sistema de câmera com offset preditivo e renderização de campo de visão em tempo real utilizando Raycasting.",
      link: "https://mtdeveloper.itch.io/splinteris",
      repoLink: "https://github.com/mtdevdev/SPLINTERIS",
      isAvailable: true,
      type: "image",
      coverImage: "/assets/projects/splinteris/cover.jpg",
      videoPreviewUrl: "/assets/projects/splinteris/preview.mp4",
      role: "Solo Developer",
      teamSize: "1",
      techHighlights: [
        "Unity",
        "C#",
        "Máquinas de Estado",
        "Time Scaling Algorítmico"
      ],
      features: [
        "Sistema de Tempo Dinâmico",
        "Controle de Câmera Preditivo",
        "Combate de Alta Letalidade"
      ],
      gallery: [
        "/assets/projects/splinteris/screen1.png",
        "/assets/projects/splinteris/screen2.png",
        "/assets/projects/splinteris/screen3.png",
        "/assets/projects/splinteris/screen4.png",
        "/assets/projects/splinteris/screen5.png"
      ]
    },
    {
      id: "retro-rebound",
      title: "Retro Rebound",
      date: "JULHO 2025",
      engine: "Unity",
      description: "Jogo arcade competitivo focado em lógica de sincronização local, gerenciamento de concorrência e renderização otimizada. Desenvolvido com Shaders personalizados em tempo real (Shader Graph) para efeitos visuais dinâmicos de pixelização e cálculo preditivo de colisão.",
      longDescription: "Um jogo de arcade competitivo projetado com foco na otimização de renderização e lógica matemática para tempo real. Desenvolvi shaders customizados via Shader Graph para criar efeitos de pixelização adaptativos e pós-processamento reativo. A arquitetura de software lida com concorrência local para múltiplos inputs e calcula previsões físicas de colisão com precisão de taxa de quadros (frame-rate independent), garantindo uma jogabilidade extremamente responsiva.",
      link: "https://mtdeveloper.itch.io/retro-rebound",
      isAvailable: true,
      type: "image",
      coverImage: "/assets/projects/retro-rebound/cover.png",
      videoPreviewUrl: "/assets/projects/retro-rebound/preview.mp4",
      role: "Solo Developer",
      teamSize: "1",
      techHighlights: [
        "Unity",
        "C#",
        "Otimização de Shaders",
        "Concorrência Local"
      ],
      features: [
        "Multiplayer Local Competitivo",
        "3 Fases Visuais Evolutivas",
        "Rotação Ambiental Dinâmica",
        "Customização de Cores em Runtime"
      ],
      gallery: [
        "/assets/projects/retro-rebound/screen1.png",
        "/assets/projects/retro-rebound/screen2.png"
      ]
    },
    {
      id: "galactic-paradox",
      title: "Galactic Paradox",
      date: "JULHO 2024",
      engine: "Godot",
      description: "Projeto desenvolvido na Godot Engine focado em processamento de sinais em tempo real. Implementa um algoritmo de análise de espectro de áudio para sincronizar os ataques do ambiente com a frequência da música, utilizando lógica matemática de movimento circular e vetorial.",
      longDescription: "Desenvolvido na Godot Engine, o projeto foca em processamento digital de sinais em tempo real e simulações matemáticas vetoriais. Implementa um algoritmo de análise rápida de Fourier (FFT) para espectro de áudio, permitindo que a frequência e intensidade da trilha sonora sincronizem dinamicamente com os padrões de spawn de obstáculos. O movimento orbital da nave foi modelado com equações paramétricas de cinemática circular e álgebra vetorial para transições suaves.",
      link: "https://mtdeveloper.itch.io/galactic-paradox",
      isAvailable: true,
      type: "image",
      coverImage: "/assets/projects/galactic-paradox/cover.jpg",
      videoPreviewUrl: "/assets/projects/galactic-paradox/preview.mp4",
      role: "Lead Programmer & Game Designer",
      teamSize: "2",
      techHighlights: [
        "Godot",
        "GDScript",
        "Processamento de Sinais",
        "Matemática Vetorial"
      ],
      features: [
        "Mecânica de Movimento Circular",
        "Level Design Sincronizado Manualmente",
        "Suporte a Controle Xbox",
        "Estética Neon/Retro"
      ],
      gallery: [
        "/assets/projects/galactic-paradox/screen1.png",
        "/assets/projects/galactic-paradox/screen2.png",
        "/assets/projects/galactic-paradox/screen3.jpg",
        "/assets/projects/galactic-paradox/screen4.jpg",
        "/assets/projects/galactic-paradox/screen5.png"
      ]
    }
  ],
  education: [
    {
      school: "UTFPR (Universidade Tecnológica Federal do Paraná)",
      degree: "Bacharelado em Engenharia da Computação",
      date: "Ago 2026 - Jul 2031 (Previsão)",
      achievements: []
    },
    {
      school: "Estação Dona Catarina",
      degree: "Ensino Médio Técnico em Administração",
      date: "Fev 2023 - Dez 2025",
      achievements: [
        "Aluno Destaque (2025)",
        "Maior número de atividades realizadas (2024)",
        "Certificado de Assiduidade"
      ]
    }
  ],
  certificates: [
    {
      name: "Claude 101",
      issuer: "Anthropic",
      date: "Mar 2026",
      link: "#"
    },
    {
      name: "Create with Code",
      issuer: "Unity",
      date: "Jan 2026",
      link: "#"
    },
    {
      name: "Técnico em Administração",
      issuer: "Estação Dona Catarina",
      date: "Fev 2023 - Dez 2025",
      link: "#"
    },
    {
      name: "Level 3 GameDev (Godot, Unity & Unreal)",
      issuer: "SuperGeeks",
      date: "Jan 2024 - Dez 2025",
      link: "#"
    },
    {
      name: "Scratch: Developing Games",
      issuer: "Alura",
      date: "Out 2023",
      link: "#"
    }
  ],
  languages: [
    {
      name: "Português",
      level: "Nativo"
    },
    {
      name: "Inglês",
      level: "Intermediário"
    },
    {
      name: "Espanhol",
      level: "Básico"
    }
  ]
};

export const ui = {
  navHome: "Home",
  navAbout: "Sobre",
  navProjects: "Projetos",
  navContact: "Contato",
  
  heroViewProjects: "Ver Projetos",
  heroAboutMe: "Sobre Mim",
  
  aboutTitle: "Perfil Profissional",
  aboutTechStack: "Tech Stack",
  aboutEducation: "Formação Acadêmica",
  aboutCertificates: "Certificações & Cursos",
  aboutLanguages: "Idiomas",
  aboutViewResume: "Visualizar Currículo",
  aboutShowMore: "Ver mais",
  aboutShowLess: "Mostrar menos",
  aboutMoreCertificates: (count: number) => `Ver mais (${count})`,

  projectHoverDetails: "Clique para mais detalhes",
  projectsTitle: "Portfólio",
  projectsSubtitle: "Projetos Selecionados",
  
  modalAboutProject: "Sobre o Projeto",
  modalGallery: "Galeria",
  modalViewPage: "Ver Página",
  modalViewRepo: "Ver Repositório",
  modalTechnology: "Tecnologia",
  modalTeam: "Equipe",
  modalPeriod: "Período",
  
  footerContactTitle: "Vamos construir juntos?",
  footerSendEmail: "Enviar Email",
  footerCopyEmail: "Copiar Email",
  footerEmailCopied: "Copiado!",
  footerRights: "© 2026 MTDev. Todos os direitos reservados."
};

export type TranslationsType = {
  portfolioData: PortfolioData;
  ui: typeof ui;
};
