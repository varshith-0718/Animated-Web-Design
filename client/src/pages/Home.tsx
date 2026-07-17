import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { GithubProjects } from "@/components/GithubProjects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      
      <main className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <GithubProjects />
        <Skills />
      </main>

      <footer className="py-8 text-center text-muted-foreground text-sm font-mono border-t border-border/10 mt-20">
        <p>Built with React, Tailwind & Framer Motion</p>
      </footer>
    </div>
  );
}
