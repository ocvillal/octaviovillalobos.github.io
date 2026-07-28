import type { ReactNode } from "react";
import { CountUp } from "@/components/motion/CountUp";

const NUMBER_PATTERN = /(\d[\d,]*\+?)/g;

export function renderCountUpText(text: string): ReactNode[] {
  // A single capturing group makes String.split return matched numbers at
  // odd indices, interleaved with the surrounding plain-text segments.
  const parts = text.split(NUMBER_PATTERN);
  return parts.map((part, i) => {
    if (i % 2 === 0) return part;
    const hasPlus = part.endsWith("+");
    const numeric = parseInt(part.replace(/[,+]/g, ""), 10);
    return (
      <span key={i}>
        <CountUp value={numeric} />
        {hasPlus ? "+" : ""}
      </span>
    );
  });
}
