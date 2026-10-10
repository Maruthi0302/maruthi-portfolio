"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { 
  Code2, 
  Server, 
  Database, 
  Cpu, 
  Wrench, 
  Layers, 
  Sparkles,
  GitBranch,
  Terminal,
  ShieldCheck
} from "lucide-react";

interface SkillCategory {
  number: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    highlight?: boolean;
  }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
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

const ARCHITECTURAL_PILLARS = [
  "MODULAR MICROSERVICES",
  "SUB-500MS TARGET",
  "VECTOR RETRIEVAL",
  "STRICT TYPE SAFETY",
] as const;

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      aria-label="Technical Skills & Architecture"
      className="relative z-20 w-full py-20 sm:py-28 md:py-36 px-6 sm:px-12 lg:px-20 overflow-hidden select-none bg-transparent"
    >
      <div className="max-w-[1700px] mx-auto space-y-10 sm:space-y-12">
        
        {/* ── SECTION HEADER ──────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#c40024]" />
              <p className="text-xs font-mono font-medium tracking-[0.24em] uppercase text-[#c40024]">
                05 / SKILLS
              </p>
            </div>

            <h2 className="font-[family-name:var(--font-bebas)] text-6xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.92]">
              <span className="text-white">TECH </span>
              <span className="text-[#e0002a]">
                STACK
                <span
                  className="text-[#e0002a] inline-block ml-0.5"
                  style={{ textShadow: "0 0 30px rgba(224, 0, 42, 0.9)" }}
                >
                  .
                </span>
              </span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#a3a3a3] max-w-md font-normal leading-relaxed border-l-2 border-[#c40024]/50 pl-5">
            A production-ready engineering stack focused on scalable microservices, low-latency AI retrieval pipelines, and responsive web systems.
          </p>
        </div>

        {/* ── BALANCED 3x2 BENTO GRID (Zero Dead Space) ────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="group relative rounded-2xl bg-[#090909]/85 backdrop-blur-xl border border-white/10 hover:border-[#c40024]/50 transition-all duration-300 p-5 sm:p-6 shadow-xl flex flex-col space-y-4"
              style={{
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7), 0 0 25px rgba(196, 0, 36, 0.04)",
              }}
            >
              {/* Subtle Ambient Hover Glow */}
              <div
                aria-hidden="true"
                className="absolute top-0 right-0 w-24 h-24 bg-[#c40024]/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-[#c40024]/20 transition-all"
              />

              {/* Card Header */}
              <div className="space-y-1.5 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-md bg-white/[0.04] border border-white/10 group-hover:border-[#c40024]/40 transition-colors">
                      {cat.icon}
                    </div>
                    <span className="text-[11px] font-mono text-[#8e8e8e] tracking-widest uppercase">
                      CATEGORY {cat.number}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-oswald)] tracking-wide group-hover:text-[#e0002a] transition-colors pt-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-[#888] font-normal leading-relaxed">
                  {cat.subtitle}
                </p>
              </div>

              {/* Typographic Skill Pills (Compact, Uniform & Balanced) */}
              <div className="relative z-10 flex flex-wrap gap-2 pt-1">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`group/pill inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-all duration-200 cursor-default ${
                      skill.highlight
                        ? "bg-white/[0.05] text-white border-white/20 hover:border-[#c40024] hover:bg-[#c40024]/10 shadow-sm"
                        : "bg-white/[0.02] text-[#a8a8a8] border-white/5 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        skill.highlight ? "bg-[#e0002a]" : "bg-white/40 group-hover/pill:bg-[#e0002a]"
                      } transition-colors`}
                    />
                    <span className="font-medium tracking-wide whitespace-nowrap">{skill.name}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        {/* ── BOTTOM ARCHITECTURAL STANDARDS BAR ───────────────────────────── */}
        <div className="rounded-xl bg-white/[0.02] border border-white/5 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-white">
            <span className="w-2 h-2 rounded-full bg-[#e0002a] animate-pulse" />
            <span className="tracking-wider uppercase">CORE ARCHITECTURAL DISCIPLINES</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#777] text-[11px] tracking-wider uppercase">
            {ARCHITECTURAL_PILLARS.map((pillar) => (
              <span key={pillar} className="hover:text-white transition-colors">
                {pillar}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
