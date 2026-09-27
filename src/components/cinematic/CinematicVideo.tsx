"use client";

import React, { useEffect, useRef } from "react";

// ==========================================
// CINEMATIC TUNING CONSTANTS
// ==========================================
// Lower VIDEO_EASE = slower, more cinematic follow. Do NOT go above 0.04.
const VIDEO_EASE = 0.028;
const PARALLAX_EASE = 0.035;
const DEAD_ZONE_RADIUS = 0.06;
const MIN_VIDEO_PROGRESS = 0.04;
const MAX_VIDEO_PROGRESS = 0.93;
const MAX_TRANSLATE_X = 10;
const MAX_TRANSLATE_Y = 7;
const MAX_ROTATE_X = 0.8;
const MAX_ROTATE_Y = 0.8;
const CONTAINER_SCALE = 1.06;

// ── THE CRITICAL FIX ─────────────────────────────────────────────────────────
// Only write to video.currentTime when the change exceeds this many seconds.
// At 60fps with a low ease, currentTime moves ~0.002s per frame — far below
// what the decoder can handle. This threshold batches changes into meaningful
// seeks, eliminating the stutter/stuttering caused by decoder thrashing.
const SEEK_THRESHOLD = 0.04;

interface CinematicVideoProps {
  src?: string;
  className?: string;
}

export function CinematicVideo({
  src = "/video/portfolio-background.mp4",
  className = "",
}: CinematicVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isReadyRef = useRef<boolean>(false);
  const durationRef = useRef<number>(0);

  // Internal smooth timeline (the value we LERP every frame)
  const smoothTimeRef = useRef<number>(0);
  // What the user's input is asking for
  const targetTimeRef = useRef<number>(0);
  // The last time we actually wrote to video.currentTime
  const lastSeekRef = useRef<number>(0);

  const mouseProgressRef = useRef<number>(0.5);
  const scrollProgressRef = useRef<number>(0);

  // Parallax
  const tPX = useRef<number>(0);
  const tPY = useRef<number>(0);
  const cPX = useRef<number>(0);
  const cPY = useRef<number>(0);
  const tRX = useRef<number>(0);
  const tRY = useRef<number>(0);
  const cRX = useRef<number>(0);
  const cRY = useRef<number>(0);

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
    if (!video) return;

    const computeTarget = () => {
      if (!isReadyRef.current || durationRef.current <= 0) return;
      const mouse =
        MIN_VIDEO_PROGRESS +
        mouseProgressRef.current * (MAX_VIDEO_PROGRESS - MIN_VIDEO_PROGRESS);
      const scroll =
        MIN_VIDEO_PROGRESS +
        scrollProgressRef.current * (MAX_VIDEO_PROGRESS - MIN_VIDEO_PROGRESS);
      targetTimeRef.current =
        Math.min(
          MAX_VIDEO_PROGRESS,
          Math.max(MIN_VIDEO_PROGRESS, mouse * 0.88 + scroll * 0.12)
        ) * durationRef.current;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (reducedMotionRef.current) return;
      const W = window.innerWidth || 1;
      const H = window.innerHeight || 1;

      const rawX = e.clientX / W;
      const diff = rawX - 0.5;
      const abs = Math.abs(diff);
      let stabilised = 0.5;
      if (abs > DEAD_ZONE_RADIUS) {
        const sign = Math.sign(diff);
        const remap = (abs - DEAD_ZONE_RADIUS) / (0.5 - DEAD_ZONE_RADIUS);
        stabilised = 0.5 + sign * Math.min(0.5, remap * 0.5);
      }
      mouseProgressRef.current = stabilised;

      const cx = (e.clientX / W) * 2 - 1;
      const cy = (e.clientY / H) * 2 - 1;
      tPX.current = cx * -MAX_TRANSLATE_X;
      tPY.current = cy * -MAX_TRANSLATE_Y;
      tRX.current = cy * -MAX_ROTATE_X;
      tRY.current = cx * MAX_ROTATE_Y;

      computeTarget();
    };

    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgressRef.current =
        docH > 0 ? Math.min(1, Math.max(0, window.scrollY / docH)) : 0;
      computeTarget();
    };

    const onMetadata = () => {
      video.pause();
      const dur = video.duration || 1;
      durationRef.current = dur;

      const initTime =
        dur * (MIN_VIDEO_PROGRESS + 0.5 * (MAX_VIDEO_PROGRESS - MIN_VIDEO_PROGRESS));

      try { video.currentTime = initTime; } catch { /* noop */ }

      smoothTimeRef.current = initTime;
      targetTimeRef.current = initTime;
      lastSeekRef.current = initTime;
      isReadyRef.current = true;
      computeTarget();
    };

    video.addEventListener("loadedmetadata", onMetadata);
    if (video.readyState >= 1) onMetadata();

    const animate = () => {
      if (isReadyRef.current && video && !reducedMotionRef.current) {
        // 1. Smooth the internal time value toward the target
        smoothTimeRef.current +=
          (targetTimeRef.current - smoothTimeRef.current) * VIDEO_EASE;

        // 2. Only actually seek the decoder when the change is large enough.
        //    This is the core fix for stutter: avoid 60 seeks/s.
        if (Math.abs(smoothTimeRef.current - lastSeekRef.current) > SEEK_THRESHOLD) {
          try {
            video.currentTime = smoothTimeRef.current;
            lastSeekRef.current = smoothTimeRef.current;
          } catch { /* video not ready, skip */ }
        }

        // 3. Parallax — slow, weighted drift
        if (containerRef.current) {
          cPX.current += (tPX.current - cPX.current) * PARALLAX_EASE;
          cPY.current += (tPY.current - cPY.current) * PARALLAX_EASE;
          cRX.current += (tRX.current - cRX.current) * PARALLAX_EASE;
          cRY.current += (tRY.current - cRY.current) * PARALLAX_EASE;

          containerRef.current.style.transform =
            `scale(${CONTAINER_SCALE}) ` +
            `translate3d(${cPX.current.toFixed(2)}px,${cPY.current.toFixed(2)}px,0) ` +
            `rotateX(${cRX.current.toFixed(3)}deg) rotateY(${cRY.current.toFixed(3)}deg)`;
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    onScroll();
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onMQChange);
      video.removeEventListener("loadedmetadata", onMetadata);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`fixed inset-0 w-screen h-screen overflow-hidden select-none pointer-events-none ${className}`}
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
        playsInline
        muted
        preload="auto"
        className="w-full h-full object-cover pointer-events-none select-none"
        style={{ opacity: 1, visibility: "visible" }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default CinematicVideo;
