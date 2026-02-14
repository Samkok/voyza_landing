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

## Firebase Deployment

This project is configured for Firebase Hosting with static export.

### Prerequisites

1. Install Firebase CLI globally (if not already installed):
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Verify the project is linked:
```bash
firebase projects:list
```

### Deploy to Firebase

1. Build and deploy:
```bash
npm run deploy
```

Or deploy separately:
```bash
npm run build
npm run firebase:deploy
```

2. Test locally before deploying:
```bash
npm run build
npm run firebase:serve
```

### Firebase Configuration

- **Project ID**: `voyza-landing`
- **Hosting Directory**: `out` (Next.js static export output)
- **Configuration**: `firebase.json` and `.firebaserc`

The project is configured to export as a static site, which is perfect for a landing page with no server-side requirements.
