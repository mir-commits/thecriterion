/**
 * QuestionsFromVerse — Bridge Module
 *
 * "Questions this verse speaks to" — appears on every verse page.
 *
 * This is the primary connective tissue between Read mode and Ask mode.
 * CLAUDE.md Non-Negotiable #8: "Every verse page should expose related
 * questions people actually ask. Verse exploration should not feel static."
 *
 * Renders a small set of questions that the verse is relevant to,
 * each linking into Ask mode preloaded with that question.
 */

import Link from "next/link";
import { getQuestionsByTheme, getQuestionBySlug } from "@/lib/data";
import type { Verse } from "@/lib/types";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ChevronRight, MessageSquare } from "@/components/layout/icons";
import { cn } from "@/lib/utils/cn";

interface QuestionsFromVerseProps {
  verse: Verse;
  className?: string;
}

export function QuestionsFromVerse({ verse, className }: QuestionsFromVerseProps) {
  // Gather questions via related question slugs on the verse
  const questions = verse.relatedQuestionSlugs
    .map((slug) => getQuestionBySlug(slug))
    .filter(Boolean)
    .slice(0, 4);

  if (questions.length === 0) return null;

  return (
    <section className={cn("space-y-3", className)} aria-labelledby="verse-questions-heading">
      <div className="flex items-center gap-2">
        <MessageSquare size={14} style={{ color: "var(--teal)" }} />
        <SectionLabel id="verse-questions-heading">
          Questions this verse speaks to
        </SectionLabel>
      </div>

      <div className="space-y-2">
        {questions.map((q) => (
          <Link
            key={q!.questionSlug}
            href={`/ask/${q!.questionSlug}`}
            className={cn(
              "flex items-center justify-between gap-3 p-3 rounded-xl border",
              "transition-colors group"
            )}
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <span
              className="text-sm leading-snug"
              style={{ color: "var(--text-primary)" }}
            >
              {q!.questionText}
            </span>
            <ChevronRight
              size={16}
              className="flex-shrink-0 transition-transform group-hover:translate-x-0.5"
              style={{ color: "var(--teal)" }}
            />
          </Link>
        ))}
      </div>

      <Link
        href="/ask"
        className="text-xs font-medium transition-opacity hover:opacity-70"
        style={{ color: "var(--teal)" }}
      >
        Ask your own question →
      </Link>
    </section>
  );
}
