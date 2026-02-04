import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { FloatingShapes } from "./FloatingShapes";
import { Reveal } from "./Reveal";
import portfolioData from "../data/portfolio.json";

export function Hero() {
  const info = portfolioData.personalInfo;

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <FloatingShapes />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left md:flex md:items-center md:justify-between w-full">
        <div className="flex-1 space-y-8">
          <Reveal>
            <h2 className="text-xl md:text-2xl font-medium text-primary">
              Hi, my name is
            </h2>
          </Reveal>
          
          <Reveal>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground">
              {info.name}
            </h1>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground">
              {info.headline}
            </h2>
          </Reveal>

          <Reveal>
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed mt-6">
              {info.bio}
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollTo("#projects")}
                className="group relative px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all flex items-center gap-2"
              >
                Check out my work
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <div className="flex items-center gap-4 px-4">
                <a
                  href={info.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={info.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="hidden md:block relative group">
          <Reveal>
            <div className="relative aspect-square w-80 overflow-hidden rounded-2xl border-2 border-primary/20 bg-card">
              <img 
                src="/images/name.jpg" 
                alt={info.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/avataaars/svg?seed=Raavi";
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
