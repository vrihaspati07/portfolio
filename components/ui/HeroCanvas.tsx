"use client";

import { useEffect, useRef } from "react";

type Blob = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
};

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track window resize
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Keep dynamic color tracks synced with CSS customizer selections
    let frameCount = 0;
    let accentColor = "rgba(99, 102, 241, 0.4)";
    let accentSoftColor = "rgba(139, 92, 246, 0.3)";

    const updateColorsFromCSS = () => {
      if (typeof window === "undefined") return;
      const computed = getComputedStyle(document.documentElement);
      const hexColor = computed.getPropertyValue("--accent").trim() || "#6366F1";

      if (hexColor.startsWith("#")) {
        const hex = hexColor.replace("#", "");
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);

        accentColor = `rgba(${r}, ${g}, ${b}, 0.45)`;
        // Soft offset color swaps G & B values to create visual depth contrast
        accentSoftColor = `rgba(${g}, ${b}, ${r}, 0.35)`;
      }
    };

    // Initial load sync
    updateColorsFromCSS();

    const blobs: Blob[] = [
      {
        x: width * 0.2,
        y: height * 0.3,
        vx: 0.4,
        vy: 0.3,
        radius: Math.min(width, height) * 0.4,
        color: accentColor,
      },
      {
        x: width * 0.8,
        y: height * 0.7,
        vx: -0.3,
        vy: 0.4,
        radius: Math.min(width, height) * 0.45,
        color: accentSoftColor,
      },
      {
        x: width * 0.5,
        y: height * 0.5,
        vx: 0.25,
        vy: -0.35,
        radius: Math.min(width, height) * 0.35,
        color: accentColor,
      },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      frameCount++;
      // Sync color changes once every 30 frames (twice a second) for high performance
      if (frameCount % 30 === 0) {
        updateColorsFromCSS();
        blobs[0].color = accentColor;
        blobs[1].color = accentSoftColor;
        blobs[2].color = accentColor.replace("0.45", "0.25");
      }

      // Draw each blob
      blobs.forEach((blob) => {
        // Update positions
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce off canvas boundaries
        if (blob.x - blob.radius < 0 || blob.x + blob.radius > width) {
          blob.vx *= -1;
        }
        if (blob.y - blob.radius < 0 || blob.y + blob.radius > height) {
          blob.vy *= -1;
        }

        // Draw radial gradient for soft-feathered edge
        const grad = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );
        grad.addColorStop(0, blob.color);
        grad.addColorStop(1, "rgba(10, 10, 11, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 blur-[130px] mix-blend-screen bg-[#0A0A0B]"
      style={{ backfaceVisibility: "hidden" }}
    />
  );
}
