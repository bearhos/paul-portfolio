# Asset sources

## Downloadable CV

`public/cv/pham-hai-phuoc-cv.pdf` is an unchanged copy of the user's supplied `React Native Developer - Pham Hai Phuoc.pdf` (4 pages, 129,768 bytes). The hero's "Download my CV" link downloads it as `Pham-Hai-Phuoc-CV.pdf`.

This original PDF still lists CMC Global as the current employer and does not include SCEX. The portfolio's newer employment information does not modify this source document. Replace this file with a user-approved updated CV before publication if the downloadable version should match the website.

## Fonts

- Satoshi: Fontshare, https://www.fontshare.com/fonts/satoshi . Downloaded from its published CSS endpoint https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap . Distributed under the Fontshare free font license; see https://www.fontshare.com/licenses/itf-ffl . Local regular, medium, and bold WOFF2 files.
- JetBrains Mono: https://www.jetbrains.com/lp/mono/ , SIL Open Font License 1.1, via Google Fonts. Local regular TTF file. License: https://github.com/JetBrains/JetBrainsMono/blob/master/OFL.txt . Included at `public/fonts/JetBrainsMono-OFL.txt`.

## App assets

The App Store icon and one preview image for each app were retrieved from Apple's public lookup API on 2026-09-10. The images remain the respective publisher's property and are presented to identify projects discussed in the supplied CV. They are not claimed as original portfolio artwork.

- Sync: https://apps.apple.com/vn/app/sync-secure-chat-private-ai/id6747809379 . Lookup: https://itunes.apple.com/lookup?id=6747809379&country=vn . Local files: `public/images/sync-icon.jpg`, `public/images/sync-preview.jpg`.
- OKI: https://apps.apple.com/us/app/oki-chat-platform/id6758304434 . Lookup: https://itunes.apple.com/lookup?id=6758304434&country=us . Local files: `public/images/oki-icon.jpg`, `public/images/oki-preview.jpg`.

The screenshot images are current store assets, not proof of the exact interface or features produced during the listed employment periods. Project descriptions are grounded in the CV.

The app icons and previews are pre-optimized into matching `.webp` files (about 24KB combined) for the website. Next Image serves these directly with `unoptimized` to avoid redundant runtime conversion. The original JPEGs are retained as source assets.

## User-supplied app previews

- `public/images/scex-preview.png`: the first image supplied by the user, assigned to SCEX.
- `public/images/danz-preview.png`: the second image supplied by the user, assigned to Danz People.

The SCEX and Danz PNG files are retained unchanged at their original 166 × 296 resolution. Danz is still displayed in full without cropping or runtime image optimization; SCEX now uses the official store preview documented below. Danz's product description reflects the dance-class interface shown in the supplied image. SCEX's role and product overview come from the user's supplied information; individual contributions and dates are not invented. The overview is an English translation of the user's Vietnamese description, not an independent security or compliance assessment.

`public/images/acb-one-preview.png` is the ACB ONE promotional image supplied by the user, retained unchanged at its original 211 × 239 resolution. Its visible placement now uses the official store preview below.

## SCEX and ACB ONE App Store update

Retrieved from Apple's public lookup API on 2026-09-10: https://itunes.apple.com/lookup?id=6763202537,950141024&country=vn . The first iPhone screenshot for each app was converted to WebP without cropping or resizing, then served directly through Next Image with the correct intrinsic dimensions.

- SCEX listing: https://apps.apple.com/vn/app/scex-trading-simulator/id6763202537 . Local preview: `public/images/scex-store-preview.webp`, 222 × 480, 16,540 bytes. Source: https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/9d/ba/70/9dba70af-7045-cabd-db8c-facff8d730a0/2__U0028Custom_U0029.jpg/320x480bb.jpg . This is **SCEX Trading Simulator**, an educational demo using simulated assets, not real-money trading. The card action and project note distinguish it from the broader platform overview supplied by the user.
- ACB ONE listing: https://apps.apple.com/vn/app/acb-one/id950141024 . Local preview: `public/images/acb-one-store-preview.webp`, 392 × 696, 33,020 bytes. Source: https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/1e/9e/43/1e9e43ff-09af-33c0-9b28-7d8519cf1f93/324154e1-d561-4ccf-80b7-1003169a4f66_02_EN_1242x2208_Appstore_ONE.jpg/392x696bb.jpg . Current public imagery is not evidence of exactly which historical interface the developer contributed to.

Both cards have a direct external App Store action, separate from the existing detail-dialog control. The dialogs also expose their respective store links. Other project assets and links are unchanged.

## Doxa website preview

`public/images/doxa-website-preview.webp` is a screenshot of the live public sign-in page at https://doxa.cafe/auth, captured on 2026-09-10 and optimized to 1040 × 650 WebP. No sign-in was performed. The public landing page at https://doxa.cafe/landing also identifies Philodox in its footer. The portfolio's project link points to https://doxa.cafe, as supplied by the user.

Image searches returned unrelated cafés, so none of those images were used. The actual website preview is displayed in full, not generated or represented as a historical screenshot from the user's employment period.

## Original illustration

`public/images/react-sculpture.webp` was created with the built-in imagegen tool and optimized to a 900px WebP. It is a decorative interpretation of an atomic form, not an official React brand asset or a product screenshot.

The monochrome redesign initially presented this asset with CSS grayscale, blending, and a soft mask. The subsequent pixel-animation update replaces its visible placement with a native Canvas particle sphere in `src/components/pixel-orb.tsx`. The original image is retained but no longer loaded by the page. All real project image assets remain unchanged.

Prompt: "Use case: stylized-concept. Create one premium 3D illustration for a senior React Native engineer's portfolio bento tile. A sculptural React atom: three elegantly intersecting flattened elliptical rings in brushed silver chrome, with a small solid matte turquoise sphere at the center. Tilted in three-quarter perspective, sophisticated industrial product-render quality, fine surface reflections, realistic ambient occlusion. Object centered on a completely uniform charcoal blue-gray background exactly #222831. Square composition, full object visible with generous 18% margins, strong silhouette. Rings primarily silver with very subtle #00ADB5 teal edge reflections. Soft studio key light from top left, restrained moody shadows. No bloom or glow, no gradients outside natural object shading, no text, no labels, no logos besides the atomic shape, no screens, no UI, no extra objects. This is a standalone decorative artwork, not a portrait or project screenshot."
