"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Code, Download } from "lucide-react";
import Magnetic from "../ui/Magnetic";

export default function Resume() {
  return (
    <section id="resume" className="px-6 md:px-16 py-24 max-w-6xl mx-auto scroll-mt-16">
      {/* Self-contained print styling */}
      <style jsx global>{`
        @media print {
          /* Hide everything except the printable resume container */
          body * {
            visibility: hidden;
            background: transparent !important;
          }
          #resume-sheet, #resume-sheet * {
            visibility: visible;
          }
          #resume-sheet {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 20px;
            background: white !important;
            color: black !important;
            box-shadow: none !important;
            border: none !important;
          }
          /* Ensure text reads cleanly on white paper */
          #resume-sheet p, 
          #resume-sheet span, 
          #resume-sheet li, 
          #resume-sheet h1, 
          #resume-sheet h2, 
          #resume-sheet h3 {
            color: #000000 !important;
          }
          #resume-sheet a {
            color: #0000ff !important;
            text-decoration: underline !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-semibold mb-2"
          >
            Resume
          </motion.h2>
          <p className="text-[var(--text-muted)] text-sm">
            Recruiter-ready resume sheet. Click Print to export a clean PDF.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 no-print">
          <Magnetic range={40} strength={0.2}>
            <a
              href="/resume.pdf"
              download="Vrihaspati_Chaubey_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="resume-download-btn"
              className="flex items-center gap-2 px-4 py-2.5 bg-[var(--accent-soft)] border border-[var(--accent)]/20 hover:border-[var(--accent)] hover:bg-[var(--accent)]/30 text-[var(--accent)] hover:text-white rounded-xl text-xs font-mono transition-all cursor-pointer select-none"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
          </Magnetic>
        </div>
      </div>

      {/* Styled Resume Sheet Container */}
      <motion.div
        id="resume-sheet"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[var(--surface)] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
      >
        {/* Header Section */}
        <div className="border-b border-white/10 pb-6 mb-8 text-center md:text-left flex flex-col md:flex-row justify-between items-start gap-4">
          <div>
            <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">
              Vrihaspati Chaubey
            </h1>
            <p className="text-sm font-mono text-[var(--accent)] mt-1">
              Full Stack Developer & Data Analyst
            </p>
          </div>
          <div className="text-xs font-mono text-[var(--text-muted)] space-y-1 md:text-right">
            <p>Bhopal, Madhya Pradesh, India</p>
            <p>
              <a href="mailto:vrihaspatichaubey@gmail.com" className="hover:text-[var(--text)] transition-colors">
                vrihaspatichaubey@gmail.com
              </a>
            </p>
            <p>
              <a href="https://linkedin.com/in/vrihaspatichaubey" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)] transition-colors">
                linkedin.com/in/vrihaspatichaubey
              </a>
            </p>
            <p>
              <a href="https://github.com/vrihaspati07" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)] transition-colors">
                github.com/vrihaspati07
              </a>
            </p>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-8">
          <h2 className="font-display text-lg font-bold text-[var(--text)] mb-3 flex items-center gap-2">
            <span>Summary</span>
          </h2>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            Computer Science undergraduate with hands-on experience in Java, HTML5, CSS3, and JavaScript, building full-stack and AI-integrated web applications. Comfortable working with live projects under real-world constraints, with a track record of shipping deployable products in hackathons and internships. Solid grounding in OOP, DSA, DBMS, and SDLC, and quick to pick up new platforms and tools in a team setting.
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="mb-8">
          <h2 className="font-display text-lg font-bold text-[var(--text)] mb-4 flex items-center gap-2">
            <Code size={18} className="text-[var(--accent)] shrink-0" />
            <span>Technical Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-xs font-mono text-[var(--text-muted)]">
            <div className="p-3.5 bg-white/5 border border-white/5 rounded-xl">
              <span className="text-[var(--text)] font-semibold block mb-1">Core Languages</span>
              <span>Java, JavaScript (ES6+), Python, SQL, C++</span>
            </div>
            <div className="p-3.5 bg-white/5 border border-white/5 rounded-xl">
              <span className="text-[var(--text)] font-semibold block mb-1">Web Development</span>
              <span>HTML5, CSS3, React.js, Node.js, Express.js, Next.js, Tailwind CSS, REST APIs, MongoDB</span>
            </div>
            <div className="p-3.5 bg-white/5 border border-white/5 rounded-xl">
              <span className="text-[var(--text)] font-semibold block mb-1">Data & Analytics</span>
              <span>Power BI, DAX, Pandas, NumPy, Data Modeling, MS Excel</span>
            </div>
            <div className="p-3.5 bg-white/5 border border-white/5 rounded-xl">
              <span className="text-[var(--text)] font-semibold block mb-1">Tools & Core Concepts</span>
              <span>Git, GitHub, VS Code, Postman, Replit, OOP, DSA, DBMS, SDLC</span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="font-display text-lg font-bold text-[var(--text)] mb-4 flex items-center gap-2">
            <Briefcase size={18} className="text-[var(--accent)] shrink-0" />
            <span>Work Experience</span>
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-display font-semibold text-sm text-[var(--text)]">
                  AI Web Development Intern
                </h3>
                <span className="text-xs font-mono text-[var(--text-muted)] whitespace-nowrap">
                  June 2026 – Present
                </span>
              </div>
              <p className="text-xs font-mono text-[var(--accent)]">InAmigos Foundation · Remote</p>
              <ul className="list-disc pl-5 mt-2 text-xs text-[var(--text-muted)] space-y-1.5 leading-relaxed">
                <li>Build and maintain AI-assisted web projects — including a portfolio site and a freelancer portfolio deployed on GitHub — applying core HTML/CSS/JavaScript and software design principles.</li>
                <li>Delivered a website analysis report and Figma-style design assessments as part of structured internship evaluation tasks.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start gap-4">
                <h3 className="font-display font-semibold text-sm text-[var(--text)]">
                  Internshala Student Partner (ISP)
                </h3>
                <span className="text-xs font-mono text-[var(--text-muted)] whitespace-nowrap">
                  Aug 2025 – Oct 2025
                </span>
              </div>
              <p className="text-xs font-mono text-[var(--accent)]">Internshala · Virtual</p>
              <ul className="list-disc pl-5 mt-2 text-xs text-[var(--text-muted)] space-y-1.5 leading-relaxed">
                <li>Promoted 15+ virtual training programs to a peer network of 200+ students, working independently with reducing supervision.</li>
                <li>Analyzed weekly participation data of 500+ students to produce outreach recommendations, collaborating with 4 developers on feedback tooling.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="font-display text-lg font-bold text-[var(--text)] mb-4 flex items-center gap-2">
            <GraduationCap size={18} className="text-[var(--accent)] shrink-0" />
            <span>Education</span>
          </h2>
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="font-display font-semibold text-sm text-[var(--text)]">
                Sagar Institute of Research & Technology (SIRT), Bhopal
              </h3>
              <p className="text-xs text-[var(--text-muted)] mt-1">
                Bachelor of Technology in Computer Science & Technology (B.Tech CSE)
              </p>
            </div>
            <span className="text-xs font-mono text-[var(--text-muted)] whitespace-nowrap">
              2023 – 2027
            </span>
          </div>
          <p className="text-xs font-mono text-[var(--accent)] mt-1">CGPA: 8.0 (Ongoing)</p>
        </div>

        {/* Certifications & Achievements */}
        <div>
          <h2 className="font-display text-lg font-bold text-[var(--text)] mb-4 flex items-center gap-2">
            <Award size={18} className="text-[var(--accent)] shrink-0" />
            <span>Certifications & Achievements</span>
          </h2>
          <ul className="grid md:grid-cols-2 gap-2 text-xs text-[var(--text-muted)] list-disc pl-5">
            <li>2nd Place (200+ teams) — GenAI Hackathon, ML Bhopal 2025</li>
            <li>Data Analytics with Power BI — Sage Summer School (2025)</li>
            <li>AI/ML for Geodata Analysis — ISRO / IIRS (2024)</li>
            <li>Introduction to Python — Infosys Springboard (2024)</li>
            <li>Data Analytics Job Simulation — Deloitte (via Forage, 2026)</li>
            <li>Git & GitHub — Bug Busters Community</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
