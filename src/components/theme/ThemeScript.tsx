import { THEME_SCRIPT } from "@/lib/theme";

export function ThemeScript() {
  // Inline + synchronous so theme/accent apply before first paint (no flash).
  return <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />;
}
