"use client";

import React, { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Copy, Check, ArrowUpRight } from "lucide-react";
import { SITE } from "@/data/site";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select text
    }
  };

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

  return (
    <section
      id="contact"
      aria-label="Contact"
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
          07
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
          <div className="space-y-6 max-w-3xl">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <span className="flex items-center text-[#c40024]">
                <span className="w-8 sm:w-10 h-[1px] bg-[#c40024]" />
                <span className="text-[10px] -ml-1">▸</span>
              </span>
              <p className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.24em] uppercase text-[#a3a3a3]">
                07 / CONTACT
              </p>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-[family-name:var(--font-bebas)] text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight uppercase leading-[0.92]"
            >
              <span className="block text-white">LET&apos;S BUILD</span>
              <span className="block bg-gradient-to-r from-white via-[#f0f0f0] to-[#c40024] bg-clip-text text-transparent">
                SOMETHING
                <span
                  className="text-[#e0002a] inline-block ml-0.5"
                  style={{ textShadow: "0 0 25px rgba(224, 0, 42, 1), 0 0 50px rgba(224, 0, 42, 0.6)" }}
                >
                  .
                </span>
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base text-[#a3a3a3] leading-relaxed max-w-xl"
            >
              Open to engineering roles in full-stack development, backend systems, and AI-powered applications.
              Reach out directly.
            </motion.p>
          </div>

          {/* Contact grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Direct contact */}
            <motion.div variants={itemVariants} className="space-y-6">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#737373]">
                DIRECT CONTACT
              </span>

              {/* Email */}
              <div className="group flex items-center justify-between p-6 rounded bg-[#090909] border border-white/5 hover:border-[#c40024]/30 transition-colors duration-300">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373]">EMAIL</span>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="block text-base sm:text-lg text-white font-mono hover:text-[#c40024] transition-colors break-all"
                  >
                    {SITE.email}
                  </a>
                </div>
                <button
                  onClick={copyEmail}
                  aria-label={copied ? "Copied!" : "Copy email address"}
                  className="ml-4 p-2.5 rounded border border-white/10 hover:border-[#c40024]/50 text-[#737373] hover:text-[#c40024] transition-all duration-200 shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c40024]"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-6 rounded bg-[#090909] border border-white/5 hover:border-[#c40024]/30 transition-colors duration-300">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373]">PHONE</span>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="block text-base sm:text-lg text-white font-mono hover:text-[#c40024] transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>

              {/* Resume */}
              <a
                href={SITE.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between w-full p-6 rounded bg-[#090909] border border-white/5 hover:border-[#c40024]/40 transition-all duration-300"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#737373]">RESUME</span>
                  <span className="block text-base text-white group-hover:text-[#c40024] transition-colors font-mono">
                    DOWNLOAD PDF
                  </span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#737373] group-hover:text-[#c40024] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
            </motion.div>

            {/* Right: Social + Final statement */}
            <motion.div variants={itemVariants} className="space-y-8 flex flex-col justify-between">
              {/* Social links */}
              <div className="space-y-5">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#737373]">
                  PROFILES
                </span>
                <div className="space-y-3">
                  {SITE.social.github ? (
                    <a
                      href={SITE.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-5 rounded bg-[#090909] border border-white/5 hover:border-[#c40024]/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <GithubIcon className="w-5 h-5 text-[#737373] group-hover:text-white transition-colors" />
                        <span className="text-sm font-mono text-[#a3a3a3] group-hover:text-white transition-colors">
                          GitHub
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#555] group-hover:text-[#c40024] transition-colors" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 p-5 rounded bg-[#090909] border border-white/5 opacity-40">
                      <GithubIcon className="w-5 h-5 text-[#737373]" />
                      <span className="text-sm font-mono text-[#737373]">GitHub</span>
                      <span className="ml-auto text-[10px] font-mono text-[#555] tracking-wider">
                        Configure in src/data/site.ts
                      </span>
                    </div>
                  )}

                  {SITE.social.linkedin ? (
                    <a
                      href={SITE.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-5 rounded bg-[#090909] border border-white/5 hover:border-[#c40024]/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <LinkedinIcon className="w-5 h-5 text-[#737373] group-hover:text-white transition-colors" />
                        <span className="text-sm font-mono text-[#a3a3a3] group-hover:text-white transition-colors">
                          LinkedIn
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#555] group-hover:text-[#c40024] transition-colors" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 p-5 rounded bg-[#090909] border border-white/5 opacity-40">
                      <LinkedinIcon className="w-5 h-5 text-[#737373]" />
                      <span className="text-sm font-mono text-[#737373]">LinkedIn</span>
                      <span className="ml-auto text-[10px] font-mono text-[#555] tracking-wider">
                        Configure in src/data/site.ts
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Closing editorial statement */}
              <div className="p-6 rounded bg-[#090909]/60 border border-white/5 space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#c40024]">
                  AVAILABILITY
                </span>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">
                  Currently open to full-time software engineering and AI engineering roles.
                  Interested in teams building real systems at the intersection of backend infrastructure and intelligent applications.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Footer stripe */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#555]"
          >
            <span className="tracking-widest uppercase">
              ADHUL THIRUVEN MARUTHI — {new Date().getFullYear()}
            </span>
            <span className="tracking-wider uppercase">FULL-STACK & AI ENGINEER</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
