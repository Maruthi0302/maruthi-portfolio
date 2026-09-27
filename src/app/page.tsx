import CinematicVideo from "@/components/cinematic/CinematicVideo";
import CinematicOverlay from "@/components/cinematic/CinematicOverlay";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import ScrollProgress from "@/components/layout/ScrollProgress";

export default function Home() {
  return (
    <>
      {/* ── Cinematic World ─────────────────────────────────────────────────── */}
      {/* Fixed behind everything. One video element, never duplicated. */}
      <CinematicVideo src="/video/portfolio-background.mp4" />
      <CinematicOverlay />

      {/* ── Navigation ──────────────────────────────────────────────────────── */}
      <Navbar />

      {/* ── Scroll Content ──────────────────────────────────────────────────── */}
      {/*
        The Hero sits on top of the cinematic video (transparent bg).
        All subsequent sections use solid dark backgrounds (#030303 / #050505)
        so the video naturally only shows through the hero, creating an
        intentional cinematic-to-editorial scene transition.
      */}
      <main className="relative z-20 text-[#f5f5f5]">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* ── Scroll Progress Indicator ──────────────────────────────────────── */}
      <ScrollProgress />
    </>
  );
}
