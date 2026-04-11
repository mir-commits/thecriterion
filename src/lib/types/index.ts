/**
 * Types barrel export.
 * Import from "@/lib/types" rather than individual files.
 */

export type { ProvenanceMetadata, EvidenceTier, SourceType } from "./provenance";
export { stubProvenance, EVIDENCE_TIER_LABELS, EVIDENCE_TIER_DESCRIPTIONS } from "./provenance";

export type {
  ConfidenceBand,
  ConfidenceSignal,
  TwoPassSignal,
} from "./confidence";
export {
  CONFIDENCE_BAND_LABELS,
  CONFIDENCE_BAND_DESCRIPTIONS,
  buildConfidenceSignal,
} from "./confidence";

export type {
  QuranWord,
  RevelationPeriod,
  MuhkamMutashabih,
  CrossReferenceClass,
  VerseCrossReference,
  Verse,
  VerseRef,
} from "./verse";

export type { RevelationType, Surah, SurahRef } from "./surah";

export type {
  InterpretationLayer,
  ConsensusStatus,
  ClaimType,
  TafsirClaim,
  ScholarRef,
} from "./tafsir";

export type { ThemeCluster, Theme } from "./theme";

export type {
  AnswerVerse,
  EvidenceBasis,
  AnswerBlock,
  Question,
  PromptChip,
} from "./question";
