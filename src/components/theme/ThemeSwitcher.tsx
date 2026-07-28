"use client";

import { useState } from "react";
import {
  PALETTES,
  applyPalette,
  applyTheme,
  getStoredPalette,
  getStoredTheme,
  type PaletteId,
  type Theme,
} from "@/lib/theme";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return (
    getStoredTheme() ??
    (document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark")
  );
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [{ paletteId, index }, setPaletteState] = useState(getStoredPalette);
  const [open, setOpen] = useState(false);

  function toggleTheme() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }

  function pickPaletteFamily(next: PaletteId) {
    setPaletteState({ paletteId: next, index: 0 });
    applyPalette(next, 0);
  }

  function pickSwatch(i: number) {
    setPaletteState({ paletteId, index: i });
    applyPalette(paletteId, i);
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-1 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-1">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle light/dark theme"
          className="flex h-8 w-8 items-center justify-center rounded-full text-fg-muted hover:text-fg transition-colors"
          suppressHydrationWarning
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Choose color palette"
          aria-expanded={open}
          className="flex h-8 w-8 items-center justify-center rounded-full"
        >
          <span
            className="h-4 w-4 rounded-full border border-[var(--color-border)]"
            style={{ background: PALETTES[paletteId].colors[index].hex }}
            suppressHydrationWarning
          />
        </button>
      </div>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-64 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] p-3 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-widest text-fg-muted">Palette</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {(Object.keys(PALETTES) as PaletteId[]).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => pickPaletteFamily(id)}
                className="rounded-full px-2.5 py-1 text-xs font-semibold transition-colors"
                style={{
                  background: id === paletteId ? "var(--color-bg)" : "transparent",
                  color: id === paletteId ? "var(--color-fg)" : "var(--color-fg-muted)",
                  border: `1px solid ${id === paletteId ? "var(--color-border)" : "transparent"}`,
                }}
              >
                {PALETTES[id].label}
              </button>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-5 gap-2">
            {PALETTES[paletteId].colors.map((color, i) => (
              <button
                key={color.name}
                type="button"
                onClick={() => pickSwatch(i)}
                title={color.name}
                aria-label={`Use ${color.name} as the primary accent`}
                className="h-7 w-7 rounded-full transition-transform hover:scale-110"
                style={{
                  background: color.hex,
                  outline: i === index ? "2px solid var(--color-fg)" : "none",
                  outlineOffset: 2,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
