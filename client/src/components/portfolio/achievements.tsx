import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import achievementImage from "@assets/generated_images/hackathon_trophy.png";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold font-display mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-secondary p-8 rounded-2xl shadow-xl border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-primary-foreground">
              <Trophy className="w-24 h-24" />
            </div>
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary-foreground text-xs font-bold rounded-full mb-4 border border-primary/20">
                WINNER
              </span>
              <h3 className="text-2xl font-bold font-display mb-2 text-secondary-foreground">DevJams Hackathon</h3>
              <p className="text-secondary-foreground/70 mb-6">First Place Winner</p>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-secondary-foreground/90">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  Structured and designed the final presentation for the pitch.
                </li>
                <li className="flex items-start gap-3 text-sm text-secondary-foreground/90">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  Led ideation discussions and critical team decision-making.
                </li>
                <li className="flex items-start gap-3 text-sm text-secondary-foreground/90">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  Gained hands-on experience in a high-pressure collaborative environment.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <img 
                src={achievementImage} 
                alt="Trophy Illustration" 
                className="w-full h-full object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
