/**
 * Verse Deep-Dive Page — The Core Object
 *
 * This is the primary surface of the product. Everything connects to verses.
 *
 * Structure (CLAUDE.md visual hierarchy):
 * 1. Quranic Arabic text (most prominent)
 * 2. Translation (clear, attributed)
 * 3. Plain explanation
 * 4. Cross-references (Tier 1 — Quran explains Quran)
 * 5. Bridge modules (themes, related questions)
 * 6. Evidence layer (expandable — progressive disclosure)
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { QuestionsFromVerse } from "@/components/bridge/QuestionsFromVerse";
import { ThemesInVerse } from "@/components/bridge/ThemesInVerse";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { EvidenceTierLabel } from "@/components/ui/EvidenceTierLabel";
import { getVerseById, getSurahById, VERSES } from "@/lib/data";
import { cn } from "@/lib/utils/cn";
import { ChevronRight, ChevronLeft } from "@/components/layout/icons";

interface PageProps {
  params: Promise<{ surahId: string; verseNumber: string }>;
}

export async function generateStaticParams() {
  return VERSES.map((v) => ({
    surahId: String(v.surahId),
    verseNumber: String(v.verseNumber),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { surahId, verseNumber } = await params;
  const verse = getVerseById(`${surahId}:${verseNumber}`);
  if (!verse) return { title: "Verse not found" };
  const surah = getSurahById(verse.surahId);
  return {
    title: `${surah?.nameTransliterated ?? `Surah ${surahId}`} ${surahId}:${verseNumber} — The Criterion`,
    description: verse.translation,
  };
}

export default async function VersePage({ params }: PageProps) {
  const { surahId, verseNumber } = await params;
  const verseId = `${surahId}:${verseNumber}`;
  const verse = getVerseById(verseId);
  if (!verse) notFound();

  const surah = getSurahById(verse.surahId);
  const surahName = surah?.nameTransliterated ?? `Surah ${surahId}`;
  const verseNum = verse.verseNumber;

  // Simple prev/next navigation within available verses
  const allSurahVerses = VERSES.filter((v) => v.surahId === verse.surahId);
  const currentIdx = allSurahVerses.findIndex((v) => v.verseId === verseId);
  const prevVerse = currentIdx > 0 ? allSurahVerses[currentIdx - 1] : null;
  const nextVerse = currentIdx < allSurahVerses.length - 1 ? allSurahVerses[currentIdx + 1] : null;

  return (
    <AppShell
      showBack
      backHref={`/read/${surahId}`}
      title={`${surahName} ${surahId}:${verseNum}`}
    >
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
        {/* ── 1. Arabic Text — visually primary ─────────────── */}
        <section>
          <div
            className="p-6 rounded-2xl border text-center"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="arabic-xl mb-4"
              style={{ color: "var(--text-primary)" }}
              lang="ar"
              dir="rtl"
            >
              {verse.arabicText}
            </p>

            {/* Transliteration */}
            <p
              className="text-sm italic mb-4"
              style={{ color: "var(--text-tertiary)" }}
            >
              {verse.transliteration}
            </p>

            {/* Verse reference tag */}
            <span
              className="inline-block text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: "var(--teal-light)",
                color: "var(--teal)",
              }}
            >
              {surahName} · {surahId}:{verseNum}
            </span>
          </div>
        </section>

        {/* ── 2. Translation ────────────────────────────────── */}
        <section className="space-y-2">
          <SectionLabel>Translation</SectionLabel>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-primary)" }}
          >
            {verse.translation}
          </p>
          <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
            {verse.translatorName}
          </p>
        </section>

        {/* ── 3. Plain explanation ──────────────────────────── */}
        {verse.plainExplanation && (
          <section className="space-y-2">
            <SectionLabel>Understanding</SectionLabel>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {verse.plainExplanation}
            </p>
          </section>
        )}

        {/* ── 4. Cross-references — Tier 1 (Quran explains Quran) */}
        {verse.crossReferences.length > 0 && (
          <section className="space-y-3" aria-labelledby="cross-ref-heading">
            <div className="flex items-center justify-between">
              <SectionLabel id="cross-ref-heading">
                Elsewhere the Quran develops this idea
              </SectionLabel>
              <EvidenceTierLabel tier={1} className="ml-auto" />
            </div>

            <div className="space-y-2">
              {verse.crossReferences.map((xref) => (
                <Link
                  key={xref.verseId}
                  href={`/read/${xref.surahId}/${xref.verseNumber}`}
                  className={cn(
                    "block p-4 rounded-xl border transition-colors group"
                  )}
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  {/* Arabic */}
                  <p
                    className="text-right text-lg leading-loose mb-2"
                    style={{
                      fontFamily: "var(--font-arabic)",
                      color: "var(--text-primary)",
                      lineHeight: 2,
                    }}
                    lang="ar"
                    dir="rtl"
                  >
                    {xref.arabicText}
                  </p>

                  {/* Translation */}
                  <p
                    className="text-sm leading-relaxed mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {xref.translation}
                  </p>

                  {/* Relationship description */}
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    <span
                      className="font-medium uppercase text-[10px] tracking-wide mr-1"
                      style={{ color: "var(--teal)" }}
                    >
                      {xref.relationshipClass.replace("_", " ")}:
                    </span>
                    {xref.description}
                  </p>

                  {/* Reference */}
                  <div className="flex items-center justify-between mt-2">
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      {xref.surahName} {xref.surahId}:{xref.verseNumber}
                    </span>
                    <ChevronRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--teal)" }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── 5. Bridge: Themes ─────────────────────────────── */}
        <ThemesInVerse verse={verse} />

        {/* ── 6. Bridge: Questions ──────────────────────────── */}
        <QuestionsFromVerse verse={verse} />

        {/* ── Revelation context ────────────────────────────── */}
        <section
          className="p-4 rounded-xl border space-y-1"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <SectionLabel>Revelation context</SectionLabel>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
            <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>
              <span className="font-medium capitalize" style={{ color: "var(--text-secondary)" }}>
                {verse.revelationPeriod.replace("_", " ")}
              </span>
              {" "}revelation
            </span>
            <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>
              <span className="font-medium capitalize" style={{ color: "var(--text-secondary)" }}>
                {verse.muhkamMutashabih}
              </span>
              {" "}(clear/ambiguous classification)
            </span>
          </div>
          {verse.structuralNote && (
            <p
              className="text-xs leading-relaxed mt-2 italic"
              style={{ color: "var(--text-tertiary)" }}
            >
              {verse.structuralNote}
            </p>
          )}
        </section>

        {/* ── Prev / Next navigation ────────────────────────── */}
        <div className="flex gap-2">
          {prevVerse ? (
            <Link
              href={`/read/${prevVerse.surahId}/${prevVerse.verseNumber}`}
              className="flex-1 flex items-center gap-2 p-3 rounded-xl border transition-colors"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <ChevronLeft size={16} style={{ color: "var(--teal)" }} />
              <div className="min-w-0">
                <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                  Previous
                </p>
                <p
                  className="text-sm font-medium truncate"
                  style={{ color: "var(--text-primary)" }}
                >
                  {surahId}:{prevVerse.verseNumber}
                </p>
              </div>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextVerse ? (
            <Link
              href={`/read/${nextVerse.surahId}/${nextVerse.verseNumber}`}
              className="flex-1 flex items-center justify-end gap-2 p-3 rounded-xl border transition-colors"
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              <div className="min-w-0 text-right">
                <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                  Next
                </p>
                <p
                  className="text-sm font-medium truncate"
                  style={{ color: "var(--text-primary)" }}
                >
                  {surahId}:{nextVerse.verseNumber}
                </p>
              </div>
              <ChevronRight size={16} style={{ color: "var(--teal)" }} />
            </Link>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </AppShell>
  );
}
