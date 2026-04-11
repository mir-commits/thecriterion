/**
 * Ask Mode — Question Input Page
 *
 * The second main on-ramp. Natural-language questions → Quran-anchored answers.
 *
 * PRD: "Natural-language question input. Suggested prompt chips for common topics.
 * Direct answer summary in plain language. Supporting verses displayed clearly."
 *
 * Design: calm input experience, not a chatbot. The question field is generous
 * and spacious. Suggested topics are chips, not a busy dashboard.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PROMPT_CHIPS } from "@/lib/data";
import { AskInput } from "./AskInput";
import { cn } from "@/lib/utils/cn";

export const metadata: Metadata = {
  title: "Ask — The Criterion",
  description: "Ask real-life questions and receive Quran-anchored answers with transparent evidence and clear limits.",
};

// Category groupings for displayed chips
const CHIP_CATEGORIES = [
  { label: "Inner life", category: "inner-life" as const },
];

export default function AskPage() {
  const innerLifeChips = PROMPT_CHIPS.filter((c) => c.category === "inner-life");

  return (
    <AppShell title="Ask">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Page heading */}
        <div className="mb-10 space-y-3">
          <h1
            className="text-2xl font-semibold tracking-tight"
            style={{
              color: "var(--text-primary)",
              fontFamily: "var(--font-display)",
            }}
          >
            Ask a question
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Ask anything you&apos;re wondering about — life, faith, difficulty, or meaning.
            Answers are anchored in the Quran with honest limits and visible evidence.
          </p>
        </div>

        {/* Question input */}
        <AskInput />

        {/* Suggested questions */}
        <div className="mt-10 space-y-4">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-tertiary)" }}
          >
            Common questions
          </p>

          <div className="space-y-2">
            {innerLifeChips.map((chip) => (
              <Link
                key={chip.questionSlug}
                href={`/ask/${chip.questionSlug}`}
                className={cn(
                  "flex items-center justify-between gap-3 w-full p-4 rounded-xl border text-left",
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
                  {chip.label}
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
        </div>

        {/* Trust note */}
        <div
          className="mt-10 p-4 rounded-xl border space-y-1"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <p
            className="text-xs font-semibold"
            style={{ color: "var(--text-secondary)" }}
          >
            How this works
          </p>
          <ul
            className="text-xs space-y-1 leading-relaxed"
            style={{ color: "var(--text-tertiary)" }}
          >
            <li>· Answers are anchored in specific Quranic verses you can read in full</li>
            <li>· Each answer shows its evidence basis and confidence level</li>
            <li>· This is not a fatwa service — legal rulings require a qualified scholar</li>
            <li>· Ambiguity and scholarly disagreement are shown, not hidden</li>
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
