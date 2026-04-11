/**
 * Answer Page — Structured 6-part answer format
 *
 * This is the most trust-critical page in the product.
 * It must faithfully implement the answer architecture from CLAUDE.md:
 *
 * 1. Direct response
 * 2. Key verses (Quranic anchors) — REQUIRED, never empty
 * 3. How the Quran explains this elsewhere
 * 4. Interpretive note
 * 5. Confidence / ambiguity signal
 * 6. Open the study path (bridge to verses, themes, related questions)
 *
 * NON-NEGOTIABLES:
 * - Every answer must show verse grounding (CLAUDE.md #7)
 * - Evidence basis must be visible (text-internal vs tradition-dependent)
 * - Confidence signal must be shown, never hidden
 * - Stub notice must appear when content is not retrieved from indexed source
 * - No fatwa language; if legal derivation is required, say so
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { ConfidenceBadge } from "@/components/ui/ConfidenceBadge";
import { EvidenceBasisChip } from "@/components/ui/EvidenceTierLabel";
import { StubNotice } from "@/components/ui/StubNotice";
import { VerseCard } from "@/components/verse/VerseCard";
import { StudyThePassage } from "@/components/bridge/StudyThePassage";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getQuestionBySlug, getThemeById, QUESTIONS } from "@/lib/data";
import { cn } from "@/lib/utils/cn";
import { ChevronRight, MessageSquare, Hash, AlertTriangle } from "@/components/layout/icons";

interface PageProps {
  params: Promise<{ questionSlug: string }>;
}

export async function generateStaticParams() {
  return QUESTIONS.map((q) => ({ questionSlug: q.questionSlug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { questionSlug } = await params;
  const question = getQuestionBySlug(questionSlug);
  if (!question) return { title: "Not found" };
  return {
    title: `${question.questionText} — The Criterion`,
    description: question.answer.directResponse.slice(0, 160),
  };
}

export default async function AnswerPage({ params }: PageProps) {
  const { questionSlug } = await params;
  const question = getQuestionBySlug(questionSlug);
  if (!question) notFound();

  const { answer } = question;
  const themes = answer.themeIds.map((id) => getThemeById(id)).filter(Boolean);
  const relatedQuestions = answer.relatedQuestionSlugs
    .map((slug) => getQuestionBySlug(slug))
    .filter(Boolean)
    .slice(0, 3);

  // Collect all key verse refs for the passage bridge module
  const allVerseRefs = answer.keyVerses.map((av) => av.verse);

  return (
    <AppShell showBack backHref="/ask" title="Answer">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
        {/* Question heading */}
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <MessageSquare
              size={16}
              className="flex-shrink-0 mt-1"
              style={{ color: "var(--teal)" }}
            />
            <h1
              className="text-xl font-semibold leading-snug"
              style={{
                color: "var(--text-primary)",
                fontFamily: "var(--font-display)",
              }}
            >
              {question.questionText}
            </h1>
          </div>
        </div>

        {/* ── 1. Direct Response ────────────────────────────── */}
        <section
          className="p-5 rounded-2xl border"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
          aria-labelledby="direct-response-heading"
        >
          <SectionLabel id="direct-response-heading" className="mb-3">
            Direct answer
          </SectionLabel>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-primary)" }}
          >
            {answer.directResponse}
          </p>

          {/* Evidence basis chip */}
          <div className="mt-4 flex items-center gap-2 flex-wrap">
            <EvidenceBasisChip basis={answer.keyVerses[0]?.evidenceLayerLabel ?? "text-internal"} />
            <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>
              ·
            </span>
            <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>
              Sahih International translation
            </span>
          </div>
        </section>

        {/* ── 2. Key Verses — Quranic Anchors ──────────────── */}
        <section className="space-y-3" aria-labelledby="key-verses-heading">
          <SectionLabel id="key-verses-heading">Key verses</SectionLabel>

          {answer.keyVerses.length === 0 ? (
            /* This should never happen in a valid answer — trust safety net */
            <div
              className="p-4 rounded-xl border flex gap-2 text-sm"
              style={{
                backgroundColor: "var(--signal-ambiguous-bg)",
                borderColor: "var(--signal-ambiguous)30",
                color: "var(--signal-ambiguous)",
              }}
            >
              <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
              <p>No verse grounding available for this answer. This answer should not be displayed without Quranic anchors.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {answer.keyVerses.map((av) => (
                <VerseCard
                  key={av.verse.verseId}
                  verse={av.verse}
                  relevanceNote={av.relevanceNote}
                  showLink
                />
              ))}
            </div>
          )}
        </section>

        {/* ── 3. Quran elsewhere ────────────────────────────── */}
        <section className="space-y-3" aria-labelledby="quran-elsewhere-heading">
          <SectionLabel id="quran-elsewhere-heading">
            How the Quran explains this elsewhere
          </SectionLabel>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {answer.quranElsewhereNote}
          </p>

          {answer.relatedVerses.length > 0 && (
            <div className="space-y-2 mt-3">
              {answer.relatedVerses.map((av) => (
                <VerseCard
                  key={av.verse.verseId}
                  verse={av.verse}
                  relevanceNote={av.relevanceNote}
                  variant="compact"
                  showLink
                />
              ))}
            </div>
          )}
        </section>

        {/* ── 4. Interpretive Note ──────────────────────────── */}
        <section
          className="p-4 rounded-xl border space-y-2"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
          aria-labelledby="interpretive-note-heading"
        >
          <SectionLabel id="interpretive-note-heading">Interpretive note</SectionLabel>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {answer.interpretiveNote}
          </p>
        </section>

        {/* ── 5. Confidence / Ambiguity Signal ─────────────── */}
        <section className="space-y-3" aria-labelledby="confidence-heading">
          <SectionLabel id="confidence-heading">Evidence quality</SectionLabel>
          <ConfidenceBadge signal={answer.confidence} size="md" />

          {/* Stub notice — shown because V1 content is not retrieved */}
          {answer.provenance.isStub && (
            <StubNotice type="general" />
          )}
        </section>

        {/* ── Scholar consultation note (when applicable) ─── */}
        {answer.requiresScholarConsultation && answer.scholarConsultationNote && (
          <section
            className="p-4 rounded-xl border flex gap-2"
            style={{
              backgroundColor: "var(--signal-debated-bg)",
              borderColor: "var(--signal-debated)30",
            }}
          >
            <AlertTriangle
              size={16}
              className="flex-shrink-0 mt-0.5"
              style={{ color: "var(--signal-debated)" }}
            />
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--signal-debated)" }}
            >
              {answer.scholarConsultationNote}
            </p>
          </section>
        )}

        {/* ── 6. Study Path — Connected Guidance Layer ─────── */}
        <StudyThePassage
          primaryVerses={allVerseRefs}
          surahId={allVerseRefs[0]?.surahId}
        />

        {/* Related themes */}
        {themes.length > 0 && (
          <section className="space-y-3" aria-labelledby="themes-heading">
            <div className="flex items-center gap-2">
              <Hash size={14} style={{ color: "var(--teal)" }} />
              <SectionLabel id="themes-heading">Related themes</SectionLabel>
            </div>
            <div className="flex flex-wrap gap-2">
              {themes.map((theme) => (
                <Link
                  key={theme!.themeId}
                  href={`/themes/${theme!.themeId}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm transition-colors"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--text-primary)",
                  }}
                >
                  {theme!.emoji && <span aria-hidden="true">{theme!.emoji}</span>}
                  {theme!.nameEnglish}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related questions */}
        {relatedQuestions.length > 0 && (
          <section className="space-y-3" aria-labelledby="related-questions-heading">
            <div className="flex items-center gap-2">
              <MessageSquare size={14} style={{ color: "var(--teal)" }} />
              <SectionLabel id="related-questions-heading">Related questions</SectionLabel>
            </div>
            <div className="space-y-2">
              {relatedQuestions.map((q) => (
                <Link
                  key={q!.questionSlug}
                  href={`/ask/${q!.questionSlug}`}
                  className={cn(
                    "flex items-center justify-between gap-3 p-3 rounded-xl border text-sm",
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
                  <ChevronRight
                    size={14}
                    className="flex-shrink-0 group-hover:translate-x-0.5 transition-transform"
                    style={{ color: "var(--teal)" }}
                  />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* V1 footer notice */}
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
              About this answer:
            </span>{" "}
            This answer is Quran-anchored and structured to show its evidence basis.
            It is not a fatwa or a legal ruling. For questions of personal religious
            practice, consult a qualified scholar or local imam.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
