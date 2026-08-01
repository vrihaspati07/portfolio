"use client";

import { useState, useEffect } from "react";
import { Mail, Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Skills", href: "#skills", id: "nav-link-skills" },
    { label: "Work", href: "#projects", id: "nav-link-work" },
    { label: "Resume", href: "#resume", id: "nav-link-resume" },
    { label: "Timeline", href: "#timeline", id: "nav-link-timeline" },
    { label: "GitHub", href: "#github", id: "nav-link-github" },
    { label: "Contact", href: "#contact", id: "nav-link-contact" },
  ];

  const triggerCommandPalette = () => {
    // Dispatch a custom event or trigger Ctrl+K
    const event = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: true,
      bubbles: true,
    });
    window.dispatchEvent(event);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[var(--accent)] z-[60] origin-left"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? "bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex items-center justify-between">
          <a
            href="#hero"
            id="nav-logo"
            className="font-display font-bold text-lg tracking-tight text-[var(--text)] hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
            VC<span className="text-[var(--accent)]">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-muted)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={link.id}
                className="hover:text-[var(--text)] transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Command Palette Indicator in Menu */}
            <button
              onClick={triggerCommandPalette}
              id="nav-btn-cmd-k"
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs border border-white/10 rounded-lg hover:border-[var(--accent)] hover:text-[var(--text)] transition-colors cursor-pointer"
            >
              <Terminal size={12} />
              <span>Menu</span>
              <kbd className="text-[10px] bg-white/10 px-1 rounded">⌘K</kbd>
            </button>
          </nav>

          {/* Social Links & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 text-[var(--text-muted)]">
            <a
              href="https://github.com/vrihaspati07"
              target="_blank"
              rel="noopener noreferrer"
              id="nav-social-github"
              aria-label="GitHub Profile"
              className="hover:text-[var(--text)] transition-colors"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/vrihaspatichaubey"
              target="_blank"
              rel="noopener noreferrer"
              id="nav-social-linkedin"
              aria-label="LinkedIn Profile"
              className="hover:text-[var(--text)] transition-colors"
            >
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="mailto:vrihaspatichaubey@gmail.com"
              id="nav-social-email"
              aria-label="Email Vrihaspati"
              className="hover:text-[var(--text)] transition-colors"
            >
              <Mail size={18} />
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              id="nav-btn-hamburger"
              aria-label="Toggle Menu"
              className="md:hidden text-[var(--text)] focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0A0A0B]/98 flex flex-col justify-center px-6"
          >
            <nav className="flex flex-col gap-6 text-2xl font-display font-semibold text-center">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  id={link.id + "-mobile"}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[var(--text)] hover:text-[var(--accent)] transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTimeout(triggerCommandPalette, 300);
                }}
                id="nav-btn-cmd-k-mobile"
                className="text-[var(--text-muted)] hover:text-[var(--text)] text-sm flex items-center justify-center gap-2 border border-white/10 rounded-xl max-w-xs mx-auto w-full py-3 mt-4 transition-colors cursor-pointer"
              >
                <Terminal size={14} />
                <span>Command Menu</span>
                <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-xs font-mono">⌘K</kbd>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
