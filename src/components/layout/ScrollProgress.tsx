"use client";

import React, { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (!barRef.current) return;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollHeight > 0
          ? Math.min(1, Math.max(0, window.scrollY / scrollHeight))
          : 0;

      barRef.current.style.transform = `scaleX(${progress})`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] z-50 pointer-events-none bg-transparent"
    >
      <div
        ref={barRef}
        className="h-full w-full bg-[#c40024] origin-left will-change-transform"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}

export default ScrollProgress;
