"use client";

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
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-[var(--surface)] border border-white/10 rounded-2xl p-6"
          >
            <h3 className="font-mono text-xs text-[var(--accent)] uppercase tracking-wide mb-4">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-[var(--text)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
