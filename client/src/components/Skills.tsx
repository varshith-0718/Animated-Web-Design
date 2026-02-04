import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { useSkills } from "@/hooks/use-portfolio";
import { motion } from "framer-motion";

export function Skills() {
  const { data: skills, isLoading } = useSkills();

  if (isLoading) return null;

  return (
    <Section id="skills">
      <Reveal>
        <div className="flex items-center gap-4 mb-12">
          <span className="text-primary font-mono text-xl">04.</span>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
          <div className="h-px bg-border flex-1 max-w-[200px]" />
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills?.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-card/50 rounded-2xl p-6 border border-border/50 hover:border-border transition-all"
          >
            <h3 className="text-xl font-bold mb-6 text-primary border-b border-border/50 pb-2 inline-block">
              {category.category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.items.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-secondary-foreground border border-transparent hover:border-primary/30 hover:bg-secondary/80 transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
