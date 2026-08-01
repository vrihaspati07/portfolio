"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  skills: string[];
};

const categories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript (ES6+)", "SQL", "C++", "HTML5", "CSS3"],
  },
  {
    title: "Web Development",
    skills: ["React.js", "Node.js", "Express.js", "Next.js", "MongoDB", "REST APIs", "Tailwind CSS"],
  },
  {
    title: "Data & Analytics",
    skills: ["Power BI", "DAX", "Pandas", "NumPy", "Excel", "Data Modeling", "Data Visualization"],
  },
  {
    title: "AI / Backend",
    skills: ["FastAPI", "Groq API", "Gemini API", "Claude API", "YOLOv8"],
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures & Algorithms", "DBMS", "OOP", "SDLC"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Postman", "Replit"],
  },
];

function SkillCard({ cat, delay }: { cat: SkillCategory; delay: number }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // range -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // range -0.5 to 0.5
    setCoords({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCoords({ x: 0, y: 0 });
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      animate={{
        rotateX: isHovered ? -coords.y * 12 : 0,
        rotateY: isHovered ? coords.x * 12 : 0,
      }}
      className="bg-[var(--surface)] border border-white/10 rounded-2xl p-6 transition-all duration-200 hover:border-[var(--accent)]/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] cursor-default select-none"
    >
      <h3
        style={{ transform: "translateZ(20px)" }}
        className="font-mono text-xs text-[var(--accent)] uppercase tracking-wide mb-4 transition-transform duration-200"
      >
        {cat.title}
      </h3>
      <div
        style={{ transform: "translateZ(10px)" }}
        className="flex flex-wrap gap-2 transition-transform duration-200"
      >
        {cat.skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 15px var(--accent-soft)",
              borderColor: "var(--accent)",
              color: "var(--text)",
            }}
            className="text-sm bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-[var(--text-muted)] transition-colors duration-200 cursor-pointer"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-24 max-w-6xl mx-auto scroll-mt-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-3xl md:text-4xl font-semibold mb-2"
      >
        Skills
      </motion.h2>
      <p className="text-[var(--text-muted)] mb-12">
        Tools and technologies used across the projects above.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <SkillCard key={cat.title} cat={cat} delay={i * 0.05} />
        ))}
      </div>
    </section>
  );
}
