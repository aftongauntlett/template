# PRD: Motion and Interaction Component Library

Status: Draft for post-cleanup implementation
Owner: Template Maintainer
Date: 2026-05-21

## Context

This template is static-first and accessibility-first. We want to keep that baseline while adding reusable motion and hover patterns that feel intentional and can be reused across nonprofit and small business sites.

We do not want to ban animation. We do want strict guardrails so motion stays accessible and maintainable.

## Problem

Current template guidance includes accessibility and reduced-motion expectations, but it does not yet provide a reusable motion component set for common patterns such as:

- Count-up numbers in view
- Icon hover wiggles
- Text hover color accents
- Card border/shadow hover treatments
- Optional playful effects like sparkle trails

Without reusable primitives, these effects become one-off code and inconsistency risk.

## Goals

1. Add reusable, token-driven motion primitives for common site interactions.
2. Ensure all effects respect prefers-reduced-motion.
3. Keep interactions keyboard-accessible and never hover-only.
4. Keep defaults lightweight and dependency-minimal.
5. Keep advanced effects opt-in.

## Non-Goals

1. Do not add backend requirements.
2. Do not require Framer Motion by default.
3. Do not add animation that carries critical meaning without non-motion cues.
4. Do not ship heavy, always-on decorative motion by default.

## Target Users

1. Template maintainers adding reusable UI capabilities.
2. Site-builder agents that should consume existing variants, not create custom animation systems.

## Proposed Components and Utilities

## 1) CountUpStat component

Suggested file:
- src/components/ui/CountUpStat.astro

Purpose:
- Animate values from start to end when entering viewport.

Suggested API:
- start?: number (default 0)
- end: number (required)
- durationMs?: number (default 900)
- decimals?: number (default 0)
- prefix?: string
- suffix?: string
- once?: boolean (default true)

Behavior:
- IntersectionObserver triggers animation on first in-view.
- If reduced motion is preferred, render final value immediately.
- Final value should always be available in markup for non-JS users.

Accessibility:
- Avoid noisy aria-live updates for every frame.
- Preserve readable final value text in DOM.

## 2) Icon hover wiggle utility

Suggested files:
- src/components/ui/Icon.astro (if needed)
- src/styles/global.css motion utility classes, or dedicated motion utility stylesheet

Purpose:
- Add subtle wiggle/tilt for icon affordance on hover/focus-visible.

Suggested variants:
- subtle, medium

Behavior:
- Trigger on hover and focus-visible.
- Reduced motion disables transform animation.

## 3) Text hover accent utility

Suggested implementation:
- Utility class for heading/link text accent transitions.

Purpose:
- Color or underline accent transitions for card titles/headings.

Behavior:
- Hover and focus-visible parity.
- Keep contrast compliant in default and hover/focus states.

## 4) Card interactive hover variants

Suggested file updates:
- src/components/ui/Card.astro
- src/styles/global.css

Purpose:
- Standardize border-outline, subtle lift, and shadow variants.

Suggested API extension:
- hoverStyle?: 'none' | 'outline' | 'lift' | 'shadow-soft'

Behavior:
- Keyboard focus-visible should match intent of hover state.
- Shadow values should remain restrained and token-driven.

## 5) Optional sparkle trail effect (advanced, opt-in)

Suggested file:
- src/components/ui/SparkleTrail.astro

Purpose:
- Optional playful effect for specific hero/landing sections.

Guardrails:
- Off by default.
- Disabled for reduced motion.
- Disabled for coarse pointers/touch by default.
- Configurable particle count and frame budget.
- Must not block pointer interactions.

## Motion Token System

Add or formalize motion tokens:

- --motion-duration-fast
- --motion-duration-base
- --motion-duration-slow
- --motion-ease-standard
- --motion-ease-emphasized
- --motion-distance-sm
- --motion-distance-md

Rule:
- All reusable motion effects should consume tokens instead of hard-coded timings/easings.

## Accessibility Requirements

1. Respect prefers-reduced-motion for every motion primitive.
2. Provide keyboard/focus-visible equivalent cues for hover behaviors.
3. Never rely on motion alone to communicate state or meaning.
4. Keep contrast valid in all interaction states.
5. Keep content understandable when JS is disabled.

## Performance Requirements

1. No measurable input lag from interaction effects on baseline laptops.
2. No long-running animation loops by default.
3. Advanced effects gated behind explicit opt-in props.
4. Keep bundle impact minimal; avoid default third-party animation dependencies.

## Implementation Phases

## Phase 1 (core)

1. Add motion tokens.
2. Add CountUpStat component.
3. Add text hover accent utility.
4. Add card hover variants (outline/lift/shadow-soft).
5. Add icon wiggle utility.
6. Update docs and examples.

## Phase 2 (advanced optional)

1. Add SparkleTrail component as opt-in only.
2. Add performance guardrails and defaults.
3. Add docs for when to use and when not to use.

## Testing and QA

1. Unit test count-up formatting and reduced-motion fallback logic.
2. Manual keyboard and focus-visible parity checks for hover effects.
3. Reduced-motion verification across all new components.
4. Validate with npm run validate and npm run precommit:check.

## Documentation Updates Required

1. docs/STANDARDS.md motion policy section.
2. docs/WCAG_2.2_CHECKLIST.md motion checklist entries.
3. docs/agents/site-builder/README.md guidance on using approved motion variants.
4. Component usage examples in template pages (non-disruptive demo section).

## Rollout Decision

Default recommendation:

- Implement Phase 1 first.
- Evaluate whether SparkleTrail is worth keeping as a reusable primitive after one real project.
