import React from "react";
import { 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  ShieldCheck 
} from "lucide-react";

export interface SkillCategory {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    highlight?: boolean;
  }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    number: "01",
    title: "Backend & Systems",
    subtitle: "High-throughput asynchronous services & APIs",
    icon: <Server className="w-4 h-4 text-[#e0002a]" />,
    skills: [
      { name: "Python", highlight: true },
      { name: "FastAPI", highlight: true },
      { name: "Node.js" },
      { name: "REST APIs" },
      { name: "Microservices", highlight: true },
      { name: "LiveKit Audio" },
      { name: "WebSockets" },
    ],
  },
  {
    number: "02",
    title: "AI & Machine Learning",
    subtitle: "Vector retrieval, dense embeddings & LLMs",
    icon: <Cpu className="w-4 h-4 text-[#e0002a]" />,
    skills: [
      { name: "RAG Pipelines", highlight: true },
      { name: "ChromaDB", highlight: true },
      { name: "Semantic Search", highlight: true },
      { name: "PyTorch" },
      { name: "OpenAI / LLMs" },
      { name: "Hugging Face" },
      { name: "Dense Embeddings" },
    ],
  },
  {
    number: "03",
    title: "Frontend Engineering",
    subtitle: "Reactive web interfaces & responsive design",
    icon: <Code2 className="w-4 h-4 text-[#e0002a]" />,
    skills: [
      { name: "React.js", highlight: true },
      { name: "Next.js", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript (ES6+)" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "HTML5 / CSS3" },
    ],
  },
  {
    number: "04",
    title: "Databases & Storage",
    subtitle: "Relational querying, vector indices & NoSQL",
    icon: <Database className="w-4 h-4 text-[#e0002a]" />,
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "ChromaDB (Vector)", highlight: true },
      { name: "MySQL" },
      { name: "Redis Caching" },
      { name: "Schema Design" },
    ],
  },
  {
    number: "05",
    title: "DevOps & Cloud Tools",
    subtitle: "Container isolation, CI/CD & environments",
    icon: <Wrench className="w-4 h-4 text-[#e0002a]" />,
    skills: [
      { name: "Docker", highlight: true },
      { name: "Git & GitHub", highlight: true },
      { name: "Linux / POSIX" },
      { name: "CI / CD Actions" },
      { name: "Twilio API" },
      { name: "Postman" },
      { name: "VS Code" },
    ],
  },
  {
    number: "06",
    title: "Core Architecture",
    subtitle: "Engineering patterns & reliability practices",
    icon: <ShieldCheck className="w-4 h-4 text-[#e0002a]" />,
    skills: [
      { name: "Low-Latency APIs", highlight: true },
      { name: "Event-Driven Flows", highlight: true },
      { name: "Strict Type Safety" },
      { name: "Modular Isolation" },
      { name: "Clean Architecture" },
      { name: "Containerized Deploy" },
    ],
  },
];

export const ARCHITECTURAL_PILLARS = [
  "MODULAR MICROSERVICES",
  "SUB-500MS TARGET",
  "VECTOR RETRIEVAL",
  "STRICT TYPE SAFETY",
] as const;
