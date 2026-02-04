import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useExperiences } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";

export function Experience() {
  const { data: experiences, isLoading } = useExperiences();

  if (isLoading) return null;

  return (
    <Section id="experience">
      <div className="max-w-3xl mx-auto w-full">
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <span className="text-primary font-mono text-xl">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Where I've Worked</h2>
            <div className="h-px bg-border flex-1 max-w-[200px]" />
          </div>
        </Reveal>

        <div className="space-y-12 border-l border-border ml-3 md:ml-0 pl-8 md:pl-0">
          {experiences?.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative md:pl-8 group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[33px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors hidden md:block" />
              
              {/* Mobile Timeline dot */}
              <div className="absolute -left-[39px] top-1 h-3 w-3 rounded-full bg-primary md:hidden" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  {exp.role} <span className="text-primary">@ {exp.company}</span>
                </h3>
                <span className="font-mono text-sm text-muted-foreground whitespace-nowrap mt-1 sm:mt-0">
                  {exp.duration}
                </span>
              </div>

              <div className="text-muted-foreground mb-4">
                {exp.description}
              </div>

              {exp.highlights && (
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground/80">
                      <span className="text-primary mt-1.5 text-[10px]">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {exp.environment && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.environment.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
