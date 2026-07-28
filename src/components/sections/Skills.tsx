import { skills } from "@/data/skills";
import { SkillRow } from "@/components/skills/SkillRow";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
        Experience &amp; skills
      </h2>
      <div className="mt-4">
        {skills.map((skill, i) => (
          <SkillRow key={skill.label} skill={skill} index={i} />
        ))}
      </div>
    </section>
  );
}
