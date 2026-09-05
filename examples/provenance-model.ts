/**
 * Illustrative portfolio example only.
 * This is not production TariffCompass source code or tariff advice.
 */

export type ConfidenceLabel = "verified" | "provisional" | "limited";

export interface SourceReference {
  name: string;
  url: string;
  accessedOn: string;
}

export interface PublishedFigure {
  label: string;
  displayValue: string;
  confidence: ConfidenceLabel;
  reviewedOn: string;
  source: SourceReference;
  applicabilityNote?: string;
}

export function createPublishedFigure(
  figure: PublishedFigure,
): Readonly<PublishedFigure> {
  return Object.freeze({
    ...figure,
    source: Object.freeze({ ...figure.source }),
  });
}

