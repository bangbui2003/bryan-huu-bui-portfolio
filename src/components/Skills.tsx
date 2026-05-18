"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

const categoryColors: Record<string, { pill: string; border: string; glow: string }> = {
  frontend:      { pill: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20 hover:bg-cyan-500/20",    border: "border-cyan-500/20",    glow: "group-hover:border-cyan-500/40" },
  backend:       { pill: "bg-violet-500/10 text-violet-300 border-violet-500/20 hover:bg-violet-500/20", border: "border-violet-500/20", glow: "group-hover:border-violet-500/40" },
  "cloud-devops":{ pill: "bg-amber-500/10 text-amber-300 border-amber-500/20 hover:bg-amber-500/20",   border: "border-amber-500/20",   glow: "group-hover:border-amber-500/40" },
  "database-tools":{ pill: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20", border: "border-emerald-500/20", glow: "group-hover:border-emerald-500/40" },
};

const fallbackColor = { pill: "bg-gray-500/10 text-gray-300 border-gray-500/20 hover:bg-gray-500/20", border: "border-gray-500/20", glow: "group-hover:border-gray-500/40" };

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What I Work With
          </h2>
          <p className="text-gray-400">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillCategories.map((category, catIndex) => {
            const colors = categoryColors[category.id] ?? fallbackColor;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className={`group rounded-2xl border ${colors.border} ${colors.glow} bg-white/[0.03] p-6 transition-colors duration-300`}
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xl">{category.icon}</span>
                  <h3 className="text-white font-semibold text-sm">{category.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: catIndex * 0.05 + skillIndex * 0.04 }}
                      className={`px-3 py-1.5 rounded-full border text-xs font-medium cursor-default transition-all duration-200 ${colors.pill}`}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
