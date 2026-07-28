"use client";

import { useEffect, useRef, useState } from "react";
import { SPOTLIGHT_COLORS } from "@/lib/spotlightColors";

interface ScrollSpotlightProps<T> {
  sectionLabel: string;
  items: T[];
  getKey: (item: T, index: number) => string;
  renderItem: (item: T, index: number, isActive: boolean) => React.ReactNode;
  renderPanel: (item: T, index: number) => React.ReactNode;
}

export function ScrollSpotlight<T>({
  sectionLabel,
  items,
  getKey,
  renderItem,
  renderPanel,
}: ScrollSpotlightProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [topOffset, setTopOffset] = useState(0);
  const [inView, setInView] = useState(false);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const panelWrapperRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setActiveIndex(0);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setActiveIndex(index);
          }
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [items.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "-10% 0px -10% 0px", threshold: 0 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const panelWrapper = panelWrapperRef.current;
    if (!panelWrapper) return;

    function recompute() {
      const height = panelWrapper!.getBoundingClientRect().height;
      setTopOffset(Math.max(16, (window.innerHeight - height) / 2));
    }

    recompute();
    const resizeObserver = new ResizeObserver(recompute);
    resizeObserver.observe(panelWrapper);
    window.addEventListener("resize", recompute);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", recompute);
    };
  }, [activeIndex]);

  function scrollToIndex(index: number) {
    refs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  const remaining = items.length - activeIndex - 1;

  return (
    <div ref={containerRef} className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-10">
      {inView && (
        <div className="pointer-events-none fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-1 xl:flex">
          <span className="text-xs font-semibold uppercase tracking-widest text-fg-muted">
            {sectionLabel}
          </span>
          <span
            className="text-3xl font-black transition-colors duration-300"
            style={{ color: SPOTLIGHT_COLORS[activeIndex % SPOTLIGHT_COLORS.length] }}
          >
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span className="text-xs text-fg-muted">
            of {String(items.length).padStart(2, "0")}
            {remaining > 0 ? ` · ${remaining} left` : " · last one"}
          </span>
        </div>
      )}

      <div className="space-y-16">
        {items.map((item, index) => (
          <div
            key={getKey(item, index)}
            data-index={index}
            ref={(el) => {
              refs.current[index] = el;
            }}
          >
            {renderItem(item, index, index === activeIndex)}
            <div className="mt-6 lg:hidden">{renderPanel(item, index)}</div>
          </div>
        ))}
      </div>

      {/* This wrapper is the grid item — it stretches to match the left column's
          full height, which gives the sticky child below room to travel/release
          properly. It must NOT be the sticky element itself: if it were, its own
          box would be stretched to thousands of pixels tall, and the browser
          would treat it as "in range to stick" for nearly the entire section,
          so it would never release at the section boundaries. */}
      <div className="hidden lg:block">
        <div className="lg:sticky" style={{ top: topOffset }}>
          <div className="relative" ref={panelWrapperRef}>
            {items.map((item, index) => (
              <div
                key={getKey(item, index)}
                className="transition-opacity duration-300"
                style={{
                  display: index === activeIndex ? "block" : "none",
                }}
              >
                {renderPanel(item, index)}
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-center gap-2">
            {items.map((item, index) => (
              <button
                key={getKey(item, index)}
                type="button"
                onClick={() => scrollToIndex(index)}
                aria-label={`Jump to item ${index + 1}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: index === activeIndex ? 24 : 8,
                  background:
                    index === activeIndex ? "var(--color-accent)" : "var(--color-border)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
