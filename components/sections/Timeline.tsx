"use client";

import { motion } from "framer-motion";

type Entry = {
  date: string;
  title: string;
  org: string;
  note: string;
};

const entries: Entry[] = [
  {
    date: "2025",
    title: "GenAI Hackathon — 2nd Place",
    org: "ML Bhopal, 200+ teams",
    note: "Offline P2P payment system using sound protocol",
  },
  {
    date: "Dec 2025",
    title: "Campus Ambassador",
    org: "eDC, IIT Delhi",
    note: "Outreach and community building",
  },
  {
    date: "Apr 2026",
    title: "National Cloud Innovation Challenge",
    org: "3SVK, Hyderabad",
    note: "Reached Phase 3 — Prototype Evaluation",
  },
  {
    date: "Apr 2026",
    title: "AMD Slingshot Campus Days Ideathon",
    org: "AMD India, Bhopal",
    note: "Agentic workflows and vibe coding",
  },
  {
    date: "2026",
    title: "Smart India Hackathon 2025",
    org: "Team CodeYoddhas",
    note: "\u201cMargdarshak\u201d — career & education advisor platform",
  },
  {
    date: "2026",
    title: "India AI Impact Summit",
    org: "Bharat Mandapam, New Delhi",
    note: "Attended as a delegate",
  },
  {
    date: "Jun 2026",
    title: "AI Web Development Intern",
    org: "InAmigos Foundation",
    note: "Current role",
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="px-6 md:px-16 py-24 max-w-6xl mx-auto scroll-mt-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-semibold mb-2"
      >
        Timeline
      </motion.h2>
      <p className="text-[var(--text-muted)] mb-12">
        Hackathons, roles, and events along the way.
      </p>

      <div className="relative border-l border-white/10 pl-8 space-y-10">
        {entries.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="relative"
          >
            <span className="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-[var(--accent)]" />
            <p className="font-mono text-xs text-[var(--accent)] mb-1">
              {e.date}
            </p>
            <h3 className="font-display text-lg font-semibold">{e.title}</h3>
            <p className="text-sm text-[var(--text-muted)]">
              {e.org} — {e.note}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
