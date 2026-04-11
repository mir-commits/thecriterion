/**
 * Surah Types
 *
 * Implements the Surah node schema from theframework-v2.pdf Section 5a.1.
 * V1 uses a simplified version — the full schema (chronological ordering,
 * structural notes, ring composition analysis) is preserved as typed
 * extension points.
 */

import type { ProvenanceMetadata } from "./provenance";

export type RevelationType = "makki" | "madani" | "disputed";

/**
 * Full Surah object.
 */
export interface Surah {
  surahId: number;              // 1–114 (mushaf order)
  nameArabic: string;           // e.g., "البقرة"
  nameTransliterated: string;   // e.g., "Al-Baqara"
  nameMeaning: string;          // e.g., "The Cow"
  revelationType: RevelationType;

  // Chronological order — framework notes multiple competing lists exist
  // null until resolved against al-Suyuti / Noldeke sources
  chronologicalOrder: number | null;
  chronologicalOrderSource: string | null;

  verseCount: number;
  wordCount: number | null;
  letterCount: number | null;

  // Primary themes — links to Theme objects
  primaryThemeIds: string[];

  // Brief description for the surah list
  briefDescription: string;

  // Structural notes (ring composition, thematic structure, etc.)
  // Populated as scholarship is ingested — V1 partial
  structuralNote: string | null;

  provenance: ProvenanceMetadata;
}

/**
 * Minimal surah reference for navigation and labels.
 */
export interface SurahRef {
  surahId: number;
  nameArabic: string;
  nameTransliterated: string;
  nameMeaning: string;
  revelationType: RevelationType;
  verseCount: number;
}
