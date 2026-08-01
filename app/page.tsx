import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Resume from "@/components/sections/Resume";
import Timeline from "@/components/sections/Timeline";
import GithubLive from "@/components/sections/GithubLive";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Resume />
        <Timeline />
        <GithubLive />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
