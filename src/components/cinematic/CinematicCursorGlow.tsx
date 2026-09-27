"use client";

import React, { useSyncExternalStore } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

const emptySubscribe = () => () => {};

export function CinematicCursorGlow() {
  const { x, y } = useMousePosition();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed pointer-events-none -z-5 transition-transform duration-300 ease-out"
      style={{
        transform: `translate3d(${x - 300}px, ${y - 300}px, 0)`,
        width: 600,
        height: 600,
        background:
          "radial-gradient(circle, rgba(196, 0, 36, 0.08) 0%, rgba(196, 0, 36, 0.02) 40%, rgba(3, 3, 3, 0) 70%)",
        borderRadius: "50%",
        filter: "blur(40px)",
      }}
    />
  );
}

export default CinematicCursorGlow;
