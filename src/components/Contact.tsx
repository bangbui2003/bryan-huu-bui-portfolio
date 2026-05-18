"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personal } from "@/data/personal";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of something exciting. My inbox is always
            open — feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-cyan-500/20"
            >
              <Mail className="w-4 h-4" />
              {personal.email}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            {personal.github && (
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
            )}
            {personal.linkedin && (
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
