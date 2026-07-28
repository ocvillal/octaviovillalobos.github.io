"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollSpotlightProps<T> {
  items: T[];
  getKey: (item: T, index: number) => string;
  renderItem: (item: T, index: number, isActive: boolean) => React.ReactNode;
  renderPanel: (item: T, index: number) => React.ReactNode;
}

export function ScrollSpotlight<T>({
  items,
  getKey,
  renderItem,
  renderPanel,
}: ScrollSpotlightProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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

  function scrollToIndex(index: number) {
    refs.current[index]?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:items-start lg:gap-10">
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

      <div className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
        <div className="relative">
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
  );
}
