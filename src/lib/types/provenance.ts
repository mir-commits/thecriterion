/**
 * Provenance and Evidence Types
 *
 * These types implement the provenance schema from theframework-v2.pdf Section 5c.
 * In V1, ProvenanceMetadata fields are typed but mostly stubbed (human_verified: false,
 * sourceId: "STUB"). The types are designed so real retrieval and verification can
 * be substituted in without breaking any consuming component.
 *
 * Per CLAUDE.md: "Any stored interpretation object should carry at minimum:
 * source ID, source type, evidentiary tier, confidence score, confidence rationale,
 * reviewer/human-verification status, dispute flag where relevant."
 */

/**
 * The seven evidence tiers from theframework-v2.pdf Section 3.
 * Tier 1 = Quran explains Quran (highest).
 * Tier 7 = Modern scholarly analysis (lowest evidentiary weight).
 *
 * V1 uses these as display labels. Tier computation is deferred to later phases.
 */
export type EvidenceTier = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export const EVIDENCE_TIER_LABELS: Record<EvidenceTier, string> = {
  1: "Quran explains Quran",
  2: "Prophetic explanation",
  3: "Companion tafsir",
  4: "Early successor tafsir",
  5: "Classical tafsir works",
  6: "Classical philology",
  7: "Modern scholarly analysis",
};

export const EVIDENCE_TIER_DESCRIPTIONS: Record<EvidenceTier, string> = {
  1: "The Quran itself provides the clearest interpretation — a verse clarified by another verse within the same revealed text.",
  2: "An authenticated hadith in which the Prophet explained this verse directly.",
  3: "A report from a Companion of the Prophet who witnessed the revelation in context.",
  4: "A report from an early follower (tabi'un) who learned from the Companions.",
  5: "Interpretation from a compiled classical tafsir work such as al-Tabari or Ibn Kathir.",
  6: "Classical Arabic philology and lexicography establishing the documented word range.",
  7: "Modern academic scholarship — valuable for new data but treated as supplementary.",
};

/**
 * Source type classification — which kind of source produced this claim.
 * Enforces the Retrieve-Don't-Generate principle from CLAUDE.md and framework Section 5c-1.
 */
export type SourceType =
  | "classical_text"         // Tier 5 — indexed classical tafsir
  | "hadith_collection"      // Tier 2 — authenticated hadith database
  | "lexicon"                // Tier 6 — Lane's Lexicon, Lisan al-Arab, etc.
  | "modern_scholarly"       // Tier 7 — modern academic work
  | "human_annotation"       // Human scholar annotation
  | "corpus_quran_internal"  // Tier 1 — Quranic cross-reference from text analysis
  | "stub";                  // V1 placeholder — NOT a real retrieved source

/**
 * Full provenance metadata required on every substantive claim.
 * Framework Section 5c: "No claim enters the knowledge graph without
 * a source_id and tier assignment."
 *
 * In V1, fields marked [STUB] are populated with placeholder values.
 * The isStub flag makes this explicit so the UI can display appropriate caveats.
 */
export interface ProvenanceMetadata {
  sourceId: string;              // Unique ID of source document or dataset
  sourceType: SourceType;        // What kind of source this is
  tier: EvidenceTier;            // Evidence tier (1–7)
  confidenceScore: number;       // 0.0–1.0
  confidenceRationale: string;   // Human-readable explanation
  dateEntered: string;           // ISO8601
  lastReviewed: string | null;   // ISO8601 or null if unreviewed
  reviewerId: string | null;     // Human reviewer ID or null
  automatedFlag: boolean;        // Was this created by an automated pipeline?
  humanVerified: boolean;        // Has a human scholar verified this?
  disputed: boolean;             // Is there recorded scholarly disagreement?
  disputeRefs: string[];         // IDs of conflicting TafsirClaim nodes

  /**
   * V1 stub flag: when true, this provenance has NOT been retrieved from
   * a real indexed source. The UI must display appropriate transparency.
   * This is the trust model's version of "clearly labeled mock data."
   */
  isStub: boolean;
}

export function stubProvenance(overrides?: Partial<ProvenanceMetadata>): ProvenanceMetadata {
  return {
    sourceId: "STUB",
    sourceType: "stub",
    tier: 5,
    confidenceScore: 0,
    confidenceRationale: "This content has not yet been retrieved from an indexed source. It is a placeholder for V1 and should not be treated as a verified scholarly claim.",
    dateEntered: new Date().toISOString(),
    lastReviewed: null,
    reviewerId: null,
    automatedFlag: false,
    humanVerified: false,
    disputed: false,
    disputeRefs: [],
    isStub: true,
    ...overrides,
  };
}
