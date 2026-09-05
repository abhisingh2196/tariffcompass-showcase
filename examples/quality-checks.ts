/**
 * Illustrative portfolio example only.
 * These checks use generic metadata and contain no production business logic.
 */

import type { PublishedFigure } from "./provenance-model";

export interface QualityCheckResult {
  valid: boolean;
  issues: string[];
}

export function checkPublicationMetadata(
  figure: PublishedFigure,
): QualityCheckResult {
  const issues: string[] = [];

  if (!figure.source.name.trim()) issues.push("A source name is required.");
  if (!isHttpsUrl(figure.source.url)) issues.push("The source must use HTTPS.");
  if (!isIsoDate(figure.source.accessedOn)) issues.push("The access date must use YYYY-MM-DD.");
  if (!isIsoDate(figure.reviewedOn)) issues.push("The review date must use YYYY-MM-DD.");

  return { valid: issues.length === 0, issues };
}

function isHttpsUrl(value: string): boolean {
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

function isIsoDate(value: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

