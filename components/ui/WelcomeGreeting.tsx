"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";

export default function WelcomeGreeting() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the user has already visited in this session
    const visited = sessionStorage.getItem("vc_visited");
    if (!visited) {
      sessionStorage.setItem("vc_visited", "true");
      // Snappy activation wrapped to execute asynchronously
      setTimeout(() => {
        setShow(true);
      }, 0);
      
      // Auto close after 950ms (fast entrance, quick scan, fast exit)
      const timer = setTimeout(() => {
        setShow(false);
      }, 950);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes laser-scan {
          0% {
            top: 0%;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        .laser-bar {
          position: absolute;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
          box-shadow: 0 0 12px var(--accent);
          animation: laser-scan 0.5s ease-in-out forwards;
          animation-delay: 0.25s;
          pointer-events: none;
        }
      `}</style>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#0A0A0B]/90 backdrop-blur-xl pointer-events-none select-none"
          >
            {/* 3D Perspective Container */}
            <div style={{ perspective: "1200px" }} className="w-full max-w-sm px-6">
              <motion.div
                initial={{ opacity: 0, rotateX: 30, rotateY: -15, scale: 0.9, z: -150 }}
                animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1, z: 0 }}
                exit={{ opacity: 0, rotateX: -25, rotateY: 10, scale: 0.92, z: -200 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-[#1A1A1D]/75 border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden backdrop-blur-md"
              >
                {/* Simulated Scanning laser */}
                <div className="laser-bar" />

                {/* Content details */}
                <div className="flex items-center gap-2 mb-3 text-[10px] font-mono text-[var(--accent)] tracking-wider">
                  <Terminal size={12} className="animate-pulse" />
                  <span>DECENTRALIZED CONNECTION ESTABLISHED</span>
                </div>

                <div className="space-y-2">
                  <h1 className="font-display text-xl font-bold text-[var(--text)] tracking-tight flex items-center gap-1.5 justify-center md:justify-start">
                    <span>Welcome to visit this portfolio</span>
                    <Sparkles size={16} className="text-[var(--accent)] shrink-0" />
                  </h1>
                  <p className="text-xs font-mono text-[var(--text-muted)]">
                    Vrihaspati Chaubey — AI/ML & Full-Stack
                  </p>
                </div>

                {/* Sub status indicators */}
                <div className="mt-6 flex justify-between text-[8px] font-mono text-white/30 border-t border-white/5 pt-3">
                  <span>SECURE_ROUTE: ACTIVE</span>
                  <span>VC_CORE: OK</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
