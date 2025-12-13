import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Skills } from "@/components/portfolio/skills";
import { Achievements } from "@/components/portfolio/achievements";
import { Contact } from "@/components/portfolio/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}
