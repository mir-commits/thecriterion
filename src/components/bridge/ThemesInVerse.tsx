/**
 * ThemesInVerse — Bridge Module
 *
 * "Themes present in this verse" — appears on every verse page.
 *
 * Links verse → themes → questions in the connected guidance layer.
 * PRD: "Every verse page must show relevant questions, themes, or life concerns."
 */

import Link from "next/link";
import { getThemeById } from "@/lib/data";
import type { Verse } from "@/lib/types";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Hash } from "@/components/layout/icons";
import { cn } from "@/lib/utils/cn";

interface ThemesInVerseProps {
  verse: Verse;
  className?: string;
}

export function ThemesInVerse({ verse, className }: ThemesInVerseProps) {
  const themes = verse.themeIds
    .map((id) => getThemeById(id))
    .filter(Boolean)
    .slice(0, 6);

  if (themes.length === 0) return null;

  return (
    <section className={cn("space-y-3", className)} aria-labelledby="verse-themes-heading">
      <div className="flex items-center gap-2">
        <Hash size={14} style={{ color: "var(--teal)" }} />
        <SectionLabel id="verse-themes-heading">Themes in this verse</SectionLabel>
      </div>

      <div className="flex flex-wrap gap-2">
        {themes.map((theme) => (
          <Link
            key={theme!.themeId}
            href={`/themes/${theme!.themeId}`}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm",
              "transition-colors hover:border-current/40"
            )}
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
  );
}
