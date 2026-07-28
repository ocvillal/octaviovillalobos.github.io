import Image from "next/image";
import { site } from "@/data/site";
import { withBasePath } from "@/lib/paths";
import { TagBubble } from "./TagBubble";

export function Hero() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-4 pt-16 pb-24 sm:pt-24">
      <div className="relative">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] py-1.5 pl-1.5 pr-4 text-sm text-fg-muted">
          <Image
            src={withBasePath("/images/avatar.jpg")}
            alt={site.name}
            width={28}
            height={28}
            className="rounded-full object-cover"
          />
          Hello, I&rsquo;m {site.name.split(" ")[0]}
        </div>

        <div className="relative">
          <TagBubble label="Research" color="var(--color-accent)" className="right-[4%] top-[2%]" />
          <TagBubble
            label="Engineering"
            color="var(--color-accent-2)"
            className="right-[-0.5rem] top-[38%] sm:right-[6%]"
          />
          <TagBubble label="ML" color="var(--color-accent-4)" className="right-[10%] top-[72%]" />

          <h1 className="text-[13vw] font-black uppercase leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
            <span className="block text-fg">Computer</span>
            <span className="block" style={{ color: "var(--color-accent)" }}>
              Scientist
            </span>
            <span className="block" style={{ color: "var(--color-accent-2)" }}>
              Building AI
            </span>
            <span className="block" style={{ color: "var(--color-accent-4)" }}>
              Systems
            </span>
          </h1>
        </div>

        <p className="mt-8 max-w-2xl text-lg text-fg-muted sm:text-xl">
          I design and ship AI systems{" "}
          <span className="font-semibold" style={{ color: "var(--color-accent)" }}>
            from research
          </span>{" "}
          to{" "}
          <span className="font-semibold" style={{ color: "var(--color-accent-4)" }}>
            production
          </span>
          . Currently based in {site.location}.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
            style={{ background: "var(--color-accent)" }}
          >
            See my work
          </a>
          <a
            href={withBasePath(site.resumeHref)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:bg-[var(--color-bg-secondary)]"
          >
            Résumé
          </a>
          <a
            href="#contact"
            className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:bg-[var(--color-bg-secondary)]"
          >
            Let&rsquo;s connect
          </a>
        </div>
      </div>

      <div className="mt-16 space-y-4 text-fg-muted">
        {site.bio.map((paragraph, i) => (
          <p key={i} className="max-w-3xl leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
