import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: "code",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    category: "Backend",
    icon: "server",
    skills: ["FastAPI", "REST APIs", "Microservices", "API Integration", "Backend Development"],
  },
  {
    category: "Frontend",
    icon: "layout",
    skills: ["React.js", "Tailwind CSS"],
  },
  {
    category: "AI / ML",
    icon: "cpu",
    skills: ["RAG", "NLP", "Semantic Search", "Vector Retrieval", "TensorFlow", "Scikit-learn"],
  },
  {
    category: "Databases",
    icon: "database",
    skills: ["MongoDB", "MySQL", "ChromaDB"],
  },
  {
    category: "Infrastructure & Tools",
    icon: "box",
    skills: ["Docker", "Linux", "Git", "GitHub", "Containerized Deployment"],
  },
  {
    category: "Core CS",
    icon: "book",
    skills: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "OOP",
      "System Design Fundamentals",
    ],
  },
  {
    category: "Engineering Practices",
    icon: "settings",
    skills: ["Agile", "Code Reviews", "RESTful Services", "Modular Architecture", "Production Deployment"],
  },
];
