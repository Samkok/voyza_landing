import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const POSITIONING =
  'VoyZa turns the places you save into the smartest route for each day of your trip.'

export const metadata: Metadata = {
  metadataBase: new URL('https://voyza.xtremon.com'),
  title: 'VoyZa: Trip Route Planner',
  description: POSITIONING + ' Save places, tap Optimize, see more and walk less. Free to start on iPhone and Android.',
  keywords: ['trip route planner', 'itinerary planner', 'multi-stop route', 'route optimization', 'day trip planner', 'multi-day itinerary', 'group trip planner', 'travel app'],
  alternates: { canonical: '/' },
  // Google Search Console ownership (URL-prefix property https://voyza.xtremon.com).
  verification: { google: 'weZZThLbWgm1TQucYHJSA05675ckknXWjXEu6uRQK2g' },
  openGraph: {
    title: 'VoyZa: Trip Route Planner',
    description: POSITIONING,
    type: 'website',
    url: 'https://voyza.xtremon.com',
    siteName: 'VoyZa',
  },
}

// What VoyZa is, in the form search engines and assistants read directly.
const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'VoyZa: Trip Route Planner',
  alternateName: 'VoyZa',
  description: POSITIONING,
  applicationCategory: 'TravelApplication',
  operatingSystem: 'iOS, Android',
  url: 'https://voyza.xtremon.com',
  downloadUrl: [
    'https://apps.apple.com/app/id6758559163',
    'https://play.google.com/store/apps/details?id=com.superiordev.voyza',
  ],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free with 10 saved places; VoyZa Pro (weekly, monthly, yearly or lifetime) removes the cap.',
  },
  featureList: [
    'Multi-stop route optimization on real roads',
    'Auto-plan places across the days of a trip',
    'Opening hours shown on map pins',
    'Arrival prompts and carry-forward of unvisited places',
    'Plan together with live sync',
    'Share trips as a link, a route card, or a copy code',
  ],
  author: { '@type': 'Person', name: 'Heng Kok' },
  inLanguage: 'en',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
        {children}
      </body>
    </html>
  )
}
