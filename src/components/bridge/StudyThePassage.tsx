/**
 * StudyThePassage — Bridge Module
 *
 * "Read the passage behind this answer" — appears on answer pages.
 *
 * CLAUDE.md Non-Negotiable #7: "Every Ask-mode response must include direct
 * verse grounding. Users must be able to open the verse context behind an
 * answer with one tap/click."
 *
 * PRD: "Every answer page must show the verses and surrounding passages
 * users should study next."
 */

import Link from "next/link";
import type { VerseRef } from "@/lib/types";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BookOpen, ChevronRight } from "@/components/layout/icons";
import { cn } from "@/lib/utils/cn";

interface StudyThePassageProps {
  primaryVerses: VerseRef[];
  surahId?: number;
  className?: string;
}

export function StudyThePassage({
  primaryVerses,
  surahId,
  className,
}: StudyThePassageProps) {
  if (primaryVerses.length === 0) return null;

  const primary = primaryVerses[0];

  return (
    <section className={cn("space-y-3", className)} aria-labelledby="study-passage-heading">
      <div className="flex items-center gap-2">
        <BookOpen size={14} style={{ color: "var(--teal)" }} />
        <SectionLabel id="study-passage-heading">
          Read the passage behind this answer
        </SectionLabel>
      </div>

      {/* Primary passage CTA */}
      <Link
        href={`/read/${primary.surahId}/${primary.verseNumber}`}
        className={cn(
          "flex items-center justify-between gap-3 p-4 rounded-xl border",
          "transition-colors group"
        )}
        style={{
          backgroundColor: "var(--teal-light)",
          borderColor: "var(--teal)30",
        }}
      >
        <div className="min-w-0">
          <p
            className="text-sm font-medium mb-0.5"
            style={{ color: "var(--teal)" }}
          >
            {primary.surahName || `Surah ${primary.surahId}`}{" "}
            {primary.surahId}:{primary.verseNumber}
          </p>
          <p
            className="text-sm leading-snug truncate"
            style={{ color: "var(--text-secondary)" }}
          >
            {primary.translation}
          </p>
        </div>
        <ChevronRight
          size={18}
          className="flex-shrink-0 transition-transform group-hover:translate-x-0.5"
          style={{ color: "var(--teal)" }}
        />
      </Link>

      {/* Additional verses */}
      {primaryVerses.length > 1 && (
        <div className="space-y-1.5">
          {primaryVerses.slice(1).map((v) => (
            <Link
              key={v.verseId}
              href={`/read/${v.surahId}/${v.verseNumber}`}
              className={cn(
                "flex items-center justify-between gap-3 p-3 rounded-xl border text-sm",
                "transition-colors group"
              )}
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <span style={{ color: "var(--text-secondary)" }}>
                <span className="font-medium" style={{ color: "var(--teal)" }}>
                  {v.surahName || `Surah ${v.surahId}`} {v.surahId}:{v.verseNumber}
                </span>
                <span className="mx-1">—</span>
                {v.translation.slice(0, 60)}…
              </span>
              <ChevronRight
                size={14}
                className="flex-shrink-0"
                style={{ color: "var(--text-tertiary)" }}
              />
            </Link>
          ))}
        </div>
      )}

      {/* Link to full surah */}
      {surahId && (
        <Link
          href={`/read/${surahId}`}
          className="text-xs font-medium transition-opacity hover:opacity-70"
          style={{ color: "var(--teal)" }}
        >
          Read the full surah →
        </Link>
      )}
    </section>
  );
}
