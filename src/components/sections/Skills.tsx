"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { skillCategories } from "@/data/skills";

// Icon map — minimal SVG inline icons for each category
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Languages: (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
      <path d="M2 4l4 8M6 4l4 8M4 9h4M9 4h5M11.5 4v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Backend: (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
      <rect x="1" y="3" width="14" height="4" rx="1" />
      <rect x="1" y="9" width="14" height="4" rx="1" />
      <circle cx="13" cy="5" r="0.5" fill="currentColor" />
      <circle cx="13" cy="11" r="0.5" fill="currentColor" />
    </svg>
  ),
  Frontend: (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
      <rect x="1" y="2" width="14" height="10" rx="1" />
      <path d="M5 15h6M8 12v3" strokeLinecap="round" />
      <path d="M5 7l2 2-2 2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 11h2" strokeLinecap="round" />
    </svg>
  ),
  "AI / ML": (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="8" cy="8" r="2.5" />
      <path d="M8 1v2M8 13v2M1 8h2M13 8h2" strokeLinecap="round" />
      <path d="M3.5 3.5l1.4 1.4M11.1 11.1l1.4 1.4M3.5 12.5l1.4-1.4M11.1 4.9l1.4-1.4" strokeLinecap="round" />
    </svg>
  ),
  Databases: (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
      <ellipse cx="8" cy="4" rx="6" ry="2" />
      <path d="M2 4v4c0 1.1 2.7 2 6 2s6-.9 6-2V4" />
      <path d="M2 8v4c0 1.1 2.7 2 6 2s6-.9 6-2V8" />
    </svg>
  ),
  "Infrastructure & Tools": (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
      <path d="M13 7H9M7 7H3M8 3v2M8 11v2" strokeLinecap="round" />
      <rect x="7" y="6" width="2" height="4" rx="1" />
      <rect x="2" y="5" width="3" height="3" rx="0.5" />
      <rect x="11" y="5" width="3" height="3" rx="0.5" />
    </svg>
  ),
  "Core CS": (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
      <path d="M4 4l3 3-3 3M8 10h4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Engineering Practices": (
    <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={1.5}>
      <path d="M6 3l-3 3 3 3M10 3l3 3-3 3M8.5 2l-1 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const watermarkVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.4, ease: "easeOut" } },
  };

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="relative z-20 w-full bg-[#050505] text-[#f5f5f5] py-28 sm:py-36 md:py-44 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-white/5"
    >
      {/* Watermark */}
      <motion.div
        aria-hidden="true"
        variants={watermarkVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-8 left-0 pointer-events-none select-none z-0"
      >
        <span
          className="block font-[family-name:var(--font-bebas)] text-[28vw] sm:text-[20vw] md:text-[14vw] leading-none tracking-tight text-transparent"
          style={{ WebkitTextStroke: "1.5px rgba(220, 20, 45, 0.15)" }}
        >
          05
        </span>
      </motion.div>

      <div className="relative z-10 max-w-[1500px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-16 sm:space-y-20"
        >
          {/* Header */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="flex items-center text-[#c40024]">
                <span className="w-8 sm:w-10 h-[1px] bg-[#c40024]" />
                <span className="text-[10px] -ml-1">▸</span>
              </span>
              <p className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.24em] uppercase text-[#a3a3a3]">
                05 / TECHNOLOGY
              </p>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-[family-name:var(--font-bebas)] text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight uppercase leading-[0.92]"
            >
              <span className="block text-white">THE</span>
              <span className="block bg-gradient-to-r from-white via-[#f0f0f0] to-[#c40024] bg-clip-text text-transparent">
                STACK
                <span
                  className="text-[#e0002a] inline-block ml-0.5"
                  style={{ textShadow: "0 0 25px rgba(224, 0, 42, 1), 0 0 50px rgba(224, 0, 42, 0.6)" }}
                >
                  .
                </span>
              </span>
            </motion.h2>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {skillCategories.map((group) => (
              <motion.div
                key={group.category}
                variants={itemVariants}
                className="group relative p-6 rounded bg-[#090909] border border-white/5 hover:border-[#c40024]/25 transition-colors duration-300 space-y-5"
              >
                {/* Category header */}
                <div className="flex items-center gap-3">
                  <span className="text-[#c40024] opacity-80 group-hover:opacity-100 transition-opacity">
                    {CATEGORY_ICONS[group.category] ?? (
                      <span className="w-4 h-4 block rounded-full border border-[#c40024]" />
                    )}
                  </span>
                  <span className="font-[family-name:var(--font-oswald)] text-sm sm:text-base font-medium uppercase tracking-wider text-white">
                    {group.category}
                  </span>
                </div>

                <div className="h-[1px] bg-white/5" />

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono tracking-wide px-2.5 py-1 rounded bg-white/[0.04] border border-white/5 text-[#a3a3a3] hover:text-white hover:border-white/15 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom note */}
          <motion.p variants={itemVariants} className="text-xs font-mono text-[#555] tracking-wider">
            * Skills reflect technologies actively used in professional and project work.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
