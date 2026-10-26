import Link from 'next/link'
import type { ReactNode } from 'react'
import Footer from './Footer'

export const SITE = 'https://voyza.xtremon.com'
export const APP_STORE = 'https://apps.apple.com/app/id6758559163'
export const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.superiordev.voyza'

/** The one sentence every surface uses to say what VoyZa is. */
export const POSITIONING =
  'VoyZa turns the places you save into the smartest route for each day of your trip.'

export const styles = {
  h2: 'text-2xl font-bold text-gray-900 mt-12 mb-4',
  h3: 'text-xl font-semibold text-gray-900 mt-8 mb-3',
  p: 'text-gray-700 leading-relaxed mb-4',
  ul: 'list-disc pl-6 space-y-2 text-gray-700 mb-4',
  ol: 'list-decimal pl-6 space-y-2 text-gray-700 mb-4',
  strong: 'font-semibold text-gray-900',
  a: 'text-primary-600 underline hover:text-primary-700',
}

export type Faq = { q: string; a: string }

/** Server-rendered FAQ: visible text plus FAQPage structured data. */
export function FaqSection({ faqs, heading = 'Questions people ask' }: { faqs: Faq[]; heading?: string }) {
  const json = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return (
    <section>
      <h2 className={styles.h2}>{heading}</h2>
      <dl className="space-y-6">
        {faqs.map((f) => (
          <div key={f.q}>
            <dt className="text-lg font-semibold text-gray-900 mb-1">{f.q}</dt>
            <dd className="text-gray-700 leading-relaxed">{f.a}</dd>
          </div>
        ))}
      </dl>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
    </section>
  )
}

export function StoreButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mt-8">
      <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl shadow hover:shadow-lg">
        Get VoyZa on the App Store
      </a>
      <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl border-2 border-primary-600 hover:bg-primary-50">
        Get VoyZa on Google Play
      </a>
    </div>
  )
}

export default function InfoPage({
  title,
  lead,
  updated,
  children,
}: {
  title: string
  lead: string
  updated: string
  children: ReactNode
}) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50/30 to-accent-50/30">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-8">
          <span aria-hidden="true">←</span> VoyZa home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-2">{lead}</p>
        <p className="text-sm text-gray-500 mb-10">
          Last updated: <time dateTime={updated}>{new Date(updated + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })}</time> · Written by the VoyZa team
        </p>
        {children}
        <StoreButtons />
      </article>
      <Footer />
    </main>
  )
}
