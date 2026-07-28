import { site } from "@/data/site";
import { GithubActivity } from "@/components/github/GithubActivity";
import { GithubContributions } from "@/components/github/GithubContributions";

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--color-bg-secondary)]">
      <div className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-fg-muted">Contact</h2>
            <h3 className="mt-4 text-3xl font-bold sm:text-4xl">Let&rsquo;s build something.</h3>
            <p className="mt-4 max-w-sm text-fg-muted">
              I&rsquo;m actively looking for entry-level roles in Product Design, Software Engineering,
              and ML Engineering. Reach out if that sounds like a fit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}`}
                className="rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ background: "var(--color-accent)" }}
              >
                Email me
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:bg-[var(--color-bg)]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-fg-muted">
              Recent GitHub activity
            </h4>
            <div className="mt-4">
              <GithubActivity />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-fg-muted">GitHub</h4>
          <div className="mt-6">
            <GithubContributions />
          </div>
        </div>
      </div>
    </section>
  );
}
