/**
 * ConfidenceBadge
 *
 * Displays a confidence signal as a visual badge with optional tooltip.
 *
 * DESIGN PRINCIPLES (CLAUDE.md):
 * - Must never imply theological certainty
 * - "Clear in the text" != "divinely authorized"
 * - Plain language only — no raw scores exposed
 * - Ambiguity should feel informative, not alarming
 * - Never let scoring become the emotional center of the product
 *
 * The badge uses color and text to communicate evidence quality.
 * Hovering/tapping reveals the full explanation.
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

const BAND_STYLES: Record<ConfidenceBand, { bg: string; text: string; border: string }> = {
  "high": {
    bg: "var(--signal-clear-bg)",
    text: "var(--signal-clear)",
    border: "var(--signal-clear)",
  },
  "medium-high": {
    bg: "var(--signal-supported-bg)",
    text: "var(--signal-supported)",
    border: "var(--signal-supported)",
  },
  "medium": {
    bg: "var(--signal-debated-bg)",
    text: "var(--signal-debated)",
    border: "var(--signal-debated)",
  },
  "low-medium": {
    bg: "var(--signal-tradition-bg)",
    text: "var(--signal-tradition)",
    border: "var(--signal-tradition)",
  },
  "low": {
    bg: "var(--signal-ambiguous-bg)",
    text: "var(--signal-ambiguous)",
    border: "var(--signal-ambiguous)",
  },
  "uncertain": {
    bg: "var(--signal-ambiguous-bg)",
    text: "var(--signal-ambiguous)",
    border: "var(--signal-ambiguous)",
  },
};

export function ConfidenceBadge({
  signal,
  showDescription = false,
  size = "sm",
  className,
}: ConfidenceBadgeProps) {
  const [expanded, setExpanded] = useState(false);
  const styles = BAND_STYLES[signal.band];

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {/* Badge */}
      <button
        onClick={() => setExpanded(!expanded)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border transition-opacity",
          size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm",
          "font-medium cursor-pointer hover:opacity-80"
        )}
        style={{
          backgroundColor: styles.bg,
          color: styles.text,
          borderColor: `${styles.border}40`,
        }}
        aria-expanded={expanded}
        aria-label={`Evidence quality: ${signal.label}. Tap for explanation.`}
      >
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: styles.text }}
          aria-hidden="true"
        />
        {signal.label}
        <Info size={12} className="flex-shrink-0 opacity-60" />
      </button>

      {/* Ikhtilaf indicator — when there is scholarly disagreement */}
      {signal.ikhtilafFlag && (
        <span
          className="inline-flex items-center gap-1 text-xs font-medium"
          style={{ color: "var(--signal-debated)" }}
        >
          <span className="text-[10px]">⚖</span>
          Scholarly disagreement exists on this
        </span>
      )}

      {/* Expandable description — shows on tap/click */}
      {(expanded || showDescription) && (
        <div
          className="text-xs leading-relaxed p-3 rounded-lg border"
          style={{
            backgroundColor: styles.bg,
            color: "var(--text-secondary)",
            borderColor: `${styles.border}30`,
          }}
        >
          <p className="mb-1 font-medium" style={{ color: styles.text }}>
            What does &ldquo;{signal.label}&rdquo; mean?
          </p>
          <p>{signal.description}</p>
          {signal.ikhtilafNote && (
            <p className="mt-2 pt-2 border-t border-current/20">
              <span className="font-medium">Note on disagreement: </span>
              {signal.ikhtilafNote}
            </p>
          )}
          {/* TREC flag — text requests external clarification */}
          {signal.twoPass.trecFlag && (
            <p className="mt-2 pt-2 border-t border-current/20">
              <span className="font-medium">Note: </span>
              The Quranic text itself points to Prophetic explanation for this
              passage. Reading the text alone is not sufficient here.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
