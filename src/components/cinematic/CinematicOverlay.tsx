"use client";

import React, { useEffect, useRef } from "react";

interface CinematicOverlayProps {
  className?: string;
}

const GLOW_EASE = 0.05; // Smooth lag behind mouse cursor

export function CinematicOverlay({ className = "" }: CinematicOverlayProps) {
  const glowRef = useRef<HTMLDivElement>(null);
  const targetXRef = useRef<number>(50);
  const targetYRef = useRef<number>(50);
  const currentXRef = useRef<number>(50);
  const currentYRef = useRef<number>(50);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const innerW = window.innerWidth || 1;
      const innerH = window.innerHeight || 1;
      targetXRef.current = (e.clientX / innerW) * 100;
      targetYRef.current = (e.clientY / innerH) * 100;
    };

    let animationFrameId: number;

    const animateGlow = () => {
      // Smoothly interpolate glow position to lag slightly behind the cursor
      currentXRef.current +=
        (targetXRef.current - currentXRef.current) * GLOW_EASE;
      currentYRef.current +=
        (targetYRef.current - currentYRef.current) * GLOW_EASE;

      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(circle 480px at ${currentXRef.current.toFixed(
          2
        )}% ${currentYRef.current.toFixed(
          2
        )}%, rgba(196, 0, 36, 0.09) 0%, rgba(196, 0, 36, 0.02) 32%, transparent 60%)`;
      }

      animationFrameId = requestAnimationFrame(animateGlow);
    };

    animationFrameId = requestAnimationFrame(animateGlow);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 pointer-events-none select-none overflow-hidden ${className}`}
      style={{ zIndex: 10 }}
    >
      {/* 1. Cinematic Vignette: Leaves the center clear to preserve subject visibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 45%, rgba(3, 3, 3, 0.35) 80%, rgba(3, 3, 3, 0.8) 100%)",
        }}
      />

      {/* 2. Soft Red Cursor Glow: Interpolated to lag smoothly behind cursor */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          mixBlendMode: "screen",
          background:
            "radial-gradient(circle 480px at 50% 50%, rgba(196, 0, 36, 0.06) 0%, transparent 55%)",
        }}
      />

      {/* 3. Extremely Subtle Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0, 0, 0, 0.4) 2px, rgba(0, 0, 0, 0.4) 3px)",
        }}
      />

      {/* 4. Film Grain: Subtle procedural texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}

export default CinematicOverlay;
