/**
 * Theme Detail Page
 *
 * Organizes a single theme — its thesis, key verses, and bridge connections
 * to the Ask and Read modes. The classical treatment note is shown with a
 * StubNotice when content has not been retrieved from an indexed source.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { VerseCard } from "@/components/verse/VerseCard";
import { StubNotice } from "@/components/ui/StubNotice";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { THEMES, getThemeById, getQuestionBySlug } from "@/lib/data";
import { cn } from "@/lib/utils/cn";
import { MessageSquare, BookOpen } from "@/components/layout/icons";

interface PageProps {
  params: Promise<{ themeSlug: string }>;
}

const CLUSTER_LABELS: Record<string, string> = {
  "inner-states": "Inner states",
  "guidance-practice": "Guidance and practice",
  "divine-attributes": "Divine attributes",
  "human-condition": "The human condition",
  "relationships": "Relationships and society",
  "faith-disbelief": "Faith and belief",
};

export async function generateStaticParams() {
  return THEMES.map((t) => ({ themeSlug: t.themeId }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { themeSlug } = await params;
  const theme = getThemeById(themeSlug);
  if (!theme) return { title: "Not found" };
  return {
    title: `${theme.nameEnglish} — The Criterion`,
    description: theme.thesis,
  };
}

export default async function ThemePage({ params }: PageProps) {
  const { themeSlug } = await params;
  const theme = getThemeById(themeSlug);
  if (!theme) notFound();

  const relatedThemes = theme.relatedThemeIds
    .map((id) => getThemeById(id))
    .filter(Boolean);

  const relatedQuestions = theme.relatedQuestionSlugs
    .map((slug) => getQuestionBySlug(slug))
    .filter(Boolean)
    .slice(0, 4);

  return (
    <AppShell showBack backHref="/themes" title="Theme">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">

        {/* ── Header ──────────────────────────────────────── */}
        <div className="space-y-3">
          {/* Cluster label */}
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-tertiary)" }}
          >
            {CLUSTER_LABELS[theme.cluster] ?? theme.cluster}
          </p>

          <div className="flex items-start gap-4">
            {theme.emoji && (
              <span className="text-4xl flex-shrink-0 mt-1" aria-hidden="true">
                {theme.emoji}
              </span>
            )}
            <div className="space-y-1">
              <h1
                className="text-2xl font-semibold tracking-tight leading-snug"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {theme.nameEnglish}
              </h1>
              <p
                className="text-xl"
                style={{
                  fontFamily: "var(--font-arabic)",
                  color: "var(--text-secondary)",
                }}
                lang="ar"
                dir="rtl"
              >
                {theme.nameArabic}
              </p>
            </div>
          </div>
        </div>

        {/* ── Thesis ──────────────────────────────────────── */}
        <section
          className="p-5 rounded-2xl border"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <p
            className="text-base leading-relaxed font-medium"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            {theme.thesis}
          </p>
        </section>

        {/* ── Description ─────────────────────────────────── */}
        <section className="space-y-2">
          <SectionLabel>Overview</SectionLabel>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {theme.description}
          </p>
        </section>

        {/* ── Primary Verses ───────────────────────────────── */}
        {theme.primaryVerses.length > 0 && (
          <section className="space-y-3" aria-labelledby="verses-heading">
            <div className="flex items-center gap-2">
              <BookOpen size={14} style={{ color: "var(--teal)" }} />
              <SectionLabel id="verses-heading">Key verses</SectionLabel>
            </div>
            <div className="space-y-3">
              {theme.primaryVerses.map((verse) => (
                <VerseCard
                  key={verse.verseId}
                  verse={verse}
                  showLink
                />
              ))}
            </div>
          </section>
        )}

        {/* ── Classical Treatment ──────────────────────────── */}
        <section className="space-y-3" aria-labelledby="classical-heading">
          <SectionLabel id="classical-heading">Classical treatment</SectionLabel>
          {theme.classicalTreatmentNote ? (
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {theme.classicalTreatmentNote}
            </p>
          ) : (
            <p
              className="text-sm leading-relaxed italic"
              style={{ color: "var(--text-tertiary)" }}
            >
              Classical scholarly treatment for this theme has not been indexed yet.
            </p>
          )}
          {theme.classicalTreatmentIsStub && (
            <StubNotice type="tafsir" />
          )}
        </section>

        {/* ── Related Questions (bridge → Ask mode) ────────── */}
        {relatedQuestions.length > 0 && (
          <section className="space-y-3" aria-labelledby="questions-heading">
            <div className="flex items-center gap-2">
              <MessageSquare size={14} style={{ color: "var(--teal)" }} />
              <SectionLabel id="questions-heading">
                Questions this theme addresses
              </SectionLabel>
            </div>
            <div className="space-y-2">
              {relatedQuestions.map((q) => (
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

        {/* ── Related Themes ───────────────────────────────── */}
        {relatedThemes.length > 0 && (
          <section className="space-y-3" aria-labelledby="related-themes-heading">
            <SectionLabel id="related-themes-heading">Related themes</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {relatedThemes.map((related) => (
                <Link
                  key={related!.themeId}
                  href={`/themes/${related!.themeId}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm transition-colors"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                >
                  {related!.emoji && (
                    <span aria-hidden="true">{related!.emoji}</span>
                  )}
                  {related!.nameEnglish}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </AppShell>
  );
}
