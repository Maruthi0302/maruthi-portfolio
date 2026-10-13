"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}



export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Subtle magnetic hover for buttons
  const handleMagneticMove = (e: React.MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.25;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.25;
    e.currentTarget.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
  };

  const handleMagneticLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translate3d(0px, 0px, 0)";
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const itemFadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const watermarkVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.6, delay: 0.2, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Introduction Hero"
      className="relative h-screen w-full flex flex-col justify-center px-6 sm:px-12 lg:px-20 overflow-hidden select-none"
    >
      {/* 1. HUGE WATERMARK: Exactly matches reference layout behind character */}
      <motion.div
        aria-hidden="true"
        variants={watermarkVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-[11%] sm:top-[13%] left-0 right-0 w-full text-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <span
          className="block font-[family-name:var(--font-bebas)] uppercase whitespace-nowrap text-[18vw] sm:text-[16vw] leading-none tracking-[0.06em] text-transparent"
          style={{
            WebkitTextStroke: "1.5px rgba(220, 20, 45, 0.55)",
            textShadow: "0 0 45px rgba(196, 0, 36, 0.25)",
          }}
        >
          MARUTHI.
        </span>
      </motion.div>

      {/* 2. MAIN HERO CONTENT: Left-aligned with Bebas Neue condensed typography */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-[580px] lg:max-w-[640px] space-y-5 sm:space-y-6 pt-2"
      >
        {/* Eyebrow with leading arrow line */}
        <motion.div variants={itemFadeUp} className="flex items-center gap-3">
          <span className="flex items-center text-[#c40024]">
            <span className="w-8 sm:w-10 h-[1px] bg-[#c40024]" />
            <span className="text-[10px] -ml-1">▸</span>
          </span>
          <p className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.24em] uppercase text-[#a3a3a3]">
            01 / FULL-STACK &amp; AI ENGINEER
          </p>
        </motion.div>

        {/* Main Headline: Condensed, impactful Bebas Neue font */}
        <motion.h1
          variants={itemFadeUp}
          className="font-[family-name:var(--font-bebas)] text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] tracking-tight uppercase leading-[0.92]"
        >
          <span className="block text-white">BUILDING IDEAS</span>
          <span className="block bg-gradient-to-r from-white via-[#f0f0f0] to-[#c40024] bg-clip-text text-transparent">
            INTO EXPERIENCES
            <span
              className="text-[#e0002a] inline-block ml-0.5"
              style={{
                textShadow: "0 0 25px rgba(224, 0, 42, 1), 0 0 50px rgba(224, 0, 42, 0.6)",
              }}
            >
              .
            </span>
          </span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          variants={itemFadeUp}
          className="text-sm sm:text-[15px] text-[#a3a3a3] leading-relaxed max-w-md font-normal"
        >
          Building full-stack products and AI-powered systems
          <br className="hidden sm:inline" /> from interface to intelligent backend.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemFadeUp}
          className="flex flex-wrap items-center gap-4 pt-3"
        >
          {/* Primary CTA with intense crimson glow */}
          <Link
            href="#projects"
            data-magnetic
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded bg-[#c40024] hover:bg-[#e0002a] text-white text-xs font-bold tracking-[0.16em] uppercase transition-all duration-200 shadow-[0_0_28px_rgba(196,0,36,0.55)] hover:shadow-[0_0_40px_rgba(224,0,42,0.8)]"
          >
            <span>EXPLORE WORK</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          {/* Secondary CTA */}
          <a
            href={SITE_CONFIG.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            data-magnetic
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded border border-white/20 hover:border-white/40 bg-black/60 text-white text-xs font-bold tracking-[0.16em] uppercase transition-all duration-200"
          >
            <span>DOWNLOAD RESUME</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-200 text-[#a3a3a3] group-hover:text-white" />
          </a>
        </motion.div>
      </motion.div>

      {/* 3. CINEMATIC BOTTOM STATUS BAR */}
      <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-12 lg:left-20 right-6 sm:right-12 lg:right-20 flex items-center justify-between text-xs text-[#8e8e8e] pointer-events-auto z-20">
        {/* Left: 01 / THE INTRODUCTION */}
        <div className="hidden sm:flex items-center gap-3">
          <span className="w-8 h-[1px] bg-white/25" />
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#737373]">
            01 / THE INTRODUCTION
          </span>
        </div>

        {/* Center: SCROLL TO EXPLORE */}
        <div className="flex flex-col items-center gap-1.5 mx-auto sm:mx-0 pointer-events-none select-none">
          <span className="text-[9px] tracking-[0.28em] uppercase text-[#8e8e8e]">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="w-3 h-3 text-[#9e9e9e]" />
          </motion.div>
        </div>

        {/* Right: Social icons with leading line */}
        <div className="hidden sm:flex items-center gap-4">
          <span className="w-8 h-[1px] bg-white/25" />
          <div className="flex items-center gap-3.5 text-[#9e9e9e]">
            <a
              href={SITE_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors p-1"
            >
              <GithubIcon />
            </a>
            <a
              href={SITE_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors p-1"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
