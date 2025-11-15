import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const list = [
    {
      title: "Data-Driven Business Management Platform",
      desc: "Stack: Laravel, Vue.js, MySQL, Redis, Docker, Nginx.",
      image: "/p1.jpg",
      detail: "Developed a business management platform for Qantara that integrates inventory, order processing, and reporting into a unified system.",
    },
    {
      title: "E-commerce Integration & Automation",
      desc: "Stack: Node.js/Express, React, PostgreSQL,Stripe.",
      image: "/p2.jpg",
      detail: "Integrated an e-commerce platform with a payment gateway and automated shipping system.",
    },
    {
      title: "Internal Dashboard & Automation (Small-scale)",
      desc: "Stack: Laravel, Tailwind CSS, MySQL.",
      image: "/p3.jpg",
      detail: "Developed an internal dashboard for monitoring KPIs and task reminders.",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black">
      <Reveal>
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Projects
        </h2>

        {/* GRID PROJECT */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          {list.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateX: 8, rotateY: -8 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
              onClick={() => setSelected(p)}
              className="relative cursor-pointer group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
            >
              <img
                src={p.image}
                className="w-full aspect-[16/6] object-contain bg-black rounded-xl group-hover:opacity-100 transition-all duration-300"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-2xl font-semibold text-white">{p.title}</h3>
                <p className="text-white/60">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Reveal>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl flex items-center justify-center z-[999]"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white/10 border border-white/20 p-8 rounded-2xl max-w-xl text-white shadow-2xl"
            >
              <img
  src={selected.image}
  className="w-full object-contain max-h-[70vh] bg-black rounded-xl mb-4"
/>

              <h3 className="text-3xl font-bold mb-2">{selected.title}</h3>
              <p className="text-white/60 mb-6">{selected.detail}</p>

              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
