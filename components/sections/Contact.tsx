"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2, ShieldCheck, RefreshCw } from "lucide-react";
import Magnetic from "../ui/Magnetic";

const steps = [
  "Establishing secure handshake...",
  "Encrypting message payload...",
  "Routing packet through agent nodes...",
  "Delivered securely.",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSending) {
      interval = setInterval(() => {
        setStep((prev) => {
          if (prev >= steps.length - 1) {
            clearInterval(interval);
            setTimeout(() => {
              setIsSending(false);
              setIsSent(true);
            }, 600);
            return prev;
          }
          return prev + 1;
        });
      }, 700);
    }
    return () => clearInterval(interval);
  }, [isSending]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setStep(0);
    setIsSending(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSent(false);
    setError("");
  };

  return (
    <section id="contact" className="px-6 md:px-16 py-24 max-w-6xl mx-auto scroll-mt-16">
      <div className="grid md:grid-cols-5 gap-12 items-start">
        {/* Info Column */}
        <div className="md:col-span-2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-semibold mb-2"
          >
            Get in touch
          </motion.h2>
          <p className="text-[var(--text-muted)] text-sm mb-8 leading-relaxed max-w-sm">
            Have a project in mind, want to discuss software engineering, or just say hello? Reach out anytime.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:vrihaspatichaubey@gmail.com"
              id="contact-info-email"
              className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 hover:border-[var(--accent)] hover:bg-white/10 rounded-2xl transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center shrink-0">
                <Mail size={18} />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">Email</span>
                <span className="text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors truncate block">
                  vrihaspatichaubey@gmail.com
                </span>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/vrihaspatichaubey"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-info-linkedin"
              className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 hover:border-[var(--accent)] hover:bg-white/10 rounded-2xl transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center shrink-0">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">LinkedIn</span>
                <span className="text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors truncate block">
                  linkedin.com/in/vrihaspatichaubey
                </span>
              </div>
            </a>

            <a
              href="https://github.com/vrihaspati07"
              target="_blank"
              rel="noopener noreferrer"
              id="contact-info-github"
              className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 hover:border-[var(--accent)] hover:bg-white/10 rounded-2xl transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center shrink-0">
                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </div>
              <div className="min-w-0">
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">GitHub</span>
                <span className="text-sm font-semibold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors truncate block">
                  github.com/vrihaspati07
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-2xl select-none">
              <div className="w-10 h-10 rounded-xl bg-white/5 text-[var(--text-muted)] flex items-center justify-center shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block">Location</span>
                <span className="text-sm font-semibold text-[var(--text)]">Bhopal, Madhya Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form Column */}
        <div className="md:col-span-3">
          <div className="bg-[var(--surface)] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative min-h-[380px] flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {/* Form Input State */}
              {!isSending && !isSent && (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 w-full"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-[var(--text-muted)]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ada Lovelace"
                        className="bg-white/5 border border-white/10 focus:border-[var(--accent)] rounded-xl px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-[var(--text-muted)]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ada@example.com"
                        className="bg-white/5 border border-white/10 focus:border-[var(--accent)] rounded-xl px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-[var(--text-muted)]">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Say hello, share ideas, or inquire about open positions..."
                      className="bg-white/5 border border-white/10 focus:border-[var(--accent)] rounded-xl px-4 py-3 text-sm text-[var(--text)] outline-none transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-xs font-mono text-red-400 mt-1">{error}</p>
                  )}

                  <div className="pt-2">
                    <Magnetic range={40} strength={0.2}>
                      <button
                        type="submit"
                        id="contact-submit-btn"
                        className="flex items-center gap-2 px-5 py-3 bg-[var(--accent)] text-white hover:opacity-90 transition-opacity rounded-xl text-xs font-mono font-bold cursor-pointer"
                      >
                        <Send size={14} />
                        <span>Dispatch Message</span>
                      </button>
                    </Magnetic>
                  </div>
                </motion.form>
              )}

              {/* Encryption Sending Simulation State */}
              {isSending && (
                <motion.div
                  key="sending-loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-10 w-full text-center"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 border-t-[var(--accent)] animate-spin mb-6" />
                  
                  {/* Status checklist */}
                  <div className="space-y-2 max-w-xs text-xs font-mono text-[var(--text-muted)]">
                    {steps.map((text, idx) => (
                      <p
                        key={text}
                        className={`transition-colors duration-300 ${
                          idx === step
                            ? "text-[var(--accent)] font-semibold"
                            : idx < step
                            ? "text-[var(--text)] opacity-60"
                            : "opacity-20"
                        }`}
                      >
                        {idx < step ? "✓ " : idx === step ? "• " : "  "}
                        {text}
                      </p>
                    ))}
                  </div>

                  {/* Progress bar container */}
                  <div className="w-48 h-1 bg-white/10 rounded-full mt-8 overflow-hidden">
                    <motion.div
                      className="h-full bg-[var(--accent)]"
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / (steps.length - 1)) * 100}%` }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>
                </motion.div>
              )}

              {/* Sent Confirmation State */}
              {isSent && (
                <motion.div
                  key="sent-confirmation"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-10 w-full text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--accent-soft)] text-[var(--accent)] flex items-center justify-center mb-6 border border-[var(--accent)]/30 animate-pulse">
                    <CheckCircle2 size={36} />
                  </div>
                  
                  <h3 className="font-display text-2xl font-semibold mb-2">Message Dispatched!</h3>
                  <p className="text-sm text-[var(--text-muted)] max-w-sm mb-8 leading-relaxed">
                    Thank you, {name.split(" ")[0]}. Your secure packet has been routed. Vrihaspati will respond shortly.
                  </p>

                  <div className="flex gap-4">
                    <button
                      onClick={handleReset}
                      id="contact-another-btn"
                      className="flex items-center gap-1.5 px-4 py-2.5 bg-white/5 border border-white/10 hover:border-[var(--accent)] hover:text-white rounded-xl text-xs font-mono transition-colors cursor-pointer select-none"
                    >
                      <RefreshCw size={14} />
                      <span>Send Another</span>
                    </button>
                    <a
                      href={`mailto:vrihaspatichaubey@gmail.com?subject=Contact%20from%20Portfolio&body=Hi%20Vrihaspati,%20my%20name%20is%20${encodeURIComponent(name)}.%20${encodeURIComponent(message)}`}
                      className="flex items-center gap-1.5 px-4 py-2.5 bg-[var(--accent-soft)] hover:bg-[var(--accent)]/30 border border-[var(--accent)]/20 rounded-xl text-xs font-mono text-[var(--accent)] font-semibold transition-colors cursor-pointer"
                    >
                      <Mail size={14} />
                      <span>Direct Mail Backup</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-1.5 mt-8 text-[10px] font-mono text-white/30">
                    <ShieldCheck size={12} />
                    <span>Validated client-side, encrypted simulation complete</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
