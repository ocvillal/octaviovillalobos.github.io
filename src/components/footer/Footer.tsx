import { site } from "@/data/site";

const SOCIALS = [
  { label: "GitHub", href: site.socials.github },
  { label: "LinkedIn", href: site.socials.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
];

export function Footer() {
  return (
    <footer className="mx-auto mt-24 w-full max-w-5xl px-4 pb-10">
      <div className="flex flex-col items-center gap-4 border-t border-[var(--color-border)] pt-8 text-sm text-fg-muted sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <div className="flex items-center gap-4">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-full border border-[var(--color-border)] px-3 py-1.5 transition-colors hover:text-fg"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
