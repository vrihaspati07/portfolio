"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for trailing cursor
  const springConfig = { stiffness: 400, damping: 28, mass: 0.4 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable cursor on touch devices
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    setTimeout(() => {
      setEnabled(true);
    }, 0);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Event delegation to catch hover states on all current & future interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .interactive-card, [data-interactive="true"]'
      );
      if (interactive) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .interactive-card, [data-interactive="true"]'
      );
      if (interactive) {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      {/* Outer ring cursor - smoothed with spring dynamics */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--accent)] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          boxShadow: isHovered ? "0 0 16px var(--accent)" : "none",
          backgroundColor: isHovered ? "var(--accent-soft)" : "transparent",
          borderColor: isHovered ? "var(--accent)" : "rgba(99, 102, 241, 0.4)",
          scale: isHovered ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      />
      {/* Inner dot cursor - direct position tracker (instant snap) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[var(--accent)] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          x: mouseX,
          y: mouseY,
          scale: isHovered ? 0.5 : 1,
        }}
      />
    </>
  );
}
