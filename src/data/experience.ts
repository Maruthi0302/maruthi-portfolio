import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "alfredworks",
    role: "Software Engineer",
    company: "AlfredWorks AI",
    location: "On-site",
    period: "Sept 2025 – Present",
    type: "work",
    description: [
      "Built real-time processing pipelines for AI-generated workflow outputs, integrating multiple services and external APIs into production application flows.",
      "Implemented full-stack features using React.js and FastAPI, connecting user-facing workflows with backend services and AI processing components.",
      "Worked on modular microservice architectures and Docker-based deployments, improving service isolation, maintainability, and deployment consistency.",
      "Collaborated with the engineering team through Git-based development, code reviews, sprint planning, debugging, and iterative production releases.",
    ],
    technologies: ["React.js", "FastAPI", "Docker", "Python", "Microservices", "Git"],
  },
  {
    id: "turtil",
    role: "Backend Developer Intern",
    company: "Turtil.co",
    location: "Hybrid",
    period: "May 2025 – June 2025",
    type: "work",
    description: [
      "Built a containerized resume-job matching microservice using Python, FastAPI, and Docker for scalable backend deployment.",
      "Designed backend processing pipelines for structured and unstructured resume-job data using semantic skill matching workflows.",
      "Developed REST APIs for candidate scoring, recommendation generation, and personalized learning path workflows.",
      "Implemented modular service architecture to improve deployment consistency and maintainability.",
    ],
    technologies: ["Python", "FastAPI", "Docker", "REST APIs", "Semantic Matching"],
  },
];
