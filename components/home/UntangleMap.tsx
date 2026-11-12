'use client'

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import { dotsAlong, pathOf, type Leg, type Pt } from './geometry'
import Stamp from './Stamp'

// The six stops of store frame 01 (tripflow-flutter marketing/content-assets/
// app-store-screenshots/NOTES.md): Asakusa, Tokyo, day 2. A drawn map, but the
// stops sit where the real places are relative to each other and the river.
// Figures are the store set's: optimized, 6 stops, 3.1 km, 45 min on foot,
// "~41m" saved by the app's own count.
type Id = 'skytree' | 'sensoji' | 'kappabashi' | 'solamachi' | 'nakamise' | 'sumida'

const PLACES: Record<Id, { at: Pt; name: string[]; label: Pt }> = {
  kappabashi: { at: [96, 226], name: ['Kappabashi', 'Kitchen Town'], label: [96, 252] },
  sensoji: { at: [262, 150], name: ['Senso-ji'], label: [262, 128] },
  nakamise: { at: [250, 262], name: ['Nakamise Street'], label: [250, 290] },
  sumida: { at: [384, 118], name: ['Sumida Park'], label: [384, 96] },
  solamachi: { at: [506, 346], name: ['Tokyo Solamachi'], label: [500, 324] },
  skytree: { at: [562, 292], name: ['Tokyo Skytree'], label: [562, 270] },
}

// In the order they were saved: back and forth across the river.
const SAVED: Id[] = ['skytree', 'sensoji', 'kappabashi', 'solamachi', 'nakamise', 'sumida']
const SAVED_BENDS: Pt[][] = [[[420, 262]], [[178, 160]], [[300, 410]], [[390, 230]], [[334, 214]]]

// After Optimize: start at Senso-ji, one loop, cross the river once, by the bridge.
const OPTIMIZED: Id[] = ['sensoji', 'nakamise', 'kappabashi', 'sumida', 'solamachi', 'skytree']
const OPTIMIZED_BENDS: Pt[][] = [[[276, 206]], [[166, 280]], [[212, 52]], [[446, 178], [528, 236]], [[548, 336]]]

// One control point bends a leg; two let it take a bridge across the river.
const legsOf = (order: Id[], bends: Pt[][]): Leg[] =>
  bends.map(([c1, c2], i) => ({ from: PLACES[order[i]].at, to: PLACES[order[i + 1]].at, c1, c2 }))

const PINS = Object.values(PLACES).map((p) => p.at)
const SAVED_DOTS = dotsAlong(legsOf(SAVED, SAVED_BENDS), 11, PINS, 15)
const OPTIMIZED_DOTS = dotsAlong(legsOf(OPTIMIZED, OPTIMIZED_BENDS), 11, PINS, 15)
const RIVER = 'M488 -12 C466 104 440 196 420 272 S374 404 352 452'

/** What the map is showing, as a one-line caption. */
function Status() {
  return (
    <>
      <span className="ut-st-saved text-ink-soft">In the order you saved them</span>
      <span className="ut-st-opt absolute left-0 top-0 whitespace-nowrap text-coral-ink">45 min · 3.1 km on foot</span>
    </>
  )
}

type Phase = 'idle' | 'saved' | 'tap' | 'optimized' | 'stamped' | 'reset'

// One loop, in milliseconds from its start.
const SCRIPT: [Phase, number][] = [
  ['saved', 600],
  ['tap', 4400],
  ['optimized', 4950],
  ['stamped', 8000],
  ['reset', 12800],
  ['idle', 13400],
]
const LOOP = 13400
const TAP_AT = 4400

export default function UntangleMap() {
  const [phase, setPhase] = useState<Phase>('idle')
  const root = useRef<HTMLElement>(null)
  const timers = useRef<number[]>([])
  const reduced = useRef(false)

  const stop = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t))
    timers.current = []
  }, [])

  // Plays the loop from `offset` ms in, then keeps looping.
  const playFrom = useCallback(
    (offset: number) => {
      stop()
      for (const [p, t] of SCRIPT) {
        if (t >= offset) timers.current.push(window.setTimeout(() => setPhase(p), t - offset))
      }
      timers.current.push(window.setTimeout(() => playFrom(0), LOOP - offset))
    },
    [stop],
  )

  useEffect(() => {
    const el = root.current
    if (!el) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let visible = false
    let playing = false

    const sync = () => {
      reduced.current = motion.matches
      if (motion.matches) {
        stop()
        playing = false
        setPhase('stamped')
      } else if (visible && !document.hidden) {
        if (!playing) {
          playing = true
          setPhase('idle')
          playFrom(0)
        }
      } else if (playing) {
        // Off screen or in a background tab: stop, and start over on return.
        playing = false
        stop()
      }
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        sync()
      },
      { threshold: 0.2 },
    )
    io.observe(el)
    document.addEventListener('visibilitychange', sync)
    motion.addEventListener('change', sync)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', sync)
      motion.removeEventListener('change', sync)
      stop()
    }
  }, [playFrom, stop])

  const optimized = phase === 'optimized' || phase === 'stamped'

  // The button works: Optimize now, or start the comparison again.
  const press = () => {
    if (reduced.current) {
      setPhase(optimized ? 'saved' : 'stamped')
      return
    }
    if (optimized) {
      setPhase('idle')
      playFrom(0)
    } else {
      setPhase('tap')
      playFrom(TAP_AT)
    }
  }

  return (
    <figure ref={root} className="ut relative" data-phase={phase}>
      <div className="ut-card relative overflow-hidden rounded-[22px] border border-paper-line bg-paper-hi shadow-[0_1px_0_#fff_inset,0_30px_60px_-30px_rgba(19,34,56,.45),0_8px_20px_-12px_rgba(19,34,56,.25)]">
        {/* Fold creases of a paper map. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-1/3 w-px bg-gradient-to-b from-transparent via-ink/[.07] to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-2/3 w-px bg-gradient-to-b from-transparent via-ink/[.07] to-transparent" />

        <div className="pointer-events-none absolute left-4 top-4 z-10 font-label text-[10px] uppercase leading-none tracking-[.18em] sm:left-5 sm:top-5 sm:text-[11px]">
          <span className="rounded-full bg-ink px-2.5 py-1.5 text-paper-hi">Day 2 · 6 stops</span>
          <span aria-hidden="true" className="relative ml-2 hidden align-middle sm:inline-block">
            <Status />
          </span>
        </div>

        <svg viewBox="0 0 640 440" className="relative block h-auto w-full" role="img" aria-labelledby="ut-title ut-desc">
          <title id="ut-title">The same six stops in Asakusa, Tokyo, before and after Optimize</title>
          <desc id="ut-desc">
            In the order they were saved, the walking route crosses the Sumida River back and forth. After Optimize it starts at
            Senso-ji and makes one loop: 45 minutes and 3.1 kilometres on foot, about 41 minutes less walking.
          </desc>

          {/* The map */}
          <rect x="224" y="114" width="78" height="62" rx="14" fill="#DEDFC1" opacity=".7" />
          <path d="M446 22 C432 96 414 156 400 214" stroke="#DEDFC1" strokeWidth="26" strokeLinecap="round" fill="none" opacity=".8" />
          <g stroke="#E2D5BE" strokeLinecap="round" fill="none">
            <g strokeWidth="4">
              <path d="M0 300 L404 290" />
              <path d="M200 0 L206 440" />
              <path d="M118 0 L110 440" />
              <path d="M0 190 L196 176" />
              <path d="M206 96 L330 64 L430 40" />
              <path d="M300 300 L318 440" />
              <path d="M452 252 L640 236" />
              <path d="M520 92 L548 440" />
              <path d="M440 396 L640 380" />
              <path d="M300 0 L312 120" />
            </g>
            <g strokeWidth="2">
              <path d="M0 360 L200 350" />
              <path d="M206 220 L300 214" />
              <path d="M566 0 L596 200" />
              <path d="M0 80 L112 70" />
            </g>
          </g>
          <path id="ut-river" d={RIVER} stroke="#C6D7D5" strokeWidth="30" strokeLinecap="round" fill="none" />
          <g stroke="#FBF6EC" strokeWidth="8" strokeLinecap="round">
            <path d="M398 293 L446 283" />
            <path d="M426 188 L470 178" />
          </g>
          <text className="font-label" fontSize="9" letterSpacing="3.5" fill="#6E8C8A">
            <textPath href="#ut-river" startOffset="30%">SUMIDA RIVER</textPath>
          </text>
          <g className="font-label" fontSize="10" letterSpacing="4" fill="#132238" opacity=".32">
            <text x="36" y="414">TAITO</text>
            <text x="606" y="196" textAnchor="end">SUMIDA</text>
          </g>

          {/* As saved: grey, tangled */}
          <g fill="#132238" fillOpacity=".5">
            {SAVED_DOTS.map(([x, y], i) => (
              <circle key={i} className="ut-dot ut-saved" cx={x} cy={y} r="2.3" style={{ '--i': i } as CSSProperties} />
            ))}
          </g>

          {/* Optimized: coral, one loop */}
          <g fill="#E4553F">
            {OPTIMIZED_DOTS.map(([x, y], i) => (
              <circle key={i} className="ut-dot ut-opt" cx={x} cy={y} r="2.8" style={{ '--i': i } as CSSProperties} />
            ))}
          </g>

          {/* Pins: numbered in the saved order, renumbered after Optimize */}
          {(Object.keys(PLACES) as Id[]).map((id, p) => {
            const { at, name, label } = PLACES[id]
            const savedNo = SAVED.indexOf(id) + 1
            const optNo = OPTIMIZED.indexOf(id)
            return (
              <g key={id}>
                <text
                  className="font-body"
                  fontSize="12.5"
                  fontWeight="600"
                  textAnchor="middle"
                  fill="#132238"
                  stroke="#FBF6EC"
                  strokeWidth="4"
                  paintOrder="stroke"
                  strokeLinejoin="round"
                >
                  {name.map((line, k) => (
                    <tspan key={k} x={label[0]} y={label[1] + k * 14}>
                      {line}
                    </tspan>
                  ))}
                </text>
                {/* Position on the outer group: the drop animation's CSS transform would override an SVG transform on the same element. */}
                <g transform={`translate(${at[0]} ${at[1]})`}>
                <g className="ut-pin" style={{ '--p': p } as CSSProperties}>
                  <g className="ut-n-saved">
                    <circle r="12" fill="#E4553F" stroke="#FBF6EC" strokeWidth="3" />
                    <text y="4.5" textAnchor="middle" className="font-label" fontSize="12.5" fontWeight="500" fill="#fff">
                      {savedNo}
                    </text>
                  </g>
                  <g className="ut-n-opt">
                    {optNo === 0 ? (
                      <>
                        <circle r="12" fill="#132238" stroke="#FBF6EC" strokeWidth="3" />
                        <path d="M-3.5 -5.5 L5.5 0 L-3.5 5.5 Z" fill="#fff" />
                        <text x="-20" y="4" textAnchor="end" className="font-label" fontSize="9" fontWeight="500" letterSpacing="2" fill="#B83A26">
                          START
                        </text>
                      </>
                    ) : (
                      <>
                        <circle r="12" fill="#E4553F" stroke="#FBF6EC" strokeWidth="3" />
                        <text y="4.5" textAnchor="middle" className="font-label" fontSize="12.5" fontWeight="500" fill="#fff">
                          {optNo}
                        </text>
                      </>
                    )}
                  </g>
                </g>
                </g>
              </g>
            )
          })}
        </svg>

        <div className="flex items-center justify-between gap-3 border-t border-paper-line px-3 py-2.5 sm:absolute sm:bottom-5 sm:right-5 sm:z-10 sm:border-0 sm:p-0">
        <span aria-hidden="true" className="relative font-label text-[10px] uppercase leading-none tracking-[.16em] sm:hidden">
          <Status />
        </span>
        <button
          type="button"
          onClick={press}
          className="ut-btn relative inline-flex shrink-0 items-center gap-2 rounded-full bg-signal px-4 py-2.5 font-body text-sm font-semibold text-ink shadow-[0_6px_16px_-6px_rgba(0,170,210,.7)] focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper-hi"
          aria-label={optimized ? 'Show the order they were saved in again' : 'Optimize this day'}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 4v16M7 20l-3-3M7 20l3-3M17 20V4M17 4l-3 3M17 4l3 3" />
          </svg>
          <span className="relative">
            <span className="ut-btn-a">Optimize</span>
            <span className="ut-btn-b absolute left-0 top-0 whitespace-nowrap">Optimized</span>
          </span>
          <span aria-hidden="true" className="ut-tap absolute left-1/2 top-1/2 -ml-6 -mt-6 h-12 w-12 rounded-full bg-ink/25 ring-2 ring-white" />
        </button>
        </div>
      </div>

      <div aria-hidden="true" className="ut-stamp absolute -right-3 -top-10 w-[118px] sm:-right-6 sm:-top-12 sm:w-[150px]">
        <Stamp className="h-auto w-full drop-shadow-[0_2px_0_rgba(228,85,63,.15)]" />
      </div>

      <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 font-label text-[10.5px] uppercase tracking-[.16em] text-ink-soft">
        <span>Tokyo, day 2: the same six stops, before and after Optimize</span>
        <span className="text-ink-mute">35.7148° N · 139.7967° E</span>
      </figcaption>
    </figure>
  )
}
