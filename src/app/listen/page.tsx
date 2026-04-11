/**
 * Listen — Audio recitation mode
 *
 * V1 stub: audio recitation is deferred.
 * Extension point: wire to a recitation API or hosted audio files in V2.
 *
 * PRD: "Listen mode: Audio recitation with synchronized verse highlighting."
 */

import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { SURAHS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Listen — The Criterion",
  description: "Listen to Quranic recitation with verse context.",
};

export default function ListenPage() {
  // Show a preview of surahs that will be available when audio is wired up
  const previewSurahs = SURAHS.slice(0, 6);

  return (
    <AppShell title="Listen">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 space-y-2">
          <h1
            className="text-2xl font-semibold tracking-tight"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            Listen
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Quranic recitation with synchronized verse highlighting.
          </p>
        </div>

        {/* Coming soon notice */}
        <div
          className="p-6 rounded-2xl border text-center space-y-4 mb-10"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <p className="text-4xl" aria-hidden="true">
            ◯
          </p>
          <div className="space-y-2 max-w-xs mx-auto">
            <p
              className="text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Audio recitation coming in V2
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--text-tertiary)" }}
            >
              Listen mode will pair authentic recitation audio with synchronized
              verse text, translation, and highlighted reading position.
            </p>
          </div>
          <div
            className="mt-2 inline-block text-xs px-3 py-1 rounded-full"
            style={{
              backgroundColor: "var(--teal-light)",
              color: "var(--teal)",
            }}
          >
            Planned for V2
          </div>
        </div>

        {/* Preview: surahs that will be available */}
        <div className="space-y-3">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-tertiary)" }}
          >
            Surahs being prepared
          </p>
          <div className="space-y-2">
            {previewSurahs.map((surah) => (
              <div
                key={surah.surahId}
                className="flex items-center gap-4 p-4 rounded-xl border opacity-50"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
                aria-disabled="true"
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: "var(--teal-light)",
                    color: "var(--teal)",
                  }}
                >
                  {surah.surahId}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {surah.nameTransliterated}
                    </p>
                    <p
                      className="flex-shrink-0"
                      style={{
                        fontFamily: "var(--font-arabic)",
                        color: "var(--text-secondary)",
                      }}
                      lang="ar"
                      dir="rtl"
                    >
                      {surah.nameArabic}
                    </p>
                  </div>
                  <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                    {surah.verseCount} verses
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p
            className="text-xs text-center pt-2"
            style={{ color: "var(--text-tertiary)" }}
          >
            While you wait, you can{" "}
            <Link
              href="/read"
              style={{ color: "var(--teal)" }}
              className="underline underline-offset-2"
            >
              read the Quran with full context
            </Link>
            .
          </p>
        </div>
      </div>
    </AppShell>
  );
}
