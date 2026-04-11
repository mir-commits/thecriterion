/**
 * Tafsir Claim Types
 *
 * Implements the Tafsir_Claim node schema from theframework-v2.pdf Section 5a.5.
 *
 * CRITICAL (CLAUDE.md Retrieve-Don't-Generate rule):
 * "Any factual claim about what a scholar, tafsir work, hadith collection,
 * lexicon, qira'at source, or legal source says must be retrieved from
 * indexed sources — never guessed from model memory."
 *
 * In V1, all TafsirClaim objects are stubs (isStub: true in their provenance).
 * The schema is typed fully so real retrieval can populate it later.
 * The UI must check provenance.isStub and display appropriate caveats.
 */

import type { ProvenanceMetadata } from "./provenance";
import type { EvidenceTier } from "./provenance";
import type { ConfidenceSignal } from "./confidence";

/**
 * The four interpretation layers from framework Section 2.
 * Layer 1 = textual certainty; Layer 4 = speculative/modern.
 */
export type InterpretationLayer = 1 | 2 | 3 | 4;

/**
 * Consensus status classification for a tafsir claim.
 * From framework Section 5a.5 consensus_status field.
 */
export type ConsensusStatus =
  | "ijma"      // Scholarly consensus
  | "mashhur"   // Well-known / widely held
  | "marjuh"    // Outweighed view
  | "shadhdh"   // Anomalous / isolated
  | "khilaf";   // Documented disagreement

/**
 * The type of claim being made.
 */
export type ClaimType =
  | "lexical"
  | "contextual"
  | "legal"
  | "theological"
  | "allegorical"
  | "thematic";

/**
 * A TafsirClaim represents a scholarly interpretation of a verse.
 * Framework Section 5a.5.
 *
 * In V1: all claims are stubs — provenance.isStub = true.
 * The UI renders stub claims with a visible disclaimer.
 * No stub claim should look like a verified classical source.
 */
export interface TafsirClaim {
  claimId: string;
  verseId: string;

  // The interpretation text — MUST be retrieved from indexed source, not generated
  claimTextArabic: string | null;    // null in V1 if not yet retrieved
  claimTextEnglish: string;          // English summary

  claimType: ClaimType;
  layer: InterpretationLayer;        // Which epistemic layer (1–4)
  tier: EvidenceTier;                // Which evidence tier (1–7)

  // Scholar attribution — NEVER fabricate. null in V1.
  scholarId: string | null;
  scholarName: string | null;        // Display name (e.g., "al-Tabari")
  scholarEra: string | null;         // e.g., "Early Classical"
  school: string | null;             // e.g., "Hanbali", "Ash'ari"

  // Source — NEVER fabricate. null in V1 until corpus is wired.
  sourceWork: string | null;         // e.g., "Jami' al-Bayan"
  sourcePageOrVolume: string | null;

  consensusStatus: ConsensusStatus | null;

  confidence: ConfidenceSignal;
  provenance: ProvenanceMetadata;

  // Alternative positions that dispute or differ from this claim
  disputedByClaimIds: string[];
  supportedByClaimIds: string[];
}

/**
 * Scholar node — framework Section 5a.6.
 * V1: basic display data only. Full rijal evaluation is deferred.
 */
export interface ScholarRef {
  scholarId: string;
  nameArabic: string;
  nameTransliterated: string;
  birthYearAH: number | null;
  deathYearAH: number | null;
  era: string;
  legalSchool: string | null;
  theologicalSchool: string | null;
  primaryWorks: string[];
}
