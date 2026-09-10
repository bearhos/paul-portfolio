# Monochrome visual refresh

Reference: the user's supplied black-and-silver financial-tools bento screenshot, 2026-09-10. It supersedes the original charcoal-blue and teal direction.

Reading this as: a developer portfolio for recruiters and product teams, with a restrained monochrome technology aesthetic and soft silver lighting. Design-taste dials: DESIGN_VARIANCE 6, MOTION_INTENSITY 4, VISUAL_DENSITY 3. This is a visual refresh, not a content or navigation redesign.

## Audit and preservation

Before: #222831 background, teal accents, Satoshi and JetBrains Mono, 24px cards, a mixed-width bento gallery, accessible Radix dialogs, native reveal motion, and a sticky navigation bar. Baseline screenshot: `output/playwright/before-monochrome.png`.

Preserved: fonts, wordmark shape, all project information and original project image files, six featured projects plus Doxa App, section IDs and navigation labels, contact actions, dialog behavior, reduced motion, page title, descriptions, canonical configuration, and routes.

## Updated system

- Near-black #080808 page, #111111 cards, #1c1c1c raised surfaces.
- #f1f1f1 main text, #bcbcbc body text, #a3a3a3 secondary text; white/silver replaces teal.
- Restrained silver headline gradients, a soft background spotlight, and a sparse fixed particle texture inspired by the reference.
- Thin neutral borders, subtle inner highlights, 20px cards, and rounded graphite controls.
- Open hero presentation and centered section headings; the asymmetric bento rhythm remains.
- Actual app screenshots retain their original colors. Only the generated hero sculpture uses a monochrome CSS presentation; its source asset is unchanged.
- Browser theme color, favicon palette, and Open Graph artwork follow the new palette.
- System layers: backdrop -1, sticky header 20, modal overlay 40, dialog 50, skip link 100.
- Reduced-transparency removes the backdrop texture and blur. Forced-colors restores solid heading text. No new animation library or external dependency.
- Hero copy and artwork appear immediately; only the three supporting intro cards retain a short stagger. The secondary monospace font is not preloaded.

## Pixel hero evolution

The user's follow-up replaces only the static atomic sculpture with a live silver pixel sphere. Reading this as a developer-portfolio accent for recruiters and product teams: restrained monochrome, with a slightly playful, computational motion language. Dials for this block: DESIGN_VARIANCE 6, MOTION_INTENSITY 5, VISUAL_DENSITY 3. Existing palette, typography, hero captions, content, and navigation remain unchanged.

The sphere is a small native Canvas animation, not a raster image edit or a product mockup. Square particles rotate slowly to express the existing "thoughtful build" theme. Rendering is capped at 24fps, outside React's render cycle, and stops offscreen, in a hidden document, or under reduced motion. A keyboard-accessible pause/play control replaces the old decorative arrow. No animation dependency was added; the unused original artwork is retained.
