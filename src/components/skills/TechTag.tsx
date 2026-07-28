import type { ComponentType } from "react";

export function TechTag({
  name,
  Icon,
  color,
}: {
  name: string;
  Icon: ComponentType<{ size?: number; color?: string }>;
  color: string;
}) {
  return (
    <div className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]">
      <Icon size={28} color={color} />

      <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div
          className="whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-semibold text-white"
          style={{ background: "var(--color-accent)" }}
        >
          {name}
        </div>
        <div
          className="mx-auto h-2 w-2 -translate-y-1 rotate-45"
          style={{ background: "var(--color-accent)" }}
        />
      </div>
    </div>
  );
}
