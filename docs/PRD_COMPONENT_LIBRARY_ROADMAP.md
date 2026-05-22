# PRD: Component Library Roadmap

Status: Draft
Owner: Template Maintainer
Date: 2026-05-21

## Context

The template already has strong base primitives. The next step is a practical roadmap of reusable components so site-builder work is mostly composition, content updates, and token changes.

## Problem

Without a roadmap, component additions can become ad hoc. That reduces consistency and slows down future cloned-site work.

## Goals

1. Define a prioritized component roadmap for template evolution.
2. Keep components reusable, tokenized, and accessible.
3. Keep site-builder mode focused on composition instead of architecture work.

## Roadmap Principles

1. Build shared primitives before page-specific composites.
2. Prefer configurable variants over duplicate components.
3. Keep interactions keyboard-accessible and reduced-motion-safe.
4. Avoid dependency-heavy components unless there is repeated demand.

## Priority Buckets

## Priority A: High leverage next additions

1. SectionShell
- Standard section wrapper for heading, intro copy, spacing rhythm.

2. StatGrid and CountUpStat
- Coordinate with docs/PRD_MOTION_AND_INTERACTION_COMPONENTS.md.

3. FAQAccordion
- Accessible disclosure pattern for common nonprofit service pages.

4. TestimonialCard and TestimonialGrid
- Reusable social-proof pattern.

5. LogoCloud
- Reusable trust/partner strip.

6. CTASection variants
- Inline, split, and centered variants with tokenized spacing.

## Priority B: Layout and content composition helpers

1. FeatureList variants
- Icon list, numbered list, and split feature blocks.

2. Timeline or Steps section
- Program process and onboarding flows.

3. CalloutBanner
- Info/warning/success variant callouts.

4. ResourceCardList
- Reusable card list for resources and links.

## Priority C: Optional advanced primitives

1. MediaShowcase
- Image/video plus content split with responsive behavior.

2. StickyInPageNav
- For longer pages with section anchors.

3. PricingOrPlanCards
- Reusable plan matrix if future projects need it.

## Interaction and Motion Components

For hover/motion behaviors, use the dedicated PRD:

- docs/PRD_MOTION_AND_INTERACTION_COMPONENTS.md

## Layout Dependencies

For shell-level decisions, use:

- docs/PRD_LAYOUT_VARIANTS.md

## Component Catalog Strategy

Recommendation:

1. Add a dedicated template route for component examples, for example a style guide page.
2. Group examples by category and variant.
3. Keep examples lightweight and representative.

This provides most of the value of a catalog without requiring Storybook immediately.

## Implementation Sequencing

Phase 1:

1. SectionShell
2. StatGrid and CountUpStat
3. FAQAccordion
4. CTASection variants

Phase 2:

1. Testimonial components
2. LogoCloud
3. FeatureList variants
4. Timeline/Steps section

Phase 3:

1. Advanced optional primitives from Priority C
2. Reassess whether Storybook adoption is worth the overhead

## Definition Of Done Per Component

1. Token-driven styles and variant API.
2. Keyboard and screen reader checks where relevant.
3. Reduced-motion-safe behavior for interactive variants.
4. Usage examples in the component catalog route.
5. Tests for utility logic where present.
6. Validation gates pass.

## Success Criteria

1. Site-builder requests are solved mostly by rearranging approved components.
2. Fewer one-off components created in cloned repos.
3. Faster launch time for new sites with consistent quality.
