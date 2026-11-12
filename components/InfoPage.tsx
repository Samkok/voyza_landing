import type { CSSProperties, ReactNode } from 'react'
import StoreBadges from './home/StoreBadges'
import { PageFrame, PageHeader } from './PageFrame'

export { APP_STORE, PLAY_STORE, POSITIONING, SITE } from './site'

const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

// Guide typography, in the home page's "paper map" style.
export const styles = {
  h2: 'mt-16 mb-5 text-balance font-display text-[clamp(1.75rem,3.4vw,2.3rem)] leading-[1.08] tracking-[-.012em] text-ink',
  h3: 'mt-8 mb-3 font-body text-[20px] font-semibold text-ink',
  p: 'mb-5 text-[18px] leading-[1.7] text-ink-soft',
  ul: "mb-5 space-y-3 text-[18px] leading-[1.7] text-ink-soft [&>li]:relative [&>li]:pl-7 [&>li]:before:absolute [&>li]:before:left-1 [&>li]:before:top-[.72em] [&>li]:before:h-2 [&>li]:before:w-2 [&>li]:before:rounded-full [&>li]:before:bg-coral [&>li]:before:content-['']",
  strong: 'font-semibold text-ink',
  a: 'rounded-sm text-ink underline decoration-coral decoration-2 underline-offset-4 transition-colors hover:text-coral-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-coral',
}

export type Step = { title: string; body: ReactNode }

/** A method as a route: numbered stops joined by the dotted itinerary line, drawn in as each stop scrolls up. */
export function RouteSteps({ steps }: { steps: Step[] }) {
  return (
    <ol className="mb-6 mt-8">
      {steps.map((s, i) => (
        <li key={s.title} data-reveal style={d(60)} className="relative pb-10 pl-[4.25rem] last:pb-2">
          {i < steps.length - 1 && (
            <span aria-hidden="true" className="rail-y rail-draw rail-draw-y absolute bottom-1 left-[19px] top-[54px] w-[6px]" />
          )}
          <span
            aria-hidden="true"
            className="absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full bg-coral font-label text-[15px] font-medium text-white shadow-[0_0_0_5px_#F2EADB]"
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="text-balance pt-1.5 font-display text-[23px] leading-snug text-ink">{s.title}</h3>
          <p className="mt-2 text-[18px] leading-[1.7] text-ink-soft">{s.body}</p>
        </li>
      ))}
    </ol>
  )
}

/** The part of a guide that is about the app itself, set apart from the method on a card. */
export function InApp({ title = 'How VoyZa does it', children }: { title?: string; children: ReactNode }) {
  return (
    <section
      data-reveal
      className="mb-6 mt-16 rounded-[24px] border border-paper-line bg-paper-hi px-6 pb-3 pt-7 shadow-[0_24px_50px_-36px_rgba(19,34,56,.55)] sm:px-9 sm:pt-9"
    >
      <p className="flex items-center gap-2.5 font-label text-[11px] uppercase tracking-[.2em] text-coral-ink">
        <img src="/brand/voyza-icon.png" alt="" width={22} height={22} className="h-[22px] w-[22px] rounded-[6px]" />
        In the app
      </p>
      <h2 className="mb-5 mt-3 text-balance font-display text-[clamp(1.6rem,3vw,2rem)] leading-[1.1] text-ink">{title}</h2>
      {children}
    </section>
  )
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
      <dl className="border-b border-ink/15">
        {faqs.map((f) => (
          <div key={f.q} className="border-t border-ink/15 py-6">
            <dt className="font-body text-[19px] font-semibold leading-snug text-ink">{f.q}</dt>
            <dd className="mt-2.5 text-[17px] leading-[1.7] text-ink-soft">{f.a}</dd>
          </div>
        ))}
      </dl>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
    </section>
  )
}

/** Closing card; its id is where the navigation's "Get the app" lands. */
function GetTheApp() {
  return (
    <section
      id="download"
      data-reveal
      className="mt-20 rounded-[28px] border border-paper-line bg-paper-hi px-6 pb-10 pt-9 shadow-[0_30px_70px_-40px_rgba(19,34,56,.6)] sm:px-10"
    >
      <p className="font-label text-[11px] uppercase tracking-[.2em] text-coral-ink">Free to download</p>
      <h2 className="mt-3 text-balance font-display text-[clamp(2rem,4.2vw,2.9rem)] leading-[1.02] tracking-[-.018em] text-ink">
        Your next trip, <em className="font-accent text-[1.08em] italic text-coral">in order.</em>
      </h2>
      <p className="mt-4 max-w-md text-[17px] leading-relaxed text-ink-soft">
        VoyZa is on iPhone and Android. Start with the sample trip, no account needed.
      </p>
      <StoreBadges className="mt-7" />
    </section>
  )
}

export default function InfoPage({
  kicker,
  title,
  titleAccent,
  lead,
  updated,
  children,
}: {
  kicker: string
  title: string
  titleAccent?: string
  lead: string
  updated: string
  children: ReactNode
}) {
  const date = new Date(updated + 'T00:00:00Z').toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
  return (
    <PageFrame>
      <article className="mx-auto max-w-[46rem] px-5 pb-24 pt-28 sm:px-8 sm:pt-36">
        <PageHeader
          kicker={kicker}
          title={title}
          titleAccent={titleAccent}
          lead={lead}
          meta={
            <p>
              Updated <time dateTime={updated}>{date}</time> · Written by the VoyZa team
            </p>
          }
        />

        <div className="mt-6">{children}</div>

        <GetTheApp />
      </article>
    </PageFrame>
  )
}
