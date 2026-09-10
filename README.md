# Phước's portfolio

A responsive developer portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS, and local fonts. Black-and-silver bento styling, real project stories, accessible project dialogs, a mobile navigation menu, and a working email contact flow. The current visual direction is documented in `docs/design-direction.md`.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000. To check the production build:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

## Update content

- `src/content/portfolio.ts`: profile, contacts, seven project summaries, employment history, and technology groups.
- `src/app/globals.css`: palette, typography, grid, responsive layouts, and reduced-motion behavior.
- `public/images`: optimized image assets. Source references are in `docs/assets.md`.
- `public/fonts`: Satoshi and JetBrains Mono, self-hosted via `next/font/local`.

The supplied CV and the user's employment correction are the content sources. CMC's end date is shown as August 2026, interpreting "quit CMC on August" relative to this September 2026 task. SCEX's start date is not yet confirmed, so it is displayed as "Current." No responsibilities beyond the confirmed SCEX title are inferred. The freelance engagement is labeled concurrent. The hero uses "Since 2021" rather than an unconfirmed experience total.

Project details describe contribution, not sole ownership. ACB ONE, SCEX, and Danz use the user's supplied app previews unchanged. Public App Store screenshots for Sync and OKI can reflect later product versions; project dialogs state this. Contact uses the personal email and LinkedIn link from the CV. No GitHub profile is invented, and the outdated CV is not published as a download.

## Deployment

The `master` branch deploys automatically to GitHub Pages through `.github/workflows/deploy-pages.yml`.

Public site: https://bearhos.github.io/paul-portfolio/

The workflow builds a static export with the repository base path, runs lint and typecheck, and publishes the `out` directory. The site needs no database, authentication, email provider, or secret keys.

Confirm the SCEX start date and CMC end year when updating the timeline. Choose any additional portrait or project screenshots directly in the image assets; no portrait has been fabricated.

## Implementation choices

The page renders on the server. Client components are limited to navigation, project dialogs, email-copy feedback, and reveal behavior. Lightweight CSS and the native Web Animations API provide motion; no additional animation library is needed. Reduced motion disables animated transitions, and content stays visible with JavaScript disabled. Dialogs use Radix for focus trapping, Escape dismissal, and scroll locking, with explicit focus restoration to the opening card.

Local build, browser, and Lighthouse results are documented in `docs/verification.md`.
