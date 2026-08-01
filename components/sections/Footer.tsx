"use client";

import { Mail, MapPin, ArrowUp, RefreshCw } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0A0A0B] py-16 px-6 md:px-16 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div>
          <a
            href="#hero"
            id="footer-logo-link"
            className="font-display font-bold text-xl tracking-tight text-[var(--text)] hover:text-[var(--accent)] transition-colors"
          >
            Vrihaspati Chaubey<span className="text-[var(--accent)]">.</span>
          </a>
          <p className="mt-3 text-[var(--text-muted)] max-w-sm leading-relaxed text-sm">
            Full Stack Developer & Data Analyst. Building AI-driven software,
            intelligent tools, and scalable web apps.
          </p>

          {/* Now Section - signal that the site is live & active */}
          <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 max-w-sm">
            <p className="text-xs font-mono text-[var(--accent)] font-semibold flex items-center gap-1.5 mb-1">
              <RefreshCw size={12} className="animate-spin-slow" />
              <span>Now</span>
            </p>
            <p className="text-xs text-[var(--text)] leading-relaxed">
              AI Web Development Intern at InAmigos Foundation.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4 text-[var(--text-muted)] text-xs font-mono">
            <MapPin size={14} className="text-[var(--accent)]" />
            <span>Bhopal, India</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-[var(--text-muted)]">
          <h4 className="font-mono text-xs text-[var(--text)] uppercase tracking-wider font-semibold mb-1">
            Get in touch
          </h4>
          <a
            href="mailto:vrihaspatichaubey@gmail.com"
            id="footer-email-link"
            className="flex items-center gap-2 hover:text-[var(--text)] transition-colors"
          >
            <Mail size={15} className="text-[var(--accent)]" />
            <span>vrihaspatichaubey@gmail.com</span>
          </a>
          <a
            href="https://github.com/vrihaspati07"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-github-link"
            className="flex items-center gap-2 hover:text-[var(--text)] transition-colors"
          >
            <svg className="w-[15px] h-[15px] fill-current text-[var(--accent)]" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>github.com/vrihaspati07</span>
          </a>
          <a
            href="https://linkedin.com/in/vrihaspatichaubey"
            target="_blank"
            rel="noopener noreferrer"
            id="footer-linkedin-link"
            className="flex items-center gap-2 hover:text-[var(--text)] transition-colors"
          >
            <svg className="w-[15px] h-[15px] fill-current text-[var(--accent)]" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>linkedin.com/in/vrihaspatichaubey</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)] font-mono">
        <div className="flex flex-col gap-1 text-center md:text-left">
          <p>© {new Date().getFullYear()} Vrihaspati Chaubey. All rights reserved.</p>
          {/* Resume data verification note */}
          <p className="text-[10px] text-white/40">
            This entire site — including the AI above — is powered by a single structured resume data source.
          </p>
        </div>
        <button
          onClick={scrollToTop}
          id="footer-scroll-top-btn"
          aria-label="Scroll to top"
          className="flex items-center gap-1.5 hover:text-[var(--text)] transition-colors cursor-pointer select-none"
        >
          <span>Back to top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
