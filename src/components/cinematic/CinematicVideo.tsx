"use client";

import React, { useEffect, useRef } from "react";

// ==========================================
// CINEMATIC TUNING CONSTANTS
// ==========================================
const PARALLAX_EASE = 0.05;
const MAX_TRANSLATE_X = 14;
const MAX_TRANSLATE_Y = 10;
const MAX_ROTATE_X = 0.9;
const MAX_ROTATE_Y = 0.9;
const CONTAINER_SCALE = 1.06;

interface CinematicVideoProps {
  src?: string;
  className?: string;
}

/**
 * CinematicVideo:
 * High-performance ambient cinematic background.
 * Plays continuously at native 60fps/120fps with zero decoder seek thrashing.
 * Enhanced with subtle 3D cursor perspective tilt and smooth scroll depth parallax.
 */
export function CinematicVideo({
  src = "/video/portfolio-background.mp4",
  className = "",
}: CinematicVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Parallax target and current values
  const tPX = useRef<number>(0);
  const tPY = useRef<number>(0);
  const cPX = useRef<number>(0);
  const cPY = useRef<number>(0);
  const tRX = useRef<number>(0);
  const tRY = useRef<number>(0);
  const cRX = useRef<number>(0);
  const cRY = useRef<number>(0);

  const scrollProgressRef = useRef<number>(0);
  const reducedMotionRef = useRef<boolean>(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;

    const onMQChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
      if (e.matches && containerRef.current) {
        containerRef.current.style.transform = `scale(${CONTAINER_SCALE})`;
      }
    };
    mq.addEventListener("change", onMQChange);

    const video = videoRef.current;
    if (video) {
      // Ensure smooth ambient playback
      video.playbackRate = 0.9; // Subtle cinematic pace
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented (browser policy), mute and retry
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      if (reducedMotionRef.current) return;
      const W = window.innerWidth || 1;
      const H = window.innerHeight || 1;



      const cx = (e.clientX / W) * 2 - 1;
      const cy = (e.clientY / H) * 2 - 1;
      tPX.current = cx * -MAX_TRANSLATE_X;
      tPY.current = cy * -MAX_TRANSLATE_Y;
      tRX.current = cy * -MAX_ROTATE_X;
      tRY.current = cx * MAX_ROTATE_Y;
    };

    const updateScrollProgress = () => {
      const lenis = (window as unknown as { __lenis?: { progress?: number } }).__lenis;
      if (lenis && typeof lenis.progress === "number") {
        scrollProgressRef.current = Math.min(1, Math.max(0, lenis.progress));
      } else {
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgressRef.current =
          docH > 0 ? Math.min(1, Math.max(0, window.scrollY / docH)) : 0;
      }
    };

    const animate = () => {
      if (!reducedMotionRef.current && containerRef.current) {
        // Multi-plane 3D Parallax interpolation
        cPX.current += (tPX.current - cPX.current) * PARALLAX_EASE;
        cPY.current += (tPY.current - cPY.current) * PARALLAX_EASE;
        cRX.current += (tRX.current - cRX.current) * PARALLAX_EASE;
        cRY.current += (tRY.current - cRY.current) * PARALLAX_EASE;

        // Subtle vertical scroll parallax depth (up to -40px across page)
        const scrollParallaxY = (scrollProgressRef.current - 0.5) * -40;
        const totalY = cPY.current + scrollParallaxY;

        containerRef.current.style.transform =
          `scale(${CONTAINER_SCALE}) ` +
          `translate3d(${cPX.current.toFixed(2)}px,${totalY.toFixed(2)}px,0) ` +
          `rotateX(${cRX.current.toFixed(3)}deg) rotateY(${cRY.current.toFixed(3)}deg)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    updateScrollProgress();
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    const lenis = (window as unknown as { __lenis?: { on?: (event: string, cb: () => void) => void; off?: (event: string, cb: () => void) => void } }).__lenis;
    if (lenis && typeof lenis.on === "function") {
      lenis.on("scroll", updateScrollProgress);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", updateScrollProgress);
      if (lenis && typeof lenis.off === "function") {
        lenis.off("scroll", updateScrollProgress);
      }
      mq.removeEventListener("change", onMQChange);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`fixed inset-0 w-screen h-screen overflow-hidden select-none pointer-events-none will-change-transform ${className}`}
      style={{
        zIndex: 0,
        perspective: "1200px",
        transformStyle: "preserve-3d",
        transform: `scale(${CONTAINER_SCALE})`,
      }}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover pointer-events-none select-none will-change-transform"
        style={{
          opacity: 0.9,
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default CinematicVideo;
