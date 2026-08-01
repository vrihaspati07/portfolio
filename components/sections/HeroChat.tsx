"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Loader2, Sparkles, Trash2, Mic } from "lucide-react";
import Magnetic from "../ui/Magnetic";

const SUGGESTIONS = [
  "What did he build for TenzorX?",
  "What is his tech stack?",
  "Tell me about GenAI Hackathon 2nd place.",
  "What certifications does he hold?",
];

type Message = {
  id: string;
  sender: "user" | "ai";
  text: string;
};

export default function HeroChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Initialize SpeechRecognition
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-US";

        recognition.onstart = () => {
          setIsListening(true);
        };

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          if (transcript) {
            setInput(transcript);
          }
          setIsListening(false);
        };

        recognition.onerror = (event: any) => {
          console.error("Speech recognition error:", event);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser. Please try Chrome or Safari.");
      return;
    }
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  // Auto-scroll to the bottom of the conversation
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleAsk(queryToAsk?: string) {
    const query = (queryToAsk || input).trim();
    if (!query || loading) return;

    // Clear input if submitted from input box
    if (!queryToAsk) {
      setInput("");
    }

    const userMsg: Message = {
      id: Math.random().toString(36).substring(7),
      sender: "user",
      text: query,
    };

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query }),
      });
      const data = await res.json();
      
      const aiMsg: Message = {
        id: Math.random().toString(36).substring(7),
        sender: "ai",
        text: data.reply || data.error || "No response received.",
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      const errorMsg: Message = {
        id: Math.random().toString(36).substring(7),
        sender: "ai",
        text: "Something went wrong while connecting to AI. Please try again.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  }

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="mt-8 max-w-xl w-full">
      {/* Messages Thread Container */}
      <AnimatePresence>
        {messages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 bg-[var(--surface)]/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 max-h-[300px] overflow-y-auto space-y-3 scrollbar-thin"
          >
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[var(--accent)] text-white rounded-br-none"
                      : "bg-white/5 border border-white/10 text-[var(--text)] rounded-bl-none"
                  }`}
                >
                  {msg.sender === "ai" && (
                    <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--accent)] mb-1">
                      <Sparkles size={10} />
                      <span>AI Assistant</span>
                    </div>
                  )}
                  <p className="whitespace-pre-line">{msg.text}</p>
                </div>
              </motion.div>
            ))}

            {/* AI Typing State */}
            {loading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-start"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-none px-4 py-3 text-sm text-[var(--text-muted)] flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin text-[var(--accent)]" />
                  <span>Thinking...</span>
                </div>
              </motion.div>
            )}
            <div ref={chatEndRef} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Box Row */}
      <div className={`flex items-center gap-3 bg-[var(--surface)] border rounded-2xl px-5 py-4 transition-all duration-300 shadow-lg ${
        isListening 
          ? "border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)] bg-red-500/5" 
          : "border-white/10 focus-within:border-[var(--accent)]"
      }`}>
        <Sparkles size={18} className="text-[var(--accent)] shrink-0" />
        <input
          id="chat-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAsk()}
          placeholder={isListening ? "Listening... Speak now..." : "Ask anything about Vrihaspati's work & skills..."}
          disabled={loading}
          className="flex-1 bg-transparent outline-none text-[var(--text)] text-sm placeholder:text-[var(--text-muted)] disabled:opacity-50"
        />
        
        {/* Voice Input Mic Button */}
        {typeof window !== "undefined" && (
          <button
            onClick={toggleListening}
            id="chat-mic-btn"
            aria-label="Toggle voice input"
            className={`p-1.5 rounded-lg transition-all cursor-pointer shrink-0 ${
              isListening
                ? "text-red-500 bg-red-500/10 animate-pulse border border-red-500/20"
                : "text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-white/5"
            }`}
          >
            <Mic size={16} />
          </button>
        )}

        {/* Clear Thread Button */}
        {messages.length > 0 && (
          <button
            onClick={clearChat}
            id="chat-clear-btn"
            aria-label="Clear chat history"
            className="text-[var(--text-muted)] hover:text-red-400 hover:bg-white/5 p-1.5 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            <Trash2 size={16} />
          </button>
        )}

        {/* Submit Query Button */}
        <button
          onClick={() => handleAsk()}
          disabled={loading || !input.trim()}
          id="chat-submit-btn"
          aria-label="Ask AI"
          className="w-9 h-9 rounded-full bg-[var(--accent)] text-white flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-40 shrink-0 cursor-pointer"
        >
          {loading ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <ArrowUpRight size={18} />
          )}
        </button>
      </div>

      {/* Suggestions List */}
      {messages.length === 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {SUGGESTIONS.map((s, idx) => (
            <Magnetic key={s} range={30} strength={0.15}>
              <button
                onClick={() => handleAsk(s)}
                disabled={loading}
                id={`suggestion-btn-${idx}`}
                className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-3 py-1.5 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors cursor-pointer disabled:opacity-50 select-none"
              >
                {s}
              </button>
            </Magnetic>
          ))}
        </div>
      )}
    </div>
  );
}
