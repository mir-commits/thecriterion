/**
 * Question and Answer Types
 *
 * These implement the Ask mode data model.
 * The answer structure follows the 6-part format required by CLAUDE.md:
 *
 * 1. Direct response
 * 2. Quranic anchors (key verses)
 * 3. How the Quran explains this elsewhere (cross-references)
 * 4. Interpretive note
 * 5. Confidence / ambiguity signal
 * 6. Open the study path (routes to verse/theme/related questions)
 *
 * CRITICAL: Every AnswerBlock must have real verse grounding.
 * "Every Ask-mode response must include direct verse grounding.
 * Users must be able to open the verse context behind an answer with one tap."
 * — CLAUDE.md Non-Negotiable #7
 */

import type { VerseRef } from "./verse";
import type { ConfidenceSignal } from "./confidence";
import type { TafsirClaim } from "./tafsir";
import type { ProvenanceMetadata } from "./provenance";

/**
 * A suggested answer verse — a verse that grounds the answer.
 * The "why these verses" explanation is surfaced here, not hidden.
 */
export interface AnswerVerse {
  verse: VerseRef;
  relevanceNote: string;       // "Why this verse" — mandatory per CLAUDE.md

  // Evidence layer label — is this text-internal or tradition-dependent?
  evidenceLayerLabel: "text-internal" | "tradition-dependent" | "both";
  evidenceLayerDescription: string;
}

/**
 * The evidence basis for the answer.
 * Determines whether support comes from within the Quranic text (Tier 1)
 * or from transmitted scholarship (Tiers 2–5+).
 *
 * This distinction is NON-NEGOTIABLE per CLAUDE.md Non-Negotiable #1:
 * "prioritize Quran-explains-Quran relationships before later interpretive layers"
 */
export type EvidenceBasis =
  | "quran-internal"    // Grounded entirely in Quran-explains-Quran (Tier 1)
  | "tradition-enriched" // Tier 1 primary, tradition adds depth
  | "tradition-dependent"; // The full reading requires transmitted scholarship

/**
 * The full structured answer block.
 * This is the core output of Ask mode.
 */
export interface AnswerBlock {
  answerId: string;
  questionSlug: string;

  // 1. Direct response — concise, plain-language, non-overclaiming
  directResponse: string;

  // 2. Key verses — direct Quranic grounding (REQUIRED — cannot be empty)
  keyVerses: AnswerVerse[];

  // 3. How the Quran explains this elsewhere
  quranElsewhereNote: string;
  relatedVerses: AnswerVerse[];

  // 4. Interpretive note — is this straightforward, debated, tradition-dependent?
  interpretiveNote: string;
  evidenceBasis: EvidenceBasis;

  // 5. Confidence / ambiguity signal
  confidence: ConfidenceSignal;

  // 6. Study path — routes back into Read, Theme, and related questions
  themeIds: string[];
  relatedQuestionSlugs: string[];

  // Evidence panel — expandable (progressive disclosure)
  // V1: stubs with isStub: true. NOT retrieved yet.
  tafsirClaims: TafsirClaim[];

  // No fatwa language — if this requires legal derivation beyond Quran,
  // this flag triggers a "consult a scholar" note in the UI
  requiresScholarConsultation: boolean;
  scholarConsultationNote: string | null;

  provenance: ProvenanceMetadata;
}

/**
 * A Question — the user-facing prompt that drives Ask mode.
 */
export interface Question {
  questionSlug: string;        // URL slug
  questionText: string;        // The question as displayed
  shortLabel: string;          // Compact label for chips/navigation

  // Category for grouping suggested prompts
  category:
    | "inner-life"    // patience, grief, anxiety, gratitude, hope
    | "guidance"      // prayer, fasting, character, virtue
    | "relationships" // family, marriage, conflict, forgiveness
    | "society"       // justice, leadership, wealth, charity
    | "faith"         // doubt, certainty, hypocrisy, repentance
    | "life-events";  // death, hardship, success, loss

  // Connected theme and verse entry points
  themeIds: string[];
  primaryVerseIds: string[];   // The key verse(s) this question maps to

  // The structured answer
  answer: AnswerBlock;
}

/**
 * A suggested prompt chip displayed in Ask mode.
 */
export interface PromptChip {
  label: string;
  questionSlug: string;
  category: Question["category"];
}
