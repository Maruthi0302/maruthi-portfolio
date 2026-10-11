"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

interface Certificate {
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

const CERTIFICATES: Certificate[] = [
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

export function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = CERTIFICATES.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    if (info.offset.x < -40 || info.velocity.x < -180) {
      handleNext();
    } else if (info.offset.x > 40 || info.velocity.x > 180) {
      handlePrev();
    }
  };

  const currentCert = CERTIFICATES[activeIndex];

  return (
    <section
      id="certifications"
      aria-label="Certifications and Honors"
      className="relative z-20 w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden select-none"
    >
      <div className="max-w-[1400px] mx-auto space-y-12 sm:space-y-16">
        
        {/* ── SECTION HEADER ─────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#c40024]" />
              <p className="text-xs font-mono font-medium tracking-[0.24em] uppercase text-[#c40024]">
                06 / CERTIFICATIONS
              </p>
            </div>
            <h2 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
              HONORS &amp; <span className="text-[#e0002a]">CERTIFICATIONS</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-mono tracking-widest text-[#888]">
              <span className="text-white font-bold">0{activeIndex + 1}</span> / 0{total}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Certificate"
                className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-[#c40024] border border-white/10 hover:border-[#c40024] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Certificate"
                className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-[#c40024] border border-white/10 hover:border-[#c40024] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ── 2-COLUMN LAYOUT: COMPACT FANNED DECK (LEFT) + DETAILS (RIGHT) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ── LEFT: COMPACT FANNED CARD DECK (6 cols) ───────────────── */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* Stage: compact fanned cards */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-[16/11] flex items-center justify-center py-4">
              {CERTIFICATES.map((cert, index) => {
                let diff = index - activeIndex;
                if (diff > total / 2) diff -= total;
                if (diff < -total / 2) diff += total;

                const isCenter = diff === 0;
                const isLeft = diff === -1 || (diff === 3 && total === 4);
                const isRight = diff === 1 || (diff === -3 && total === 4);

                let x = 0;
                let rotate = 0;
                let scale = 0.82;
                let zIndex = 5;
                let opacity = 0;

                if (isCenter) {
                  x = 0;
                  rotate = 0;
                  scale = 1.02;
                  zIndex = 20;
                  opacity = 1;
                } else if (isLeft) {
                  x = -85;
                  rotate = -10;
                  scale = 0.88;
                  zIndex = 10;
                  opacity = 0.85;
                } else if (isRight) {
                  x = 85;
                  rotate = 10;
                  scale = 0.88;
                  zIndex = 10;
                  opacity = 0.85;
                } else {
                  x = 0;
                  rotate = 0;
                  scale = 0.75;
                  zIndex = 1;
                  opacity = 0;
                }

                return (
                  <motion.div
                    key={cert.id}
                    animate={{
                      x,
                      rotate,
                      scale,
                      opacity,
                      zIndex,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                      damping: 24,
                      mass: 0.8,
                    }}
                    drag={isCenter ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.4}
                    onDragEnd={handleDragEnd}
                    onClick={() => {
                      if (isLeft) handlePrev();
                      if (isRight) handleNext();
                    }}
                    className={`absolute w-full h-full rounded-2xl overflow-hidden select-none transition-all duration-300 ${
                      isCenter
                        ? "cursor-grab active:cursor-grabbing drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
                        : "cursor-pointer drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)] hover:opacity-100"
                    }`}
                    style={{
                      transformOrigin: "bottom center",
                    }}
                  >
                    {/* Clean PNG image without borders or background box */}
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="(max-width: 640px) 90vw, 420px"
                      className="object-contain pointer-events-none rounded-2xl"
                      priority={isCenter}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Swipe hint & dot switcher below deck */}
            <div className="flex items-center gap-3 pt-8">
              {CERTIFICATES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to certificate ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? "w-8 bg-[#e0002a] shadow-[0_0_12px_#e0002a]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <p className="text-[11px] font-mono text-[#666] uppercase tracking-widest pt-2">
              ← SWIPE OR CLICK TO FLIP →
            </p>

          </div>

          {/* ── RIGHT: LIVE DESCRIPTION & DETAILS (6 cols) ────────────── */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCert.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="space-y-6 rounded-3xl bg-[#0c0c0c]/80 border border-white/10 p-6 sm:p-8 relative overflow-hidden shadow-xl"
              >
                {/* Top glow line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e0002a] to-transparent opacity-70" />

                {/* Badge & Date */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c40024]/15 border border-[#c40024]/40 text-[#ff2a55] text-xs font-mono uppercase tracking-wider font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    {currentCert.badge}
                  </span>
                  <span className="text-xs font-mono text-[#888]">{currentCert.date}</span>
                </div>

                {/* Title & Organization */}
                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-oswald)] uppercase tracking-wide leading-tight">
                    {currentCert.title}
                  </h3>
                  <p className="text-sm font-mono text-[#e0002a]">
                    {currentCert.organization} • {currentCert.issuer}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#a3a3a3] font-normal leading-relaxed">
                  {currentCert.description}
                </p>

                {/* Verified Skills */}
                <div className="space-y-2.5 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-mono tracking-widest text-[#777] uppercase block">
                    VERIFIED SKILLS &amp; TOPICS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-xs font-mono text-[#cfcfcf]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential Code */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs font-mono text-[#777]">
                  <span>CREDENTIAL ID</span>
                  <span className="text-white/80">{currentCert.credentialCode}</span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Certifications;
