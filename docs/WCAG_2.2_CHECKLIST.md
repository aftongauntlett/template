# WCAG 2.2 Checklist

Use this checklist before shipping each project.

For cloned sites, prefer rearranging existing components and tokens over building new custom UI.

## Definition Of Done

A page is ready when all are true:

- Keyboard-only navigation works end-to-end.
- Focus is visible and follows a logical order.
- Heading hierarchy is meaningful (one H1, then H2/H3).
- Controls have accessible names and form fields have labels.
- Error messages are clear and programmatically associated with fields.
- Color contrast meets WCAG 2.2 AA.
- Reduced-motion preference is respected.
- Automated accessibility checks show no critical failures.

## Per-Page Accessibility

- Page has one H1 and meaningful heading hierarchy.
- Landmarks exist: header, nav, main, footer.
- Skip link is present and functional.
- All interactive elements are reachable by keyboard.
- Focus indicator is visible and not removed.
- Form controls have associated labels.
- Error feedback is programmatically associated with fields.
- Link text is descriptive out of context.
- Images include alt text when informative, empty alt when decorative.
- Motion and animation respect reduced-motion preferences where applicable.

## Contrast and Readability

- Normal text contrast is at least 4.5:1.
- Large text contrast is at least 3:1.
- Interface controls and focus indicators are at least 3:1.
- Body copy line length and spacing are readable on mobile and desktop.

## Interaction and States

- Hover-only interactions have keyboard equivalents.
- No keyboard traps.
- Touch targets are sufficiently large and spaced.
- State changes are announced or perceivable.

## Motion and Hover Guidance

- Motion is allowed for feedback or delight when it is purposeful and brief.
- Critical meaning is never conveyed by motion alone.
- Hover styles must have focus-visible and keyboard-equivalent behavior.
- Reduced-motion preference must disable or simplify non-essential movement.
- Decorative looping motion near reading content should be avoided.
- Count-up and similar in-view animations should render final values immediately when reduced motion is preferred.

## Manual Checks

- Keyboard pass from header to footer with no traps.
- Screen reader smoke test for headings, landmarks, forms, and error states.
- Zoom/reflow check at 200% and narrow mobile width equivalent.
- Reduced-motion check.

## Validation and Testing

- Run: npm run validate
- Run: npm run precommit:check
- Manual keyboard pass on desktop.
- Manual screen-reader spot check for critical pages.

## Maintainer Note

If you are changing core layout, global styles, or shared UI primitives in the template source repo, run the additional maintainer audit in `docs/agents/template-maintainer/ACCESSIBILITY_AUDIT_NOTE.md`.
