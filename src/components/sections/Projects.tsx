"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Plus, ArrowUpRight, Sparkles } from "lucide-react";

interface PrimaryProject {
  number: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  githubUrl: string;
}

interface BentoTextCard {
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

const PRIMARY_PROJECTS: PrimaryProject[] = [
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

const BENTO_TEXT_CARDS: BentoTextCard[] = [
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

const RIGHT_PILLARS = ["IDEAS", "SYSTEMS", "PEOPLE", "IMPACT"] as const;

export function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      aria-label="Featured Projects"
      className="relative z-20 w-full py-20 sm:py-28 md:py-36 px-6 sm:px-12 lg:px-20 overflow-hidden select-none bg-transparent"
    >
      <div className="max-w-[1700px] mx-auto">
        
        {/* ── TOP SECTION HEADER ─────────────────────────────────────────── */}
        <div className="relative mb-12 sm:mb-16">
          {/* Header Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            
            {/* Left Headline (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#c40024]" />
                <p className="text-xs font-mono font-medium tracking-[0.24em] uppercase text-[#c40024]">
                  04 / PROJECTS
                </p>
              </div>

              <h2 className="font-[family-name:var(--font-bebas)] text-6xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.92]">
                <span className="block text-white">SYSTEMS</span>
                <span className="block text-[#e0002a]">
                  I&apos;VE BUILT
                  <span
                    className="text-[#e0002a] inline-block ml-0.5"
                    style={{ textShadow: "0 0 30px rgba(224, 0, 42, 0.9)" }}
                  >
                    .
                  </span>
                </span>
              </h2>
            </div>

            {/* Center Description Subtext with Red Divider (4 cols) */}
            <div className="lg:col-span-4 border-l-2 border-[#c40024]/50 pl-5 sm:pl-6 py-1">
              <p className="text-sm sm:text-base text-[#b0b0b0] leading-relaxed max-w-sm font-normal">
                A collection of real-world projects focused on AI systems, backend architecture and full-stack development.
              </p>
            </div>

            {/* Right Pillar Tags (IDEAS, SYSTEMS, PEOPLE, IMPACT) with Red Divider & Plus (3 cols) */}
            <div className="lg:col-span-3 border-l-2 border-[#c40024]/50 pl-5 sm:pl-6 py-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1 font-mono text-[11px] sm:text-xs tracking-[0.28em] text-[#8e8e8e] uppercase">
                {RIGHT_PILLARS.map((p) => (
                  <span key={p} className="block hover:text-[#e0002a] transition-colors cursor-default">
                    {p}
                  </span>
                ))}
              </div>
              <Plus className="w-4 h-4 text-[#e0002a] stroke-[2.5]" />
            </div>

          </div>
        </div>

        {/* ── BENTO GRID LAYOUT ────────────────────────────────────────────── */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* 1. TOP ROW: 2 PRIMARY CARDS (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {PRIMARY_PROJECTS.map((proj, idx) => (
              <motion.div
                key={proj.number}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative rounded-2xl bg-[#090909]/85 backdrop-blur-xl border border-white/10 hover:border-[#c40024]/60 transition-all duration-300 p-5 sm:p-6 shadow-2xl overflow-hidden"
                style={{
                  boxShadow: "0 10px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(196, 0, 36, 0.06)",
                }}
              >
                {/* Ambient Corner Glow */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-28 h-28 bg-[#c40024]/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-[#c40024]/20 transition-all"
                />

                {/* 2-Column Split: Text Left (7 cols), Image Right (5 cols) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
                  
                  {/* Left Column: Details */}
                  <div className="md:col-span-7 flex flex-col justify-between space-y-3.5">
                    {/* Top Bar: Number & Category */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-sm font-bold text-white tracking-widest">{proj.number}</span>
                      <span className="text-[#8e8e8e] tracking-[0.16em] uppercase text-[10px]">{proj.category}</span>
                    </div>

                    {/* Title + Subtitle */}
                    <div className="space-y-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-oswald)] tracking-wide group-hover:text-[#e0002a] transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed line-clamp-3 font-normal">
                        {proj.description}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.03] text-[#b0b0b0] border border-white/10 group-hover:border-[#c40024]/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-1.5">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#c40024] hover:text-[#e0002a] uppercase tracking-wider transition-colors"
                      >
                        <span>VIEW PROJECT</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Image Preview */}
                  <div className="md:col-span-5 relative w-full aspect-[16/11] rounded-xl overflow-hidden border border-white/10 bg-[#070707] shadow-inner group-hover:border-[#c40024]/40 transition-colors">
                    <img
                      src={proj.imageSrc}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. BOTTOM ROW: 3 BENTO TEXT CARDS (Clean, Aligned, No Stretched Images) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {BENTO_TEXT_CARDS.map((item, idx) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl bg-[#090909]/80 backdrop-blur-lg border border-white/10 hover:border-[#c40024]/50 transition-all duration-300 p-6 flex flex-col justify-between shadow-xl space-y-5"
              >
                {/* Subtle Hover Glow */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 right-0 w-24 h-24 bg-[#c40024]/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-[#c40024]/20 transition-all"
                />

                <div className="space-y-4">
                  {/* Top Bar: Number & Category */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-base font-bold text-white tracking-widest">{item.number}</span>
                    <span className="text-[10px] text-[#8e8e8e] tracking-wider uppercase">{item.category}</span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-oswald)] tracking-wide group-hover:text-[#e0002a] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#a3a3a3] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer: Tech tags + Link */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.03] text-[#a0a0a0] border border-white/10 group-hover:border-[#c40024]/30 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#c40024] hover:text-[#e0002a] tracking-wider uppercase transition-colors"
                  >
                    <span>EXPLORE SOURCE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;
