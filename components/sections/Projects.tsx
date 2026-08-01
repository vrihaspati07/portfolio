"use client";

import { motion } from "framer-motion";
import Magnetic from "../ui/Magnetic";

type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  highlights: string[];
  id: string;
  github: string;
};

const projects: Project[] = [
  {
    id: "project-sound-payment",
    title: "AI-Based Offline Payment System",
    tag: "2nd Place — GenAI Hackathon (ML Bhopal 2025, 200+ teams)",
    description:
      "A peer-to-peer payment architecture that works over sound protocols, enabling secure transactions without an active internet connection.",
    stack: ["Python", "AI", "Audio Processing", "Encryption", "REST APIs"],
    highlights: [
      "Encrypted audio-based transaction data transfer protocol",
      "AI-driven fraud risk detection and classification model",
      "Database sync framework to update ledgers on network restoration",
    ],
    github: "https://github.com/vrihaspati07/sound-payment-system",
  },
  {
    id: "project-kiranalens",
    title: "KiranaLens",
    tag: "TenzorX 2026 — Poonawalla Fincorp National Hackathon",
    description:
      "An AI-powered cash flow estimator using computer vision to read store shelf signals, transaction data, and nearby competitor density.",
    stack: ["YOLOv8", "Google Vision API", "Google Maps API", "FastAPI", "Claude API"],
    highlights: [
      "Computer vision pipeline detecting stock level and brand placement",
      "Location-aware competitor mapping via Google Maps API",
      "National finalist prototype presented at Poonawalla Fincorp HQ",
    ],
    github: "https://github.com/vrihaspati07/KiranaLens",
  },
  {
    id: "project-tara",
    title: "Tara — Desktop AI Assistant",
    tag: "Personal Project",
    description:
      "A persistent AI assistant residing in the system tray, featuring an animated HUD overlay, global hotkey activation, and custom sentiment analysis.",
    stack: ["Electron.js", "FastAPI", "Groq API", "LLaMA 3.3 70B", "Sentiment Detection"],
    highlights: [
      "System tray persistence with automated launch on OS startup",
      "Animated HUD screen overlay triggered by a global keyboard hook",
      "Sentiment-aware response framing using LLaMA 3.3 70B models",
    ],
    github: "https://github.com/vrihaspati07/tara-ai-assistant",
  },
  {
    id: "project-pet-emotion",
    title: "AI-Powered Pet Emotion & Music Platform",
    tag: "Personal Project",
    description:
      "A full-stack application that analyzes a pet's emotional state from images and automatically curates and recommends matching Spotify playlists.",
    stack: ["React.js", "Node.js", "AI APIs", "Spotify API"],
    highlights: [
      "Real-time visual emotion recognition via custom REST APIs",
      "30% client-side rendering speedup through optimized JavaScript bundle",
      "Seamless integration of React frontend client and Node.js backend",
    ],
    github: "https://github.com/vrihaspati07/pet-emotion-music-recommender",
  },
  {
    id: "project-powerbi-sales",
    title: "Power BI Sales Dashboard",
    tag: "Personal Project",
    description:
      "Interactive data analytics dashboard analyzing sales trends and customer behavior metrics across 10,000+ transactional records.",
    stack: ["Power BI", "DAX", "SQL", "Data Modeling"],
    highlights: [
      "Designed and implemented 25+ DAX calculations and data measures",
      "Structured 5 raw database tables via SQL, saving 40% manual analysis time",
      "Created highly scannable grid layouts for executive decision support",
    ],
    github: "https://github.com/vrihaspati07/powerbi-sales-dashboard",
  },
  {
    id: "project-eventiq",
    title: "EventIQ AI Assistant",
    tag: "Google Antigravity Hackathon Entry",
    description:
      "Intelligent event planning assistant facilitating automated notifications, layout scheduling, and chat-based coordination.",
    stack: ["FastAPI", "Gemini API", "Google APIs", "Cloud Run"],
    highlights: [
      "AI planner workflows using Google Gemini and FastAPI",
      "Integrated sync flow for Calendar and Gmail developer APIs",
      "Containerized deployment on Google Cloud Run for auto-scaling",
    ],
    github: "https://github.com/vrihaspati07/EventIQ",
  },
  {
    id: "project-smarthealth",
    title: "SmartHealth Pro",
    tag: "Personal Project",
    description:
      "A multi-module AI-driven health diagnostic platform predicting chronic disease risks and providing localized healthcare guidance.",
    stack: ["Scikit-learn", "TensorFlow", "Gemini Vision API", "Python"],
    highlights: [
      "Diagnostic risk calculation models trained using Scikit-learn",
      "Vision analysis of reports and scans via Gemini Vision API",
      "Fully localized interface supporting English and Hindi toggle modes",
    ],
    github: "https://github.com/vrihaspati07/SmartHealth-Pro",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 py-24 max-w-6xl mx-auto scroll-mt-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-semibold mb-2"
      >
        Selected work
      </motion.h2>
      <p className="text-[var(--text-muted)] mb-12">
        Projects built end-to-end — from problem definition to shipped code.
      </p>

      <div className="space-y-6">
        {projects.map((p, i) => (
          <Magnetic key={p.id} range={80} strength={0.05}>
            <motion.div
              id={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="interactive-card bg-[var(--surface)] border border-white/10 rounded-3xl p-8 md:p-10 select-none block transition-colors hover:border-[var(--accent)]/50 shadow-lg cursor-pointer"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <div>
                  <p className="font-mono text-xs text-[var(--accent)] mb-1.5 uppercase tracking-wide">
                    {p.tag}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-[var(--text)]">
                    {p.title}
                  </h3>
                </div>

                {p.tag !== "Personal Project" && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 hover:border-[var(--accent)] hover:text-white rounded-lg text-xs font-mono transition-all cursor-pointer shrink-0"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span>GitHub Repository</span>
                  </a>
                )}
              </div>

              <p className="text-[var(--text-muted)] mb-6 max-w-2xl text-sm leading-relaxed">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] bg-white/5 border border-white/10 rounded-full px-2.5 py-1 text-[var(--text)]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <ul className="space-y-2">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-xs text-[var(--text-muted)] flex gap-2 items-center"
                  >
                    <span className="text-[var(--accent)] font-bold shrink-0">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Magnetic>
        ))}
      </div>
    </section>
  );
}
