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

1. **AI Chatbot with Conversational Memory & Voice Support**: 
   - **Voice Support**: Hands-free Speech-to-Text inputs (Web Speech API) and Text-to-Speech responses (`speechSynthesis` API).
   - **Conversational Memory**: Retains the last 6 turns of chat history context using the Groq API (LLaMA 3.3 70B) to intelligently address follow-up questions.
2. **Discord Contact Alerts**: Contact form submissions actually route user message payloads (name, email, text) to your private Discord server as a beautifully styled Rich Embed via a serverless POST route (`/api/contact`).
3. **Accent Theme Customizer & Event Sync**: A settings panel to select color accents (Indigo, Emerald, Amber, Rose, Violet). Includes DOM custom event listeners to sync preset updates in real-time between the floating customizer, slide-up CLI, and backdrop particles.
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
