"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check, Send } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const CONTACT_LINKS = [
  {
    id: "email",
    label: "Email",
    value: "thiruvenmaruthi@gmail.com",
    href: "mailto:thiruvenmaruthi@gmail.com",
    display: "thiruvenmaruthi@gmail.com",
    icon: Mail,
    canCopy: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "https://linkedin.com/in/adhul-thiruven-maruthi",
    href: "https://linkedin.com",
    display: "linkedin.com/in/maruthi",
    icon: LinkedinIcon,
    canCopy: false,
  },
  {
    id: "github",
    label: "GitHub",
    value: "https://github.com/Maruthi0302",
    href: "https://github.com/Maruthi0302",
    display: "github.com/maruthi",
    icon: GithubIcon,
    canCopy: false,
  },
  {
    id: "twitter",
    label: "X / Twitter",
    value: "https://x.com",
    href: "https://x.com",
    display: "@maruthi_dev",
    icon: XIcon,
    canCopy: false,
  },
];

export function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Social Links"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Header & Bio (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-6 h-[2px] bg-[#c40024]" />
                <p className="text-xs font-mono font-medium tracking-[0.25em] uppercase text-[#c40024]">
                  07 / CONTACT
                </p>
              </div>

              <h2 className="font-[family-name:var(--font-bebas)] text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-none">
                LET&apos;S <span className="text-[#e0002a]">CONNECT</span>
              </h2>

              <p className="text-base sm:text-lg text-[#b0b0b0] leading-relaxed">
                Open to exciting engineering opportunities, AI systems development, and high-impact distributed software projects.
              </p>

              <div className="pt-2">
                <a
                  href="mailto:thiruvenmaruthi@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#c40024] hover:bg-[#e0002a] text-white text-xs font-mono font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(196,0,36,0.4)]"
                >
                  <span>START A CONVERSATION</span>
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Contact 4 Links Row (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              {CONTACT_LINKS.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="group relative flex items-center justify-between rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#c40024]/40 p-4 sm:p-5 transition-all duration-300"
                  >
                    <a
                      href={item.href}
                      target={item.id !== "email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 flex-1"
                    >
                      {/* Red Accent Square Icon Box */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] border border-white/10 group-hover:border-[#c40024] flex items-center justify-center text-[#c40024] group-hover:text-white group-hover:bg-[#c40024] transition-all duration-300 shadow-md">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div>
                        <span className="text-xs font-mono text-[#777] uppercase block tracking-wider">
                          {item.label}
                        </span>
                        <span className="text-sm sm:text-base font-semibold text-white group-hover:text-[#e0002a] transition-colors">
                          {item.display}
                        </span>
                      </div>
                    </a>

                    <div className="flex items-center gap-2 pl-2">
                      {item.canCopy && (
                        <button
                          onClick={() => handleCopy(item.value, item.id)}
                          aria-label={`Copy ${item.label}`}
                          className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/10 border border-white/5 text-[#9e9e9e] hover:text-white transition-colors"
                        >
                          {copiedId === item.id ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      )}

                      <a
                        href={item.href}
                        target={item.id !== "email" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        aria-label={`Open ${item.label}`}
                        className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-[#c40024]/20 border border-white/5 group-hover:border-[#c40024]/40 text-[#9e9e9e] group-hover:text-[#e0002a] transition-all"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
