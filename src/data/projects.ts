export interface PrimaryProject {
  number: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  githubUrl: string;
}

export interface BentoTextCard {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

export const PRIMARY_PROJECTS: PrimaryProject[] = [
  {
    number: "01",
    category: "SUSTAINABILITY / FULL-STACK",
    title: "EcoVeda",
    description:
      "A holistic sustainable living platform empowering communities through skill development, resource coordination, and SDG-aligned workflows.",
    imageSrc: "/images/ecoveda.png",
    githubUrl: "https://github.com/Maruthi0302",
    technologies: ["React.js", "Python", "FastAPI", "Full-Stack", "Docker"],
  },
  {
    number: "02",
    category: "MAPS / SOCIAL IMPACT",
    title: "The Giving Plate",
    description:
      "An AI-powered surplus food redistribution platform connecting donors with NGOs using intelligent location-aware routing across India.",
    imageSrc: "/images/givingplate.png",
    githubUrl: "https://github.com/Maruthi0302/The-Giving-Plate",
    technologies: ["React.js", "Node.js", "Geoapify Maps", "AI Engine", "MongoDB"],
  },
];

export const BENTO_TEXT_CARDS: BentoTextCard[] = [
  {
    number: "03",
    category: "VOICE AI / STREAMING",
    title: "QueryMind AI",
    description:
      "Real-time voice-processing backend combining speech-to-text, low-latency ChromaDB retrieval, and automated customer support workflows.",
    technologies: ["FastAPI", "Twilio", "LiveKit", "ChromaDB"],
    githubUrl: "https://github.com/Maruthi0302/QueryMind-AI",
  },
  {
    number: "04",
    category: "SEMANTIC SEARCH",
    title: "Resume Vector Matcher",
    description:
      "Containerized microservice scoring and ranking structured/unstructured candidate resumes via dense semantic embeddings.",
    technologies: ["Python", "FastAPI", "Docker", "NLP"],
    githubUrl: "https://github.com/Maruthi0302/Resume-Job-Matcher",
  },
  {
    number: "05",
    category: "RESEARCH & SYSTEMS",
    title: "IEEE Voice Retrieval System",
    description:
      "Co-authored research architecture on voice-driven conversational workflows with sub-500ms retrieval pipelines.",
    technologies: ["RAG", "Vector Search", "WebSockets"],
    githubUrl: "https://github.com/Maruthi0302",
  },
];

export const RIGHT_PILLARS = ["IDEAS", "SYSTEMS", "PEOPLE", "IMPACT"] as const;
