"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-label="About Maruthi"
      className="relative z-20 w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Solid Dark Panel with subtle red glow border */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-[#090909]/95 backdrop-blur-xl border border-white/10 hover:border-[#c40024]/40 transition-colors duration-500 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl"
          style={{
            boxShadow: "0 0 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(196, 0, 36, 0.08)",
          }}
        >
          {/* Subtle Ambient Corner Glow */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-96 h-96 bg-[#c40024]/10 rounded-full blur-[100px] pointer-events-none"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="w-6 h-[2px] bg-[#c40024]" />
                <p className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-[#c40024]">
                  02 / ABOUT
                </p>
              </div>

              {/* Headline */}
              <h2 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
                ABOUT <span className="text-[#e0002a]">ME</span>
              </h2>

              {/* Bio Paragraph */}
              <p className="text-base sm:text-lg text-[#b0b0b0] font-normal leading-relaxed">
                I&apos;m <span className="text-white font-semibold">Maruthi</span>, a Full-Stack and AI Engineer passionate about building impactful products. I enjoy working at the intersection of modern web technologies and artificial intelligence, turning complex problems into elegant, user-centric solutions.
              </p>

              <p className="text-sm sm:text-base text-[#8e8e8e] leading-relaxed">
                Specialized in architecting high-throughput voice processing pipelines, semantic vector retrieval engines, and production-ready microservices that bridge complex AI backends with frictionless frontend interfaces.
              </p>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href="#experience"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 hover:border-[#c40024] bg-white/[0.02] hover:bg-[#c40024]/15 text-white text-xs font-mono font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(196,0,36,0.35)]"
                >
                  <span>MY JOURNEY</span>
                  <ArrowRight className="w-4 h-4 text-[#c40024] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Portrait Column (5 cols) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#151515] to-[#0a0a0a] p-2 group shadow-2xl">
                {/* Glowing red back rim light */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-tr from-[#c40024]/30 via-transparent to-[#e0002a]/20 opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                />

                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#0e0e0e] flex items-center justify-center">
                  {/* Photo or Styled Avatar Backdrop */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c40024]/20 via-[#0a0a0a] to-[#050505]" />
                  
                  {/* Subject Silhouette / Photo Container */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-[#c40024]/60 p-1 shadow-[0_0_30px_rgba(196,0,36,0.35)] mb-4 overflow-hidden bg-[#1a1a1a]">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#2a2a2a] via-[#151515] to-[#0a0a0a] flex items-center justify-center text-3xl font-black text-white font-[family-name:var(--font-bebas)]">
                        ATM
                      </div>
                    </div>
                    <span className="text-lg font-bold text-white tracking-wider font-[family-name:var(--font-oswald)] uppercase">
                      Adhul Thiruven Maruthi
                    </span>
                    <span className="text-xs text-[#c40024] font-mono tracking-widest uppercase mt-1">
                      Full-Stack &amp; AI Engineer
                    </span>
                  </div>

                  {/* Red bottom accent border */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#e0002a] to-transparent" />
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
