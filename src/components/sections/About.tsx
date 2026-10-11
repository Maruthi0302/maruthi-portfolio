"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const SNAPSHOT_ITEMS = [
  { label: "CURRENT ROLE", value: "Software Engineer @ AlfredWorks AI" },
  { label: "CORE FOCUS", value: "Real-Time Voice AI & Scalable Microservices" },
  { label: "PRIMARY STACK", value: "FastAPI, Python, Next.js, LiveKit, Docker" },
  { label: "RESEARCH", value: "IEEE Co-Author (Low-Latency Voice RAG)" },
  { label: "ACCOLADES", value: "Hackathon Winner (The Giving Plate)" },
  { label: "LOCATION", value: "India • Remote & Hybrid Friendly" },
];

const HIGHLIGHT_POINTS = [
  "Architecting sub-second streaming audio workflows with LiveKit & WebSockets",
  "Developing dense semantic search and vector retrieval pipelines with ChromaDB",
  "Deploying containerized microservices with FastAPI, Python, and Docker",
];

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-label="About Maruthi"
      className="relative z-20 w-full py-20 sm:py-28 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden select-none"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-[#090909]/80 backdrop-blur-xl border border-white/10 hover:border-[#c40024]/40 transition-colors duration-500 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl"
          style={{
            boxShadow: "0 0 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(196, 0, 36, 0.05)",
          }}
        >
          {/* Subtle Ambient Red Glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-96 h-96 bg-[#c40024]/10 rounded-full blur-[100px] pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* ── LEFT COLUMN: Narrative & Highlights (7 cols) ─────────── */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#c40024]" />
                <p className="text-xs font-mono font-medium tracking-[0.24em] uppercase text-[#c40024]">
                  02 / ABOUT ME
                </p>
              </div>

              {/* Headline */}
              <h2 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[0.92]">
                BUILDING AT THE INTERSECTION OF{" "}
                <span className="text-[#e0002a]">AI &amp; SYSTEMS.</span>
              </h2>

              {/* Bio Narrative */}
              <div className="space-y-4 text-sm sm:text-base text-[#a3a3a3] font-normal leading-relaxed">
                <p className="text-base sm:text-lg text-[#e0e0e0]">
                  I&apos;m <span className="text-white font-semibold">Maruthi</span> (Adhul Thiruven Maruthi) — a Full-Stack and AI Engineer focused on building high-performance systems that connect advanced AI models with clean, reliable user experiences.
                </p>

                <p>
                  Currently working as a <span className="text-white font-medium">Software Engineer at AlfredWorks AI</span>, I build real-time processing pipelines for AI workflows, connecting complex backend architectures with modern web applications.
                </p>
              </div>

              {/* Core Strengths Bullet Points */}
              <div className="space-y-2.5 pt-2 border-t border-white/5">
                {HIGHLIGHT_POINTS.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-xs sm:text-sm text-[#8e8e8e]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e0002a] mt-2 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="#experience"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#c40024] hover:bg-[#e0002a] text-white text-xs font-mono font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(224,0,42,0.4)]"
                >
                  <span>MY JOURNEY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a
                  href={SITE_CONFIG.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 hover:border-[#c40024] bg-white/[0.02] hover:bg-[#c40024]/10 text-white text-xs font-mono tracking-[0.15em] uppercase transition-all duration-300"
                >
                  <FileText className="w-3.5 h-3.5 text-[#e0002a]" />
                  <span>RESUME PDF</span>
                </a>
              </div>
            </div>

            {/* ── RIGHT COLUMN: Clean Technical Snapshot Card (5 cols) ── */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md rounded-2xl bg-[#0e0e0e]/90 border border-white/10 hover:border-[#c40024]/40 transition-colors p-6 sm:p-7 space-y-5 shadow-xl relative overflow-hidden group">
                {/* Subtle Top Red Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e0002a] to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

                {/* Card Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e0002a] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e0002a]" />
                    </span>
                    <span className="text-xs font-mono font-semibold tracking-[0.2em] uppercase text-white">
                      SNAPSHOT
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#666] uppercase">
                    SYSTEM DOSSIER
                  </span>
                </div>

                {/* Details List */}
                <div className="space-y-3.5 text-xs font-mono">
                  {SNAPSHOT_ITEMS.map((item) => (
                    <div key={item.label} className="flex flex-col gap-1 pb-2.5 border-b border-white/5 last:border-0 last:pb-0">
                      <span className="text-[10px] tracking-wider uppercase text-[#777]">
                        {item.label}
                      </span>
                      <span className="text-[#e0e0e0] font-sans font-medium text-xs sm:text-[13px] leading-snug">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom Quick Tags */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {["Voice AI", "RAG Pipelines", "Microservices", "Next.js"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-mono text-[#999]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
