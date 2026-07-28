import { experience } from "@/data/experience";
import { education } from "@/data/education";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
        Experience &amp; education
      </h2>

      <div className="mt-8 grid gap-12 sm:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold">Experience</h3>
          <div className="mt-6 space-y-8">
            {experience.map((entry) => (
              <article key={entry.org + entry.role}>
                <h4 className="font-semibold">
                  {entry.org} <span className="text-fg-muted font-normal">— {entry.location}</span>
                </h4>
                <p className="text-sm text-fg-muted">
                  {entry.role} | {entry.period}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-fg-muted marker:text-[var(--color-accent)]">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Education</h3>
          <div className="mt-6 space-y-8">
            {education.map((entry) => (
              <article key={entry.degree}>
                <h4 className="font-semibold">
                  {entry.org} <span className="text-fg-muted font-normal">— {entry.location}</span>
                </h4>
                <p className="text-sm text-fg-muted">{entry.degree}</p>
                {entry.meta.map((m) => (
                  <p key={m} className="text-sm text-fg-muted">
                    {m}
                  </p>
                ))}
                <p className="text-sm text-fg-muted">{entry.period}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
