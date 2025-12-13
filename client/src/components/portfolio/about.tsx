import { motion } from "framer-motion";
import photo1 from "@assets/generated_images/coding_on_laptop.png";
import photo2 from "@assets/generated_images/hackathon_brainstorming.png";
import photo3 from "@assets/generated_images/study_session.png";

export function About() {
  const polaroids = [
    { src: photo1, rotate: -6, z: 1, caption: "Late nights" },
    { src: photo2, rotate: 4, z: 2, caption: "Ideation" },
    { src: photo3, rotate: -3, z: 3, caption: "Focus mode" },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-primary">Myself</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                My journey into tech started with simple curiosity, which quickly turned into a passion for problem-solving. 
                From writing my first lines of Python to diving into the structured world of C, I've fallen in love with 
                those "aha!" moments when logic finally clicks.
              </p>
              <p>
                I'm currently exploring various domains of Computer Science, building my foundation in HTML & CSS, 
                and constantly learning. I believe in a patient approach—understanding the 'why' behind the code 
                is just as important as the syntax.
              </p>
              <p>
                When I'm not coding, I'm usually untangling complex logic or finding new ways to challenge myself. 
                Growth, for me, is a continuous loop of learning, failing, and improving.
              </p>
            </div>
          </motion.div>

          {/* Polaroid Stack */}
          <div className="relative h-[400px] w-full flex items-center justify-center mt-12 md:mt-0">
            <style>{`
              .polaroid-stack {
                position: relative;
                width: 320px;
                height: 380px;
              }
              .polaroid {
                position: absolute;
                width: 260px;
                height: auto;
                padding: 12px;
                background: #fff;
                border-radius: 8px;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                transition: transform 0.4s ease, box-shadow 0.4s ease;
                cursor: pointer;
              }
              .p1 {
                transform: rotate(-8deg) translate(-20px, 10px);
                z-index: 1;
              }
              .p2 {
                transform: rotate(4deg) translate(20px, -10px);
                z-index: 2;
              }
              .p3 {
                transform: rotate(-2deg);
                z-index: 3;
              }
              .polaroid:hover {
                transform: translateY(-20px) scale(1.05);
                box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
                z-index: 20;
              }

              @media (max-width: 768px) {
                .polaroid-stack {
                  margin: 0 auto;
                  transform: scale(0.9);
                }
              }
            `}</style>
            
            <div className="polaroid-stack">
              <div className="polaroid p1">
                <img src={photo1} alt="Late nights" className="w-full h-auto rounded-sm" />
              </div>
              <div className="polaroid p2">
                <img src={photo2} alt="Ideation" className="w-full h-auto rounded-sm" />
              </div>
              <div className="polaroid p3">
                <img src={photo3} alt="Focus mode" className="w-full h-auto rounded-sm" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
