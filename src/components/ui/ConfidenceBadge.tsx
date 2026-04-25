/**
 * ConfidenceBadge
 *
 * Implements design.md §8.3 (confidence bars) and the divergence palette §3.3.
 * Confidence is rendered as a small horizontal bar (not a color badge) to avoid
 * competing with tier colors on the same evidence row.
 *
 * The expandable description panel uses the divergence-band tint background.
 * Never implies theological certainty — describes evidence quality only.
 */

"use client";

import { useState } from "react";
import type { ConfidenceSignal, ConfidenceBand } from "@/lib/types";
import { cn } from "@/lib/utils/cn";
import { Info } from "@/components/layout/icons";

interface ConfidenceBadgeProps {
  signal: ConfidenceSignal;
  showDescription?: boolean;
  size?: "sm" | "md";
  className?: string;
}

/* Divergence palette mapping per design.md §3.3 */
const BAND_COLORS: Record<ConfidenceBand, { fill: string; tint: string }> = {
  "high":        { fill: "var(--divergence-green)",  tint: "var(--divergence-green-tint)" },
  "medium-high": { fill: "var(--brand-primary)",     tint: "var(--brand-subtle)" },
  "medium":      { fill: "var(--divergence-yellow)", tint: "var(--divergence-yellow-tint)" },
  "low-medium":  { fill: "var(--divergence-orange)", tint: "var(--divergence-orange-tint)" },
  "low":         { fill: "var(--divergence-red)",    tint: "var(--divergence-red-tint)" },
  "uncertain":   { fill: "var(--divergence-gray)",   tint: "var(--divergence-gray-tint)" },
};

/* Confidence band → fractional fill (0–1) for the bar indicator */
const BAND_FILL: Record<ConfidenceBand, number> = {
  "high":        0.95,
  "medium-high": 0.78,
  "medium":      0.58,
  "low-medium":  0.40,
  "low":         0.25,
  "uncertain":   0.12,
};

export function ConfidenceBadge({
  signal,
  showDescription = false,
  size = "sm",
  className,
}: ConfidenceBadgeProps) {
  const [expanded, setExpanded] = useState(false);
  const { fill, tint } = BAND_COLORS[signal.band];
  const barFill = BAND_FILL[signal.band];

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {/* Label row */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={cn(
          "inline-flex items-center gap-2 transition-opacity hover:opacity-80 cursor-pointer",
          size === "sm" ? "text-xs" : "text-sm"
        )}
        style={{ fontFamily: "var(--font-display)", color: "var(--ink-primary)" }}
        aria-expanded={expanded}
        aria-label={`Evidence quality: ${signal.label}. Tap for explanation.`}
      >
        {/* Confidence bar — per design.md §8.3 */}
        <span
          className="relative flex-shrink-0 rounded-full overflow-hidden"
          style={{
            width: size === "sm" ? 40 : 56,
            height: 4,
            backgroundColor: "var(--border-default)",
          }}
          aria-hidden="true"
        >
          <span
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              width: `${barFill * 100}%`,
              backgroundColor: fill,
              transition: "width 200ms ease",
            }}
          />
        </span>

        <span style={{ color: fill }}>{signal.label}</span>
        <Info size={12} className="flex-shrink-0" style={{ color: "var(--ink-muted)" }} />
      </button>

      {/* Ikhtilaf indicator */}
      {signal.ikhtilafFlag && (
        <span
          className="inline-flex items-center gap-1 text-xs"
          style={{ color: "var(--divergence-yellow)", fontFamily: "var(--font-display)" }}
        >
          <span className="text-[10px]" aria-hidden="true">⚖</span>
          Scholarly disagreement exists on this
        </span>
      )}

      {/* Expandable description panel — divergence-tint background */}
      {(expanded || showDescription) && (
        <div
          className="text-xs leading-relaxed p-3 rounded-[8px] border"
          style={{
            backgroundColor: tint,
            color: "var(--ink-secondary)",
            borderColor: `color-mix(in srgb, ${fill} 20%, transparent)`,
            borderLeftWidth: "3px",
            borderLeftColor: fill,
            fontFamily: "var(--font-body)",
          }}
        >
          <p
            className="mb-1 font-medium text-[11px] uppercase tracking-wider"
            style={{ color: fill, fontFamily: "var(--font-display)", letterSpacing: "0.5px" }}
          >
            {signal.label}
          </p>
          <p>{signal.description}</p>
          {signal.ikhtilafNote && (
            <p className="mt-2 pt-2 border-t border-current/20">
              <span className="font-medium" style={{ fontFamily: "var(--font-display)" }}>
                Note on disagreement:{" "}
              </span>
              {signal.ikhtilafNote}
            </p>
          )}
          {signal.twoPass.trecFlag && (
            <p className="mt-2 pt-2 border-t border-current/20">
              <span className="font-medium" style={{ fontFamily: "var(--font-display)" }}>
                Note:{" "}
              </span>
              The Quranic text itself points to Prophetic explanation for this
              passage. Reading the text alone is not sufficient here.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
