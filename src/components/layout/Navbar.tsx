"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const NAV_LINKS = [
  { label: "WORK", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    if (mobileOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out select-none ${
        scrolled
          ? "bg-[#030303]/80 backdrop-blur-md border-b border-white/5 py-5 shadow-2xl"
          : "bg-transparent py-7 sm:py-8"
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="max-w-[1700px] mx-auto px-6 sm:px-12 lg:px-20 flex items-center justify-between"
      >
        {/* Left: Brand Identity */}
        <Link
          href="#hero"
          className="group flex items-center text-sm sm:text-base font-black tracking-[0.2em] uppercase text-white transition-opacity hover:opacity-90"
        >
          <span>MARUTHI</span>
          <span className="text-[#c40024] font-black ml-0.5">.</span>
        </Link>

        {/* Right: Desktop Links + Resume Pill Button */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-[11px] font-medium tracking-[0.22em] uppercase text-[#9e9e9e]">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-white py-1 focus-visible:outline-none focus-visible:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Pill Resume Button */}
          <a
            href={SITE_CONFIG.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border border-white/25 hover:border-[#c40024] bg-white/[0.03] hover:bg-[#c40024]/10 text-white text-[11px] font-medium tracking-[0.18em] uppercase transition-all duration-200"
          >
            <span>RESUME</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-[#9e9e9e] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c40024] rounded transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[68px] left-0 right-0 bg-[#090909]/95 backdrop-blur-2xl border-b border-white/10 px-8 py-6 shadow-2xl z-40"
          >
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-xs font-semibold tracking-[0.25em] uppercase text-[#9e9e9e] hover:text-white py-1.5 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={SITE_CONFIG.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/20 text-white text-xs tracking-widest uppercase font-medium"
                >
                  <span>RESUME</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
