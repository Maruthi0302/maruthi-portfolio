import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "querymind-ai",
    number: "01",
    title: "QUERYMIND AI",
    description:
      "A real-time voice-processing backend system for automated customer support workflows. Combines speech-to-text, request classification, and retrieval-based response generation.",
    challenge:
      "Architecting a real-time voice pipeline with low-latency retrieval across large document corpora while maintaining semantic accuracy under variable speech input quality.",
    technologies: ["Python", "FastAPI", "Docker", "Twilio", "LiveKit", "ChromaDB"],
    highlights: [
      "Real-time voice processing & speech-to-text",
      "Retrieval-based response generation via ChromaDB",
      "Request classification & sentiment analysis",
      "API-driven communication services via Twilio",
    ],
    githubUrl: "",  // configure in src/data/projects.ts when available
    liveUrl: "",
    featured: true,
  },
  {
    id: "the-giving-plate",
    number: "02",
    title: "THE GIVING PLATE",
    description:
      "A full-stack platform connecting surplus food providers with NGOs. Uses proximity-based matching and optimized routing logic to reduce food waste through location-aware interactions.",
    challenge:
      "Implementing reliable geospatial matching between donors and NGOs with proximity ranking and routing optimization across a distributed set of drop-off and pickup points.",
    technologies: ["React.js", "Node.js", "Geoapify Maps API"],
    highlights: [
      "Proximity-based donor–NGO matching",
      "Geoapify Maps API integration",
      "Optimized routing logic",
      "Recognized at a sustainability-focused hackathon",
    ],
    githubUrl: "",
    liveUrl: "",
    featured: true,
  },
];
