"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Wifi } from "lucide-react";
import { experiences } from "@/data/experience";

function formatDate(dateStr: string): string {
  if (dateStr === "present") return "Present";
  const [year, month] = dateStr.split("-");
  const date = new Date(Number(year), Number(month) - 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function getDuration(start: string, end: string | "present"): string {
  const startDate = new Date(start.replace("-", "/") + "/01");
  const endDate = end === "present" ? new Date() : new Date(end.replace("-", "/") + "/01");
  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(months / 12);
  const rem = months % 12;
  const parts = [];
  if (years > 0) parts.push(`${years}y`);
  if (rem > 0) parts.push(`${rem}m`);
  return parts.join(" ");
}

const typeLabel = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  freelance: "Freelance",
  internship: "Internship",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Where I&apos;ve Worked
          </h2>
          <p className="text-gray-400">
            My professional journey and the places that shaped my skills.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-cyan-500/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-1.5 w-3 h-3 -translate-x-1/2 rounded-full border-2 border-violet-500 bg-gray-950 shadow-lg shadow-violet-500/30" />

                <div className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 hover:border-violet-500/30 hover:bg-white/[0.05] transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-violet-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <Briefcase className="w-3.5 h-3.5 text-gray-500" />
                        <span className="text-gray-300 font-medium">{exp.company}</span>
                        <span className="text-gray-600 text-xs px-2 py-0.5 rounded-full border border-gray-700">
                          {typeLabel[exp.type]}
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-sm">
                      <p className="text-gray-400 font-medium">
                        {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                      </p>
                      <p className="text-gray-600 text-xs">
                        {getDuration(exp.startDate, exp.endDate)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                    {exp.remote && (
                      <span className="flex items-center gap-1 text-cyan-500/70">
                        <Wifi className="w-3 h-3" />
                        Remote
                      </span>
                    )}
                  </div>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {exp.achievements.length > 0 && (
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-violet-400 mt-0.5 shrink-0">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-mono text-violet-300/70 bg-violet-500/10 border border-violet-500/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
