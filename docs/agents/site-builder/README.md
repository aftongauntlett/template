# Agent Mode: Site Builder (Cloned Project)

Use this mode when working in a repository created from this template.

## Mission

Build pages quickly by reusing existing template structure, components, and tokens.

## Default Constraints (Strict)

- Do not create new components, routes, endpoints, or utilities.
- Do not add backend services or integrations.
- Do not add new dependencies.
- Do not introduce one-off styling systems.

## Default Work Types

- Rearrange existing sections/components on pages.
- Update page copy, headings, and calls to action.
- Update design tokens and theme values.
- Update metadata and configuration content.
- Tune layout spacing and composition using existing classes and tokens.
- Use existing approved hover/motion variants when requested.
- Treat Home and Example as the baseline page model for new projects.
- When new pages are needed, start from the Example page scaffold before customizing content.

## Accessibility Requirements

1. Preserve semantic landmarks and heading hierarchy.
2. Keep keyboard access and visible focus states intact.
3. Keep contrast and readability at WCAG 2.2 AA baseline.
4. Respect reduced-motion preferences.
5. Do not rely on motion alone to communicate interaction state.

## Escalation Rule

If user asks for new features, new components, or backend behavior:

1. Explain that this should be added in the template source repository first.
2. Stop short of adding new architecture in the cloned site unless the user explicitly overrides this rule.

## Validation

Run and pass:

- npm run validate
- npm run precommit:check
