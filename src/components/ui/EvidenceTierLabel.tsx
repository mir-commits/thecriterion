/**
 * EvidenceTierLabel
 *
 * Implements the tier badge system from design.md §8.2.
 * Seven tiers, each with its own color from the evidential palette (design.md §3.4).
 * Tier 1 = deepest teal (Quran explains Quran). Tier 7 = most attenuated.
 *
 * Pill shape, 20px height, berkeleyMono numeral, tint background.
 * Never appears without source attribution (design.md §15 prohibitions).
 */

import type { EvidenceTier } from "@/lib/types";
import { EVIDENCE_TIER_LABELS, EVIDENCE_TIER_DESCRIPTIONS } from "@/lib/types";
import { cn } from "@/lib/utils/cn";

interface EvidenceTierLabelProps {
  tier: EvidenceTier;
  showDescription?: boolean;
  className?: string;
}

export function EvidenceTierLabel({
  tier,
  showDescription = false,
  className,
}: EvidenceTierLabelProps) {
  const tierVar = `var(--tier-${tier})`;

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {/* Tier badge — pill shape, 20px height, berkeleyMono per design spec */}
      <span
        className="inline-flex items-center gap-1.5"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        <span
          className="inline-flex items-center px-2 rounded-full border text-[11px] font-medium leading-5 h-5"
          style={{
            backgroundColor: `color-mix(in srgb, ${tierVar} 10%, transparent)`,
            borderColor: `color-mix(in srgb, ${tierVar} 25%, transparent)`,
            color: tierVar,
            fontFamily: "var(--font-mono)",
            fontFeatureSettings: '"tnum" 1',
          }}
        >
          T{tier}
        </span>
        <span
          className="text-xs"
          style={{ color: "var(--ink-muted)", fontFamily: "var(--font-display)" }}
        >
          {EVIDENCE_TIER_LABELS[tier]}
        </span>
      </span>

      {showDescription && (
        <p
          className="text-xs leading-relaxed"
          style={{ color: "var(--ink-muted)", fontFamily: "var(--font-display)" }}
        >
          {EVIDENCE_TIER_DESCRIPTIONS[tier]}
        </p>
      )}
    </div>
  );
}

/**
 * Compact inline evidence basis chip — used in answer cards.
 * Signals whether an answer is grounded in text-internal or tradition-dependent evidence.
 */
interface EvidenceBasisChipProps {
  basis: "text-internal" | "tradition-dependent" | "both";
  className?: string;
}

export function EvidenceBasisChip({ basis, className }: EvidenceBasisChipProps) {
  const isInternal = basis === "text-internal";
  const isBoth = basis === "both";

  const color = isInternal ? "var(--brand-primary)" : isBoth ? "var(--divergence-orange)" : "var(--ink-muted)";
  const bg = isInternal ? "var(--brand-subtle)" : isBoth ? "var(--divergence-orange-tint)" : "var(--surface-300)";
  const border = isInternal ? "var(--brand-border)" : isBoth ? "var(--divergence-orange-tint)" : "var(--border-subtle)";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-[11px] font-medium",
        className
      )}
      style={{
        backgroundColor: bg,
        color,
        borderColor: border,
        fontFamily: "var(--font-display)",
        letterSpacing: "0.05px",
      }}
    >
      <span
        className="w-1 h-1 rounded-full flex-shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      {basis === "text-internal"
        ? "Quran-internal"
        : basis === "tradition-dependent"
        ? "Tradition-dependent"
        : "Quran + tradition"}
    </span>
  );
}
