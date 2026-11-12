'use client'

import { useEffect, useRef, useState } from 'react'

// The six App Store frames, stitched in upload order. They were designed as
// one strip: the dotted itinerary runs across all six and ends in a plane.
const FRAMES = [
  'Optimize your route in one tap',
  'Your day, stop by stop',
  'Know before a place closes',
  'Walk, bus or metro, priced',
  'Plan a group trip, live',
  'Share your trip with one scan',
]

// Large screens pan the strip as the page scrolls; small screens, and anyone
// who prefers less motion, swipe it, snapping frame by frame.
export default function GalleryPan() {
  const outer = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLDivElement>(null)
  const bar = useRef<HTMLSpanElement>(null)
  const [pan, setPan] = useState(false)

  useEffect(() => {
    const wide = window.matchMedia('(min-width: 1024px) and (min-height: 640px)')
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const decide = () => setPan(wide.matches && !motion.matches)
    decide()
    wide.addEventListener('change', decide)
    motion.addEventListener('change', decide)
    return () => {
      wide.removeEventListener('change', decide)
      motion.removeEventListener('change', decide)
    }
  }, [])

  useEffect(() => {
    const o = outer.current
    const t = track.current
    if (!o || !t) return
    if (!pan) {
      o.style.height = ''
      t.style.transform = ''
      return
    }
    let dist = 0
    let raf = 0
    const update = () => {
      raf = 0
      const p = dist > 0 ? Math.min(1, Math.max(0, -o.getBoundingClientRect().top / dist)) : 0
      t.style.transform = `translate3d(${(-p * dist).toFixed(1)}px,0,0)`
      if (bar.current) bar.current.style.transform = `scaleX(${p.toFixed(4)})`
    }
    const measure = () => {
      dist = Math.max(0, t.getBoundingClientRect().width - window.innerWidth)
      o.style.height = `${window.innerHeight + dist}px`
      update()
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', measure)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      cancelAnimationFrame(raf)
    }
  }, [pan])

  return (
    <section id="app" aria-labelledby="app-title">
      <div ref={outer} className="relative">
        <div className={pan ? 'sticky top-0 flex h-screen flex-col justify-center overflow-hidden pt-16' : 'py-24 sm:py-28'}>
          <header className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <p className="font-label text-[11px] uppercase tracking-[.2em] text-coral-ink">The app</p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
              <h2 id="app-title" className="font-display text-[clamp(2.25rem,4.4vw,3.5rem)] leading-[1.02] tracking-[-.018em] text-ink">
                Six screens, <em className="font-accent text-[1.08em] italic text-coral">one trip.</em>
              </h2>
              <p className="max-w-md text-[17px] leading-relaxed text-ink-soft">
                Every screen is VoyZa itself: real routes, real opening hours, a real metro fare. Follow the dotted line.
              </p>
            </div>
          </header>

          <div
            className={
              pan
                ? 'mt-8'
                : 'mt-10 snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
            }
          >
            <div ref={track} className="w-max px-[max(1.25rem,calc((100vw-72rem)/2+2rem))] will-change-transform">
              <div className="relative overflow-hidden rounded-[18px] border border-paper-line shadow-[0_30px_60px_-34px_rgba(19,34,56,.55)]">
                <img
                  src="/brand/app-gallery.webp"
                  width={4430}
                  height={1600}
                  loading="lazy"
                  decoding="async"
                  alt={`VoyZa's six App Store screens in a row: ${FRAMES.join('; ')}.`}
                  className={pan ? 'block h-[min(64vh,680px)] w-auto' : 'block h-[min(68vh,540px)] w-auto'}
                />
                {!pan &&
                  FRAMES.map((f, i) => (
                    <span
                      key={f}
                      aria-hidden="true"
                      className="absolute inset-y-0 snap-center"
                      style={{ left: `${(i * 100) / 6}%`, width: `${100 / 6}%` }}
                    />
                  ))}
              </div>
            </div>
          </div>

          <div className="mx-auto mt-7 w-full max-w-6xl px-5 sm:px-8">
            {pan ? (
              <div className="flex items-center gap-5 font-label text-[10.5px] uppercase tracking-[.18em] text-ink-mute">
                <span>01 One tap</span>
                <span className="relative h-[2px] flex-1 overflow-hidden rounded bg-ink/10">
                  <span ref={bar} className="absolute inset-0 origin-left scale-x-0 bg-coral" />
                </span>
                <span>06 Share</span>
              </div>
            ) : (
              <p className="font-hand text-[22px] text-coral-ink" aria-hidden="true">
                swipe along the trip →
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
