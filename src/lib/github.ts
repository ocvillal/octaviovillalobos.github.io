export interface GithubActivityItem {
  id: string;
  type: string;
  repo: string;
  summary: string;
  href: string;
  createdAt: string;
}

interface GithubEvent {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string };
  payload?: {
    commits?: { message: string }[];
    ref_type?: string;
    ref?: string;
    action?: string;
    pull_request?: { html_url: string; title: string };
  };
}

const INTERESTING_TYPES = new Set([
  "PushEvent",
  "CreateEvent",
  "PullRequestEvent",
  "WatchEvent",
]);

function summarize(event: GithubEvent): string | null {
  switch (event.type) {
    case "PushEvent": {
      const message = event.payload?.commits?.[event.payload.commits.length - 1]?.message;
      return message ? `Pushed: ${message.split("\n")[0]}` : "Pushed commits";
    }
    case "CreateEvent":
      return event.payload?.ref_type === "repository"
        ? "Created repository"
        : `Created ${event.payload?.ref_type ?? "ref"} ${event.payload?.ref ?? ""}`.trim();
    case "PullRequestEvent":
      return `${event.payload?.action ?? "Updated"} PR: ${event.payload?.pull_request?.title ?? ""}`.trim();
    case "WatchEvent":
      return "Starred repository";
    default:
      return null;
  }
}

function hrefFor(event: GithubEvent): string {
  if (event.type === "PullRequestEvent" && event.payload?.pull_request?.html_url) {
    return event.payload.pull_request.html_url;
  }
  return `https://github.com/${event.repo.name}`;
}

export async function fetchGithubActivity(user: string, limit = 5): Promise<GithubActivityItem[]> {
  const res = await fetch(`https://api.github.com/users/${user}/events/public`, {
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!res.ok) {
    throw new Error(`GitHub API responded ${res.status}`);
  }

  const events: GithubEvent[] = await res.json();

  const items: GithubActivityItem[] = [];
  for (const event of events) {
    if (!INTERESTING_TYPES.has(event.type)) continue;
    const summary = summarize(event);
    if (!summary) continue;
    items.push({
      id: event.id,
      type: event.type,
      repo: event.repo.name,
      summary,
      href: hrefFor(event),
      createdAt: event.created_at,
    });
    if (items.length >= limit) break;
  }
  return items;
}
