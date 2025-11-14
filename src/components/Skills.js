import { motion } from "framer-motion";
import { useState } from "react";

export default function Skills() {
  const [open, setOpen] = useState(null);

  const categories = [
    {
      title: "Frontend",
      items: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Vue", level: 65 },
        { name: "Tailwind", level: 90 },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "PHP", level: 85 },
        { name: "Laravel", level: 80 },
        { name: "Node.js", level: 70 },
        { name: "Express", level: 65 },
        { name: "REST API", level: 80 },
      ],
    },
    {
      title: "Database",
      items: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 70 },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 60 },
        { name: "Nginx", level: 70 },
      ],
    },
    {
      title: "Security",
      items: [
        { name: "Cybersecurity", level: 70 },
        { name: "Authentication", level: 75 },
        { name: "Encryption", level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Expertise</h2>

      <div className="max-w-3xl mx-auto space-y-4 px-6">
        {categories.map((cat, index) => (
          <div key={index}>
            {/* Accordion Button */}
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full flex justify-between items-center bg-white/10 
              backdrop-blur-xl px-5 py-4 rounded-xl border border-white/10
              hover:bg-white/20 transition-all duration-300"
            >
              <span className="text-xl font-semibold">{cat.title}</span>

              <motion.span
                animate={{ rotate: open === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl"
              >
                ▼
              </motion.span>
            </button>

            {/* Content */}
            {open === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 border border-white/10 rounded-xl mt-2 p-5 space-y-5"
              >
                {cat.items.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-3 bg-white/10 rounded-lg overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.9, delay: i * 0.1 }}
                        className="h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
