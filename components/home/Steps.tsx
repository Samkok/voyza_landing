import type { CSSProperties } from 'react'

const STEPS = [
  {
    n: '01',
    verb: 'Save',
    title: 'Collect the places',
    body: 'Search by name or tap the map. Each place becomes a pin, coloured by what it is: food, sights, nature, somewhere to stay.',
  },
  {
    n: '02',
    verb: 'Optimize',
    title: 'Tap Optimize',
    body: 'VoyZa finds the order with the least travel, on real routes rather than straight lines, and shows how much time it saved.',
  },
  {
    n: '03',
    verb: 'Auto-plan',
    title: 'Spread it across your days',
    body: 'Auto-plan proposes which places go on which day, balanced by city. Previewing the plan is free; applying it comes with VoyZa Pro.',
  },
]

export default function Steps() {
  return (
    <section id="how" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <header data-reveal className="max-w-2xl">
          <p className="font-label text-[11px] uppercase tracking-[.2em] text-coral-ink">How it works</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[1.02] tracking-[-.018em] text-ink">
            From a list of places to a day you can{' '}
            <em className="font-accent text-[1.08em] italic text-coral">walk.</em>
          </h2>
        </header>

        <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          {STEPS.map((s, i) => (
            <li key={s.n} data-reveal style={{ '--d': `${i * 160}ms` } as CSSProperties} className="relative pl-20 md:pl-0">
              {i < STEPS.length - 1 && (
                <>
                  <span aria-hidden="true" className="rail-x rail-draw absolute left-[68px] right-[-2.5rem] top-[25px] hidden h-[6px] md:block" />
                  <span aria-hidden="true" className="rail-y rail-draw rail-draw-y absolute bottom-[-3rem] left-[25px] top-[64px] w-[6px] md:hidden" />
                </>
              )}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 grid h-14 w-14 place-items-center rounded-full bg-coral font-label text-[18px] font-medium text-white shadow-[0_0_0_6px_#F2EADB] md:static"
              >
                {s.n}
              </span>
              <p className="font-label text-[11px] uppercase tracking-[.2em] text-coral-ink md:mt-7">{s.verb}</p>
              <h3 className="mt-2 font-display text-[28px] leading-tight text-ink">{s.title}</h3>
              <p className="mt-3 max-w-sm text-[17px] leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
