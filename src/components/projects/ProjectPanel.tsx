import Image from "next/image";
import type { Project } from "@/types/project";
import { withBasePath } from "@/lib/paths";

const PANEL_COLORS = ["var(--color-accent)", "var(--color-accent-2)", "var(--color-accent-4)"];

export function ProjectPanel({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="relative overflow-hidden rounded-3xl p-8 pb-0"
      style={{ background: PANEL_COLORS[index % PANEL_COLORS.length] }}
    >
      <h3 className="max-w-xs text-2xl font-bold text-white">{project.name}</h3>
      <p className="mt-1 text-sm text-white/80">{project.subtitle}</p>
      <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden rounded-t-2xl border border-white/20 border-b-0 bg-black/10 shadow-2xl">
        <Image
          src={withBasePath(project.coverImage)}
          alt={project.name}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
