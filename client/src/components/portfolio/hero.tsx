import { motion } from "framer-motion";
import { Coffee, Code, Sparkles } from "lucide-react";
import avatarImage from "@assets/avatar_update.png";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,127,163,0.05),transparent_70%)]" />
      
      <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12 flex items-center justify-center">
        {/* Rotating Text */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-full"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[9px] uppercase font-bold tracking-[0.2em] fill-primary font-display">
              <textPath href="#circlePath">
                MISHTI GOEL UNDERGRADUATE MISHTI GOEL UNDERGRADUATE
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Avatar */}
        <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-background shadow-xl z-10">
          <img 
            src={avatarImage} 
            alt="Mishti Goel" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center max-w-2xl px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 tracking-tight">
          Mishti Goel
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-8">
          Computer Science Undergraduate | Beginner Developer
        </h2>
        
        <div className="flex flex-col items-center gap-4">
          <p className="text-lg text-foreground/80 leading-relaxed italic">
            “Currently juggling assignments, problem-solving, curiosity, caffeine, and a little chaos.”
          </p>
          <div className="flex gap-4 text-primary/60 mt-2">
            <Code className="w-5 h-5" />
            <Coffee className="w-5 h-5" />
            <Sparkles className="w-5 h-5" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
