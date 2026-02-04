import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useProjects } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

export function Projects() {
  const { data: projects, isLoading } = useProjects();

  if (isLoading) return null;

  return (
    <Section id="projects" className="bg-secondary/20">
      <Reveal>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-xl">03.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Some Things I've Built</h2>
          <div className="h-px bg-border flex-1 max-w-[200px]" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-secondary/50 rounded-lg text-primary group-hover:bg-primary/10 transition-colors">
                <Folder size={24} />
              </div>
              <div className="flex gap-4">
                {/* 
                  Assuming 'link' could be a GitHub link or live demo. 
                  In a real app, you might want separate fields.
                */}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground mb-4 flex-grow text-sm leading-relaxed">
              {project.description}
            </p>

            {project.highlights && (
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                {project.highlights.slice(0, 4).map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs font-mono text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
