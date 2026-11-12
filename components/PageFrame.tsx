import type { CSSProperties, ReactNode } from 'react'
import Footer from './Footer'
import RevealObserver from './home/RevealObserver'
import SiteNav from './home/SiteNav'

const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

/** Keeps hyphenated words such as "multi-day" on one line; the text itself is unchanged. */
const keepHyphens = (text: string) =>
  text.split(/(\S+-\S+)/).map((part, i) => (i % 2 ? <span key={i} className="whitespace-nowrap">{part}</span> : part))

/** Every page other than home: the shared nav, one sheet of contour paper, and the night footer. */
export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteNav base="/" />
      <main className="paper grain font-body text-ink">{children}</main>
      <Footer />
      <RevealObserver />
    </>
  )
}

/** Page heading: kicker, title (optionally ending in coral italic), lead, a meta line, and the route line that starts the page. */
export function PageHeader({
  kicker,
  title,
  titleAccent,
  lead,
  meta,
}: {
  kicker: string
  /** With `titleAccent`, the title's last words are set in coral italic. Together they read as one title. */
  title: string
  titleAccent?: string
  lead?: ReactNode
  meta?: ReactNode
}) {
  return (
    <header>
      <p className="rise flex items-center gap-3 font-label text-[11px] uppercase tracking-[.2em] text-ink-soft" style={d(40)}>
        <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-coral shadow-[0_0_0_4px_rgba(228,85,63,.18)]" />
        {kicker}
      </p>
      <h1
        className="rise mt-5 text-balance font-display text-[clamp(2.5rem,6.4vw,4.4rem)] leading-[.98] tracking-[-.022em] text-ink"
        style={d(120)}
      >
        {keepHyphens(title)}
        {titleAccent && (
          <>
            {' '}
            <em className="inline-block font-accent text-[1.08em] italic tracking-[-.01em] text-coral">{keepHyphens(titleAccent)}</em>
          </>
        )}
      </h1>
      {lead && (
        <p className="rise mt-7 text-[20px] leading-relaxed text-ink-soft sm:text-[21px]" style={d(220)}>
          {lead}
        </p>
      )}
      {meta && (
        <div className="rise mt-6 space-y-1.5 font-label text-[11px] uppercase tracking-[.16em] text-ink-mute" style={d(300)}>
          {meta}
        </div>
      )}
      {/* The page's route starts here: a dotted line drawn from a start ring to a coral pin. */}
      <div aria-hidden="true" className="relative mt-10 h-5">
        <span className="absolute left-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-ink bg-paper-hi" />
        <span className="rail-x draw-x absolute left-5 right-6 top-1/2 h-[6px] -translate-y-1/2" />
        <svg viewBox="0 0 24 30" className="pin-land absolute -top-3 right-0 h-[30px] w-6">
          <path d="M12 29s9-9.6 9-17A9 9 0 0 0 3 12c0 7.4 9 17 9 17z" fill="#E4553F" />
          <circle cx="12" cy="11.5" r="3.4" fill="#FBF6EC" />
        </svg>
      </div>
    </header>
  )
}
