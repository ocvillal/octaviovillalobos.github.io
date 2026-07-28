"use client";

import { useActiveSection } from "@/lib/useActiveSection";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const SECTION_IDS = SECTIONS.map((s) => s.id);

export function SectionRail() {
  const activeIndex = Math.max(0, useActiveSection(SECTION_IDS));
  const remaining = SECTIONS.length - activeIndex - 1;

  return (
    <div className="pointer-events-none fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-1 xl:flex">
      <span className="text-xs font-semibold uppercase tracking-widest text-fg-muted">Section</span>
      <span
        className="text-2xl font-black transition-colors duration-300"
        style={{ color: "var(--color-accent)" }}
      >
        {SECTIONS[activeIndex].label}
      </span>
      <span className="text-xs text-fg-muted">
        {String(activeIndex + 1).padStart(2, "0")} of {String(SECTIONS.length).padStart(2, "0")}
        {remaining > 0 ? ` · ${remaining} left` : " · last one"}
      </span>
    </div>
  );
}
