import { seeded } from './geometry'

// The "41 MIN SAVED" stamp from store frame 01, scaled from poster.py.
// Paper-coloured specks over the ink make it look pressed, not printed.
const specks = (() => {
  const r = seeded(41)
  return Array.from({ length: 130 }, () => {
    const a = r() * Math.PI * 2
    const d = 104 * Math.sqrt(r())
    return { x: 110 + d * Math.cos(a), y: 110 + d * Math.sin(a), s: 0.5 + r() * 1.7 }
  })
})()

export default function Stamp({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" className={className} aria-hidden="true">
      <defs>
        <path id="stamp-ring" d="M110,110 m-85,0 a85,85 0 1,1 170,0 a85,85 0 1,1 -170,0" />
      </defs>
      <circle cx="110" cy="110" r="108" fill="#FBF6EC" opacity="0.6" />
      <g fill="none" stroke="#E4553F">
        <circle cx="110" cy="110" r="104" strokeWidth="4.6" />
        <circle cx="110" cy="110" r="65.5" strokeWidth="2" />
      </g>
      <g fill="#E4553F">
        <text className="font-label" fontSize="15" fontWeight="500" letterSpacing="2.4">
          <textPath href="#stamp-ring" textLength="528" lengthAdjust="spacing">
            TOKYO · ASAKUSA · DAY 2 · SAME SIX STOPS ·
          </textPath>
        </text>
        <text x="110" y="122" textAnchor="middle" className="font-stamp" fontSize="60">
          41
        </text>
        <text x="110" y="145" textAnchor="middle" className="font-label" fontSize="12.5" fontWeight="500" letterSpacing="3">
          MIN SAVED
        </text>
      </g>
      <g fill="#FBF6EC" opacity="0.85">
        {specks.map((p, i) => (
          <circle key={i} cx={p.x.toFixed(1)} cy={p.y.toFixed(1)} r={p.s.toFixed(1)} />
        ))}
      </g>
    </svg>
  )
}
