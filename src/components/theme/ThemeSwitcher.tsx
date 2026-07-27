"use client";

import { useEffect, useState } from "react";
import {
  ACCENTS,
  applyAccent,
  applyTheme,
  getStoredAccent,
  getStoredTheme,
  type Accent,
  type Theme,
} from "@/lib/theme";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [accent, setAccent] = useState<Accent>("purple");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTheme(
      getStoredTheme() ??
        (document.documentElement.classList.contains("dark") ? "dark" : "light")
    );
    setAccent(
      getStoredAccent() ??
        (document.documentElement.getAttribute("data-accent") as Accent | null) ??
        "purple"
    );
  }, []);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }

  function pickAccent(next: Accent) {
    setAccent(next);
    applyAccent(next);
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-1">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle light/dark theme"
          className="flex h-8 w-8 items-center justify-center rounded-full text-fg-muted hover:text-fg transition-colors"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Choose accent color"
          aria-expanded={open}
          className="flex h-8 w-8 items-center justify-center rounded-full"
        >
          <span
            className="h-4 w-4 rounded-full border border-[var(--color-border)]"
            style={{ background: ACCENTS.find((a) => a.value === accent)?.swatch }}
          />
        </button>
      </div>
      {open && (
        <div className="absolute right-0 top-full mt-2 flex gap-2 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-2 shadow-lg z-50">
          {ACCENTS.map((a) => (
            <button
              key={a.value}
              type="button"
              onClick={() => {
                pickAccent(a.value);
                setOpen(false);
              }}
              aria-label={`Use ${a.label} accent`}
              className="h-6 w-6 rounded-full ring-offset-2 ring-offset-[var(--color-bg-secondary)] transition-transform hover:scale-110"
              style={{
                background: a.swatch,
                outline: a.value === accent ? `2px solid ${a.swatch}` : "none",
                outlineOffset: 2,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
