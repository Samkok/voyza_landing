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
