export interface TimelineItem {
  id: string;
  number: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export const EXPERIENCES: TimelineItem[] = [
  {
    id: "alfredworks",
    number: "01",
    role: "SOFTWARE ENGINEER",
    company: "AlfredWorks AI",
    period: "Sept 2025 – Present",
    location: "On-site",
    description: [
      "Built real-time processing pipelines for AI-generated workflow outputs, integrating multiple services and external APIs into production application flows.",
      "Implemented full-stack features using React.js and FastAPI, connecting user-facing workflows with backend services and AI processing components.",
      "Worked on modular microservice architectures and Docker-based deployments, improving service isolation, maintainability, and deployment consistency.",
      "Collaborated with the engineering team through Git-based development, code reviews, sprint planning, debugging, and iterative production releases.",
    ],
  },
  {
    id: "turtil",
    number: "02",
    role: "BACKEND DEVELOPER INTERN",
    company: "Turtil.co",
    period: "May 2025 – June 2025",
    location: "Hybrid",
    description: [
      "Built a containerized resume-job matching microservice using Python, FastAPI, and Docker for scalable backend deployment.",
      "Designed backend processing pipelines for structured and unstructured resume-job data using semantic skill matching workflows.",
      "Developed REST APIs for candidate scoring, recommendation generation, and personalized learning path workflows.",
      "Implemented modular service architecture to improve deployment consistency and maintainability.",
    ],
  },
];

export const MANTRAS = ["BUILD", "DEVELOP", "INNOVATE", "REPEAT"] as const;
