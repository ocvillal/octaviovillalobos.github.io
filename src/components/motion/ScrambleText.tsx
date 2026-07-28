"use client";

import { useEffect, useState, type CSSProperties } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const LETTER = /[a-zA-Z]/;
const TOTAL_FRAMES = 24;

export function ScrambleText({
  text,
  className,
  style,
  delay = 0,
}: {
  text: string;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }

    let frame = 0;
    let raf = 0;

    const timeout = setTimeout(() => {
      function tick() {
        frame++;
        const revealCount = Math.floor((frame / TOTAL_FRAMES) * text.length);
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

        if (frame < TOTAL_FRAMES) {
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
  }, [text, delay]);

  return (
    <span className={className} style={style}>
      {display}
    </span>
  );
}
