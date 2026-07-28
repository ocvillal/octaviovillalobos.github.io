import { skills } from "@/data/skills";
import { SkillRow } from "@/components/skills/SkillRow";
import { Reveal } from "@/components/motion/Reveal";

export function Skills() {
  return (
    <section id="skills" className="bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
            Experience &amp; skills
          </h2>
        </Reveal>
        <div className="mt-4">
          {skills.map((skill, i) => (
            <Reveal key={skill.label} delay={i * 100}>
              <SkillRow skill={skill} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
