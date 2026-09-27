import { NavItem, SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "Maruthi",
  role: "Full-Stack & AI Engineer",
  title: "Maruthi — Full-Stack & AI Engineer",
  description: "Portfolio of Maruthi — Full-Stack & AI Engineer.",
  resumePath: "/resume/Maruthi-Resume.pdf",
  videoBackgroundPath: "/video/portfolio-background.mp4",
} as const;

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: readonly SocialLink[] = [
  { name: "GitHub", href: "https://github.com", icon: "github" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { name: "Twitter", href: "https://x.com", icon: "twitter" },
];
