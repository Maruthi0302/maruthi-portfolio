"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

function subscribePointerFine(callback: () => void) {
  const media = window.matchMedia("(pointer: fine)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getPointerFineSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}

export function CustomCursor() {
  const isPointerFine = useSyncExternalStore(
    subscribePointerFine,
    getPointerFineSnapshot,
    () => false
  );
  const { x, y } = useMousePosition();
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (!isPointerFine) return;

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isPointerFine]);

  if (!isPointerFine) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[100] w-1.5 h-1.5 bg-[#e0002a] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${x}px, ${y}px, 0) scale(${clicked ? 0.7 : hovered ? 1.4 : 1})`,
        }}
      />
      {/* Minimal trailing reticle */}
      <div
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[99] rounded-full border border-[#c40024]/40 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          hovered ? "w-8 h-8 border-[#e0002a]/60 bg-[#c40024]/5" : "w-5 h-5"
        }`}
        style={{
          transform: `translate3d(${x - (hovered ? 16 : 10)}px, ${y - (hovered ? 16 : 10)}px, 0) scale(${
            clicked ? 0.85 : 1
          })`,
        }}
      />
    </>
  );
}

export default CustomCursor;
