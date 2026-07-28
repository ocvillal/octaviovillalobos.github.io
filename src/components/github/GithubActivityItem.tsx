import type { GithubActivityItem as GithubActivityItemType } from "@/lib/github";

export function GithubActivityItem({ item }: { item: GithubActivityItemType }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="flex items-start justify-between gap-4 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm transition-colors hover:bg-[var(--color-bg)]"
    >
      <div>
        <p className="text-fg">{item.summary}</p>
        <p className="text-fg-muted">{item.repo}</p>
      </div>
      <time className="shrink-0 text-fg-muted" dateTime={item.createdAt}>
        {new Date(item.createdAt).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
      </time>
    </a>
  );
}
