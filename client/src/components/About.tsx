import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { usePersonalInfo } from "@/hooks/use-portfolio";

export function About() {
  const { data: info } = usePersonalInfo();

  return (
    <Section id="about" className="bg-secondary/20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-primary font-mono text-xl">01.</span>
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <div className="h-px bg-border flex-1 max-w-[200px]" />
            </div>
          </Reveal>

          <Reveal>
            <div className="prose prose-invert prose-lg text-muted-foreground">
              <p>
                {info?.bio || "Loading bio..."}
              </p>
              <p className="mt-4">
                I'm passionate about creating intuitive and dynamic user experiences. 
                With a strong foundation in modern web technologies, I strive to build 
                software that solves real-world problems.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative group mx-auto md:mx-0">
          <Reveal>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Image Frame/Border Effect */}
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-5 translate-y-5 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
              
              {/* Placeholder for Profile Image */}
              <div className="absolute inset-0 bg-muted rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
                {/* 
                  Add an actual image here if user uploads one. 
                  For now, using a stylish gradient placeholder 
                */}
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
