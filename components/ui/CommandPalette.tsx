"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, MessageSquare, Code, Calendar, Mail, ArrowRight, Briefcase } from "lucide-react";

type Command = {
  icon: React.ReactNode;
  label: string;
  category: "Navigation" | "Socials";
  action: () => void;
};

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = [
    {
      icon: <Compass size={16} className="text-[var(--accent)]" />,
      label: "Go to Hero / Top",
      category: "Navigation",
      action: () => {
        document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      icon: <Code size={16} className="text-[var(--accent)]" />,
      label: "Go to Skills",
      category: "Navigation",
      action: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      icon: <Code size={16} className="text-[var(--accent)]" />,
      label: "Go to Projects / Work",
      category: "Navigation",
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      icon: <Briefcase size={16} className="text-[var(--accent)]" />,
      label: "Go to Resume",
      category: "Navigation",
      action: () => {
        document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      icon: <Calendar size={16} className="text-[var(--accent)]" />,
      label: "Go to Timeline",
      category: "Navigation",
      action: () => {
        document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current text-[var(--accent)]" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      label: "Go to GitHub Live Widget",
      category: "Navigation",
      action: () => {
        document.getElementById("github")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      icon: <MessageSquare size={16} className="text-[var(--accent)]" />,
      label: "Ask the AI Chatbot",
      category: "Navigation",
      action: () => {
        const chatSec = document.getElementById("hero");
        if (chatSec) {
          chatSec.scrollIntoView({ behavior: "smooth" });
          setTimeout(() => {
            document.getElementById("chat-input")?.focus();
          }, 600);
        }
      },
    },
    {
      icon: <Mail size={16} className="text-[var(--accent)]" />,
      label: "Go to Contact Us",
      category: "Navigation",
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      },
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current text-[var(--text-muted)]" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      label: "Open GitHub Profile (github.com/vrihaspati07)",
      category: "Socials",
      action: () => {
        window.open("https://github.com/vrihaspati07", "_blank", "noopener,noreferrer");
      },
    },
    {
      icon: (
        <svg className="w-4 h-4 fill-current text-[var(--text-muted)]" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: "Open LinkedIn Profile (linkedin.com/in/vrihaspatichaubey)",
      category: "Socials",
      action: () => {
        window.open("https://linkedin.com/in/vrihaspatichaubey", "_blank", "noopener,noreferrer");
      },
    },
    {
      icon: <Mail size={16} />,
      label: "Send Email (vrihaspatichaubey@gmail.com)",
      category: "Socials",
      action: () => {
        window.open("mailto:vrihaspatichaubey@gmail.com", "_self");
      },
    },
  ];

  // Listen to Cmd/Ctrl + K and toggle palette
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Set focus on input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        setActiveIndex(0);
        setSearch("");
      }, 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle click outside modal to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filteredCommands.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredCommands[activeIndex]) {
        filteredCommands[activeIndex].action();
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      {/* Global badge to inform user */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:block">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-3 py-2 bg-[var(--surface)] hover:bg-[var(--surface)]/90 border border-white/10 rounded-xl shadow-2xl text-[var(--text-muted)] hover:text-[var(--text)] transition-colors text-xs font-mono select-none cursor-pointer"
        >
          <span>Press</span>
          <kbd className="px-1.5 py-0.5 bg-[#0A0A0B] border border-white/10 rounded-md">⌘K</kbd>
          <span>to navigate</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[999] flex items-start justify-center pt-24 px-4 bg-[#0A0A0B]/60 backdrop-blur-sm">
            <motion.div
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              onKeyDown={handleKeyDown}
              className="w-full max-w-lg bg-[var(--surface)] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Search Bar */}
              <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/10">
                <Search size={18} className="text-[var(--text-muted)] shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setActiveIndex(0);
                  }}
                  className="w-full bg-transparent border-none outline-none text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-[var(--text-muted)] hover:text-[var(--text)] border border-white/10 rounded px-1.5 py-0.5 cursor-pointer"
                >
                  ESC
                </button>
              </div>

              {/* Suggestions / List */}
              <div className="max-h-80 overflow-y-auto py-2">
                {filteredCommands.length > 0 ? (
                  <div>
                    {filteredCommands.map((cmd, index) => (
                      <button
                        key={cmd.label}
                        onClick={() => {
                          cmd.action();
                          setIsOpen(false);
                        }}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors cursor-pointer ${
                          index === activeIndex
                            ? "bg-white/5 text-[var(--text)]"
                            : "text-[var(--text-muted)]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="shrink-0">{cmd.icon}</span>
                          <span className="text-sm font-medium">{cmd.label}</span>
                        </div>
                        {index === activeIndex && (
                          <div className="flex items-center gap-1 text-[var(--accent)] text-xs font-mono font-bold animate-pulse">
                            <span>Execute</span>
                            <ArrowRight size={12} />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-6 text-center text-sm text-[var(--text-muted)]">
                    No commands found. Try searching for &quot;work&quot;, &quot;skills&quot;, or &quot;email&quot;.
                  </div>
                )}
              </div>

              {/* Footer Guide */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-white/5 border-t border-white/5 text-[10px] text-[var(--text-muted)] font-mono">
                <div className="flex items-center gap-2">
                  <span>↑↓ Navigate</span>
                  <span>↵ Enter to select</span>
                </div>
                <span>⌘K to close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
