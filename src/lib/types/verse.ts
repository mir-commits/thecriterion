/**
 * Verse and Word Types
 *
 * These implement the Verse and Word node schemas from theframework-v2.pdf
 * Sections 5a.2 and 5a.3. V1 includes the fields needed for the consumer
 * experience. Extension points are typed but may be null until the full
 * knowledge graph pipeline is wired up.
 */

import type { ProvenanceMetadata } from "./provenance";

/**
 * A word within a Quranic verse.
 * Framework Section 5a.3.
 *
 * In V1, morphological detail is present only for demo verses.
 * The full corpus pipeline (CAMeL Tools) is deferred.
 */
export interface QuranWord {
  wordId: string;               // e.g., "2:255:4" (surah:verse:position)
  position: number;
  surfaceForm: string;          // Arabic as written in the mushaf
  surfaceFormVocalized: string; // With tashkil/harakat
  lemma: string;
  root: string;                 // 3 or 4 radicals
  transliteration: string;

  // Morphological features — null until CAMeL Tools pipeline is wired
  morphology: {
    posTag: string | null;
    case: string | null;
    number: string | null;
    gender: string | null;
    definiteness: string | null;
    verbForm: string | null;
    person: string | null;
    voice: string | null;
  } | null;

  semanticDomainPrimary: string | null;
  polysemyFlag: boolean;
  rareUsageFlag: boolean;

  // Lexical note — MUST come from indexed lexicon source, never from LLM memory
  // Null in V1 until lexicon corpus is wired
  lexicalNote: string | null;
  lexicalSourceId: string | null;

  provenance: ProvenanceMetadata;
}

/**
 * Revelation period — framework Section 5a.2.
 */
export type RevelationPeriod =
  | "early_makki"
  | "middle_makki"
  | "late_makki"
  | "early_madani"
  | "late_madani"
  | "disputed";

/**
 * Muhkam = clear and unambiguous.
 * Mutashabih = ambiguous or metaphorical.
 */
export type MuhkamMutashabih = "muhkam" | "mutashabih" | "both" | "unclassified";

/**
 * Relationship classes for cross-verse connections.
 * Implements VERSE_EXPLAINS_VERSE edge semantics from framework Section 5b.
 */
export type CrossReferenceClass =
  | "specifies"        // This verse specifies a general statement in the source
  | "generalizes"      // This verse generalizes the source verse
  | "contextualizes"   // Provides surrounding context
  | "parallels"        // Uses same vocabulary/theme in a parallel passage
  | "refines_limits"   // A later-revealed verse narrows/completes an earlier one
  | "corrects";        // Addresses a related topic from a different angle

/**
 * A cross-reference relationship between two verses.
 * These are Tier 1 evidence (Quran explains Quran) — the highest evidentiary tier.
 * Framework Section 5b: VERSE_EXPLAINS_VERSE edge.
 */
export interface VerseCrossReference {
  verseId: string;              // Target verse e.g., "3:2"
  surahId: number;
  verseNumber: number;
  surahName: string;
  arabicText: string;
  translation: string;
  relationshipClass: CrossReferenceClass;
  description: string;         // Plain-language explanation of the relationship
  tier: 1;                     // Always Tier 1
  provenance: ProvenanceMetadata;
}

/**
 * The core Verse object — the primary unit of the knowledge system.
 *
 * Design principle from CLAUDE.md: "The verse page [is] the core object."
 * Every other surface (Theme, Question, Answer) ultimately references Verse nodes.
 */
export interface Verse {
  verseId: string;              // e.g., "2:255"
  surahId: number;
  verseNumber: number;

  arabicText: string;           // Uthmanic orthography
  transliteration: string;

  translation: string;
  translatorName: string;       // Attribution required by PRD
  translatorId: string;

  // Plain-language explanation — accessible entry point (not a tafsir claim)
  plainExplanation: string;

  revelationPeriod: RevelationPeriod;
  revelationPeriodConfidence: "high" | "medium" | "low";
  revelationPeriodSource: string | null;
  muhkamMutashabih: MuhkamMutashabih;

  // Word-level — empty in V1 for most verses (full pipeline deferred)
  words: QuranWord[];

  // Tier 1 cross-references (highest evidence — Quran explains Quran)
  crossReferences: VerseCrossReference[];

  // Connected guidance layer (PRD requirement)
  themeIds: string[];
  relatedQuestionSlugs: string[];

  // Audio — CDN URL to recitation file
  audioUrl: string | null;

  structuralNote: string | null;
  sajdaFlag: boolean;

  provenance: ProvenanceMetadata;
}

/**
 * Minimal verse reference used in lists, cards, and answer panels.
 * Avoids pulling the full Verse object when only display data is needed.
 */
export interface VerseRef {
  verseId: string;
  surahId: number;
  surahName: string;
  surahNameArabic: string;
  verseNumber: number;
  arabicText: string;
  translation: string;
}
