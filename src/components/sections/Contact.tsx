"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Copy, Check, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const email = "thiruvenmaruthi@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Maruthi"
      className="relative z-20 w-full py-28 sm:py-36 md:py-44 px-6 sm:px-12 lg:px-20 overflow-hidden select-none"
    >
      <div className="max-w-[1200px] mx-auto text-center space-y-8 sm:space-y-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono tracking-[0.25em] text-[#e0002a] uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#e0002a]" />
          <span>07 / GET IN TOUCH</span>
        </motion.div>

        {/* Big Impact Headline */}
        <motion.h2
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-[family-name:var(--font-bebas)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight text-white leading-none"
        >
          LET&apos;S BUILD <span className="text-[#e0002a]">TOGETHER.</span>
        </motion.h2>

        {/* Short, direct message */}
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-[#a3a3a3] max-w-2xl mx-auto leading-relaxed font-normal"
        >
          I&apos;m always interested in hearing about new opportunities, AI systems development, or ambitious projects. My inbox is always open.
        </motion.p>

        {/* Main Action: Big Direct Email Pill with Copy */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-4"
        >
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-[#c40024] hover:bg-[#e0002a] text-white text-xs sm:text-sm font-mono font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(224,0,42,0.45)]"
          >
            <Mail className="w-4 h-4 text-white" />
            <span>SAY HELLO</span>
            <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/15 hover:border-[#c40024] bg-white/[0.03] hover:bg-[#c40024]/10 text-[#d0d0d0] hover:text-white text-xs font-mono tracking-[0.15em] uppercase transition-all duration-300"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">COPIED</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#e0002a]" />
                <span>COPY EMAIL</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Clean, Minimal Social Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-[#888]"
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5 uppercase tracking-widest"
          >
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#e0002a]" />
          </a>

          <span className="text-white/10">•</span>

          <a
            href="https://github.com/Maruthi0302"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5 uppercase tracking-widest"
          >
            <span>GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#e0002a]" />
          </a>

          <span className="text-white/10">•</span>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5 uppercase tracking-widest"
          >
            <span>TWITTER</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#e0002a]" />
          </a>

          <span className="text-white/10">•</span>

          <a
            href={SITE_CONFIG.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5 uppercase tracking-widest"
          >
            <span>RESUME</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#e0002a]" />
          </a>
        </motion.div>

        {/* Minimal Footer Signature */}
        <div className="pt-16 sm:pt-20 border-t border-white/5 text-[11px] font-mono text-[#555] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Adhul Thiruven Maruthi</p>
          <p className="text-[#444]">ENGINEERING &bull; DESIGN &bull; SYSTEMS</p>
        </div>

      </div>
    </section>
  );
}

export default Contact;
