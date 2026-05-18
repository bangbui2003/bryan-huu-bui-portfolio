"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20"
      style={{
        background: `radial-gradient(700px at ${pos.x}px ${pos.y}px, rgba(6, 182, 212, 0.06), transparent 70%)`,
      }}
    />
  );
}
