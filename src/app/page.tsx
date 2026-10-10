import CinematicVideo from "@/components/cinematic/CinematicVideo";
import CinematicOverlay from "@/components/cinematic/CinematicOverlay";
import CinematicCursorGlow from "@/components/cinematic/CinematicCursorGlow";
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
    <div className="portfolio-world">
      {/* ── Cinematic Layer ──────────────────────────────────────────────────── */}
      {/* Fixed behind the entire portfolio world. ONE video element only.      */}
      {/* position: fixed; inset: 0; z-index: 0                                 */}
      <CinematicVideo src="/video/portfolio-background.mp4" />
      <CinematicOverlay />
      <CinematicCursorGlow />

      {/* ── Navigation ──────────────────────────────────────────────────────── */}
      <Navbar />

      {/* ── Portfolio Content ────────────────────────────────────────────────── */}
      {/*
        Sections have semi-transparent / translucent backgrounds (rgba).
        The cinematic video remains visually present throughout the page
        as content scrolls over it — this IS the intended experience.
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
    </div>
  );
}
