"use client";

import { motion } from "framer-motion";
import { Mail, Download, MapPin, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import TypewriterText from "@/components/TypewriterText";
import { personal } from "@/data/personal";

export default function Hero() {
  const scrollToResume = () => {
    document.querySelector("#resume")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {personal.availableForWork && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for new opportunities
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            <TypewriterText text={personal.name.split(" ").at(-1) ?? ""} startDelay={600} speed={90} />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 font-light mb-4"
        >
          {personal.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-500 text-lg max-w-2xl mx-auto mb-3"
        >
          {personal.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-1.5 text-gray-600 text-sm mb-10"
        >
          <MapPin className="w-3.5 h-3.5" />
          {personal.location}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-cyan-500/25"
          >
            <Mail className="w-4 h-4" />
            Get in touch
          </a>

          <a
            href={personal.cv}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 font-medium text-sm hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          {personal.github && (
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/10 text-gray-500 hover:text-white hover:border-white/30 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {personal.linkedin && (
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/10 text-gray-500 hover:text-white hover:border-white/30 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={scrollToResume}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
