import { motion } from "framer-motion";
import photo1 from "@assets/engineer.png";
import photo2 from "@assets/friends.png";
import photo3 from "@assets/single.png";

export function About() {
  const content = [
    {
      image: photo1,
      text: "I’m a Computer Science undergraduate who gradually developed an interest in technology through problem-solving. While I initially chose the field for its stability, my curiosity grew as I began spending time solving coding problems and understanding the logic behind them.",
    },
    {
      image: photo2,
      text: "I started my programming journey with Python and am currently learning C, focusing on strengthening my fundamentals. I enjoy the process of tackling challenging problems — especially the moments when a problem that once felt difficult suddenly becomes simple through understanding.",
    },
    {
      image: photo3,
      text: "As I continue learning, I’m actively exploring different areas within computer science to better understand where my interests align. I also have a basic foundational understanding of HTML and CSS, gained through school-level learning and hands-on practice on platforms like freeCodeCamp. I approach my journey with curiosity and patience, balancing academics, problem-solving, and continuous learning as I grow in the field.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold font-display mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="space-y-16">
          {content.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/3 shrink-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg group">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                  <img
                    src={item.image}
                    alt={`About me ${index + 1}`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-2/3">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
