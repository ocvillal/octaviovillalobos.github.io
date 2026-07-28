"use client";

import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { ScrollSpotlight } from "@/components/scrolly/ScrollSpotlight";
import { ExperiencePanel } from "./ExperiencePanel";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-muted">Experience</h2>

      <div className="mt-8">
        <ScrollSpotlight
          items={experience}
          getKey={(entry) => entry.org + entry.role}
          renderItem={(entry) => (
            <article>
              <h3 className="text-2xl font-bold text-fg sm:text-3xl">{entry.role}</h3>
              <p className="mt-1 text-fg-muted">
                {entry.org} — {entry.location}
              </p>
              <p className="text-sm text-fg-muted">{entry.period}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-fg-muted marker:text-[var(--color-accent)]">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          )}
          renderPanel={(entry, index) => <ExperiencePanel entry={entry} index={index} />}
        />
      </div>

      <h2 className="mt-20 text-sm font-semibold uppercase tracking-widest text-fg-muted">
        Education
      </h2>
      <div className="mt-8 grid gap-8 sm:grid-cols-2">
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
    </section>
  );
}
