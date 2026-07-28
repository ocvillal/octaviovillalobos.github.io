"use client";

import { useEffect, useRef } from "react";

export function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement | null>(null);
  const ticking = useRef(false);

  useEffect(() => {
    function update() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
      if (barRef.current) barRef.current.style.width = `${pct}%`;
      ticking.current = false;
    }

    function onScroll() {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-50 h-[3px] bg-transparent">
      <div ref={barRef} className="h-full" style={{ width: 0, background: "var(--color-accent)" }} />
    </div>
  );
}
