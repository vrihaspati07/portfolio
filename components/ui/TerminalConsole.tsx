"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X } from "lucide-react";

type LogEntry = {
  command: string;
  response: string | React.ReactNode;
};

const COMMANDS_HELP = `Available commands:
  about       - Brief profile summary
  skills      - Technical skill list
  projects    - Portfolio projects list
  contact     - Social and email coordinates
  theme       - Switch color theme (e.g. 'theme emerald')
  clear       - Clear screen history
  exit        - Minimize console`;



export default function TerminalConsole() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<LogEntry[]>([]);
  const consoleEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    const parts = trimmed.split(" ");
    const cmd = parts[0].toLowerCase();
    const arg = parts[1]?.toLowerCase();

    let response: string | React.ReactNode = "";

    switch (cmd) {
      case "help":
        response = <pre className="whitespace-pre-wrap">{COMMANDS_HELP}</pre>;
        break;
      case "about":
        response = (
          <p className="leading-relaxed">
            Vrihaspati Chaubey — B.Tech Computer Science student at SIRT Bhopal. AI/ML & Full-Stack developer. 
            AI Web Development Intern at InAmigos Foundation. Focused on building intelligent software systems.
          </p>
        );
        break;
      case "skills":
        response = (
          <div className="space-y-1">
            <p>• Languages: Java, JavaScript, Python, C++, SQL</p>
            <p>• Web Frameworks: Next.js, React.js, Node.js, Express.js, Tailwind CSS</p>
            <p>• AI & Analytics: FastAPI, YOLOv8, Power BI, Pandas, NumPy</p>
          </div>
        );
        break;
      case "projects":
        response = (
          <div className="space-y-1">
            <p>• Sound Payment - Sound-based peer-to-peer transaction network</p>
            <p>• KiranaLens - Retail visual cash flow estimator</p>
            <p>• Tara - Persistent AI Tray assistant wrapper</p>
            <p>• AI Resumerank - Resume parsing ranker tool</p>
          </div>
        );
        break;
      case "contact":
        response = (
          <div className="space-y-1">
            <p>• Email: vrihaspatichaubey@gmail.com</p>
            <p>• GitHub: github.com/vrihaspati07</p>
            <p>• LinkedIn: linkedin.com/in/vrihaspatichaubey</p>
          </div>
        );
        break;
      case "theme":
        const presets = [
          { name: "indigo", value: "#6366F1", soft: "rgba(99, 102, 241, 0.15)" },
          { name: "emerald", value: "#10B981", soft: "rgba(16, 185, 129, 0.15)" },
          { name: "amber", value: "#F59E0B", soft: "rgba(245, 158, 11, 0.15)" },
          { name: "rose", value: "#F43F5E", soft: "rgba(244, 63, 94, 0.15)" },
          { name: "violet", value: "#8B5CF6", soft: "rgba(139, 92, 246, 0.15)" },
        ];
        const match = presets.find((p) => p.name === arg);
        if (match) {
          document.documentElement.style.setProperty("--accent", match.value);
          document.documentElement.style.setProperty("--accent-soft", match.soft);
          localStorage.setItem("vc_theme_color", match.name);
          response = `Accent theme updated to ${match.name}.`;
        } else {
          response = `Theme '${arg || ""}' not found. Try: theme <indigo|emerald|amber|rose|violet>`;
        }
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      case "exit":
        setIsOpen(false);
        setInput("");
        return;
      default:
        response = `Command '${cmd}' not recognized. Type 'help' to see valid commands.`;
    }

    setHistory((prev) => [...prev, { command: trimmed, response }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9990] no-print">
      {/* Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed bottom-0 left-0 right-0 h-[360px] md:h-[400px] bg-[#0A0A0B]/95 border-t border-white/10 rounded-t-3xl shadow-2xl z-[9995] flex flex-col backdrop-blur-lg"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 select-none shrink-0">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)]">
                <Terminal size={14} className="animate-pulse" />
                <span>interactive-terminal.sh</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[var(--text-muted)] hover:text-white p-1 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Terminal Screen Logs */}
            <div className="flex-1 overflow-y-auto px-6 py-4 font-mono text-xs text-white/90 space-y-4 scrollbar-thin select-text">
              <div className="text-[var(--text-muted)] border-b border-white/5 pb-2">
                <p>Welcome to Vrihaspati&apos;s Interactive Portfolio Console v1.0.0</p>
                <p>Type &apos;help&apos; to get list of available commands.</p>
              </div>

              {history.map((entry, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[var(--accent)] font-semibold">
                    <span>vc@portfolio:~$</span>
                    <span>{entry.command}</span>
                  </div>
                  <div className="text-white/85 pl-4">{entry.response}</div>
                </div>
              ))}
              <div ref={consoleEndRef} />
            </div>

            {/* Terminal Prompt Line */}
            <div className="px-6 py-4 border-t border-white/5 shrink-0 flex items-center gap-2 select-none">
              <span className="font-mono text-xs text-[var(--accent)] font-semibold">vc@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCommand(input)}
                placeholder="type a command..."
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder:text-white/20"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-[#1A1A1D]/80 border border-white/10 hover:border-[var(--accent)] text-[var(--accent)] hover:text-white flex items-center justify-center shadow-xl backdrop-blur-md cursor-pointer transition-all active:scale-95 group"
        title="Open Developer CLI Console"
      >
        {isOpen ? (
          <X size={20} className="transition-transform group-hover:rotate-90" />
        ) : (
          <Terminal size={20} className="transition-transform group-hover:scale-110" />
        )}
      </button>
    </div>
  );
}
