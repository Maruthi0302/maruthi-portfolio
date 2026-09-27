export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  challenge: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  type: "work" | "education";
  description: string[];
  technologies?: string[];
}

export interface SkillCategory {
  category: string;
  icon?: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  badge?: string;
  date: string;
  credentialCode?: string;
  credentialUrl?: string;
  image?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Achievement {
  id: string;
  label: string;
  description: string;
}
