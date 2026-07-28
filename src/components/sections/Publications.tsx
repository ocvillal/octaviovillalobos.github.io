import { publications } from "@/data/publications";

export function Publications() {
  return (
    <section id="publications" className="bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-muted">Publications</h2>
        <div className="mt-8 space-y-6">
          {publications.map((pub) => (
            <article
              key={pub.title}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6"
            >
              <h3 className="text-lg font-semibold">{pub.title}</h3>
              <p className="mt-1 text-sm text-fg-muted">
                {pub.venue} · {pub.detail} · {pub.year}
              </p>
              <div className="mt-3 flex gap-4 text-sm">
                {pub.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
