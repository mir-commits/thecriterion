/**
 * EvidenceTierLabel
 *
 * Displays the evidence tier with a visual indicator distinguishing
 * Quranic (primary) layer from scholarly (secondary) layer.
 *
 * Framework Section 5f Visual Layer Tiering:
 * - Primary layer (Tier 1): Quranic content — rendered in teal
 * - Secondary layer (Tiers 2–7): Scholarly/traditional — rendered in muted
 *
 * CLAUDE.md: "Every substantive answer should make its basis inspectable.
 * Users should be able to see whether support is text-internal or tradition-dependent."
 */

import type { EvidenceTier } from "@/lib/types";
import { EVIDENCE_TIER_LABELS, EVIDENCE_TIER_DESCRIPTIONS } from "@/lib/types";
import { cn } from "@/lib/utils/cn";

interface EvidenceTierLabelProps {
  tier: EvidenceTier;
  showDescription?: boolean;
  className?: string;
}

/**
 * Visual layer assignment per framework Section 5f.
 * Tier 1 = Primary (Quranic). Tiers 2–7 = Secondary (scholarly).
 */
function getTierLayer(tier: EvidenceTier): "primary" | "secondary" {
  return tier === 1 ? "primary" : "secondary";
}

export function EvidenceTierLabel({
  tier,
  showDescription = false,
  className,
}: EvidenceTierLabelProps) {
  const layer = getTierLayer(tier);

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span
        className="inline-flex items-center gap-1.5 text-xs font-medium"
        style={{ color: layer === "primary" ? "var(--teal)" : "var(--muted)" }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{
            backgroundColor: layer === "primary" ? "var(--teal)" : "var(--muted)",
          }}
          aria-hidden="true"
        />
        {layer === "primary" ? "Quran-internal" : "Scholarly tradition"}
        <span className="opacity-50">— Tier {tier}</span>
      </span>

      {showDescription && (
        <p
          className="text-xs leading-relaxed"
          style={{ color: "var(--text-tertiary)" }}
        >
          {EVIDENCE_TIER_DESCRIPTIONS[tier]}
        </p>
      )}
    </div>
  );
}

/**
 * Compact inline evidence basis chip — used in answer cards.
 * Shows whether an answer is grounded in text-internal or tradition-dependent evidence.
 */
interface EvidenceBasisChipProps {
  basis: "text-internal" | "tradition-dependent" | "both";
  className?: string;
}

export function EvidenceBasisChip({ basis, className }: EvidenceBasisChipProps) {
  const isQuranInternal = basis === "text-internal";
  const isBoth = basis === "both";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full",
        className
      )}
      style={{
        backgroundColor: isQuranInternal
          ? "var(--teal-light)"
          : isBoth
          ? "var(--muted-bg)"
          : "var(--muted-bg)",
        color: isQuranInternal
          ? "var(--teal)"
          : "var(--muted)",
      }}
    >
      <span
        className="w-1 h-1 rounded-full"
        style={{
          backgroundColor: isQuranInternal ? "var(--teal)" : "var(--muted)",
        }}
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
