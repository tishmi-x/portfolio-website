import { motion } from "framer-motion";
import { Code2, Globe, Brain, Palette } from "lucide-react";

const skills = [
  {
    category: "Programming",
    icon: <Code2 className="w-8 h-8 text-primary" />,
    items: ["Python (Basic)", "C (Learning)", "DSA (Learning)"],
    description: "Building logic and foundational understanding of computational thinking."
  },
  {
    category: "Web",
    icon: <Globe className="w-8 h-8 text-accent" />,
    items: ["HTML (Basic)", "CSS (Basic)", "Responsive Design"],
    description: "Crafting the visual structure of the web, one tag at a time."
  },
  {
    category: "Concepts",
    icon: <Brain className="w-8 h-8 text-primary" />,
    items: ["Problem Solving", "Competitive Programming", "Data Structures"],
    description: "Sharpening the mind to tackle complex algorithmic challenges."
  },
  {
    category: "Design",
    icon: <Palette className="w-8 h-8 text-accent" />,
    items: ["Minimalism", "UI Principles", "Visual Hierarchy"],
    description: "Understanding how aesthetics meet functionality."
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-display mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 group ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-secondary/20 rounded-xl group-hover:bg-secondary/40 transition-colors">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display mb-3">{skill.category}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span 
                        key={item} 
                        className="px-3 py-1 bg-secondary/30 text-secondary-foreground text-xs rounded-full font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
