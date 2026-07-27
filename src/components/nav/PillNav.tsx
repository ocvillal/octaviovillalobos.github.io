import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme/ThemeSwitcher";
import { site } from "@/data/site";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function PillNav() {
  return (
    <header className="sticky top-4 z-40 mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-4">
      <nav className="flex w-full items-center justify-between gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/90 px-3 py-2 backdrop-blur">
        <Link
          href="/"
          className="rounded-full px-3 py-1.5 text-sm font-semibold tracking-tight text-fg"
        >
          {site.name.split(" ")[0]}
        </Link>
        <div className="hidden items-center gap-1 sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
