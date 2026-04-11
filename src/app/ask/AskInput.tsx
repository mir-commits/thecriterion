"use client";

/**
 * AskInput — Question input component.
 *
 * In V1, free-text search routes to a not-found state with helpful suggestions.
 * The full NLP pipeline (semantic similarity → answer retrieval) is deferred.
 * This component is the extension point for wiring that pipeline.
 */

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Search } from "@/components/layout/icons";
import { cn } from "@/lib/utils/cn";
import { QUESTIONS } from "@/lib/data";

export function AskInput() {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // V1: Simple slug matching — find the closest question by keyword
    // Future: Replace with vector search / NLP retrieval pipeline
    const lower = query.toLowerCase();
    const match = QUESTIONS.find(
      (q) =>
        q.questionText.toLowerCase().includes(lower) ||
        q.shortLabel.toLowerCase().includes(lower) ||
        lower.includes(q.shortLabel.toLowerCase())
    );

    startTransition(() => {
      if (match) {
        router.push(`/ask/${match.questionSlug}`);
      } else {
        // Route to search page with query
        router.push(`/search?q=${encodeURIComponent(query)}&type=ask`);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div
        className="flex items-center gap-3 p-4 rounded-xl border-2 transition-colors"
        style={{
          backgroundColor: "var(--surface)",
          borderColor: query ? "var(--teal)" : "var(--border)",
        }}
      >
        <Search
          size={18}
          className="flex-shrink-0"
          style={{ color: "var(--text-tertiary)" }}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. How do I deal with grief? What does the Quran say about patience?"
          className={cn(
            "flex-1 bg-transparent border-none outline-none text-sm leading-relaxed",
            "placeholder:text-[var(--text-tertiary)]"
          )}
          style={{ color: "var(--text-primary)" }}
          aria-label="Ask a question"
        />
        {query && (
          <button
            type="submit"
            disabled={isPending}
            className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-50"
            style={{
              backgroundColor: "var(--teal)",
              color: "white",
            }}
          >
            {isPending ? "…" : "Ask"}
          </button>
        )}
      </div>
    </form>
  );
}
