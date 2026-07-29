import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { NavLinks } from "@/components/nav/NavLinks";
import { site } from "@/data/site";
import { withBasePath } from "@/lib/paths";

export function PillNav() {
  return (
    <header className="sticky top-4 z-40 mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4">
      <nav className="flex w-full items-center justify-between gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/90 px-3 py-2 backdrop-blur">
        <a
          href={withBasePath("/")}
          className="rounded-full px-3 py-1.5 text-sm font-semibold tracking-tight text-fg"
        >
          {site.name.split(" ")[0]}
        </a>
        <NavLinks />
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
