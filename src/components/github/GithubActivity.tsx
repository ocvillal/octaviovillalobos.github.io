"use client";

import { useEffect, useState } from "react";
import { fetchGithubActivity, type GithubActivityItem as GithubActivityItemType } from "@/lib/github";
import { GithubActivityItem } from "./GithubActivityItem";
import { site } from "@/data/site";

const CACHE_KEY = `github-activity:${site.githubUser}`;
const CACHE_TTL_MS = 5 * 60 * 1000;

type Status = "loading" | "ready" | "error";

export function GithubActivity() {
  const [items, setItems] = useState<GithubActivityItemType[]>([]);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const cached = window.sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const { items: cachedItems, cachedAt } = JSON.parse(cached);
          if (Date.now() - cachedAt < CACHE_TTL_MS) {
            if (!cancelled) {
              setItems(cachedItems);
              setStatus("ready");
            }
            return;
          }
        }

        const fresh = await fetchGithubActivity(site.githubUser);
        window.sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ items: fresh, cachedAt: Date.now() })
        );
        if (!cancelled) {
          setItems(fresh);
          setStatus("ready");
        }
      } catch {
        if (!cancelled) setStatus("error");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "error" || (status === "ready" && items.length === 0)) {
    return (
      <p className="text-sm text-fg-muted">
        Recent activity unavailable — check{" "}
        <a href={site.socials.github} target="_blank" rel="noreferrer" className="underline">
          my GitHub
        </a>{" "}
        directly.
      </p>
    );
  }

  if (status === "loading") {
    return <p className="text-sm text-fg-muted">Loading recent activity…</p>;
  }

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <GithubActivityItem key={item.id} item={item} />
      ))}
    </div>
  );
}
