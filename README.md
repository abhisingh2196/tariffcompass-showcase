# TariffCompass

**Trade-impact intelligence for Canadian businesses and the advisors who serve them.**

TariffCompass is a co-founded product in active development and testing. It is designed to help Canadian businesses that import, export, or do both understand relevant tariff and trade-policy changes, estimate potential financial exposure, compare response options, and monitor future developments.

> This repository is a recruiter-facing portfolio case study. It intentionally excludes application source code, credentials, customer information, commercial strategy, internal planning documents, and proprietary data.

## The problem

Tariff and trade-policy changes are difficult for small and midsize businesses to translate into practical decisions. Important information is distributed across government notices and other sources, while applicability can depend on product category, origin, destination, effective date, and confidence in the underlying data.

TariffCompass is being designed to turn that complexity into a structured decision-support experience without presenting estimates as authoritative customs determinations.

## Current product direction

The product is being developed around:

- guided import and export exposure assessment;
- product- and category-level tariff comparisons where reliable data is available;
- estimated financial-impact scenarios;
- trade-policy monitoring and exposure alerts;
- market and sourcing response options;
- multi-client workflows for accountants and fractional CFO advisors;
- source-backed public tariff updates; and
- AI-generated decision briefs grounded in supplied structured data.

## My role and contributions

**Co-founder | 2026-Present**

I share ownership of product strategy, pricing, and the data-sourcing methodology. My contributions include:

- shaping the product concept, target workflows, and prioritization decisions;
- contributing to experience design and translating complex trade information into clearer user journeys;
- developing and reviewing prompts for structured, grounded AI explanations;
- contributing to implementation, testing, and product iteration;
- reviewing outputs for clarity, consistency, and appropriate qualification; and
- working with Claude Code as an AI development partner during implementation and testing.

## Data integrity by design

The product's strongest differentiator is its provenance model. Published figures are designed to carry:

- source attribution;
- a confidence label;
- a review date;
- applicability and status context; and
- correction history when published information changes.

AI-generated briefs are intended to explain the structured information supplied to the model, not invent or override tariff rates, effective dates, applicability, or confidence levels. This approach supports transparent review and helps users distinguish verified information from estimates or incomplete data.

## Technology

- Next.js and TypeScript
- Tailwind CSS and component-based UI architecture
- Supabase with Postgres, authentication, and Row-Level Security
- Stripe subscription infrastructure
- Cloudflare Workers deployment
- Anthropic API for grounded decision briefs
- Automated testing and quality-review workflows

## Illustrative code samples

This showcase includes two small, non-production TypeScript examples:

- [`examples/provenance-model.ts`](examples/provenance-model.ts) demonstrates a generic structure for attaching source, confidence, and review metadata to a published figure.
- [`examples/quality-checks.ts`](examples/quality-checks.ts) demonstrates simple validation checks for that metadata.

The examples were written specifically for this portfolio repository. They do not contain production source code, proprietary tariff logic, internal prompts, database details, credentials, customer data, or unpublished commercial information.

## Development approach

The project combines product judgment, structured data design, iterative testing, and AI-assisted development. Work is organized around small testable increments, with particular attention to:

- communicating uncertainty clearly;
- preserving source and review metadata;
- separating structured calculations from AI-generated explanations;
- identifying ambiguous or incomplete data before presenting conclusions; and
- keeping the user experience practical for non-specialist business users.

## Current status

**Active development and testing.** The production application remains in a controlled pre-launch environment while product, data-quality, and access controls are tested.

## Portfolio note

This case study describes my role and the product's public-safe design principles. It does not provide tariff, customs, legal, or financial advice, and it does not represent a production release.
