# Vrihaspati Chaubey — Portfolio

A top-tier, recruiter-facing personal portfolio site featuring a conversational AI assistant, custom interactive charts, real-time visitor alerts, a keyboard-driven command palette, and a tailored resume.

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

1. **AI Chatbot (Groq)**: Instant conversational queries grounded directly on Vrihaspati's projects, experience, and certifications.
2. **3D Welcome Greeting Overlay**: A premium CSS 3D perspective hologram card showing a secure handshake scan upon visiting. Skip controls via `sessionStorage` prevent repetition.
3. **Interactive Resume Sheet & PDF Download**: Custom web resume with print rules (`@media print` for clean A4 printing) and a direct PDF download button.
4. **Traffic Tracker & Visitor Analytics**: Server-side route that captures Vercel geolocation headers (IP, City, Country, User-Agent) and pushes rich notifications to your Discord Server via a private Webhook.
5. **Command Palette (`⌘K`)**: A keyboard-driven command center for navigation shortcuts and social profile links.
6. **Fluid Visuals**: Custom mouse-trailing spring cursor, D3-like interactive skill nodes, and active GitHub API live fetch status.

## Project Status

| Section | Status |
|---|---|
| Design System & Custom Tokens | Done |
| Interactive Skills Graph | Done |
| GitHub Live Data integration | Done |
| Selected Work & Projects | Done |
| Timeline & Hackathons | Done |
| Interactive Resume Sheet & PDF Download | Done |
| Real-time Visitor Discord Alerts | Done |
| 3D Welcome Greeting Screen | Done |

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
3. The "Download PDF" button will immediately pick up and serve the file to recruiters.

## Local Development

```bash
npm install
npm run dev
```
