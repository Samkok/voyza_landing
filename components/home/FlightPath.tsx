'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { dotsAlong, pathOf, type Leg } from './geometry'

// The store set's itinerary line ends in a plane (frame 06). Here the plane
// flies it once when the section comes into view, laying the dots behind it.
const ARC: Leg[] = [{ from: [18, 128], c1: [150, 12], c2: [372, 2], to: [540, 60] }]
const DOTS = dotsAlong(ARC, 13)
const FLIGHT_MS = 2600
const PLANE = 'M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z'

function Plane() {
  return (
    <g transform="scale(1.35) rotate(90) translate(-12 -12)">
      <path d={PLANE} fill="#E4553F" />
    </g>
  )
}

export default function FlightPath() {
  const svg = useRef<SVGSVGElement>(null)
  const motion = useRef<SVGAnimateMotionElement>(null)
  const [flown, setFlown] = useState(false)

  useEffect(() => {
    const el = svg.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setFlown(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return
        setFlown(true)
        motion.current?.beginElement()
        io.disconnect()
      },
      { threshold: 0.6 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <svg ref={svg} viewBox="0 0 560 150" className="h-auto w-full overflow-visible" aria-hidden="true">
      <g fill="#E4553F">
        {DOTS.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="2.6"
            style={
              {
                opacity: flown ? 0.85 : 0,
                transition: `opacity .2s ease ${Math.round((i / DOTS.length) * FLIGHT_MS)}ms`,
              } as CSSProperties
            }
          />
        ))}
      </g>
      <circle cx="18" cy="128" r="6" fill="none" stroke="#E4553F" strokeWidth="2.5" />
      <g className="plane-anim" style={{ opacity: flown ? 1 : 0 }}>
        <Plane />
        <animateMotion ref={motion} dur={`${FLIGHT_MS}ms`} begin="indefinite" fill="freeze" rotate="auto" path={pathOf(ARC)} />
      </g>
      <g className="plane-static" transform="translate(540 60) rotate(20)">
        <Plane />
      </g>
    </svg>
  )
}
