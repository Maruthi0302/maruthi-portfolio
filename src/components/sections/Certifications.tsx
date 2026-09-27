"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import { X } from "lucide-react";
import { certifications, achievements } from "@/data/certifications";

export function Certifications() {
  const shouldReduceMotion = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(null);
  const openCert = certifications.find((c) => c.id === openId) ?? null;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 },
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

  return (
    <>
      <section
        id="certifications"
        aria-label="Certifications"
        className="relative z-20 w-full bg-[#030303] text-[#f5f5f5] py-28 sm:py-36 md:py-44 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-white/5"
      >
        {/* Watermark */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="absolute top-8 right-2 sm:right-8 pointer-events-none select-none z-0"
        >
          <span
            className="block font-[family-name:var(--font-bebas)] text-[28vw] sm:text-[20vw] md:text-[14vw] leading-none tracking-tight text-transparent"
            style={{ WebkitTextStroke: "1.5px rgba(220, 20, 45, 0.15)" }}
          >
            06
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
                  06 / CERTIFICATIONS
                </p>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="font-[family-name:var(--font-bebas)] text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight uppercase leading-[0.92]"
              >
                <span className="block text-white">VERIFIED</span>
                <span className="block bg-gradient-to-r from-white via-[#f0f0f0] to-[#c40024] bg-clip-text text-transparent">
                  CREDENTIALS
                  <span
                    className="text-[#e0002a] inline-block ml-0.5"
                    style={{ textShadow: "0 0 25px rgba(224, 0, 42, 1), 0 0 50px rgba(224, 0, 42, 0.6)" }}
                  >
                    .
                  </span>
                </span>
              </motion.h2>
            </div>

            {/* Certification cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {certifications.map((cert, index) => (
                <motion.button
                  key={cert.id}
                  variants={itemVariants}
                  onClick={() => setOpenId(cert.id)}
                  className="group relative text-left p-7 rounded bg-[#090909] border border-white/5 hover:border-[#c40024]/40 transition-all duration-300 space-y-5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c40024]"
                >
                  {/* Top beam */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c40024]/70 to-transparent" />

                  {/* Index */}
                  <div className="flex items-center justify-between">
                    <span
                      className="font-[family-name:var(--font-bebas)] text-4xl text-transparent leading-none"
                      style={{ WebkitTextStroke: "1px rgba(196, 0, 36, 0.45)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {cert.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-[#c40024]/40 text-[#c40024]">
                        {cert.badge}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-[family-name:var(--font-oswald)] text-lg sm:text-xl font-medium uppercase tracking-wide text-white leading-tight group-hover:text-[#f5f5f5] transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-[#c40024] text-sm font-mono font-medium">{cert.issuer}</p>
                    <p className="text-[11px] font-mono text-[#737373] tracking-wider">{cert.date}</p>
                  </div>

                  {cert.credentialCode && (
                    <div className="pt-1">
                      <span className="text-[10px] font-mono text-[#555] tracking-widest">
                        ID: {cert.credentialCode}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#737373] group-hover:text-[#a3a3a3] transition-colors">
                    <span>VIEW DETAILS</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Achievements */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-white/5 space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c40024]" />
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#737373]">
                  NOTABLE ACHIEVEMENTS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {achievements.map((a) => (
                  <div
                    key={a.id}
                    className="p-6 rounded bg-[#090909] border border-white/5 space-y-3"
                  >
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#c40024]">
                      {a.label}
                    </span>
                    <p className="text-sm text-[#a3a3a3] leading-relaxed">{a.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {openCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpenId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full bg-[#090909] border border-white/10 rounded overflow-hidden p-8 space-y-6"
            >
              {/* Top beam */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c40024] to-transparent" />

              <button
                onClick={() => setOpenId(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 text-[#737373] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c40024] rounded"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#c40024]">
                  {openCert.issuer}
                </span>
                <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-medium uppercase tracking-wide text-white">
                  {openCert.title}
                </h3>
                {openCert.badge && (
                  <span className="inline-block mt-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded border border-[#c40024]/40 text-[#c40024]">
                    {openCert.badge}
                  </span>
                )}
              </div>

              <div className="h-[1px] bg-white/5" />

              <div className="space-y-3 text-sm font-mono text-[#737373]">
                <div className="flex justify-between">
                  <span className="uppercase tracking-wider text-[10px]">DATE</span>
                  <span className="text-[#a3a3a3]">{openCert.date}</span>
                </div>
                {openCert.credentialCode && (
                  <div className="flex justify-between">
                    <span className="uppercase tracking-wider text-[10px]">CREDENTIAL ID</span>
                    <span className="text-[#a3a3a3]">{openCert.credentialCode}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="uppercase tracking-wider text-[10px]">STATUS</span>
                  <span className="text-[#c40024]">VERIFIED</span>
                </div>
              </div>

              {openCert.credentialUrl && (
                <a
                  href={openCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-[#c40024] hover:text-[#e0002a] transition-colors"
                >
                  <span>VERIFY CREDENTIAL</span>
                  <span>→</span>
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Certifications;
