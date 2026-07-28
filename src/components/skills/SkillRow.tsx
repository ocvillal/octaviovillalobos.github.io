import type { SkillCategory } from "@/data/skills";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { TechTag } from "@/components/skills/TechTag";
import { techIcons } from "@/data/techIcons";

const COLORS = [
  "var(--color-accent)",
  "var(--color-accent-2)",
  "var(--color-accent-3)",
  "var(--color-accent-4)",
  "var(--color-accent-5)",
];

export function SkillRow({ skill, index }: { skill: SkillCategory; index: number }) {
  const color = COLORS[index % COLORS.length];
  return (
    <SpotlightCard className="grid gap-4 rounded-2xl border-t border-[var(--color-border)] px-4 py-8 -mx-4 sm:grid-cols-[minmax(0,1fr)_2fr] sm:items-start">
      <div>
        <span className="text-xs text-fg-muted">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="text-4xl font-extrabold sm:text-5xl" style={{ color }}>
          {skill.label}
        </h3>
        <p className="mt-2 max-w-sm text-fg-muted">{skill.description}</p>
      </div>
      <div className="flex flex-wrap items-center gap-2 sm:justify-end">
        {skill.tags.map((tag) => {
          const icon = techIcons[tag];
          if (icon) {
            return <TechTag key={tag} name={tag} Icon={icon.Icon} color={icon.color} />;
          }
          return (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-sm text-fg"
            >
              {tag}
            </span>
          );
        })}
      </div>
    </SpotlightCard>
  );
}
