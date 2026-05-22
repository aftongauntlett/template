# PRD: Visual Builder Feasibility (Astro)

Status: Discovery Draft
Owner: Template Maintainer
Date: 2026-05-21

## Executive Summary

A visual builder is possible with Astro, but complexity depends on the level of editing control.

Not too complex for Astro at basic and moderate levels.
Complex at full drag-and-drop builder level with persistence, undo/redo, and robust publishing workflow.

## Problem

Desired workflow:

- Compose pages in browser
- Rearrange approved sections visually
- Reduce or eliminate direct code edits for routine site setup

Current workflow is code-first composition.

## Feasibility Levels

## Level 1: Catalog and copy presets (low complexity)

What it is:

- A component catalog page with preview blocks and usage notes.

Value:

- Fast selection of known patterns.
- Low implementation cost.

Astro fit:

- Excellent.

## Level 2: Guided section composer (medium complexity)

What it is:

- A browser UI that lets you pick section types and order them.
- Generates or updates a structured page configuration file.
- Renders page from configuration using existing components.

Value:

- Most builder benefits with manageable complexity.

Astro fit:

- Good, using client-side islands for editor UI.

## Level 3: Full drag-and-drop builder with persistence (high complexity)

What it is:

- Drag-and-drop canvas editor
- Property inspector controls
- Save/load project state
- Potential multi-page editing and publish flow

Value:

- Maximum no-code flexibility.

Astro fit:

- Possible, but this behaves like an app product layered onto the template.

## Recommendation

1. Build Level 1 first as part of the template.
2. Evaluate Level 2 next using section-schema composition.
3. Treat Level 3 as a separate product track unless repeated business demand justifies it.

## Proposed Architecture For Level 2

1. Define section schema types in src/config.
2. Build a SectionRenderer that maps schema entries to existing components.
3. Create an editor route (template-maintainer only) to reorder and configure sections.
4. Save schema to local JSON or markdown frontmatter.
5. Render normal pages from that schema.

## Guardrails

1. Builder can only use approved components and variants.
2. Layout shell must be selected from approved layout variants.
3. Motion effects must follow reduced-motion and accessibility rules.
4. Site Builder mode should still avoid adding new architecture directly.

## Risks

1. Scope creep into CMS-like product features.
2. Increased complexity for state management and persistence.
3. Potential accessibility regressions in drag-and-drop interactions.

## Mitigations

1. Start with non-drag reorder controls.
2. Keep configuration schema strict and typed.
3. Add explicit accessibility QA checklist for editor UI.
4. Keep editor functionality opt-in and maintainer-owned.

## Decision Framework

Choose Level 1 only when:

- You want fast wins and minimal complexity.

Choose Level 2 when:

- You repeatedly need browser-based composition with approved blocks.

Choose Level 3 when:

- You want to invest in a dedicated builder product and ongoing maintenance.

## Next Step

Create a small prototype for Level 2:

1. One page schema
2. Five approved section blocks
3. Reorder controls
4. Save and render cycle

If this prototype is successful, expand gradually.
