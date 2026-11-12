import type { CSSProperties } from 'react'

// Day 2 of the store set's Tokyo trip (frame 02): the same stops, numbers and
// opening hours. One place is added on Maya's phone and appears on Kenji's.
function Stop({ n, name, meta }: { n: string; name: string; meta: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl px-1.5 py-2 sm:gap-3 sm:px-2">
      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-coral font-label text-[11px] font-medium text-white">{n}</span>
      <span className="min-w-0">
        <span className="block truncate text-[12.5px] font-semibold text-paper-hi sm:text-[13.5px]">{name}</span>
        <span className="block whitespace-nowrap font-label text-[9.5px] tracking-[.04em] text-paper/55 sm:text-[10px]">{meta}</span>
      </span>
    </div>
  )
}

function Phone({ who, lag, adding }: { who: string; lag: number; adding?: boolean }) {
  return (
    <figure className="w-full">
      <div className="rounded-[28px] bg-[#0B1626] p-2 shadow-[0_28px_50px_-28px_rgba(19,34,56,.8)] ring-1 ring-black/40">
        <div className="rounded-[22px] bg-ink px-2 pb-3 pt-2.5 sm:px-3 sm:pt-3">
          <div className="flex items-center justify-between gap-2 rounded-xl bg-signal px-2.5 py-2 text-ink sm:px-3">
            <span className="truncate text-[12px] font-semibold sm:text-[12.5px]">7 Days in Tokyo</span>
            <span className="hidden font-label text-[9.5px] uppercase tracking-[.14em] sm:inline">Day 2</span>
          </div>
          <div className="mt-2.5 space-y-0.5">
            <div className="flex items-center gap-2.5 rounded-xl px-1.5 py-2 sm:gap-3 sm:px-2">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-paper-hi text-ink">
                <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" aria-hidden="true">
                  <path d="M3 1.5 10 6l-7 4.5z" fill="currentColor" />
                </svg>
              </span>
              <span className="text-[12.5px] font-semibold text-paper-hi sm:text-[13.5px]">Senso-ji</span>
            </div>
            <Stop n="1" name="Nakamise" meta="10:00–17:00" />
            <div className="sync-row" style={{ '--d': `${lag}ms` } as CSSProperties}>
              <div className="rounded-xl">
                <Stop n="2" name="Kappabashi" meta="10:00–17:00" />
              </div>
            </div>
            <Stop n="3" name="Sumida Park" meta="Open 24h" />
          </div>
          <div className="relative mt-2 flex items-center justify-center gap-2 rounded-xl border border-dashed border-paper/20 py-2 text-[12px] font-semibold text-paper/70">
            + Add a place
            {adding && <span aria-hidden="true" className="sync-tap absolute h-9 w-9 rounded-full bg-paper-hi/30 ring-2 ring-paper-hi/70" />}
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center font-label text-[10.5px] uppercase tracking-[.18em] text-ink-soft">{who}</figcaption>
    </figure>
  )
}

export default function PlanTogether() {
  return (
    <section id="together" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div data-reveal>
          <p className="font-label text-[11px] uppercase tracking-[.2em] text-coral-ink">Together</p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[1.02] tracking-[-.018em] text-ink">
            Plan a group trip, <em className="font-accent text-[1.08em] italic text-coral">live.</em>
          </h2>
          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-ink-soft">
            Invite friends by email as editors or viewers. Everyone sees the same map, and changes appear on every phone as they happen.
          </p>
          <p className="mt-4 max-w-lg text-[17px] leading-relaxed text-ink-soft">
            Planning together is free. Each person needs a free account, and adding new places needs VoyZa Pro for whoever adds them.
          </p>
          <div className="mt-8 max-w-lg border-t border-ink/15 pt-6">
            <p className="font-label text-[11px] uppercase tracking-[.2em] text-ink-mute">Or share it</p>
            <p className="mt-2 text-[17px] leading-relaxed text-ink-soft">
              As a link that opens without the app, a route card, or a QR code that gives anyone their own copy to reshape.
            </p>
          </div>
        </div>

        <div data-reveal style={{ '--d': '150ms' } as CSSProperties}>
          <div className="mx-auto grid max-w-[34rem] grid-cols-2 gap-3 sm:gap-6">
            <Phone who="Maya · editor" lag={0} adding />
            <Phone who="Kenji · editor" lag={450} />
          </div>
          <p className="mt-6 text-center font-hand text-[21px] leading-snug text-coral-ink">added on Maya’s phone, there on Kenji’s</p>
        </div>
      </div>
    </section>
  )
}
