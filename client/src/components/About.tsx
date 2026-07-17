import { Section } from "./Section";
import { Reveal } from "./Reveal";
import portfolioData from "../data/portfolio.json";

export function About() {
  const info = portfolioData.personalInfo;

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
                {info.bio}
              </p>
              <p className="mt-4">
                I'm passionate about creating intuitive and dynamic user experiences. 
                With a strong foundation in modern web technologies, I strive to build 
                software that solves real-world problems.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="flex justify-center md:justify-start">
          <Reveal>
            <div className="relative group" style={{ width: "260px" }}>
              <div className="absolute inset-0 border-2 border-primary rounded-xl translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 pointer-events-none rounded-xl" />
              <div className="relative rounded-xl overflow-hidden bg-muted grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src="/images/img2.jpeg"
                  alt="About Me"
                  style={{ width: "260px", height: "340px", objectFit: "cover", objectPosition: "top center", display: "block" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://api.dicebear.com/7.x/avataaars/svg?seed=About";
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
