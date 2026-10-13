"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Building2 } from "lucide-react";
import { EXPERIENCES, MANTRAS } from "@/data/experience";

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="relative z-20 w-full min-h-screen py-24 sm:py-32 md:py-40 px-6 sm:px-12 lg:px-20 overflow-hidden select-none"
    >
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* ── LEFT COLUMN: Pinned / Sticky Section Header ──────────────────── */}
          <div className="lg:col-span-5 relative space-y-6 lg:sticky lg:top-32">
            {/* Left Content */}
            <div className="relative z-10 space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#c40024]" />
                <p className="text-xs font-mono font-medium tracking-[0.24em] uppercase text-[#c40024]">
                  03 / EXPERIENCE
                </p>
              </div>

              {/* Main Headline */}
              <h2 className="font-[family-name:var(--font-bebas)] text-6xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.92]">
                <span className="block text-white">PROFESSIONAL</span>
                <span className="block text-[#e0002a]">
                  JOURNEY
                  <span
                    className="text-[#e0002a] inline-block ml-0.5"
                    style={{
                      textShadow: "0 0 30px rgba(224, 0, 42, 0.9)",
                    }}
                  >
                    .
                  </span>
                </span>
              </h2>

              {/* Subtitle paragraph */}
              <p className="text-sm sm:text-base text-[#a3a3a3] font-normal leading-relaxed max-w-md">
                A timeline of the roles, teams, and systems I&apos;ve worked on — building products, scaling backend services, and working with AI.
              </p>

              {/* Vertical Mantra list */}
              <div className="pt-6 border-l-2 border-white/10 pl-4 space-y-2">
                {MANTRAS.map((mantra) => (
                  <span
                    key={mantra}
                    className="block text-[11px] font-mono tracking-[0.28em] text-[#666] uppercase hover:text-[#c40024] transition-colors"
                  >
                    {mantra}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Timeline Beam & Chamfered Cards ────────────────── */}
          <div className="lg:col-span-7 relative pl-8 sm:pl-16 lg:pl-12">
            
            {/* Vertical Red Luminous Line Beam */}
            <div
              aria-hidden="true"
              className="absolute left-[3px] sm:left-[19px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#e0002a] via-[#c40024] to-[#e0002a]/30"
              style={{
                boxShadow: "0 0 16px rgba(224, 0, 42, 0.75)",
              }}
            />

            {/* Timeline Cards Container */}
            <div className="space-y-12 sm:space-y-16">
              {EXPERIENCES.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative group"
                >
                  {/* Timeline Index Number (e.g. 01, 02) */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-12 sm:-left-16 top-3 text-xs sm:text-sm font-mono font-medium text-[#737373] select-none"
                  >
                    {item.number}
                  </span>

                  {/* Glowing Node Core */}
                  <div
                    className="absolute -left-[37px] sm:-left-[53px] top-3.5 w-5 h-5 rounded-full bg-[#050505] border-2 border-[#e0002a] flex items-center justify-center transition-transform duration-300 group-hover:scale-125"
                    style={{
                      boxShadow: "0 0 20px rgba(224, 0, 42, 0.9), inset 0 0 8px rgba(224, 0, 42, 0.6)",
                    }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]" />
                  </div>

                  {/* Horizontal Connector Branch Line */}
                  <div
                    aria-hidden="true"
                    className="absolute -left-4 sm:-left-7 top-6 w-4 sm:w-7 h-[1px] bg-[#c40024]/60"
                  />

                  {/* Chamfered / High-Tech Beveled Card Box */}
                  <div
                    className="relative rounded-2xl bg-[#090909]/80 backdrop-blur-xl border border-white/10 group-hover:border-[#c40024]/60 transition-all duration-300 p-6 sm:p-8 space-y-6 shadow-2xl"
                    style={{
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(196, 0, 36, 0.06)",
                    }}
                  >
                    {/* Corner Accent Glow */}
                    <div
                      aria-hidden="true"
                      className="absolute top-0 right-0 w-32 h-32 bg-[#c40024]/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-[#c40024]/20 transition-all"
                    />

                    {/* Card Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 border-b border-white/5 pb-5">
                      <div className="space-y-1">
                        <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#e0002a] uppercase block">
                          {item.role}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-oswald)] tracking-wide group-hover:text-white transition-colors">
                          {item.company}
                        </h3>
                      </div>

                      <div className="flex flex-col sm:items-end gap-1.5">
                        <span className="text-xs font-mono text-[#a3a3a3] tracking-wider">
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#8e8e8e] bg-white/[0.04] px-3 py-1 rounded-full border border-white/10 w-fit">
                          <Building2 className="w-3 h-3 text-[#c40024]" />
                          <span>{item.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-3">
                      {item.description.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#b0b0b0] leading-relaxed">
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-[#e0002a] mt-1.5 flex-shrink-0"
                            style={{
                              boxShadow: "0 0 8px rgba(224, 0, 42, 0.8)",
                            }}
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
