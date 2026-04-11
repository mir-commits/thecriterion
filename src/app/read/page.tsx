/**
 * Read Mode — Surah List
 *
 * The entry point into verse-by-verse study.
 * Displays all 114 surahs with their names, verse counts, and revelation type.
 * Links to the full surah reader.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { getSurahList } from "@/lib/data";
import { cn } from "@/lib/utils/cn";

export const metadata: Metadata = {
  title: "Read — The Criterion",
  description: "Read the Quran verse by verse with Arabic text, translation, and plain-language understanding.",
};

export default function ReadPage() {
  const surahs = getSurahList();

  return (
    <AppShell title="Read the Quran">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Page header */}
        <div className="mb-8 space-y-2">
          <h1
            className="text-2xl font-semibold tracking-tight"
            style={{ color: "var(--text-primary)", fontFamily: "var(--font-display)" }}
          >
            The Quran
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            114 surahs · 6,236 verses · Uthmanic orthography with Sahih International translation
          </p>
        </div>

        {/* Revelation type filter (visual only in V1) */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1 no-scrollbar">
          {["All", "Makki", "Madani"].map((filter) => (
            <span
              key={filter}
              className={cn(
                "flex-shrink-0 px-3 py-1 rounded-full text-sm font-medium border cursor-default",
                filter === "All"
                  ? "border-current/30"
                  : "border-transparent"
              )}
              style={{
                backgroundColor: filter === "All" ? "var(--teal-light)" : "var(--surface)",
                color: filter === "All" ? "var(--teal)" : "var(--text-tertiary)",
                borderColor: filter === "All" ? "var(--teal)40" : "var(--border)",
              }}
            >
              {filter}
            </span>
          ))}
        </div>

        {/* Surah list */}
        <div className="space-y-1">
          {surahs.map((surah) => (
            <Link
              key={surah.surahId}
              href={`/read/${surah.surahId}`}
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl border transition-colors group",
                "hover:border-current/30"
              )}
              style={{
                backgroundColor: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              {/* Surah number badge */}
              <div
                className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-sm font-semibold"
                style={{
                  backgroundColor: "var(--teal-light)",
                  color: "var(--teal)",
                }}
              >
                {surah.surahId}
              </div>

              {/* Names */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p
                    className="font-medium text-sm leading-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {surah.nameTransliterated}
                  </p>
                  <p
                    className="text-base leading-none flex-shrink-0"
                    style={{ color: "var(--text-secondary)", fontFamily: "var(--font-arabic)" }}
                    lang="ar"
                    dir="rtl"
                  >
                    {surah.nameArabic}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {surah.nameMeaning}
                  </p>
                  <span style={{ color: "var(--border)" }} aria-hidden="true">·</span>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {surah.verseCount} verses
                  </p>
                  <span style={{ color: "var(--border)" }} aria-hidden="true">·</span>
                  <p
                    className="text-xs capitalize"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {surah.revelationType}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Note about V1 content coverage */}
        <div
          className="mt-8 p-4 rounded-xl border text-xs leading-relaxed"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
            color: "var(--text-tertiary)",
          }}
        >
          <p>
            <span className="font-medium" style={{ color: "var(--text-secondary)" }}>
              Content note:
            </span>{" "}
            Deep verse study (explanations, cross-references, themes) is available for
            selected verses in this early version. Full Quranic coverage is in development.
          </p>
        </div>
      </div>
    </AppShell>
  );
}
