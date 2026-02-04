import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { FloatingShapes } from "./FloatingShapes";
import { usePersonalInfo } from "@/hooks/use-portfolio";
import { Reveal } from "./Reveal";

export function Hero() {
  const { data: info, isLoading } = usePersonalInfo();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) return <div className="h-screen bg-background" />;

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
              {info?.name || "Loading..."}
            </h1>
          </Reveal>

          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold text-muted-foreground">
              {info?.headline || "I build things for the web."}
            </h2>
          </Reveal>

          <Reveal>
            <p className="max-w-xl text-lg text-muted-foreground leading-relaxed mt-6">
              {info?.bio || "I'm a software engineer specializing in building exceptional digital experiences."}
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
                {info?.socialLinks?.github && (
                  <a
                    href={info.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                )}
                {info?.socialLinks?.linkedin && (
                  <a
                    href={info.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                )}
                {info?.socialLinks?.email && (
                  <a
                    href={`mailto:${info.socialLinks.email}`}
                    className="p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-primary transition-all"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      
      {/* Scroll indicator */}
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
