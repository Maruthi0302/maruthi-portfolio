export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  organization: string;
  date: string;
  badge: string;
  credentialCode: string;
  image: string;
  description: string;
  skills: string[];
}

export const CERTIFICATES: Certificate[] = [
  {
    id: "cs50-python",
    title: "CS50's Programming with Python",
    issuer: "HarvardX",
    organization: "Harvard University",
    date: "July 2024",
    badge: "Verified Certificate",
    credentialCode: "CS50P-HARVARDX-2024",
    image: "/images/CS50Python.png",
    description:
      "Comprehensive curriculum in algorithmic problem solving, object-oriented design, test-driven development using pytest, and modern Python programming paradigms.",
    skills: ["Python 3", "Unit Testing", "Algorithms", "Object-Oriented Design", "Regex"],
  },
  {
    id: "nptel-cloud",
    title: "Cloud Computing Architecture",
    issuer: "NPTEL",
    organization: "IIT Kharagpur / MoE",
    date: "November 2024",
    badge: "Elite Silver Certified",
    credentialCode: "NPTEL-CC-SILVER-2024",
    image: "/images/NPTEL CERTIFICATION.png",
    description:
      "Advanced distributed computing systems, virtualization technologies, cloud resource scheduling, container orchestration, and highly available architectures.",
    skills: ["Cloud Systems", "Virtualization", "Resource Scheduling", "Containers", "Distributed Systems"],
  },
  {
    id: "tech-saksham",
    title: "TechSaksham AI & Cloud Program",
    issuer: "TechSaksham",
    organization: "Microsoft & SAP",
    date: "2024",
    badge: "Microsoft & SAP Certified",
    credentialCode: "TS-AI-CLOUD-2024",
    image: "/images/TechSaksham.png",
    description:
      "Hands-on program in applied artificial intelligence and cloud computing, emphasizing machine learning pipelines, cloud service orchestration, and practical data workflows.",
    skills: ["Applied AI", "Cloud Fundamentals", "Machine Learning", "Data Pipelines", "Model Deployment"],
  },
  {
    id: "udemy-python",
    title: "Complete Python Developer: Zero to Mastery",
    issuer: "Udemy",
    organization: "ZTM Academy",
    date: "August 2023",
    badge: "Professional Mastery",
    credentialCode: "UDM-PY-ZTM-2023",
    image: "/images/udemy.png",
    description:
      "Practical engineering across full-stack Python programming, asynchronous task processing, web scraping, backend API integrations, and database architectures.",
    skills: ["Python", "FastAPI / Flask", "Asynchronous Tasks", "Web Scraping", "Automation", "REST APIs"],
  },
];
