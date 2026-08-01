# Vrihaspati Chaubey — Portfolio

A top-tier, recruiter-facing personal portfolio site featuring a conversational AI assistant with voice input, a slide-up developer CLI console, custom interactive charts, real-time visitor alerts, a theme customizer, and a tailored resume.

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

1. **AI Chatbot with Voice Input**: Speech-to-Text support using the Web Speech API so recruiters can click a microphone and speak their questions natively.
2. **Interactive Developer CLI Console**: A slide-up, retro-themed terminal console supporting shell commands (`help`, `about`, `skills`, `projects`, `contact`, `theme`).
3. **Accent Theme Customizer**: A floating color customizer that lets visitors switch between presets (Indigo, Emerald, Amber, Rose, Violet) with `localStorage` persistence.
4. **3D Holographic Skills Cards**: Cards that tilt and rotate dynamically in 3D perspective based on real-time mouse hover coordinates.
5. **3D Welcome Greeting Overlay**: A premium 3D perspective hologram card showing a welcome handshake scan for 3 seconds.
6. **Traffic Tracker & Visitor Analytics**: Server-side route that captures Vercel geolocation headers (IP, City, Country, User-Agent) and pushes rich notifications to your Discord Server via a private Webhook.
7. **Interactive Resume Sheet & PDF Download**: Custom web resume with print rules and a direct PDF download button linking to `/resume.pdf`.

## Environment Variables

To run the site locally or deploy to Vercel, create a `.env.local` containing:
```env
# Required for AI chatbot answers
GROQ_API_KEY=your_groq_api_key_here

# Optional: Add a Discord Webhook URL to get real-time visitor notifications
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_WEBHOOK_DETAILS
```

## Adding Your Resume PDF
To support the **Download PDF** button:
1. Save your resume as a PDF file named exactly `resume.pdf`.
2. Place this file into the `public/` directory of the project:
   `public/resume.pdf`

## Local Development

```bash
npm install
npm run dev
```
