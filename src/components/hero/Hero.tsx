import Image from "next/image";
import { Mail, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { site } from "@/data/site";
import { withBasePath } from "@/lib/paths";

const CONTACT_LINKS = [
  { label: "LinkedIn", href: site.socials.linkedin, icon: LinkedinIcon, bg: "#0a66c2" },
  { label: "GitHub", href: site.socials.github, icon: GithubIcon, bg: "#24292f" },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail, bg: "#f97316" },
  { label: "Résumé", href: withBasePath(site.resumeHref), icon: FileText, bg: "#e11d48" },
];

export function Hero() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto max-w-5xl px-4 pt-16 pb-24 sm:pt-24">
        <div className="grid gap-10 sm:grid-cols-[minmax(0,320px)_1fr] sm:items-center">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
            <Image
              src={withBasePath("/images/avatar.jpg")}
              alt={site.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-fg-muted">I&rsquo;m {site.name}, and I enjoy</p>

            <h1 className="mt-2 text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl">
              <span className="block text-fg">Building AI systems</span>
              <span className="block" style={{ color: "var(--color-accent)" }}>
                from research to production 🚀
              </span>
            </h1>

            <p className="mt-5 text-xl font-bold text-fg">Computer Scientist &amp; ML Engineer</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {CONTACT_LINKS.map(({ label, href, icon: Icon, bg }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
                  rel={href.startsWith("http") || href.endsWith(".pdf") ? "noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform hover:-translate-y-0.5"
                  style={{ background: bg }}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-4 text-fg-muted">
          {site.bio.map((paragraph, i) => (
            <p key={i} className="max-w-3xl leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
