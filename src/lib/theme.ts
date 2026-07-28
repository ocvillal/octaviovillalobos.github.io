export type Theme = "light" | "dark";

export type PaletteId = "neon" | "beach-day" | "coffee-shop" | "autumn-harvest";
export type PaletteColor = { name: string; hex: string };

export const PALETTES: Record<PaletteId, { label: string; colors: PaletteColor[] }> = {
  neon: {
    label: "Cyberpunk",
    colors: [
      { name: "Purple", hex: "#7c5cff" },
      { name: "Orange", hex: "#ff9b52" },
      { name: "Teal", hex: "#2dd4bf" },
      { name: "Rose", hex: "#fb7185" },
      { name: "Amber Gold", hex: "#ffbe0b" },
    ],
  },
  "beach-day": {
    label: "Beach Day",
    colors: [
      { name: "Charcoal Blue", hex: "#264653" },
      { name: "Verdigris", hex: "#2a9d8f" },
      { name: "Jasmine", hex: "#e9c46a" },
      { name: "Sandy Brown", hex: "#f4a261" },
      { name: "Burnt Peach", hex: "#e76f51" },
    ],
  },
  "coffee-shop": {
    label: "Coffee Shop",
    colors: [
      { name: "Olive Leaf", hex: "#606c38" },
      { name: "Black Forest", hex: "#283618" },
      { name: "Cornsilk", hex: "#fefae0" },
      { name: "Light Caramel", hex: "#dda15e" },
      { name: "Copper", hex: "#bc6c25" },
    ],
  },
  "autumn-harvest": {
    label: "Autumn Harvest",
    colors: [
      { name: "Dark Wine", hex: "#6f1d1b" },
      { name: "Camel", hex: "#bb9457" },
      { name: "Dark Coffee", hex: "#432818" },
      { name: "Chocolate Brown", hex: "#99582a" },
      { name: "Light Apricot", hex: "#ffe6a7" },
    ],
  },
};

const ACCENT_VARS = [
  "--color-accent",
  "--color-accent-2",
  "--color-accent-3",
  "--color-accent-4",
  "--color-accent-5",
];

const THEME_KEY = "theme_v2";
const PALETTE_KEY = "palette";
const PALETTE_INDEX_KEY = "paletteIndex";
const DEFAULT_PALETTE: PaletteId = "neon";
const DEFAULT_INDEX = 0;

export function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(THEME_KEY);
  return value === "light" || value === "dark" ? value : null;
}

export function getStoredPalette(): { paletteId: PaletteId; index: number } {
  if (typeof window === "undefined") return { paletteId: DEFAULT_PALETTE, index: DEFAULT_INDEX };
  const paletteId = window.localStorage.getItem(PALETTE_KEY);
  const validPalette = paletteId && paletteId in PALETTES ? (paletteId as PaletteId) : DEFAULT_PALETTE;
  const rawIndex = parseInt(window.localStorage.getItem(PALETTE_INDEX_KEY) ?? "", 10);
  const colors = PALETTES[validPalette].colors;
  const index = Number.isInteger(rawIndex) && rawIndex >= 0 && rawIndex < colors.length ? rawIndex : DEFAULT_INDEX;
  return { paletteId: validPalette, index };
}

export function applyTheme(theme: Theme) {
  // data-theme, not a class: React renders <html>'s className and would reset a
  // script-added class back to the server value during hydration.
  document.documentElement.setAttribute("data-theme", theme);
  window.localStorage.setItem(THEME_KEY, theme);
}

export function applyPalette(paletteId: PaletteId, index: number) {
  const colors = PALETTES[paletteId].colors;
  ACCENT_VARS.forEach((varName, i) => {
    const color = colors[(index + i) % colors.length];
    document.documentElement.style.setProperty(varName, color.hex);
  });
  window.localStorage.setItem(PALETTE_KEY, paletteId);
  window.localStorage.setItem(PALETTE_INDEX_KEY, String(index));
}

export const THEME_SCRIPT = `
(function () {
  try {
    var theme = localStorage.getItem('${THEME_KEY}');
    if (theme !== 'light' && theme !== 'dark') {
      theme = 'dark';
    }
    document.documentElement.setAttribute('data-theme', theme);

    var palettes = ${JSON.stringify(PALETTES)};
    var accentVars = ${JSON.stringify(ACCENT_VARS)};
    var paletteId = localStorage.getItem('${PALETTE_KEY}');
    if (!palettes[paletteId]) paletteId = '${DEFAULT_PALETTE}';
    var colors = palettes[paletteId].colors;
    var index = parseInt(localStorage.getItem('${PALETTE_INDEX_KEY}'), 10);
    if (!(index >= 0 && index < colors.length)) index = ${DEFAULT_INDEX};

    for (var i = 0; i < accentVars.length; i++) {
      var color = colors[(index + i) % colors.length];
      document.documentElement.style.setProperty(accentVars[i], color.hex);
    }
  } catch (e) {}
})();
`;
