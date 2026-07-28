import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import { withBasePath } from "@/lib/paths";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/10">
        <Image
          src={withBasePath(project.coverImage)}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-semibold text-fg">{project.name}</h3>
        <p className="text-sm text-fg-muted">{project.subtitle}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
          {project.tech.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 text-xs text-fg-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
