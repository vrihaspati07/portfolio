"use client";

import { motion } from "framer-motion";
import HeroChat from "./HeroChat";
import HeroCanvas from "../ui/HeroCanvas";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pt-32 pb-24 max-w-6xl mx-auto scroll-mt-20 overflow-hidden"
    >
      {/* Dynamic Background Mesh */}
      <HeroCanvas />

      {/* Content Container */}
      <div className="relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-sm text-[var(--accent)] mb-4"
        >
          Vrihaspati Chaubey — AI/ML · Full-Stack
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-7xl font-semibold leading-[1.05] tracking-tight max-w-4xl"
        >
          Ask me anything about my work —{" "}
          <span className="text-[var(--text-muted)]">or scroll to see it.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-[var(--text-muted)] max-w-xl"
        >
          This portfolio talks back. Type a question below and get answers
          pulled straight from my projects, skills, and experience.
        </motion.p>

        <HeroChat />
      </div>
    </section>
  );
}
