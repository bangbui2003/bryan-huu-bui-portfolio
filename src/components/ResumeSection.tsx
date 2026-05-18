"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const PDFViewer = dynamic(() => import("@/components/PDFViewer"), {
  ssr: false,
  loading: () => (
    <div className="rounded-2xl border border-white/10 bg-gray-900/40 h-[300px] flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-cyan-500/40 border-t-cyan-400 rounded-full animate-spin" />
        <span className="text-gray-500 text-sm">Loading PDF viewer…</span>
      </div>
    </div>
  ),
});

export default function ResumeSection() {
  return (
    <section id="resume" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >

          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-gray-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              My CV
            </h2>
          </div>
          <p className="text-gray-400 mt-2 text-sm">
            Scroll through inline · expand to full screen · or download a copy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <PDFViewer file="/cv.pdf" />
        </motion.div>
      </div>
    </section>
  );
}
