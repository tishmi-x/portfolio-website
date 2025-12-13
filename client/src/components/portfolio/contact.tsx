import { motion } from "framer-motion";
import { Github, Instagram, Send, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-6">
            <Mail className="w-8 h-8 text-foreground" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">Let's Connect</h2>
          
          <div className="bg-secondary/20 p-6 md:p-8 rounded-3xl rounded-tl-none text-left w-full shadow-sm mb-12 relative">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              "Hey! Whether you want to discuss a project, share some coding tips, or just say hi, I'm always open to a chat. Drop me an email or connect on socials!"
            </p>
            <div className="absolute -left-2 -top-2 w-4 h-4 bg-secondary/20 [clip-path:polygon(100%_0,0_0,100%_100%)]" />
          </div>

          <a 
            href="mailto:mishtigoelofficial@gmail.com" 
            className="text-xl md:text-2xl font-bold text-primary hover:text-accent transition-colors mb-12 border-b-2 border-primary/20 hover:border-accent pb-1"
          >
            mishtigoelofficial@gmail.com
          </a>

          <div className="flex gap-8">
            <a 
              href="https://github.com/tishmi-x" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium">Instagram</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/mishti-goel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-[#0077b5] text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <Send className="w-5 h-5 -ml-1 mt-1" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>

        </motion.div>
      </div>
      
      <footer className="w-full text-center py-8 mt-12 text-muted-foreground text-sm border-t">
        <p>© {new Date().getFullYear()} Mishti Goel. Designed with curiosity.</p>
      </footer>
    </section>
  );
}
