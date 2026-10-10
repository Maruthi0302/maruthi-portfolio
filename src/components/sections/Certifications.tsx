"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Award, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, Trophy, FileText } from "lucide-react";

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge?: string;
  credentialCode: string;
  description: string;
  isFeatured?: boolean;
}

const CERTIFICATES: CertificateItem[] = [
  {
    id: "ieee-hackathon",
    title: "IEEE Research & Hackathon Winner",
    issuer: "IEEE / Sustainability Hackathon",
    date: "2024 – 2025",
    badge: "🏆 HACKATHON WINNER",
    credentialCode: "IEEE-VOICE-RAG-2025",
    description:
      "Co-authored research on low-latency voice AI retrieval workflows submitted to IEEE, and won sustainability hackathon recognition with The Giving Plate.",
    isFeatured: true,
  },
  {
    id: "cs50-python",
    title: "CS50's Programming with Python",
    issuer: "HarvardX",
    date: "July 2025",
    badge: "Verified Certificate",
    credentialCode: "CS50P-HARVARDX-2025",
    description:
      "Comprehensive certification in algorithmic programming, object-oriented design, unit testing, and computational problem solving using Python.",
    isFeatured: false,
  },
  {
    id: "nptel-cloud",
    title: "Cloud Computing Architecture",
    issuer: "NPTEL",
    date: "November 2024",
    badge: "Elite Silver Certified",
    credentialCode: "NPTEL-CC-SILVER-2024",
    description:
      "Advanced distributed computing systems, virtualization, cloud resource management, container orchestration, and serverless architectures.",
    isFeatured: false,
  },
  {
    id: "udemy-python",
    title: "Complete Python Developer: Zero to Mastery",
    issuer: "Udemy",
    date: "August 2023",
    badge: "Professional Mastery",
    credentialCode: "UDM-PY-ZTM-2023",
    description:
      "Full-stack Python programming, asynchronous task queues, web scraping, automation scripts, and database integrations.",
    isFeatured: false,
  },
];

export function Certifications() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % CERTIFICATES.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length);
  };

  return (
    <section
      id="certifications"
      aria-label="Certifications and Achievements"
      className="relative z-20 w-full py-20 sm:py-28 px-4 sm:px-8 lg:px-16"
    >
      <div className="max-w-[1400px] mx-auto">
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
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-[2px] bg-[#c40024]" />
                <p className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-[#c40024]">
                  06 / CERTIFICATIONS
                </p>
              </div>
              <h2 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
                HONORS &amp; <span className="text-[#e0002a]">CERTIFICATIONS</span>
              </h2>
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                aria-label="Previous Certificate"
                className="p-3 rounded-full bg-white/[0.04] hover:bg-[#c40024]/20 border border-white/10 hover:border-[#c40024] text-white transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Certificate"
                className="p-3 rounded-full bg-white/[0.04] hover:bg-[#c40024]/20 border border-white/10 hover:border-[#c40024] text-white transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 3D Perspective Card Carousel */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {CERTIFICATES.slice(0, 3).map((cert, idx) => {
              const isCenter = idx === 0 || cert.isFeatured;
              return (
                <div
                  key={cert.id}
                  className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 ${
                    isCenter
                      ? "bg-gradient-to-b from-[#181818] to-[#0d0d0d] border-2 border-[#e0002a] shadow-[0_0_40px_rgba(224,0,42,0.3)] md:scale-105 z-10"
                      : "bg-[#0c0c0c] border border-white/10 opacity-90 hover:opacity-100"
                  }`}
                  style={{ minHeight: "360px" }}
                >
                  <div className="space-y-4">
                    {/* Badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                          isCenter
                            ? "bg-[#e0002a] text-white shadow-[0_0_15px_#e0002a]"
                            : "bg-white/[0.05] text-[#a0a0a0] border border-white/10"
                        }`}
                      >
                        {cert.badge || "Verified"}
                      </span>
                      <Award className={`w-6 h-6 ${isCenter ? "text-[#e0002a]" : "text-[#777]"}`} />
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-oswald)] tracking-wide">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#e0002a]">
                        {cert.issuer}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#999] leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Footer info */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#777]">
                    <span>ID: {cert.credentialCode}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Pagination Indicator Dots */}
          <div className="flex items-center justify-center gap-2 pt-8">
            {CERTIFICATES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-8 bg-[#e0002a] shadow-[0_0_10px_#e0002a]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Certifications;
