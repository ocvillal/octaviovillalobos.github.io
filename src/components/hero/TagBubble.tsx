interface TagBubbleProps {
  label: string;
  className?: string;
  color: string;
}

export function TagBubble({ label, className = "", color }: TagBubbleProps) {
  return (
    <span
      className={`pointer-events-none absolute hidden select-none items-center rounded-full px-3 py-1 text-xs font-semibold text-white shadow-md sm:inline-flex ${className}`}
      style={{ background: color }}
    >
      {label}
    </span>
  );
}
