# Vrihaspati Chaubey — Portfolio

A top-tier, recruiter-facing personal portfolio site featuring a conversational AI assistant with voice input & text-to-speech voice responses, a slide-up developer CLI console, custom interactive charts, real-time visitor alerts, a theme customizer, an inline PDF viewer, and a tailored resume.

**Live:** [vrihaspati.me](https://vrihaspati.me)

## Tech Stack

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4, custom glassmorphism
- **Animation:** Framer Motion
- **AI Chat:** Groq API (LLaMA 3.3 70B)
- **Fonts:** Bricolage Grotesque, General Sans, JetBrains Mono
- **Hosting:** Vercel (Free Tier)
- **Domain:** vrihaspati.me (Namecheap, via GitHub Student Developer Pack)

## Key Features

1. **AI Chatbot with Voice Input & Output**: 
   - **Voice Input**: Speech-to-Text support using the Web Speech API so recruiters can click a microphone and speak their questions natively.
   - **Voice Response**: Text-to-Speech support via native `speechSynthesis` API, allowing users to listen to AI responses read aloud with clean formatting (JARVIS style).
2. **Sleek PDF Resume Inline Viewer**: Enables recruiters to click "View Resume" and read your full resume PDF (`public/resume.pdf`) directly inside a custom full-screen modal without leaving your page.
3. **Accent Theme Customizer**: A floating settings panel allowing visitors to change the accent color theme (presets: Indigo, Emerald, Amber, Rose, Violet) in real-time. Selection state is saved in `localStorage`.
4. **Dynamic Background Aura Sync**: Integrates the theme customizer with the canvas rendering loop inside `HeroCanvas.tsx`. Changing themes dynamically shifts the glowing backdrop blur particles to match.
5. **Interactive Developer CLI Console**: A slide-up, retro-themed terminal console supporting standard commands (`help`, `about`, `skills`, `projects`, `contact`, `theme`).
6. **3D Holographic Skills Cards**: Skills categories tilt and rotate in 3D perspective following mouse movements. Individual badges react with spring-physics scale animations.
7. **3D Welcome Greeting Overlay**: A premium 3D perspective hologram showing a welcoming greeting scanner animation for 3 seconds.
8. **Traffic Tracker & Visitor Analytics**: Silently fetches Vercel geolocation headers (IP, City, Country, User-Agent) on load and alerts your private Discord server via Webhook.

## Environment Variables

To run the site locally or deploy to Vercel, create a `.env.local` containing:
```env
# Required for AI chatbot answers
GROQ_API_KEY=your_groq_api_key_here

# Optional: Add a Discord Webhook URL to get real-time visitor notifications
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_DETAILS
```

## Adding Your Resume PDF
To support the **Download PDF** and **View Resume** buttons:
1. Save your resume as a PDF file named exactly `resume.pdf`.
2. Place this file into the `public/` directory of the project:
   `public/resume.pdf`

## Local Development

```bash
npm install
npm run dev
```
