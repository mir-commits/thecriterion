/**
 * SectionLabel — micro-label per design.md §4 "Micro Label (uppercase)".
 * CursorGothic 10px / 600 / 0.6px tracking / uppercase.
 */
import { cn } from "@/lib/utils/cn";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionLabel({ children, className, id }: SectionLabelProps) {
  return (
    <p
      id={id}
      className={cn("text-[10px] font-semibold uppercase", className)}
      style={{
        color: "var(--ink-muted)",
        fontFamily: "var(--font-display)",
        letterSpacing: "0.6px",
      }}
    >
      {children}
    </p>
  );
}
