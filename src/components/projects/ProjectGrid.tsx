"use client";

import Link from "next/link";
import { projects } from "@/data/projects";
import { ScrollSpotlight } from "@/components/scrolly/ScrollSpotlight";
import { ProjectPanel } from "./ProjectPanel";
import type { Project } from "@/types/project";

export function ProjectGrid() {
  return (
    <section id="projects" className="bg-[var(--color-bg)]">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-muted">Projects</h2>

        <div className="mt-8">
          <ScrollSpotlight
            items={projects}
            getKey={(project) => project.slug}
            renderItem={(project: Project) => (
              <article>
                <Link href={`/projects/${project.slug}`} className="group inline-flex items-baseline gap-2">
                  <h3 className="text-2xl font-bold text-fg group-hover:underline sm:text-3xl">
                    {project.name}
                  </h3>
                  <span className="text-sm text-fg-muted opacity-0 transition-opacity group-hover:opacity-100">
                    view case study →
                  </span>
                </Link>
                <p className="mt-1 text-fg-muted">{project.subtitle}</p>
                <p className="mt-4 max-w-xl leading-relaxed text-fg-muted">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-fg-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )}
            renderPanel={(project, index) => <ProjectPanel project={project} index={index} />}
          />
        </div>
      </div>
    </section>
  );
}
