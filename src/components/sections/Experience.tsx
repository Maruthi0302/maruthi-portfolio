"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { experiences } from "@/data/experience";

const FILTERS = ["All", "Work Experience"] as const;
type Filter = (typeof FILTERS)[number];

export function Experience() {
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState<Filter>("All");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const watermarkVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.4, ease: "easeOut" } },
  };

  const filtered = active === "All" ? experiences : experiences.filter((e) => e.type === "work");

  return (
    <section
      id="experience"
      aria-label="Professional Experience"
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
          className="block font-[family-name:var(--font-bebas)] text-[30vw] sm:text-[22vw] md:text-[16vw] leading-none tracking-tight text-transparent"
          style={{
            WebkitTextStroke: "1.5px rgba(220, 20, 45, 0.18)",
          }}
        >
          03
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
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="flex items-center text-[#c40024]">
                <span className="w-8 sm:w-10 h-[1px] bg-[#c40024]" />
                <span className="text-[10px] -ml-1">▸</span>
              </span>
              <p className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.24em] uppercase text-[#a3a3a3]">
                03 / EXPERIENCE
              </p>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-[family-name:var(--font-bebas)] text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight uppercase leading-[0.92]"
            >
              <span className="block text-white">PROFESSIONAL</span>
              <span className="block bg-gradient-to-r from-white via-[#f0f0f0] to-[#c40024] bg-clip-text text-transparent">
                JOURNEY
                <span
                  className="text-[#e0002a] inline-block ml-0.5"
                  style={{ textShadow: "0 0 25px rgba(224, 0, 42, 1), 0 0 50px rgba(224, 0, 42, 0.6)" }}
                >
                  .
                </span>
              </span>
            </motion.h2>

            {/* Filter pills */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-mono tracking-[0.2em] uppercase transition-all duration-200 border ${
                    active === f
                      ? "bg-[#c40024] border-[#c40024] text-white"
                      : "border-white/10 text-[#8e8e8e] hover:border-white/25 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical spine — desktop only */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#c40024]/60 via-[#c40024]/20 to-transparent"
            />

            <div className="space-y-12 lg:space-y-0">
              {filtered.map((exp, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start lg:mb-16"
                  >
                    {/* Spine Node */}
                    <div
                      aria-hidden="true"
                      className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 flex-col items-center z-10"
                    >
                      <div className="w-3 h-3 rounded-full bg-[#c40024] shadow-[0_0_12px_rgba(196,0,36,0.9)]" />
                    </div>

                    {/* Card — alternates left/right on desktop */}
                    <div className={`${isLeft ? "lg:col-start-1" : "lg:col-start-2"} lg:col-span-1`}>
                      <div className="group relative p-7 sm:p-8 rounded bg-[#090909] border border-white/5 hover:border-[#c40024]/30 transition-colors duration-300 space-y-5">
                        {/* Top red laser beam */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c40024]/60 to-transparent rounded-t" />

                        {/* Role & Company */}
                        <div className="space-y-1">
                          <h3 className="font-[family-name:var(--font-oswald)] text-xl sm:text-2xl font-medium uppercase tracking-wide text-white">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[#c40024] text-sm font-mono font-medium">
                              {exp.company}
                            </span>
                            {exp.location && (
                              <>
                                <span className="text-white/20">·</span>
                                <span className="text-[11px] text-[#737373] uppercase tracking-wider">
                                  {exp.location}
                                </span>
                              </>
                            )}
                          </div>
                          <span className="inline-block text-[11px] font-mono text-[#8e8e8e] tracking-wider mt-1">
                            {exp.period}
                          </span>
                        </div>

                        {/* Divider */}
                        <div className="h-[1px] bg-white/5" />

                        {/* Bullets */}
                        <ul className="space-y-2.5">
                          {exp.description.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-[#a3a3a3] leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#c40024]/70 mt-[6px] shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech tags */}
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {exp.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-[#8e8e8e]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Spacer for opposite column (desktop alternating layout) */}
                    {isLeft ? (
                      <div className="hidden lg:block lg:col-start-2" />
                    ) : (
                      <div className="hidden lg:block lg:col-start-1 lg:row-start-1" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
