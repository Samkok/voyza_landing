import type { CSSProperties } from 'react'

// No prices: the app reads them live from the stores, so the site never states them.
const FREE = [
  'Create trips and explore the sample trip',
  'Optimize routes and see opening hours on the map',
  'Share trips, and plan together with a free account',
  'Join trips friends share with you, and copy one',
  'Preview an Auto-plan for your days',
]

const PRO = ['Add your own places, as many as you need', 'Apply Auto-plan across the whole trip', 'Copy more than one shared trip']

function Ticket({ pro, kicker, title, items, stub, delay }: {
  pro?: boolean
  kicker: string
  title: string
  items: string[]
  stub: string
  delay: number
}) {
  return (
    <article
      data-reveal
      style={{ '--d': `${delay}ms` } as CSSProperties}
      className={`relative flex overflow-hidden rounded-[22px] border ${
        pro ? 'border-ink bg-ink text-paper-hi' : 'border-paper-line bg-paper-hi text-ink'
      } shadow-[0_24px_50px_-34px_rgba(19,34,56,.6)]`}
    >
      <div className="flex-1 p-7 sm:p-9">
        <p className={`font-label text-[11px] uppercase tracking-[.2em] ${pro ? 'text-signal' : 'text-coral-ink'}`}>{kicker}</p>
        <h3 className="mt-3 font-display text-[30px] leading-tight">{title}</h3>
        <ul className="mt-6 space-y-3">
          {items.map((item) => (
            <li key={item} className={`flex gap-3 text-[16px] leading-snug ${pro ? 'text-paper/85' : 'text-ink-soft'}`}>
              <svg viewBox="0 0 20 20" className={`mt-0.5 h-5 w-5 shrink-0 ${pro ? 'text-signal' : 'text-coral'}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m4.5 10.5 3.5 3.5 7.5-8" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
      {/* The stub, behind a perforation */}
      <div
        aria-hidden="true"
        className={`relative hidden w-20 shrink-0 items-center justify-center border-l-2 border-dashed sm:flex ${pro ? 'border-paper/20' : 'border-paper-line'}`}
      >
        <span className="absolute -left-[13px] -top-3 h-6 w-6 rounded-full bg-paper" />
        <span className="absolute -bottom-3 -left-[13px] h-6 w-6 rounded-full bg-paper" />
        <span className={`rotate-180 font-label text-[10.5px] uppercase tracking-[.28em] [writing-mode:vertical-rl] ${pro ? 'text-paper/60' : 'text-ink-mute'}`}>
          {stub}
        </span>
      </div>
    </article>
  )
}

export default function Plans() {
  return (
    <section id="plans" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <header data-reveal className="max-w-2xl">
          <p className="font-label text-[11px] uppercase tracking-[.2em] text-coral-ink">Free &amp; Pro</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[1.02] tracking-[-.018em] text-ink">
            Free to start. Pro to <em className="font-accent text-[1.08em] italic text-coral">add your places.</em>
          </h2>
        </header>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Ticket kicker="Free" title="Try it, share it, plan together" items={FREE} stub="No account needed" delay={0} />
          <Ticket pro kicker="VoyZa Pro" title="Add every place on your list" items={PRO} stub="Week · month · year · lifetime" delay={140} />
        </div>
        <p data-reveal className="mt-8 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
          VoyZa Pro comes as a weekly Trip Pass, monthly, yearly, or a one-time Lifetime purchase. The yearly plan starts with a 7-day free
          trial where the store offers it, and prices are shown in the app before you confirm.
        </p>
      </div>
    </section>
  )
}
