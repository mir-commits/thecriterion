/**
 * StubNotice
 *
 * Visible disclaimer shown whenever content is served from stub data
 * rather than retrieved from a verified indexed source.
 *
 * This is a trust-critical component. It must never be hidden or dismissed
 * for sourced religious content (tafsir claims, scholar attributions, hadith).
 *
 * CLAUDE.md: "If we do not yet have the retrieval corpus wired up in V1:
 * use clearly labeled mock/stub data... never imply that a stub is a
 * verified classical source."
 */

import { cn } from "@/lib/utils/cn";
import { AlertTriangle } from "@/components/layout/icons";

interface StubNoticeProps {
  type: "tafsir" | "scholar" | "general";
  className?: string;
}

const NOTICE_TEXT: Record<StubNoticeProps["type"], string> = {
  tafsir:
    "This interpretive content has not yet been retrieved from an indexed classical source. It is an editorial placeholder and should not be treated as a verified scholarly opinion.",
  scholar:
    "This scholarly attribution has not been verified against an indexed source. Do not cite this as a confirmed position of the named scholar.",
  general:
    "This content is a placeholder for V1 and has not been retrieved from a verified source.",
};

export function StubNotice({ type, className }: StubNoticeProps) {
  return (
    <div
      className={cn(
        "flex gap-2 p-3 rounded-lg border text-xs leading-relaxed",
        className
      )}
      role="note"
      aria-label="Content notice"
      style={{
        backgroundColor: "var(--divergence-yellow-tint)",
        borderColor: "color-mix(in srgb, var(--divergence-yellow) 20%, transparent)",
        borderLeftWidth: "3px",
        borderLeftColor: "var(--divergence-yellow)",
        color: "var(--divergence-yellow)",
        fontFamily: "var(--font-display)",
      }}
    >
      <AlertTriangle size={14} className="flex-shrink-0 mt-0.5" />
      <p>{NOTICE_TEXT[type]}</p>
    </div>
  );
}
