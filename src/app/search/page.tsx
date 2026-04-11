/**
 * Search Page
 *
 * Full-text search across questions, themes, and verses.
 * Routes here from AskInput when no direct question match is found.
 *
 * V1: Simple substring search. Extension point for semantic/vector search.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { QUESTIONS, THEMES, VERSES } from "@/lib/data";
import { cn } from "@/lib/utils/cn";
import { MessageSquare, Hash, BookOpen } from "@/components/layout/icons";

export const metadata: Metadata = {
  title: "Search — The Criterion",
  description: "Search across Quranic verses, questions, and themes.",
};

interface PageProps {
  searchParams: Promise<{ q?: string; type?: string }>;
}

function searchQuestions(query: string) {
  const lower = query.toLowerCase();
  return QUESTIONS.filter(
    (q) =>
      q.questionText.toLowerCase().includes(lower) ||
      q.shortLabel.toLowerCase().includes(lower) ||
      q.answer.directResponse.toLowerCase().includes(lower)
  ).slice(0, 5);
}

function searchThemes(query: string) {
  const lower = query.toLowerCase();
  return THEMES.filter(
    (t) =>
      t.nameEnglish.toLowerCase().includes(lower) ||
      t.thesis.toLowerCase().includes(lower) ||
      t.description.toLowerCase().includes(lower)
  ).slice(0, 4);
}

function searchVerses(query: string) {
  const lower = query.toLowerCase();
  return VERSES.filter(
    (v) =>
      v.translation.toLowerCase().includes(lower) ||
      v.plainExplanation?.toLowerCase().includes(lower)
  ).slice(0, 4);
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q, type } = await searchParams;
  const query = q?.trim() ?? "";

  const matchedQuestions = query ? searchQuestions(query) : [];
  const matchedThemes = query ? searchThemes(query) : [];
  const matchedVerses = query ? searchVerses(query) : [];
  const hasResults =
    matchedQuestions.length > 0 ||
    matchedThemes.length > 0 ||
    matchedVerses.length > 0;

  return (
    <AppShell showBack backHref={type === "ask" ? "/ask" : "/"} title="Search">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">

        {/* Search header */}
        <div className="space-y-1">
          {query ? (
            <>
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--text-tertiary)" }}
              >
                {hasResults ? "Results for" : "No results for"}
              </p>
              <h1
                className="text-xl font-semibold"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-display)",
                }}
              >
                &ldquo;{query}&rdquo;
              </h1>
            </>
          ) : (
            <h1
              className="text-xl font-semibold"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-display)",
              }}
            >
              Search
            </h1>
          )}
        </div>

        {/* No results state */}
        {query && !hasResults && (
          <div
            className="p-5 rounded-2xl border space-y-4"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              No matching questions, themes, or verses were found for this query.
              The V1 knowledge base is limited — try browsing directly.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/ask"
                className="text-xs px-3 py-1.5 rounded-full border transition-colors"
                style={{
                  backgroundColor: "var(--teal-light)",
                  borderColor: "var(--teal)30",
                  color: "var(--teal)",
                }}
              >
                Browse all questions
              </Link>
              <Link
                href="/themes"
                className="text-xs px-3 py-1.5 rounded-full border transition-colors"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                Browse themes
              </Link>
              <Link
                href="/read"
                className="text-xs px-3 py-1.5 rounded-full border transition-colors"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                }}
              >
                Read the Quran
              </Link>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!query && (
          <div
            className="p-5 rounded-2xl border text-sm"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            Enter a question, theme, or verse to search across The Criterion's
            indexed content.
          </div>
        )}

        {/* Questions results */}
        {matchedQuestions.length > 0 && (
          <section className="space-y-3" aria-labelledby="q-results">
            <div className="flex items-center gap-2">
              <MessageSquare size={14} style={{ color: "var(--teal)" }} />
              <SectionLabel id="q-results">Questions</SectionLabel>
            </div>
            <div className="space-y-2">
              {matchedQuestions.map((q) => (
                <Link
                  key={q.questionSlug}
                  href={`/ask/${q.questionSlug}`}
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
                    {q.questionText}
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

        {/* Themes results */}
        {matchedThemes.length > 0 && (
          <section className="space-y-3" aria-labelledby="t-results">
            <div className="flex items-center gap-2">
              <Hash size={14} style={{ color: "var(--teal)" }} />
              <SectionLabel id="t-results">Themes</SectionLabel>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {matchedThemes.map((theme) => (
                <Link
                  key={theme.themeId}
                  href={`/themes/${theme.themeId}`}
                  className={cn("p-4 rounded-xl border transition-colors")}
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    {theme.emoji && (
                      <span className="flex-shrink-0 text-xl mt-0.5" aria-hidden="true">
                        {theme.emoji}
                      </span>
                    )}
                    <div>
                      <p
                        className="font-medium text-sm mb-1"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {theme.nameEnglish}
                      </p>
                      <p
                        className="text-xs leading-snug line-clamp-2"
                        style={{ color: "var(--text-tertiary)" }}
                      >
                        {theme.thesis}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Verses results */}
        {matchedVerses.length > 0 && (
          <section className="space-y-3" aria-labelledby="v-results">
            <div className="flex items-center gap-2">
              <BookOpen size={14} style={{ color: "var(--teal)" }} />
              <SectionLabel id="v-results">Verses</SectionLabel>
            </div>
            <div className="space-y-2">
              {matchedVerses.map((verse) => (
                <Link
                  key={verse.verseId}
                  href={`/read/${verse.surahId}/${verse.verseNumber}`}
                  className={cn("block p-4 rounded-xl border transition-colors")}
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <p
                    className="text-right text-base mb-2 leading-loose"
                    style={{
                      fontFamily: "var(--font-arabic)",
                      color: "var(--text-primary)",
                    }}
                    lang="ar"
                    dir="rtl"
                  >
                    {verse.arabicText}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {verse.translation}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    Surah {verse.surahId} · {verse.surahId}:{verse.verseNumber}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </AppShell>
  );
}
