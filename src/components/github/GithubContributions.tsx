"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { site } from "@/data/site";

export function GithubContributions() {
  const [scheme, setScheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    function update() {
      setScheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
    }
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-auto">
      <GitHubCalendar
        username={site.githubUser}
        year={2026}
        colorScheme={scheme}
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        errorMessage="Couldn't load GitHub contributions right now."
        theme={{
          light: ["#e4e4e7", "var(--color-accent)"],
          dark: ["#27272a", "var(--color-accent)"],
        }}
      />
    </div>
  );
}
