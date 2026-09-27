// ============================================================
// src/data/site.ts
// Single source of truth for all personal/site-level data.
// Update these values to configure the portfolio.
// ============================================================

export const SITE = {
  name: "Maruthi",
  fullName: "Adhul Thiruven Maruthi",
  role: "Software Engineer",
  roleDisplay: "Full-Stack & AI Engineer",
  tagline: "Building full-stack products and AI-powered systems from interface to intelligent backend.",
  email: "thiruvenmaruthi@gmail.com",
  phone: "+91 7569669019",
  resumePath: "/resume/Maruthi-Resume.pdf",
  videoPath: "/video/portfolio-background.mp4",
  // Add actual URLs here when available; leave empty string to hide the link
  social: {
    github: "",       // e.g. "https://github.com/yourhandle"
    linkedin: "",     // e.g. "https://linkedin.com/in/yourhandle"
    twitter: "",
  },
} as const;

export type SiteConfig = typeof SITE;
