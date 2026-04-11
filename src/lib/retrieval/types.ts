/**
 * Retrieval Layer Types
 *
 * This module defines the interface between the UI and the data sources.
 * In V1, all functions return stub data from src/lib/data/.
 *
 * Extension points:
 * - Replace stub implementations with real graph queries (Neo4j/Neptune)
 * - Add vector store lookups (Weaviate) for semantic search
 * - Add Citation Verification Gate before any TafsirClaim is returned
 * - Add Pass 1 / Pass 2 scoring pipeline
 *
 * The types here are defined now so that switching from stubs to real
 * retrieval does not require changing any component interfaces.
 */

import type { Verse, VerseRef } from "@/lib/types/verse";
import type { Surah, SurahRef } from "@/lib/types/surah";
import type { Theme } from "@/lib/types/theme";
import type { Question, AnswerBlock } from "@/lib/types/question";
import type { TafsirClaim } from "@/lib/types/tafsir";

/**
 * Source of a retrieval result.
 * "stub" = V1 mock data.
 * "graph" = live Neo4j/Neptune query (future).
 * "vector" = vector store semantic search (future).
 */
export type RetrievalSource = "stub" | "graph" | "vector" | "hybrid";

/**
 * Wrapper for any retrieved result — carries metadata about how it was retrieved.
 */
export interface RetrievedResult<T> {
  data: T;
  source: RetrievalSource;
  retrievedAt: string;       // ISO timestamp
  isStub: boolean;           // Convenience flag — mirrors provenance.isStub
  latencyMs?: number;
}

/**
 * Query parameters for verse retrieval.
 */
export interface VerseQuery {
  surahId?: number;
  verseNumber?: number;
  themeId?: string;
  searchText?: string;
  limit?: number;
}

/**
 * Query parameters for tafsir claim retrieval.
 * When the corpus is wired, this will drive the Citation Verification Gate.
 */
export interface TafsirQuery {
  verseId: string;
  tier?: number;             // Filter by evidence tier
  layer?: number;            // Filter by interpretation layer
  scholarId?: string;
  limit?: number;
}

/**
 * The retrieval interface.
 * V1 stub implementation is in stub.ts.
 * Future production implementation will satisfy this same interface.
 */
export interface RetrievalClient {
  getSurah(surahId: number): Promise<RetrievedResult<Surah | null>>;
  listSurahs(): Promise<RetrievedResult<SurahRef[]>>;
  getVerse(verseId: string): Promise<RetrievedResult<Verse | null>>;
  listVerses(query: VerseQuery): Promise<RetrievedResult<VerseRef[]>>;
  getTheme(themeId: string): Promise<RetrievedResult<Theme | null>>;
  listThemes(): Promise<RetrievedResult<Theme[]>>;
  getQuestion(slug: string): Promise<RetrievedResult<Question | null>>;
  listQuestions(): Promise<RetrievedResult<Question[]>>;
  searchVerses(text: string): Promise<RetrievedResult<VerseRef[]>>;

  /**
   * Retrieve tafsir claims for a verse.
   * CRITICAL: This MUST go through the Citation Verification Gate when real
   * corpus retrieval is wired. No generated tafsir claims should ever reach
   * this interface — only retrieved-and-verified claims.
   */
  getTafsirClaims(query: TafsirQuery): Promise<RetrievedResult<TafsirClaim[]>>;
}
