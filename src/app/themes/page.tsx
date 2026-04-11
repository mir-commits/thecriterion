/**
 * Theme Browser
 *
 * Organizes the Quran around recurring ideas without detaching from verse context.
 * PRD: "Browse curated themes. Theme overview with concise thesis.
 * Grouped verses by theme. Links to related questions."
 */

import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { THEMES } from "@/lib/data";
import { cn } from "@/lib/utils/cn";

export const metadata: Metadata = {
  title: "Themes — The Criterion",
  description: "Explore recurring themes of the Quran — mercy, patience, guidance, and more — with direct verse connections.",
};

// Group themes by cluster for display
const CLUSTER_LABELS: Record<string, string> = {
  "inner-states": "Inner states",
  "guidance-practice": "Guidance and practice",
  "divine-attributes": "Divine attributes",
  "human-condition": "The human condition",
  "relationships": "Relationships and society",
  "faith-disbelief": "Faith and belief",
};

export default function ThemesPage() {
  // Group by cluster
  const byCluseter = THEMES.reduce<Record<string, typeof THEMES>>((acc, theme) => {
    const key = theme.cluster;
    if (!acc[key]) acc[key] = [];
    acc[key].push(theme);
    return acc;
  }, {});

  return (
    <AppShell title="Themes">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8 space-y-2">
          <h1
            className="text-2xl font-semibold tracking-tight"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            Themes of the Quran
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Recurring ideas woven through the Quran — explored through their verses and
            connected to questions people bring to life.
          </p>
        </div>

        {/* Theme groups */}
        <div className="space-y-8">
          {Object.entries(byCluseter).map(([cluster, themes]) => (
            <section key={cluster} className="space-y-3">
              <p
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--text-tertiary)" }}
              >
                {CLUSTER_LABELS[cluster] ?? cluster}
              </p>

              <div className="grid grid-cols-1 gap-2">
                {themes.map((theme) => (
                  <Link
                    key={theme.themeId}
                    href={`/themes/${theme.themeId}`}
                    className={cn(
                      "p-4 rounded-xl border transition-colors group"
                    )}
                    style={{
                      backgroundColor: "var(--surface)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      {/* Emoji icon */}
                      {theme.emoji && (
                        <span
                          className="flex-shrink-0 text-xl mt-0.5"
                          aria-hidden="true"
                        >
                          {theme.emoji}
                        </span>
                      )}

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <p
                            className="font-medium text-sm"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {theme.nameEnglish}
                          </p>
                          <p
                            className="flex-shrink-0 text-base"
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
                        <p
                          className="text-xs leading-snug line-clamp-2"
                          style={{ color: "var(--text-tertiary)" }}
                        >
                          {theme.thesis}
                        </p>
                        <div
                          className="mt-2 text-xs"
                          style={{ color: "var(--text-tertiary)" }}
                        >
                          {theme.primaryVerses.length} verses ·{" "}
                          {theme.relatedQuestionSlugs.length} questions
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
