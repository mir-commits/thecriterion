/**
 * Surah Reader Page
 *
 * Displays all available verses for a surah with:
 * - Arabic text (primary)
 * - Translation
 * - Links to individual verse pages
 * - Surah context and brief description
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { getSurahById, getVersesBySurah, SURAHS } from "@/lib/data";
import { cn } from "@/lib/utils/cn";
import { ChevronRight } from "@/components/layout/icons";

interface PageProps {
  params: Promise<{ surahId: string }>;
}

export async function generateStaticParams() {
  return SURAHS.map((s) => ({ surahId: String(s.surahId) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { surahId } = await params;
  const surah = getSurahById(Number(surahId));
  if (!surah) return { title: "Not found" };
  return {
    title: `${surah.nameTransliterated} — ${surah.nameMeaning} | The Criterion`,
    description: surah.briefDescription,
  };
}

export default async function SurahPage({ params }: PageProps) {
  const { surahId } = await params;
  const id = Number(surahId);
  const surah = getSurahById(id);
  if (!surah) notFound();

  const verses = getVersesBySurah(id);

  return (
    <AppShell showBack backHref="/read" title={surah.nameTransliterated}>
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Surah header */}
        <div className="mb-8">
          {/* Arabic name */}
          <h1
            className="text-4xl text-right mb-2"
            style={{
              fontFamily: "var(--font-arabic)",
              color: "var(--text-primary)",
              lineHeight: 1.6,
            }}
            lang="ar"
            dir="rtl"
          >
            {surah.nameArabic}
          </h1>

          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-xl font-semibold"
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-display)",
                }}
              >
                {surah.nameTransliterated}
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {surah.nameMeaning}
              </p>
            </div>

            <div className="text-right space-y-0.5">
              <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                {surah.verseCount} verses
              </p>
              <p
                className="text-xs capitalize"
                style={{ color: "var(--text-tertiary)" }}
              >
                {surah.revelationType}
              </p>
            </div>
          </div>

          {/* Description */}
          <p
            className="mt-4 text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {surah.briefDescription}
          </p>

          {surah.structuralNote && (
            <p
              className="mt-2 text-xs leading-relaxed italic"
              style={{ color: "var(--text-tertiary)" }}
            >
              {surah.structuralNote}
            </p>
          )}
        </div>

        {/* Bismillah — for all surahs except Al-Fatiha (1) and At-Tawbah (9) */}
        {id !== 9 && id !== 1 && (
          <div
            className="text-center py-4 mb-6 rounded-xl border"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="text-2xl"
              style={{
                fontFamily: "var(--font-arabic)",
                color: "var(--text-primary)",
                lineHeight: 2,
              }}
              lang="ar"
              dir="rtl"
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: "var(--text-tertiary)" }}
            >
              In the name of Allah, the Entirely Merciful, the Especially Merciful
            </p>
          </div>
        )}

        {/* Verses */}
        {verses.length > 0 ? (
          <div className="space-y-0">
            {verses.map((verse, idx) => (
              <Link
                key={verse.verseId}
                href={`/read/${surah.surahId}/${verse.verseNumber}`}
                className={cn(
                  "block px-4 py-5 border-b group",
                  "transition-colors hover:bg-[var(--surface)]",
                  idx === verses.length - 1 && "border-b-0"
                )}
                style={{ borderColor: "var(--border)" }}
              >
                {/* Verse number + Arabic */}
                <div className="flex items-start gap-3 mb-3" dir="rtl">
                  <p
                    className="text-xl leading-loose text-right flex-1"
                    style={{
                      fontFamily: "var(--font-arabic)",
                      color: "var(--text-primary)",
                      lineHeight: 2,
                    }}
                    lang="ar"
                  >
                    {verse.arabicText}
                  </p>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full border text-xs flex items-center justify-center mt-2"
                    style={{
                      borderColor: "var(--teal)40",
                      color: "var(--teal)",
                    }}
                    aria-label={`Verse ${verse.verseNumber}`}
                  >
                    {verse.verseNumber}
                  </span>
                </div>

                {/* Translation */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {verse.translation}
                </p>

                {/* "Study deeper" hint */}
                <div
                  className="mt-3 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--teal)" }}
                >
                  <span>Study this verse</span>
                  <ChevronRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Surah not yet fully indexed */
          <div
            className="p-6 rounded-xl border text-center space-y-3"
            style={{
              backgroundColor: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="text-sm font-medium"
              style={{ color: "var(--text-secondary)" }}
            >
              Deep study for this surah is coming soon
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--text-tertiary)" }}
            >
              This version includes detailed verse study for selected surahs.
              Full Quranic coverage is in active development.
            </p>
          </div>
        )}
      </div>
    </AppShell>
  );
}
