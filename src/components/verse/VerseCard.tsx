/**
 * VerseCard
 *
 * The fundamental verse display component.
 * Used in surah readers, answer cards, theme pages, and search results.
 *
 * Visual hierarchy (CLAUDE.md):
 * 1. Quranic Arabic text (largest, most prominent)
 * 2. Translation (clear, readable)
 * 3. Verse reference (muted)
 * 4. Plain explanation (when requested)
 *
 * Actions (tap/click):
 * - Links to the full verse page
 * - Copy verse text
 * - Save verse
 */

"use client";

import Link from "next/link";
import type { VerseRef, Verse } from "@/lib/types";
import { cn } from "@/lib/utils/cn";
import { ChevronRight, Copy, BookMarked } from "@/components/layout/icons";
import { useState } from "react";

interface VerseCardProps {
  verse: VerseRef | Verse;
  /** Show full plain explanation */
  showExplanation?: boolean;
  /** Show link to full verse page */
  showLink?: boolean;
  /** Used in answer cards — show relevance note */
  relevanceNote?: string;
  /** Visual variant */
  variant?: "default" | "compact" | "featured";
  className?: string;
}

export function VerseCard({
  verse,
  showExplanation = false,
  showLink = true,
  relevanceNote,
  variant = "default",
  className,
}: VerseCardProps) {
  const [copied, setCopied] = useState(false);
  const isFullVerse = "plainExplanation" in verse;

  const surahName = ("surahName" in verse ? verse.surahName : null) || `Surah ${verse.surahId}`;
  const verseRef = `${surahName} ${verse.surahId}:${verse.verseNumber}`;

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const text = `${verse.arabicText}\n\n${verse.translation}\n\n— ${verseRef}`;
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const content = (
    <div
      className={cn(
        "rounded-xl border p-4 md:p-5 transition-colors group",
        variant === "featured" && "p-5 md:p-6",
        variant === "compact" && "p-3",
        className
      )}
      style={{
        backgroundColor: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      {/* Arabic text — visually primary */}
      <div className="mb-3">
        <p
          className={cn(
            "arabic leading-loose text-right",
            variant === "featured" ? "text-2xl md:text-3xl" :
            variant === "compact" ? "text-lg" :
            "text-xl md:text-2xl"
          )}
          style={{ color: "var(--text-primary)" }}
          lang="ar"
          dir="rtl"
        >
          {verse.arabicText}
        </p>
      </div>

      {/* Translation */}
      <p
        className={cn(
          "leading-relaxed",
          variant === "compact" ? "text-sm" : "text-base"
        )}
        style={{ color: "var(--text-secondary)" }}
      >
        {verse.translation}
      </p>

      {/* Plain explanation — only on full verse pages */}
      {showExplanation && isFullVerse && (
        <p
          className="mt-3 pt-3 text-sm leading-relaxed border-t"
          style={{
            color: "var(--text-secondary)",
            borderColor: "var(--border)",
          }}
        >
          {(verse as Verse).plainExplanation}
        </p>
      )}

      {/* Relevance note — shown in answer context */}
      {relevanceNote && (
        <div
          className="mt-3 pt-3 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <p
            className="text-xs leading-relaxed"
            style={{ color: "var(--text-tertiary)" }}
          >
            <span
              className="text-xs font-medium uppercase tracking-wide mr-1"
              style={{ color: "var(--teal)" }}
            >
              Why this verse:
            </span>
            {relevanceNote}
          </p>
        </div>
      )}

      {/* Footer: verse reference + actions */}
      <div className="mt-3 flex items-center justify-between">
        <span
          className="text-xs font-medium"
          style={{ color: "var(--text-tertiary)" }}
        >
          {verseRef}
        </span>

        <div className="flex items-center gap-1">
          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="flex items-center justify-center w-7 h-7 rounded-md transition-colors"
            style={{ color: copied ? "var(--teal)" : "var(--text-tertiary)" }}
            aria-label={copied ? "Copied" : "Copy verse"}
          >
            <Copy size={13} />
          </button>

          {/* Arrow — when linkable */}
          {showLink && (
            <span
              className="flex items-center justify-center w-7 h-7 rounded-md transition-opacity opacity-0 group-hover:opacity-100"
              style={{ color: "var(--teal)" }}
              aria-hidden="true"
            >
              <ChevronRight size={14} />
            </span>
          )}
        </div>
      </div>
    </div>
  );

  if (showLink) {
    return (
      <Link
        href={`/read/${verse.surahId}/${verse.verseNumber}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-xl"
        style={{ "--ring-color": "var(--teal)" } as React.CSSProperties}
      >
        {content}
      </Link>
    );
  }

  return content;
}
