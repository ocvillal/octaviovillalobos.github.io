"use client";

import { useEffect, useState, type CSSProperties } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const LETTER = /[a-zA-Z]/;
const DEFAULT_DURATION_MS = 1400;

export function ScrambleText({
  text,
  className,
  style,
  delay = 0,
  durationMs = DEFAULT_DURATION_MS,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  durationMs?: number;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }

    let raf = 0;
    let start = 0;

    const timeout = setTimeout(() => {
      function tick(now: number) {
        if (!start) start = now;
        const progress = Math.min(1, (now - start) / durationMs);
        const revealCount = Math.floor(progress * text.length);
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (!LETTER.test(char)) return char;
              if (i < revealCount) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (progress < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setDisplay(text);
        }
      }
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [text, delay, durationMs]);

  return (
    <span className={className} style={style}>
      {display}
    </span>
  );
}
