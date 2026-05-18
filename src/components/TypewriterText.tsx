"use client";

import { useState, useEffect } from "react";

type Props = {
  text: string;
  startDelay?: number;
  speed?: number;
  onDone?: () => void;
};

export default function TypewriterText({ text, startDelay = 0, speed = 75, onDone }: Props) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started || done) return;
    if (displayed.length >= text.length) {
      setDone(true);
      onDone?.();
      return;
    }
    const t = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [started, displayed, text, speed, done, onDone]);

  return (
    <span>
      {displayed}
      {!done && (
        <span className="inline-block w-[3px] h-[0.85em] bg-cyan-400 ml-0.5 align-middle animate-pulse" />
      )}
    </span>
  );
}
