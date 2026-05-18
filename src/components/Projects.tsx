"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, Clock, Archive } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projects, type Project } from "@/data/projects";

const statusConfig = {
  completed: { label: "Completed", icon: Star, color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" },
  "in-progress": { label: "In Progress", icon: Clock, color: "text-amber-400 border-amber-500/30 bg-amber-500/10" },
  archived: { label: "Archived", icon: Archive, color: "text-gray-400 border-gray-500/30 bg-gray-500/10" },
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const status = statusConfig[project.status];
  const StatusIcon = status.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-6 hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-300 ${
        project.featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-violet-500/0 group-hover:from-cyan-500/5 group-hover:to-violet-500/5 transition-all duration-500" />

      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${status.color}`}>
              <StatusIcon className="w-3 h-3" />
              {status.label}
            </span>
            <span className="text-xs text-gray-600">{project.year}</span>
          </div>
          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-600 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-gray-600 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
                aria-label="Live demo"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.featured && project.longDescription
            ? project.longDescription
            : project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs font-mono text-cyan-300/70 bg-cyan-500/10 border border-cyan-500/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | Project["status"]>("all");

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const filtered =
    filter === "all" ? rest : rest.filter((p) => p.status === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Things I&apos;ve Built
          </h2>
          <p className="text-gray-400 max-w-xl">
            A selection of projects I&apos;ve worked on — from production systems to
            personal experiments.
          </p>
        </motion.div>

        {/* Featured projects */}
        {featured.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}

        {/* Filter tabs */}
        {rest.length > 0 && (
          <>
            <div className="flex items-center gap-2 mb-6">
              {(["all", "completed", "in-progress", "archived"] as const).map(
                (f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                      filter === f
                        ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                        : "text-gray-500 hover:text-gray-300 border border-transparent"
                    }`}
                  >
                    {f === "all" ? "All" : statusConfig[f].label}
                  </button>
                )
              )}
            </div>

            <AnimatePresence mode="popLayout">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
}
