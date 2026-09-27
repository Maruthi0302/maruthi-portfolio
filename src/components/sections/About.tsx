"use client";

import React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const CAPABILITIES = [
  { id: "01", label: "FULL-STACK" },
  { id: "02", label: "AI SYSTEMS" },
  { id: "03", label: "RAG / LLM" },
  { id: "04", label: "BACKEND" },
  { id: "05", label: "FRONTEND" },
  { id: "06", label: "PRODUCT ENGINEERING" },
] as const;

export function About() {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemFadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const watermarkVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.4,
        ease: "easeOut",
      },
    },
  };

  const labelVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      aria-label="About Maruthi"
      className="relative z-20 w-full bg-[#030303] text-[#f5f5f5] py-28 sm:py-36 md:py-44 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-white/5 select-none"
    >
      {/* 1. TYPOGRAPHIC WATERMARK: "02" Crimson Outline */}
      <motion.div
        aria-hidden="true"
        variants={watermarkVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-12 right-2 sm:right-8 lg:right-16 pointer-events-none select-none z-0 overflow-hidden"
      >
        <span
          className="block font-[family-name:var(--font-bebas)] text-[28vw] sm:text-[22vw] md:text-[18vw] leading-none tracking-tight text-transparent select-none"
          style={{
            WebkitTextStroke: "1.5px rgba(220, 20, 45, 0.22)",
            textShadow: "0 0 50px rgba(196, 0, 36, 0.12)",
          }}
        >
          02
        </span>
      </motion.div>

      <div className="relative z-10 max-w-[1500px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-16 sm:space-y-20 lg:space-y-24"
        >
          {/* 2. SECTION HEADER */}
          <div className="space-y-4 max-w-xl">
            {/* Eyebrow badge matching Hero structure */}
            <motion.div variants={itemFadeUp} className="flex items-center gap-3">
              <span className="flex items-center text-[#c40024]">
                <span className="w-8 sm:w-10 h-[1px] bg-[#c40024]" />
                <span className="text-[10px] -ml-1">▸</span>
              </span>
              <p className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.24em] uppercase text-[#a3a3a3]">
                02 / ABOUT
              </p>
            </motion.div>

            {/* Large Section Heading */}
            <motion.h2
              variants={itemFadeUp}
              className="font-[family-name:var(--font-bebas)] text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight uppercase leading-[0.92]"
            >
              <span className="block text-white">ABOUT</span>
              <span className="block bg-gradient-to-r from-white via-[#f0f0f0] to-[#c40024] bg-clip-text text-transparent">
                ME
                <span
                  className="text-[#e0002a] inline-block ml-0.5"
                  style={{
                    textShadow:
                      "0 0 25px rgba(224, 0, 42, 1), 0 0 50px rgba(224, 0, 42, 0.6)",
                  }}
                >
                  .
                </span>
              </span>
            </motion.h2>
          </div>

          {/* 3. TWO-COLUMN EDITORIAL LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-start">
            {/* Left Column: Bold statement */}
            <motion.div
              variants={itemFadeUp}
              className="lg:col-span-6 space-y-4"
            >
              <h3 className="font-[family-name:var(--font-oswald)] text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-medium uppercase tracking-tight text-white leading-[1.15]">
                Building at the intersection of product engineering and AI.
              </h3>
              <div className="w-12 h-[2px] bg-[#c40024]/60" />
            </motion.div>

            {/* Right Column: Confident, factual professional context */}
            <motion.div
              variants={itemFadeUp}
              className="lg:col-span-6 space-y-6 text-[#a3a3a3] text-sm sm:text-base leading-relaxed font-normal"
            >
              <p className="text-[#f5f5f5] text-base sm:text-lg font-medium leading-relaxed">
                I build full-stack products and AI-powered systems, working
                across the interface, backend, APIs, data and intelligent
                application layers.
              </p>
              <p>
                My work spans modern frontend engineering with responsive,
                performant interfaces, backed by scalable backend services and
                robust API design. I integrate LLMs, vector search, and RAG
                pipelines into real-world software workflows where precision,
                speed, and reliability matter.
              </p>
              <p>
                Rather than treating AI as isolated demos or surface-level
                wrappers, I focus on building cohesive, end-to-end products that
                solve real operational challenges with clean architecture and
                resilient engineering standards.
              </p>
            </motion.div>
          </div>

          {/* 4. TECHNICAL IDENTITY / CAPABILITIES */}
          <div className="pt-8 border-t border-white/5 space-y-6">
            <motion.div variants={itemFadeUp} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c40024]" />
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#737373]">
                CORE CAPABILITIES
              </span>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
            >
              {CAPABILITIES.map((cap) => (
                <motion.div
                  key={cap.id}
                  variants={labelVariants}
                  className="group relative p-4 rounded bg-[#090909] border border-white/5 hover:border-[#c40024]/40 transition-colors duration-200 flex flex-col justify-between min-h-[92px]"
                >
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#737373] group-hover:text-[#c40024] transition-colors">
                    <span>{cap.id}</span>
                    <span className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-[#c40024] transition-colors" />
                  </div>
                  <span className="font-[family-name:var(--font-oswald)] text-xs sm:text-sm tracking-wider uppercase text-white font-medium group-hover:text-white transition-colors pt-2">
                    {cap.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
