import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import { withBasePath } from "@/lib/paths";

const LINK_LABELS: Record<Project["links"][number]["kind"], string> = {
  repo: "View code",
  demo: "View demo",
  video: "Watch video",
  paper: "Read paper",
  other: "Open link",
};

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <Link href="/#projects" className="text-sm text-fg-muted hover:text-fg">
        ← Back to projects
      </Link>

      <h1 className="mt-4 text-4xl font-black sm:text-5xl">{project.name}</h1>
      <p className="mt-2 text-lg text-fg-muted">{project.subtitle}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-fg-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full px-4 py-2 text-sm font-semibold text-white"
              style={{ background: "var(--color-accent)" }}
            >
              {link.label || LINK_LABELS[link.kind]}
            </a>
          ))}
        </div>
      )}

      <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl bg-black/10">
        <Image src={withBasePath(project.coverImage)} alt={project.name} fill className="object-cover" />
      </div>

      <div className="mt-10 space-y-4 text-fg-muted">
        <p className="leading-relaxed">{project.description}</p>
        {project.body && <p className="leading-relaxed">{project.body}</p>}
      </div>

      {project.images.length > 1 && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {project.images.slice(1).map((image) => (
            <div
              key={image.src}
              className="relative aspect-video overflow-hidden rounded-xl bg-black/10"
            >
              <Image src={withBasePath(image.src)} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
