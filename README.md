# Vrihaspati Chaubey — Portfolio

Personal portfolio site with an embedded AI assistant that answers questions
about my projects, skills, and experience in real time.

**Live:** vrihaspati.me *(not live yet — in development)*

## Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4, custom design tokens
- **Animation:** Framer Motion
- **AI Chat:** Groq API (LLaMA 3.3 70B)
- **Fonts:** Bricolage Grotesque, General Sans, JetBrains Mono (Fontshare)
- **Hosting (planned):** Vercel
- **Domain:** vrihaspati.me (Namecheap, via GitHub Student Developer Pack)

## Project Status

| Section | Status |
|---|---|
| Design system (colors, type) | Done |
| Hero section | Done |
| AI chatbot (Groq) | Built — debugging 500 error |
| Skill graph (D3, interactive) | Done |
| GitHub live data | Done |
| Projects (case studies) | Not started |
| Hackathon/seminar timeline | Not started |
| Deploy + domain connect | Not started |

## Local Development

```bash
npm install
npm run dev
```

Requires a `.env.local` file with:
```
GROQ_API_KEY=your_key_here
```

## Structure

```
app/
  page.tsx          - home page
  api/chat/route.ts - Groq chatbot endpoint
components/
  sections/          - page sections (Hero, etc.)
  ui/                - reusable UI primitives
lib/
  profile-context.ts - real resume/project data fed to the AI assistant
```

## Notes

This README is kept up to date as sections are built — see Project Status
table above for current progress.
