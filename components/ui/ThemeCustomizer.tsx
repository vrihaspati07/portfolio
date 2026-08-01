"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";

type ColorPreset = {
  name: string;
  value: string;
  soft: string;
};

const presets: ColorPreset[] = [
  { name: "indigo", value: "#6366F1", soft: "rgba(99, 102, 241, 0.15)" },
  { name: "emerald", value: "#10B981", soft: "rgba(16, 185, 129, 0.15)" },
  { name: "amber", value: "#F59E0B", soft: "rgba(245, 158, 11, 0.15)" },
  { name: "rose", value: "#F43F5E", soft: "rgba(244, 63, 94, 0.15)" },
  { name: "violet", value: "#8B5CF6", soft: "rgba(139, 92, 246, 0.15)" },
];

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("indigo");

  useEffect(() => {
    // Read theme selection from local storage on mount
    const saved = localStorage.getItem("vc_theme_color");
    if (saved) {
      const match = presets.find((p) => p.name === saved);
      if (match) {
        // Wrap state setting in a safe callback to avoid synchronous effect renders
        setTimeout(() => {
          document.documentElement.style.setProperty("--accent", match.value);
          document.documentElement.style.setProperty("--accent-soft", match.soft);
          setActiveTheme(match.name);
        }, 0);
      }
    }
  }, []);

  const changeTheme = (preset: ColorPreset) => {
    document.documentElement.style.setProperty("--accent", preset.value);
    document.documentElement.style.setProperty("--accent-soft", preset.soft);
    localStorage.setItem("vc_theme_color", preset.name);
    setActiveTheme(preset.name);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9990] flex flex-col items-end gap-3 no-print">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            className="flex items-center gap-2.5 p-3 bg-[#1A1A1D]/80 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md"
          >
            {presets.map((preset) => (
              <button
                key={preset.name}
                onClick={() => changeTheme(preset)}
                style={{ backgroundColor: preset.value }}
                title={`Switch to ${preset.name}`}
                className={`w-6 h-6 rounded-full cursor-pointer transition-transform relative hover:scale-115 active:scale-95 ${
                  activeTheme === preset.name
                    ? "ring-2 ring-white ring-offset-2 ring-offset-[#0A0A0B]"
                    : "border border-white/20"
                }`}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-[#1A1A1D]/80 border border-white/10 hover:border-[var(--accent)] text-[var(--accent)] hover:text-white flex items-center justify-center shadow-xl backdrop-blur-md cursor-pointer transition-all active:scale-95 group"
        title="Customize Theme Color"
      >
        <Palette size={20} className="transition-transform group-hover:rotate-12" />
      </button>
    </div>
  );
}
