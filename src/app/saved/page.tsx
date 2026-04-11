/**
 * Saved — Bookmarks and saved verses/questions
 *
 * V1 stub: save functionality is deferred. Shows empty state with explanation.
 * Extension point: wire to localStorage or user account in V2.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { BookOpen, MessageSquare, Hash } from "@/components/layout/icons";

export const metadata: Metadata = {
  title: "Saved — The Criterion",
  description: "Your saved verses, questions, and themes.",
};

const ENTRY_POINTS = [
  {
    label: "Read a verse",
    href: "/read",
    icon: BookOpen,
    hint: "Save any verse while reading",
  },
  {
    label: "Ask a question",
    href: "/ask",
    icon: MessageSquare,
    hint: "Bookmark answers you return to",
  },
  {
    label: "Explore themes",
    href: "/themes",
    icon: Hash,
    hint: "Save themes you are studying",
  },
];

export default function SavedPage() {
  return (
    <AppShell title="Saved">
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
            Saved
          </h1>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Verses, answers, and themes you have set aside to return to.
          </p>
        </div>

        {/* Empty state */}
        <div
          className="p-8 rounded-2xl border text-center space-y-4 mb-8"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <p
            className="text-3xl"
            aria-hidden="true"
          >
            ◇
          </p>
          <div className="space-y-1">
            <p
              className="text-sm font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              Nothing saved yet
            </p>
            <p
              className="text-xs leading-relaxed max-w-xs mx-auto"
              style={{ color: "var(--text-tertiary)" }}
            >
              Saving is coming in V2. For now, you can return to any verse,
              question, or theme directly through Read, Ask, or Themes.
            </p>
          </div>
        </div>

        {/* Entry points */}
        <div className="space-y-3">
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--text-tertiary)" }}
          >
            Start exploring
          </p>
          <div className="space-y-2">
            {ENTRY_POINTS.map(({ label, href, icon: Icon, hint }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-4 p-4 rounded-xl border transition-colors"
                style={{
                  backgroundColor: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "var(--teal-light)" }}
                >
                  <Icon size={16} style={{ color: "var(--teal)" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {label}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {hint}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
