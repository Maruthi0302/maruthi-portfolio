import { NavItem, SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "Maruthi",
  fullName: "Adhul Thiruven Maruthi",
  role: "Full-Stack & AI Engineer",
  title: "Maruthi — Full-Stack & AI Engineer",
  description: "Portfolio of Maruthi (Adhul Thiruven Maruthi) — Full-Stack & AI Engineer.",
  email: "thiruvenmaruthi@gmail.com",
  resumePath: "https://drive.google.com/file/d/1a3MaJRF18NnNAZSYTL7bGiDy_3wXnaU6/view?usp=drive_link",
  videoBackgroundPath: "/video/portfolio-background.mp4",
  social: {
    github: "https://github.com/Maruthi0302",
    linkedin: "https://www.linkedin.com/in/thiruven-maruthi-a-8740402ab/",
  },
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
  { name: "GitHub", href: SITE_CONFIG.social.github, icon: "github" },
  { name: "LinkedIn", href: SITE_CONFIG.social.linkedin, icon: "linkedin" },
];
