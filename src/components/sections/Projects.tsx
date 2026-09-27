"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function Projects() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: shouldReduceMotion ? 0 : 0.18 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const watermarkVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.4, ease: "easeOut" } },
  };

  return (
    <section
      id="projects"
      aria-label="Selected Projects"
      className="relative z-20 w-full bg-[#030303] text-[#f5f5f5] py-28 sm:py-36 md:py-44 px-6 sm:px-12 lg:px-20 overflow-hidden border-t border-white/5"
    >
      {/* Watermark */}
      <motion.div
        aria-hidden="true"
        variants={watermarkVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute top-8 right-2 sm:right-8 pointer-events-none select-none z-0"
      >
        <span
          className="block font-[family-name:var(--font-bebas)] text-[28vw] sm:text-[20vw] md:text-[15vw] leading-none tracking-tight text-transparent"
          style={{ WebkitTextStroke: "1.5px rgba(220, 20, 45, 0.18)" }}
        >
          04
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
                04 / SELECTED WORK
              </p>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-[family-name:var(--font-bebas)] text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tight uppercase leading-[0.92]"
            >
              <span className="block text-white">SYSTEMS</span>
              <span className="block bg-gradient-to-r from-white via-[#f0f0f0] to-[#c40024] bg-clip-text text-transparent">
                I&apos;VE BUILT
                <span
                  className="text-[#e0002a] inline-block ml-0.5"
                  style={{ textShadow: "0 0 25px rgba(224, 0, 42, 1), 0 0 50px rgba(224, 0, 42, 0.6)" }}
                >
                  .
                </span>
              </span>
            </motion.h2>
          </div>

          {/* Project Cards */}
          <div className="space-y-8 lg:space-y-10">
            {projects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} variants={itemVariants} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
  variants: Variants;
}

function ProjectCard({ project, variants }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    cardRef.current.style.transform = `perspective(1000px) rotateY(${x * 3}deg) rotateX(${-y * 2}deg) scale(1.01)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <motion.div variants={variants}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded bg-[#090909] border border-white/5 hover:border-[#c40024]/30 transition-all duration-300 overflow-hidden"
        style={{ transition: "transform 0.25s ease, border-color 0.3s ease" }}
      >
        {/* Top laser beam */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c40024]/80 to-transparent" />

        <div className="p-7 sm:p-9 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left: Number + Title + Description */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-[family-name:var(--font-bebas)] text-6xl sm:text-7xl leading-none text-transparent"
                    style={{ WebkitTextStroke: "1px rgba(196, 0, 36, 0.5)" }}
                  >
                    {project.number}
                  </span>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-[#c40024]/30 to-transparent mt-4" />
                </div>

                <h3 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white uppercase">
                  {project.title}
                </h3>

                <p className="text-sm text-[#a3a3a3] leading-relaxed">{project.description}</p>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-4 pt-2">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-[#8e8e8e] hover:text-white transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>SOURCE</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-[#555]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>PRIVATE</span>
                  </span>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono tracking-[0.2em] uppercase text-[#c40024] hover:text-[#e0002a] transition-colors"
                  >
                    <span>LIVE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Right: Tech Stack + Highlights + Challenge */}
            <div className="lg:col-span-7 space-y-7">
              {/* Tech stack */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#737373]">
                  TECHNOLOGY STACK
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded border border-white/8 bg-white/[0.03] text-[#a3a3a3]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#737373]">
                  KEY CAPABILITIES
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#a3a3a3]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c40024]/70 mt-[6px] shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical challenge */}
              <div className="p-5 rounded bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#c40024]">
                  TECHNICAL CHALLENGE
                </span>
                <p className="text-sm text-[#a3a3a3] leading-relaxed">{project.challenge}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
