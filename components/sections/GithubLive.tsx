"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, WifiOff } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  html_url: string;
};

// High-fidelity fallback project repositories to ensure beautiful UX in case of API rate limits or offline use.
const FALLBACK_REPOS: Repo[] = [
  {
    id: 101,
    name: "offline-sound-payment",
    description: "Peer-to-peer sound-based offline payment architecture. 2nd Place GenAI Hackathon.",
    stargazers_count: 14,
    language: "Python",
    html_url: "https://github.com/vrihaspati07",
  },
  {
    id: 102,
    name: "kiranalens",
    description: "AI-powered cash flow estimator using YOLOv8 and Google Vision API for retail stores.",
    stargazers_count: 8,
    language: "FastAPI",
    html_url: "https://github.com/vrihaspati07",
  },
  {
    id: 103,
    name: "tara-ai-assistant",
    description: "Persistent tray assistant with animated HUD overlay, sentiment tracking, and Groq API.",
    stargazers_count: 12,
    language: "Electron",
    html_url: "https://github.com/vrihaspati07",
  },
  {
    id: 104,
    name: "pet-emotion-music",
    description: "Full-stack Spotify playlist recommender driven by pet mood image classification.",
    stargazers_count: 9,
    language: "JavaScript",
    html_url: "https://github.com/vrihaspati07",
  },
  {
    id: 105,
    name: "eventiq-assistant",
    description: "Google Antigravity Hackathon winner entry event assistant built with FastAPI and Gemini.",
    stargazers_count: 6,
    language: "Python",
    html_url: "https://github.com/vrihaspati07",
  },
  {
    id: 106,
    name: "sales-analysis-dashboard",
    description: "Advanced DAX and SQL business tables visualization dashboard for 10,000+ sales records.",
    stargazers_count: 5,
    language: "PowerBI",
    html_url: "https://github.com/vrihaspati07",
  },
];

export default function GithubLive() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFallback, setIsFallback] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/vrihaspati07/repos?sort=updated&per_page=6")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          // Process API repositories
          const formatted = data.map((item: {
            id: number;
            name: string;
            description: string | null;
            stargazers_count?: number;
            language: string | null;
            html_url: string;
          }) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            stargazers_count: item.stargazers_count || 0,
            language: item.language,
            html_url: item.html_url,
          }));
          setRepos(formatted);
          setIsFallback(false);
        } else {
          throw new Error("Invalid structure");
        }
      })
      .catch(() => {
        // Graceful degradation
        setRepos(FALLBACK_REPOS);
        setIsFallback(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="github" className="px-6 md:px-16 py-24 max-w-6xl mx-auto scroll-mt-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-2 gap-4">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-semibold mb-2"
          >
            Live from GitHub
          </motion.h2>
          <p className="text-[var(--text-muted)] text-sm">
            Pulled directly from{" "}
            <a
              href="https://github.com/vrihaspati07"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--accent)] transition-colors inline-flex items-center gap-1"
            >
              github.com/vrihaspati07
              <ExternalLink size={14} />
            </a>{" "}
            — active repositories.
          </p>
        </div>

        {/* Display subtle indicator if using fallback repositories */}
        {isFallback && !loading && (
          <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-[var(--text-muted)] w-fit">
            <WifiOff size={12} className="text-amber-500" />
            <span>Showing featured repositories</span>
          </div>
        )}
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="bg-[var(--surface)] border border-white/5 rounded-2xl p-5 animate-pulse h-36"
              />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                id={`github-repo-card-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group block bg-[var(--surface)] border border-white/10 rounded-2xl p-5 hover:border-[var(--accent)]/50 transition-colors shadow-md select-none"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-mono text-sm text-[var(--accent)] group-hover:underline truncate pr-2">
                    {repo.name}
                  </h3>
                  <ExternalLink size={14} className="text-[var(--text-muted)] group-hover:text-[var(--accent)] shrink-0 transition-colors" />
                </div>
                <p className="text-xs text-[var(--text-muted)] line-clamp-2 mb-3 h-10 leading-relaxed">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)] pt-2 border-t border-white/5 font-mono">
                  <span>{repo.language || "Plain Text"}</span>
                  <span className="flex items-center gap-1">
                    <Star size={11} className="text-amber-400 fill-amber-400" />
                    {repo.stargazers_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
