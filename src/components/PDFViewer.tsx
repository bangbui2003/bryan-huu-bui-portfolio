"use client";

import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
  Maximize2,
  X,
} from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// ── Controls bar ────────────────────────────────────────────────────────────

type ControlBarProps = {
  page: number;
  numPages: number;
  scale: number;
  file: string;
  onPrev: () => void;
  onNext: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onExpand?: () => void;
  onClose?: () => void;
};

function ControlBar({
  page, numPages, scale, file,
  onPrev, onNext, onZoomIn, onZoomOut, onExpand, onClose,
}: ControlBarProps) {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 bg-gray-900/70 backdrop-blur-sm flex-shrink-0">
      {/* Page navigation */}
      <div className="flex items-center gap-1">
        <button
          onClick={onPrev}
          disabled={page <= 1}
          className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 disabled:opacity-30 transition-all"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-xs text-gray-400 tabular-nums min-w-[52px] text-center">
          {page} / {numPages || "—"}
        </span>
        <button
          onClick={onNext}
          disabled={page >= numPages}
          className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 disabled:opacity-30 transition-all"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right controls */}
      <div className="flex items-center gap-1">
        <button onClick={onZoomOut} className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-all">
          <ZoomOut className="w-4 h-4" />
        </button>
        <span className="text-xs text-gray-500 min-w-[40px] text-center tabular-nums">
          {Math.round(scale * 100)}%
        </span>
        <button onClick={onZoomIn} className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-all">
          <ZoomIn className="w-4 h-4" />
        </button>

        <div className="w-px h-4 bg-white/10 mx-1.5" />

        {onExpand && (
          <button
            onClick={onExpand}
            title="Full screen"
            className="p-1.5 rounded-md text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}
        {onClose && (
          <button
            onClick={onClose}
            title="Close"
            className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <a
          href={file}
          download
          className="flex items-center gap-1.5 ml-1 px-3 py-1.5 rounded-lg text-xs font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          Download
        </a>
      </div>
    </div>
  );
}

// ── Skeleton ─────────────────────────────────────────────────────────────────

function Skeleton({ width }: { width: number }) {
  const height = Math.round(width * 1.414);
  return (
    <div
      className="bg-gray-800/40 rounded-lg animate-pulse flex items-center justify-center"
      style={{ width, height }}
    >
      <span className="text-gray-600 text-sm">Loading PDF…</span>
    </div>
  );
}

function LoadError({ file }: { file: string }) {
  return (
    <div className="w-80 h-48 bg-red-500/10 border border-red-500/20 rounded-xl flex flex-col items-center justify-center gap-3">
      <span className="text-red-400 text-sm">Failed to load PDF</span>
      <a href={file} download className="text-xs text-cyan-400 hover:underline flex items-center gap-1">
        <Download className="w-3 h-3" /> Download instead
      </a>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function PDFViewer({ file }: { file: string }) {
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [isModal, setIsModal] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure container width for responsive PDF rendering
  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver(([e]) => setContainerWidth(e.contentRect.width));
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // Keyboard shortcuts (modal only)
  useEffect(() => {
    if (!isModal) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModal(false);
      if (e.key === "ArrowLeft") setPage((p) => Math.max(1, p - 1));
      if (e.key === "ArrowRight") setPage((p) => Math.min(numPages, p + 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isModal, numPages]);

  const prev = () => setPage((p) => Math.max(1, p - 1));
  const next = () => setPage((p) => Math.min(numPages, p + 1));
  const zoomIn = () => setScale((s) => Math.min(2.5, parseFloat((s + 0.25).toFixed(2))));
  const zoomOut = () => setScale((s) => Math.max(0.5, parseFloat((s - 0.25).toFixed(2))));

  const sharedControlProps = { page, numPages, scale, file, onPrev: prev, onNext: next, onZoomIn: zoomIn, onZoomOut: zoomOut };

  const inlinePageWidth = containerWidth > 0 ? containerWidth - 48 : 0;

  return (
    <>
      {/* ── Inline viewer ── */}
      <div className="rounded-2xl border border-white/10 bg-gray-900/40 overflow-hidden flex flex-col">
        <ControlBar {...sharedControlProps} onExpand={() => setIsModal(true)} />

        <div
          ref={containerRef}
          className="overflow-auto max-h-[640px] flex justify-center p-6 bg-gray-950/50"
        >
          {inlinePageWidth > 0 && (
            <Document
              file={file}
              onLoadSuccess={({ numPages: n }) => setNumPages(n)}
              loading={<Skeleton width={inlinePageWidth} />}
              error={<LoadError file={file} />}
            >
              <Page
                pageNumber={page}
                width={inlinePageWidth}
                scale={scale}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="shadow-2xl shadow-black/60 rounded"
              />
            </Document>
          )}
        </div>
      </div>

      {/* ── Full-screen modal ── */}
      <AnimatePresence>
        {isModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsModal(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-5xl max-h-[95vh] rounded-2xl border border-white/10 bg-gray-900 overflow-hidden flex flex-col"
            >
              <ControlBar {...sharedControlProps} onClose={() => setIsModal(false)} />

              <div className="overflow-auto flex-1 flex justify-center p-6 bg-gray-950/50">
                <Document
                  file={file}
                  onLoadSuccess={({ numPages: n }) => setNumPages(n)}
                  loading={<Skeleton width={760} />}
                  error={<LoadError file={file} />}
                >
                  <Page
                    pageNumber={page}
                    width={760}
                    scale={scale}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="shadow-2xl shadow-black/60 rounded"
                  />
                </Document>
              </div>

              <div className="px-4 py-2 border-t border-white/5 text-xs text-gray-600 text-center">
                ← → to navigate · ESC to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
