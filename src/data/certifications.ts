import type { Certification } from "@/types";

export const certifications: Certification[] = [
  {
    id: "cs50-python",
    title: "CS50's Introduction to Programming with Python",
    issuer: "HarvardX",
    date: "July 2025",
    credentialCode: "CS50P-2025",
    image: "",  // add path like "/certificates/cs50.png" when available
  },
  {
    id: "nptel-cloud",
    title: "Cloud Computing",
    issuer: "NPTEL",
    badge: "Elite Silver Certified",
    date: "November 2024",
    credentialCode: "NPTEL-CC-2024",
    image: "",
  },
  {
    id: "udemy-python",
    title: "Complete Python Developer: Zero to Mastery",
    issuer: "Udemy",
    date: "August 2023",
    credentialCode: "UDM-PY-ZTM-2023",
    image: "",
  },
];

export const achievements = [
  {
    id: "ieee-paper",
    label: "IEEE Research Paper",
    description:
      "Co-authored and submitted an IEEE research paper on voice-driven AI systems with retrieval-based workflows.",
  },
  {
    id: "backend-systems",
    label: "Production Systems",
    description:
      "Built production-oriented backend and full-stack systems across AI workflow automation, semantic matching, and real-time voice processing.",
  },
  {
    id: "giving-plate-hackathon",
    label: "Hackathon Recognition",
    description:
      "Built The Giving Plate, a food redistribution platform recognized during a sustainability-focused hackathon.",
  },
];
