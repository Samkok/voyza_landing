// Dotted routes, as the store set draws them: a curve through the stops,
// sampled into evenly spaced dots so a route can appear dot by dot.

export type Pt = [number, number]

/** One leg of a route: a quadratic (one control point) or cubic (two) curve. */
export type Leg = { from: Pt; to: Pt; c1: Pt; c2?: Pt }

function at(l: Leg, t: number): Pt {
  const u = 1 - t
  if (!l.c2) {
    return [
      u * u * l.from[0] + 2 * u * t * l.c1[0] + t * t * l.to[0],
      u * u * l.from[1] + 2 * u * t * l.c1[1] + t * t * l.to[1],
    ]
  }
  return [
    u * u * u * l.from[0] + 3 * u * u * t * l.c1[0] + 3 * u * t * t * l.c2[0] + t * t * t * l.to[0],
    u * u * u * l.from[1] + 3 * u * u * t * l.c1[1] + 3 * u * t * t * l.c2[1] + t * t * t * l.to[1],
  ]
}

/** The legs as one SVG path. */
export function pathOf(legs: Leg[]): string {
  return legs
    .map((l, i) => {
      const move = i === 0 ? `M${l.from[0]} ${l.from[1]} ` : ''
      return l.c2
        ? `${move}C${l.c1[0]} ${l.c1[1]} ${l.c2[0]} ${l.c2[1]} ${l.to[0]} ${l.to[1]}`
        : `${move}Q${l.c1[0]} ${l.c1[1]} ${l.to[0]} ${l.to[1]}`
    })
    .join(' ')
}

/**
 * Points every `spacing` units along the legs, in travel order. Points within
 * `clear` of any `avoid` point are dropped, so dots never sit under a pin.
 */
export function dotsAlong(legs: Leg[], spacing: number, avoid: Pt[] = [], clear = 0): Pt[] {
  const out: Pt[] = []
  let carried = spacing / 2
  for (const leg of legs) {
    let prev = at(leg, 0)
    for (let s = 1; s <= 240; s++) {
      const p = at(leg, s / 240)
      const step = Math.hypot(p[0] - prev[0], p[1] - prev[1])
      carried += step
      while (carried >= spacing) {
        carried -= spacing
        const t = 1 - carried / step
        const q: Pt = [prev[0] + (p[0] - prev[0]) * t, prev[1] + (p[1] - prev[1]) * t]
        if (avoid.every((a) => Math.hypot(a[0] - q[0], a[1] - q[1]) > clear)) {
          out.push([Math.round(q[0] * 10) / 10, Math.round(q[1] * 10) / 10])
        }
      }
      prev = p
    }
  }
  return out
}

/** Small deterministic random numbers, so server and browser draw the same specks. */
export function seeded(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
