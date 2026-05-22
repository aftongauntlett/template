# PRD: Reusable Layout Variants

Status: Draft
Owner: Template Maintainer
Date: 2026-05-21

## Context

Template sites will be faster and more consistent if they can choose from a small set of approved layout shells instead of rebuilding page structure each time.

## Problem

Current template has one primary shell pattern. It works well for many landing pages, but common client needs include:

- Top navigation marketing pages
- Resource pages with side navigation
- Content pages with an aside column
- Minimal landing pages with reduced chrome

Without reusable layout variants, site builders end up improvising structure and spacing repeatedly.

## Goals

1. Provide reusable layout shells for common nonprofit and small business site patterns.
2. Keep layout choices tokenized and accessibility-safe.
3. Let site-builder agents choose among approved shells instead of creating new architecture.
4. Keep APIs small and predictable.

## Non-Goals

1. No drag-and-drop page editor in this phase.
2. No backend data model changes.
3. No one-off layout systems tied to a single page.

## Proposed Layout Variants

## 1) TopNavLayout

Suggested file:
- src/layouts/TopNavLayout.astro

Use cases:
- Marketing pages
- Home pages
- Campaign pages

Characteristics:
- Header with top nav
- Main content stack
- Footer

## 2) SideNavLayout

Suggested file:
- src/layouts/SideNavLayout.astro

Use cases:
- Help center
- Program directories
- Resource hubs

Characteristics:
- Persistent side navigation region
- Main content region
- Mobile collapse behavior

## 3) ContentWithAsideLayout

Suggested file:
- src/layouts/ContentWithAsideLayout.astro

Use cases:
- Blog/article pages
- Long-form service pages
- Pages with contextual callouts

Characteristics:
- Main content column
- Optional right/left aside column
- Predictable responsive stack at narrow widths

## 4) MinimalLandingLayout

Suggested file:
- src/layouts/MinimalLandingLayout.astro

Use cases:
- Single-purpose campaigns
- Event signup pages
- Focused conversion pages

Characteristics:
- Optional reduced header
- Focused hero/content flow
- Optional compact footer

## Shared API Requirements

All layout variants should support:

- title
- description
- hideChrome or equivalent where appropriate
- slot support for page content
- optional named slots for page-specific regions

## Accessibility Requirements

1. Semantic landmark regions in every layout.
2. Skip link support where applicable.
3. Heading hierarchy and focus order remain logical.
4. Side-nav interactions remain keyboard accessible.

## Responsive and Spacing Requirements

1. Shared container and section spacing tokens.
2. Predictable behavior for one-column fallback on small screens.
3. Avoid hard-coded layout spacing values in page-level one-offs.

## Agent Workflow Requirement

Site Builder mode:

- Select from approved layout variants.
- Do not create new layout primitives unless explicitly escalated.

Template Maintainer mode:

- Owns adding/refining layout variants and APIs.

## Implementation Plan

Phase 1:

1. Create SideNavLayout and ContentWithAsideLayout.
2. Add docs with usage examples.
3. Update one demo page or showcase section to prove both layouts.

Phase 2:

1. Add MinimalLandingLayout.
2. Tighten token-driven spacing and typography rhythm across variants.
3. Add layout selection guidance to agent docs.

## QA and Validation

1. Keyboard navigation through nav, side-nav, and main content.
2. Focus-visible checks in all layouts.
3. Responsive checks at mobile and desktop breakpoints.
4. Run npm run validate and npm run precommit:check.

## Success Criteria

1. New projects can choose a layout shell without inventing structure.
2. Site-builder agents consistently reuse layout variants.
3. Fewer one-off layout implementations across cloned projects.
