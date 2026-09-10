# Verification

Checked locally on 2026-09-10. The site has not been deployed.

## Build checks

- `npm run lint`: passed without warnings.
- `npm run typecheck`: passed.
- `npm run build`: passed; all routes prerendered successfully.

## Initial implementation browser checks

Verified in Chromium with Playwright:

- No horizontal overflow at 320, 390, 768, 1024, and 1440 CSS pixels.
- All six project dialogs show the corresponding project content.
- Dialog keyboard focus remains inside the dialog; Escape closes it and restores focus to its opening button.
- The long project dialog fits a 320px screen and scrolls to its closing action.
- Mobile navigation opens, navigates to the selected section, and closes.
- Email copying writes the expected address to the clipboard and announces success. A simulated clipboard permission error shows the manual-selection fallback.
- Reduced-motion preference disables smooth scrolling.
- Self-hosted fonts and all five content images load.
- The final production check exposed stalled runtime WebP optimization for two app images. All four project assets now use pre-optimized WebP files served directly, removing that runtime dependency.
- Home, robots, sitemap, and Open Graph image endpoints respond successfully; unknown pages return HTTP 404.

## Preview update checks

After adding the supplied SCEX and Danz images and promoting Doxa Website into Selected Work:

- Lint, TypeScript, and production build pass.
- Six featured cards and one additional Doxa App entry render without duplicating Doxa Website.
- Layouts have no horizontal overflow at 320, 390, 768, 1024, and 1440px.
- SCEX and Danz image checksums match the user-supplied PNGs exactly, and both load in the browser.
- Doxa's actual public sign-in screenshot renders in the desktop and mobile cards. Its dialog identifies Philodox and links to `https://doxa.cafe` with a "Visit website" action.
- SCEX's dialog does not show an empty contributions heading or fabricate achievements.

The browser's development LCP hint can appear when reloading after scrolling directly to the project images. They remain lazy-loaded because they are below the initial home-page fold.

## Initial Lighthouse baseline

Mobile audit against the local production server before the SCEX, Danz, and Doxa preview additions; this audit was not rerun for that content update:

| Category       | Score |
| -------------- | ----: |
| Performance    |    94 |
| Accessibility  |   100 |
| Best practices |   100 |
| SEO            |   100 |

Measured lab metrics: FCP 0.8s, LCP 3.1s, total blocking time 20ms, cumulative layout shift 0. These are local lab results, not real-user field measurements or a complete accessibility certification. Production hosting and device conditions can change them.

Screenshots and the raw audit are in the ignored `output/playwright` directory. Set `NEXT_PUBLIC_SITE_URL` and confirm the timeline dates before publishing. A deployment without that setting has local-only social metadata and an empty sitemap.

## Monochrome visual refresh

Checked after the black-and-silver theme update on 2026-09-10:

- Lint, TypeScript, and the production build pass.
- No horizontal overflow at 320, 390, 768, 1024, and 1440px.
- All seven project dialogs open, trap keyboard focus, close with Escape, and restore focus to their opening controls.
- Mobile navigation and email copying still work. Project information and original project image files are unchanged.
- Desktop and mobile screenshots were visually reviewed. The mobile hero sculpture is scaled to keep its labels clear.
- Browser theme color is #080808. Forced-colors restores solid heading text; reduced-motion and reduced-transparency alternatives remain available.
- Hero text renders without a delayed entrance animation. Lower bento cards retain a short stagger; the secondary monospace font is no longer preloaded.

Final mobile Lighthouse audit against the local production server: performance **91**, accessibility **100**, best practices **100**, SEO **100**. FCP **1.2s**, LCP **3.5s**, total blocking time **30ms**, cumulative layout shift **0**. No automated accessibility audit failures. The LCP result is above the 2.5s target and remains a performance follow-up; these are simulated local lab measurements, not deployed field results or a full accessibility certification.

Artifacts: `output/playwright/monochrome-desktop-top.png`, `output/playwright/monochrome-desktop.png`, `output/playwright/monochrome-mobile-top.png`, `output/playwright/monochrome-dialog.png`, and `output/playwright/lighthouse-monochrome-final.json`.

## Animated pixel hero

Checked after replacing only the hero sculpture with a Canvas pixel sphere:

- Lint, TypeScript, and production build pass. No new package dependencies.
- Canvas frame comparisons confirm active motion, pause, keyboard resume, offscreen suspension, and resumption when returning to the hero.
- Both initial-load and dynamically enabled reduced-motion preferences produce a non-empty static image; restoring normal motion resumes playback. The motion control is hidden under reduced motion.
- No horizontal overflow at 320, 390, 768, 1024, and 1440px. Desktop and mobile screenshots confirm clear captions and a 44px pause/play control.
- The old sculpture image is no longer requested; original project screenshots and content are untouched.
- Local production Lighthouse: performance **94**, accessibility **100**, best practices **100**, SEO **100**. FCP **0.8s**, LCP **3.1s**, total blocking time **40ms**, CLS **0**. LCP remains above the 2.5s target; these are lab results, not field measurements.

Artifacts: `output/playwright/pixel-hero-desktop.png`, `output/playwright/pixel-hero-mobile.png`, and `output/playwright/lighthouse-pixel-hero.json`.

## CV download

- Added "Download my CV" beside the hero's work action, with a neutral outlined style and wrapping actions on narrow screens.
- The original four-page PDF is served with HTTP 200 and `application/pdf`, at 129,768 bytes.
- Actual browser downloads at 1440px and 390px succeed as `Pham-Hai-Phuoc-CV.pdf` without leaving the portfolio. Both downloaded files match the source PDF's SHA-256 checksum.
- No horizontal overflow at 320, 390, 768, 1024, and 1440px; desktop and mobile screenshots reviewed.
- Lint, TypeScript, and production build pass after this addition.
- The downloadable source remains unchanged and still lists CMC as current, without SCEX. This discrepancy was disclosed to the user; the PDF was not silently rewritten.

Artifacts: `output/playwright/cv-download-desktop.png`, `output/playwright/cv-download-mobile.png`, and downloaded PDFs in the same ignored directory. The preceding Lighthouse run covers the pixel update, not this subsequent CV button addition.

## SCEX and ACB ONE App Store links

- Official first iPhone screenshots from Apple's lookup API load as local WebP images at their correct intrinsic dimensions, without cropping. User-supplied originals are retained.
- Clicking each card's explicit store link opens the exact supplied App Store URL in a new tab without opening the detail dialog. The mobile ACB ONE link also opens correctly through keyboard Enter.
- Both detail dialogs retain their store URLs, fit at 320px, close with Escape, and restore focus after dismissal. An initial immediate focus sample preceded dialog cleanup; waiting for dismissal confirmed focus restoration for both cards.
- SCEX's card labels the link as a simulator, and its project note distinguishes the store demo from the user-supplied broader platform overview.
- No horizontal overflow at 320, 390, 768, 1024, and 1440px. Desktop and mobile previews visually checked; no portfolio browser errors or warnings.
- Lint, TypeScript, and the production build pass. Lighthouse was not rerun for this below-the-fold asset/link update.

Artifacts: `output/playwright/store-links-desktop.png`, `output/playwright/acb-store-mobile.png`, and `output/playwright/scex-store-dialog-mobile.png`. Asset provenance is recorded in `docs/assets.md`.
