/**
 * Home — The primary on-ramp
 *
 * PRD: "Home screen: Featured verse of the day, quick access to
 * Read/Ask/Themes, recent activity (V1: static)."
 *
 * Design intent: calm, unhurried. This is a sanctuary, not a dashboard.
 * The featured verse is visually primary. Mode cards are clear but not loud.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { VerseCard } from "@/components/verse/VerseCard";
import { getVerseById, QUESTIONS } from "@/lib/data";
import { cn } from "@/lib/utils/cn";
import { BookOpen, MessageSquare, Hash } from "@/components/layout/icons";

export const metadata: Metadata = {
  title: "The Criterion — Quran-first guidance",
  description: "Read the Quran with context. Ask real questions and receive Quran-anchored answers. Explore recurring themes.",
};

// Featured verse — static for V1, extension point for personalization
const FEATURED_VERSE_ID = "2:255"; // Ayat al-Kursi
const FEATURED_CONTEXT = "The Throne Verse — the Quran's most expansive statement on divine sovereignty and boundless knowledge.";

// Mode cards: the three primary on-ramps
const MODES = [
  {
    label: "Read",
    href: "/read",
    icon: BookOpen,
    description: "Browse the Quran by surah. Each verse opens into context, cross-references, and themes.",
    cta: "Open the Quran",
  },
  {
    label: "Ask",
    href: "/ask",
    icon: MessageSquare,
    description: "Ask anything you are wondering about — life, faith, hardship, or meaning. Answers are verse-grounded.",
    cta: "Ask a question",
  },
  {
    label: "Themes",
    href: "/themes",
    icon: Hash,
    description: "Explore the Quran's recurring ideas — patience, guidance, mercy — through their verses.",
    cta: "Browse themes",
  },
] as const;

// A few suggested questions for the home page
const HOME_QUESTIONS = [
  "how-to-deal-with-hardship",
  "what-does-quran-say-about-anxiety",
  "how-to-find-hope",
];

export default function HomePage() {
  const featuredVerse = getVerseById(FEATURED_VERSE_ID);
  const suggestedQuestions = HOME_QUESTIONS
    .map((slug) => QUESTIONS.find((q) => q.questionSlug === slug))
    .filter(Boolean);

  return (
    <AppShell hideTopNav={false} title="The Criterion">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-10">

        {/* ── Product mark + tagline ───────────────────────── */}
        <div className="pt-2 space-y-2">
          <div className="flex items-baseline gap-3">
            <h1
              className="text-3xl font-semibold tracking-tight"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-display)",
              }}
            >
              The Criterion
            </h1>
            <span
              className="text-xl"
              style={{
                fontFamily: "var(--font-arabic)",
                color: "var(--text-secondary)",
              }}
              lang="ar"
              dir="rtl"
            >
              المعيار
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            A Quran-first study companion. Read with context.
            Ask with grounding. Explore with honesty.
          </p>
        </div>

        {/* ── Featured verse ───────────────────────────────── */}
        {featuredVerse && (
          <section className="space-y-3" aria-labelledby="featured-verse-label">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              id="featured-verse-label"
              style={{ color: "var(--text-tertiary)" }}
            >
              Verse
            </p>
            <VerseCard verse={featuredVerse} variant="featured" showLink />
            {FEATURED_CONTEXT && (
              <p
                className="text-xs leading-relaxed pl-1"
                style={{ color: "var(--text-tertiary)" }}
              >
                {FEATURED_CONTEXT}
              </p>
            )}
          </section>
        )}

        {/* ── Mode cards ───────────────────────────────────── */}
        <section className="space-y-3" aria-labelledby="modes-label">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            id="modes-label"
            style={{ color: "var(--text-tertiary)" }}
          >
            Explore
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {MODES.map(({ label, href, icon: Icon, description, cta }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "p-4 rounded-xl border transition-colors group flex flex-col gap-3"
                )}
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div className="flex items-center gap-2">
                  <Icon
                    size={16}
                    style={{ color: "var(--teal)" }}
                  />
                  <p
                    className="font-medium text-sm"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {label}
                  </p>
                </div>
                <p
                  className="text-xs leading-relaxed flex-1"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {description}
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--teal)" }}
                >
                  {cta} →
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Suggested questions ──────────────────────────── */}
        {suggestedQuestions.length > 0 && (
          <section className="space-y-3" aria-labelledby="questions-label">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              id="questions-label"
              style={{ color: "var(--text-tertiary)" }}
            >
              Common questions
            </p>
            <div className="space-y-2">
              {suggestedQuestions.map((q) => (
                <Link
                  key={q!.questionSlug}
                  href={`/ask/${q!.questionSlug}`}
                  className={cn(
                    "flex items-center justify-between gap-3 p-4 rounded-xl border text-sm",
                    "transition-colors group"
                  )}
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <span style={{ color: "var(--text-primary)" }}>
                    {q!.questionText}
                  </span>
                  <span
                    className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: "var(--teal-light)",
                      color: "var(--teal)",
                    }}
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── V1 notice ────────────────────────────────────── */}
        <div
          className="p-4 rounded-xl border text-xs leading-relaxed"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
            color: "var(--text-tertiary)",
          }}
        >
          <p>
            <span className="font-medium" style={{ color: "var(--text-secondary)" }}>
              V1 — Early access:
            </span>{" "}
            This is a working prototype. Verse coverage, questions, and themes
            are limited. Stub content is clearly labeled. Verified sources and
            expanded coverage are coming in V2.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
