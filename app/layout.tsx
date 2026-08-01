import type { Metadata } from "next";
import WelcomeGreeting from "@/components/ui/WelcomeGreeting";
import CustomCursor from "@/components/ui/CustomCursor";
import CommandPalette from "@/components/ui/CommandPalette";
import ThemeCustomizer from "@/components/ui/ThemeCustomizer";
import TerminalConsole from "@/components/ui/TerminalConsole";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vrihaspati Chaubey | AI/ML & Full-Stack Developer",
  description:
    "Portfolio of Vrihaspati Chaubey — AI/ML Engineer, Full-Stack Developer & Data Analyst. Interactive AI assistant, featured projects, skills & timeline.",
  keywords: [
    "Vrihaspati Chaubey",
    "AI/ML Developer",
    "Full Stack Developer",
    "Data Analyst",
    "Portfolio",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
  ],
  authors: [{ name: "Vrihaspati Chaubey" }],
  openGraph: {
    title: "Vrihaspati Chaubey | AI/ML & Full-Stack Developer",
    description:
      "Interactive AI portfolio featuring real-time assistant, selected projects, data analytics, and hackathon highlights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,300,400,500,600,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text)] selection:bg-[var(--accent)] selection:text-white">
        <ThemeCustomizer />
        <TerminalConsole />
        <WelcomeGreeting />
        <CustomCursor />
        <CommandPalette />
        {children}
      </body>
    </html>
  );
}
