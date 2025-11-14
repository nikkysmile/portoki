import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Projects() {
  const list = [
    {
      title: "Premium Portfolio",
      desc: "Luxury animated portfolio built with React + Tailwind + Motion.",
    },
    {
      title: "Dashboard System",
      desc: "Interactive admin dashboard with real-time UI animations.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black">
      <Reveal>
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projects
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          {list.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                rotateX: 8,
                rotateY: -8,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              className="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl text-white cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-3">{p.title}</h3>
              <p className="text-white/60">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
