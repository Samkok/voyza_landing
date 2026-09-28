# VoyZa Landing Page

A production-ready marketing landing page for VoyZa, a trip planning mobile app.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
voyza_landing/
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main landing page
├── components/
│   ├── Hero.tsx          # Hero section component
│   ├── FeatureCard.tsx   # Reusable feature card
│   ├── PricingCard.tsx   # Reusable pricing card
│   └── CTA.tsx           # Call-to-action section
├── tailwind.config.ts    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── next.config.js        # Next.js configuration
```

## Features

- **Hero Section**: Clear headline, sub-headline, and CTAs with phone mockup
- **Problem Section**: Highlights pain points of complex trip planning
- **Solution Section**: Showcases VoyZa's core features
- **Collaboration Section**: Explains shared trips and permissions
- **Pricing Section**: Three-tier pricing (Free, Pro, Pro + Collaboration)
- **CTA Section**: Final call-to-action with app store buttons

## Design

- Mobile-first, responsive design
- Clean, modern, minimalist SaaS aesthetic
- Neutral colors with blue/purple accent
- Generous spacing and clear typography hierarchy
- SEO-friendly structure

## Build for Production

```bash
npm run build
npm start
```

## Deployment (Vercel)

This project is hosted on [Vercel](https://vercel.com) as a Next.js static export (`output: 'export'` in `next.config.js`), which is perfect for a landing page with no server-side requirements.

### Deploy

Deployment is automatic via Vercel's GitHub integration: **push to the `main` branch and Vercel builds and deploys to production.** There is no manual deploy step, and build artifacts (`.next/`, `out/`) are gitignored — Vercel builds from source.

For a rare one-off manual deploy you can run `npx vercel --prod` with the Vercel CLI, but the standard flow is push-to-`main`.

### Referral invite pages

`public/r/index.html` is a self-contained referral invite page. `vercel.json` rewrites every `/r/{CODE}` path to it, so share links like `https://voyza.xtremon.com/r/VOYZA-ABC234` render with the referral code shown and route the visitor to the app store.

Because the rewrite runs on Vercel's platform, the `/r/{CODE}` path only resolves once deployed — not in `next dev` or a local static preview (there, only `/r/index.html` and the `?c=CODE` fallback work).

### Shared trip pages

`public/c/index.html` is the page behind a trip someone shared from the app's trip page. `vercel.json` rewrites every `/c/{CODE}` path to it, so `https://voyza.xtremon.com/c/AB12CD` shows the trip code and an **Open in VoyZa** button. The button hands the code to the installed app (`voyza://copy/AB12CD`; on Android an `intent://` link that falls back to Google Play), which opens its copy-a-trip wizard with the code filled in. Without the app the page offers the store buttons and the code to type.

Like `/r/{CODE}`, the path only resolves once deployed; locally use `/c/index.html?c=AB12CD`.

### Opening the app straight from a shared trip link

Tapping `https://voyza.xtremon.com/c/{CODE}` in a messenger can open the app without passing through the page. Each platform checks a file on this site first:

- **iOS** reads `public/.well-known/apple-app-site-association` (app id `J57YQ6F7J9.com.superiordev.voyza`, path `/c/*`). It has no file extension, so `vercel.json` sets its `Content-Type` to `application/json`. The app must also carry the Associated Domains capability with `applinks:voyza.xtremon.com`. Apple caches the file, so a change can take a day to reach phones.
- **Android** reads `public/.well-known/assetlinks.json`, which lists the SHA-256 fingerprint of the key Google Play signs the app with (Play Console → Protected with Play → Play Store distribution → Play app signing → App signing key). If Google ever rotates that key, add the new fingerprint to the list. Builds signed with any other key (a local release build, for one) are not covered and keep opening the page.

The page stays as the fallback in both cases: people without the app, links opened inside a browser, and Android until its file exists.
