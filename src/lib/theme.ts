export type Theme = "light" | "dark";
export type Accent = "purple" | "orange" | "teal" | "rose";

export const ACCENTS: { value: Accent; label: string; swatch: string }[] = [
  { value: "purple", label: "Purple", swatch: "#7c5cff" },
  { value: "orange", label: "Orange", swatch: "#ff9b52" },
  { value: "teal", label: "Teal", swatch: "#2dd4bf" },
  { value: "rose", label: "Rose", swatch: "#fb7185" },
];

const THEME_KEY = "theme";
const ACCENT_KEY = "accent";
const DEFAULT_ACCENT: Accent = "purple";

export function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(THEME_KEY);
  return value === "light" || value === "dark" ? value : null;
}

export function getStoredAccent(): Accent | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(ACCENT_KEY);
  return ACCENTS.some((a) => a.value === value) ? (value as Accent) : null;
}

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  window.localStorage.setItem(THEME_KEY, theme);
}

export function applyAccent(accent: Accent) {
  document.documentElement.setAttribute("data-accent", accent);
  window.localStorage.setItem(ACCENT_KEY, accent);
}

export const THEME_SCRIPT = `
(function () {
  try {
    var theme = localStorage.getItem('${THEME_KEY}');
    if (theme !== 'light' && theme !== 'dark') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.classList.toggle('dark', theme === 'dark');

    var accent = localStorage.getItem('${ACCENT_KEY}') || '${DEFAULT_ACCENT}';
    document.documentElement.setAttribute('data-accent', accent);
  } catch (e) {}
})();
`;
