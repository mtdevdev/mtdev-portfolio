
export interface CodeSnippet {
  title: string;
  language: 'csharp' | 'gdscript' | 'cpp';
  code: string;
}

export interface Project {
  id: string;
  title: string;
  date: string;
  engine: 'Unity' | 'Godot' | 'Unreal';
  description: string;
  link?: string;
  repoLink?: string;
  isAvailable: boolean;
  type: 'image' | 'video';
  coverImage?: string;
  role: string;
  teamSize: string;
  techHighlights: string[];
  features: string[];
  longDescription: string;
  gallery: string[];
  codeSnippet?: CodeSnippet;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: 'github' | 'linkedin' | 'gamepad' | 'mail';
}

export interface TechStack {
  category: string;
  icon: 'code' | 'layers';
  items: string;
}

export interface Education {
  school: string;
  degree: string;
  date: string;
  achievements: string[];
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  resumeUrl: string;
  bio: {
    intro: string;
    description: string;
  };
  availability: string;
  socials: SocialLink[];
  stack: TechStack[];
  projects: Project[];
  education: Education[];
  certificates: Certificate[];
  languages: Language[];
}
