/**
 * SectionLabel — small uppercase heading used to introduce content sections.
 * Keeps the visual hierarchy clear without adding weight.
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
      className={cn(
        "text-[11px] font-semibold uppercase tracking-widest",
        className
      )}
      style={{ color: "var(--text-tertiary)" }}
    >
      {children}
    </p>
  );
}
