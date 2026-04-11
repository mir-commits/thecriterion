/**
 * Confidence Signal Types
 *
 * These implement the "plain-language confidence" requirement from CLAUDE.md:
 * "Use language like: 'well-supported', 'dominant classical view',
 * 'textually plausible', 'contested', 'multiple legitimate readings',
 * or 'tradition-dependent'."
 *
 * The framework (Section 2.5) defines five confidence bands.
 * V1 maps these to a smaller set of user-visible labels that are honest
 * and comprehensible to non-specialists.
 *
 * CRITICAL: These signals describe evidential quality, not theological truth.
 * A "Clear in the text" signal means the linguistic evidence is strong.
 * It does NOT mean "this is what God intended." The UI must preserve this distinction.
 */

/**
 * The five confidence bands from framework Section 2.5.
 * Mapped to plain English for consumer-facing display.
 */
export type ConfidenceBand =
  | "high"          // "Clear in the text" — morphological facts; sahih Prophetic tafsir
  | "medium-high"   // "Well-supported" — dominant companion position; wide classical consensus
  | "medium"        // "Interpreted with disagreement" — recorded ikhtilaf among scholars
  | "low-medium"    // "Tradition-dependent" — school-specific; thin transmitted support
  | "low"           // "Ambiguous" — isolated opinion; esoteric reading
  | "uncertain";    // No traceable scholarly support or directly contradicts reliable evidence

/**
 * User-facing label for a confidence band.
 * These appear as badges and inline signals in the UI.
 */
export const CONFIDENCE_BAND_LABELS: Record<ConfidenceBand, string> = {
  "high":        "Clear in the text",
  "medium-high": "Well-supported",
  "medium":      "Interpreted with disagreement",
  "low-medium":  "Tradition-dependent",
  "low":         "Ambiguous",
  "uncertain":   "Uncertain",
};

/**
 * Plain-language descriptions for the "Why this confidence?" panel.
 * These must never imply theological certainty. They describe evidence quality.
 */
export const CONFIDENCE_BAND_DESCRIPTIONS: Record<ConfidenceBand, string> = {
  "high":
    "The evidence for this reading is strong across multiple reliable sources. This does not mean it is the only valid reading — only that it is the best-evidenced one available.",
  "medium-high":
    "This reading is supported by the dominant scholarly view in the classical tradition. Some disagreement exists but it is limited.",
  "medium":
    "Qualified scholars hold different views on this. More than one reading is well-evidenced. This ambiguity is real and should not be flattened into a single answer.",
  "low-medium":
    "This reading depends on transmitted tradition beyond the Quranic text itself, or represents a school-specific view not shared across the tradition.",
  "low":
    "The evidence for this reading is thin. It may reflect an isolated scholarly opinion or a reading not widely attested in the classical sources.",
  "uncertain":
    "This reading cannot be confirmed against the available evidence. Approach with significant caution.",
};

/**
 * The two-pass distinction from framework Section 6b.
 * V1 uses this as a display concept; computation is deferred.
 *
 * Pass 1 (Textual Logic): What does the Quranic text establish on its own?
 * Pass 2 (Integrated Tradition): What does transmitted scholarship add?
 */
export interface TwoPassSignal {
  /**
   * Pass 1: Text-internal evidence only (D1 Lexical + D2 Context + D5 Consistency).
   * Null in V1 — typed for future scoring engine.
   */
  textualLogicScore: number | null;  // 0–100 when computed

  /**
   * Pass 2: Integrated tradition score (all 5 dimensions).
   * Null in V1 — typed for future scoring engine.
   */
  integratedTraditionScore: number | null;  // 0–100 when computed

  /**
   * When |TLS - ITS| >= 25, a structural divergence warning is required.
   * Framework Section 6b: "a mandatory alert that highlights where tradition
   * significantly departs from or adds to the text."
   */
  structuralDivergenceWarning: boolean;

  /**
   * TREC: Text Requests External Clarification.
   * When the Quran's own text signals that Prophetic explanation is part of the design
   * (e.g., verses 16:44, 59:7, 4:65). If true, Pass 1 alone is insufficient.
   */
  trecFlag: boolean;
}

/**
 * Full confidence signal attached to any answer or interpretation.
 */
export interface ConfidenceSignal {
  band: ConfidenceBand;
  label: string;              // User-facing label (from CONFIDENCE_BAND_LABELS)
  description: string;        // User-facing "why" explanation
  twoPass: TwoPassSignal;

  /**
   * Ikhtilaf (scholarly disagreement) flag.
   * When true, the UI must surface alternative interpretations — not suppress them.
   * Framework Section 2.6: "Multiplicity of Meaning as a Feature, Not a Bug"
   */
  ikhtilafFlag: boolean;
  ikhtilafNote: string | null;  // Plain-language note on what is disputed
}

export function buildConfidenceSignal(
  band: ConfidenceBand,
  options?: {
    ikhtilafFlag?: boolean;
    ikhtilafNote?: string;
    trecFlag?: boolean;
  }
): ConfidenceSignal {
  return {
    band,
    label: CONFIDENCE_BAND_LABELS[band],
    description: CONFIDENCE_BAND_DESCRIPTIONS[band],
    twoPass: {
      textualLogicScore: null,
      integratedTraditionScore: null,
      structuralDivergenceWarning: false,
      trecFlag: options?.trecFlag ?? false,
    },
    ikhtilafFlag: options?.ikhtilafFlag ?? false,
    ikhtilafNote: options?.ikhtilafNote ?? null,
  };
}
