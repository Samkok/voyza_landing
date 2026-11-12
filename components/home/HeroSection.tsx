import type { CSSProperties } from 'react'
import { POSITIONING } from '../site'
import StoreBadges from './StoreBadges'
import UntangleMap from './UntangleMap'

const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 sm:pt-32 lg:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1fr_1.12fr] lg:gap-12">
        <div>
          <p className="rise flex items-center gap-3 font-label text-[11px] uppercase tracking-[.2em] text-ink-soft" style={d(60)}>
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-coral shadow-[0_0_0_4px_rgba(228,85,63,.18)]" />
            Trip route planner · iPhone &amp; Android
          </p>
          <h1
            className="rise mt-6 font-display text-[clamp(3.4rem,8vw,6.6rem)] leading-[.92] tracking-[-.025em] text-ink"
            style={d(140)}
          >
            See more.
            <br />
            <em className="font-accent text-[1.12em] italic tracking-[-.01em] text-coral">Walk less.</em>
          </h1>
          <p className="rise mt-7 max-w-[34rem] text-[19px] leading-relaxed text-ink-soft" style={d(240)}>
            {POSITIONING} Save the places, tap Optimize, and go.
          </p>
          <StoreBadges className="rise mt-9" style={d(340)} />
          <div className="rise mt-8 flex flex-wrap items-center gap-x-7 gap-y-5" style={d(440)}>
            <a
              href="/how-it-works#demo"
              className="font-label text-[11px] uppercase tracking-[.18em] text-ink underline decoration-coral decoration-2 underline-offset-[7px] transition-colors hover:text-coral-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-coral"
            >
              Watch the 20-second demo <span aria-hidden="true">→</span>
            </a>
            <a
              href="https://www.producthunt.com/products/voyza?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-voyza"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 transition-opacity hover:opacity-100"
            >
              <img
                alt="VoyZa - Multi-stop route planning made simple | Product Hunt"
                width={250}
                height={54}
                className="h-11 w-auto"
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1085800&theme=light&t=1772102872849"
              />
            </a>
          </div>
        </div>

        <div className="rise lg:pl-4" style={d(260)}>
          <UntangleMap />
        </div>
      </div>
    </section>
  )
}
