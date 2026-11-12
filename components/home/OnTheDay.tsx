import type { CSSProperties, ReactNode } from 'react'

const icon = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
)

const NOTES: { title: string; body: string; icon: ReactNode }[] = [
  {
    title: 'Opening hours on every pin',
    body: 'Pins show when each place closes, and VoyZa warns you when a stop would run past closing time.',
    icon: icon(
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </>,
    ),
  },
  {
    title: 'Know when you’ve arrived',
    body: 'Set an arrival radius and VoyZa asks whether to mark a place done the moment you reach it.',
    icon: null,
  },
  {
    title: 'Carry what you missed',
    body: 'Didn’t get to everything? Turn on carry-forward and the stops you missed roll to the next day, with everyone on the trip notified.',
    icon: icon(<path d="M4 12h13m-4-4 4 4-4 4M20 6v12" />),
  },
  {
    title: 'Walk, bus or metro',
    body: 'Every leg between stops shows how to get there on foot or by transit, with the line, the stops and, where Google has it, the fare.',
    icon: icon(
      <>
        <rect x="6" y="3.5" width="12" height="13" rx="3" />
        <path d="M6 10h12M9 20l-1.5 1.5M15 20l1.5 1.5M9 13.5h.01M15 13.5h.01" />
      </>,
    ),
  },
  {
    title: 'Discover what’s nearby',
    body: 'Tap anywhere on the map, set a radius, and search around that point, with the distance shown for every result.',
    icon: icon(
      <>
        <circle cx="11" cy="11" r="6.5" />
        <path d="m20 20-4.4-4.4" />
      </>,
    ),
  },
  {
    title: 'Focus on what’s left',
    body: 'Filter pins to Active, Skipped or Done, and the map zooms to fit just those.',
    icon: icon(<path d="M4 5h16l-6 7.5V19l-4 1.5v-8L4 5z" />),
  },
]

/** The arrival radius, pinging around a pin. */
function ArrivalIcon() {
  return (
    <span aria-hidden="true" className="relative grid h-6 w-6 place-items-center">
      {[0, 1300].map((delay) => (
        <span
          key={delay}
          className="ping-ring absolute inset-0 rounded-full border border-signal"
          style={{ '--d': `${delay}ms` } as CSSProperties}
        />
      ))}
      <span className="h-2.5 w-2.5 rounded-full bg-signal shadow-[0_0_12px_rgba(0,212,255,.8)]" />
    </span>
  )
}

export default function OnTheDay() {
  return (
    <section id="on-the-day" className="night-contours relative overflow-hidden bg-ink-night px-5 py-24 text-paper-hi sm:px-8 sm:py-32">
      <div className="relative mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <header data-reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="font-label text-[11px] uppercase tracking-[.2em] text-signal">On the day</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[1.02] tracking-[-.018em]">
            Then it travels <br className="hidden sm:block" />
            <em className="font-accent text-[1.08em] italic text-coral">with you.</em>
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-paper/70">
            Out the door, VoyZa follows along: it knows what’s about to close, notices when you arrive, and rolls what you missed into the
            next day.
          </p>
        </header>

        <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {NOTES.map((n, i) => (
            <li key={n.title} data-reveal style={{ '--d': `${(i % 2) * 120}ms` } as CSSProperties} className="border-t border-ink-rule pt-6">
              <span className="text-signal">{n.icon ?? <ArrivalIcon />}</span>
              <h3 className="mt-5 font-body text-[19px] font-semibold text-paper-hi">{n.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-paper/70">{n.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
