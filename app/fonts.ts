import {
  DM_Mono,
  Gloock,
  Instrument_Sans,
  Instrument_Serif,
  National_Park,
  Nothing_You_Could_Do,
} from 'next/font/google'

// The type of the "paper map" App Store set (tripflow-flutter
// marketing/tools/storeshots/poster.py), so the site and the store gallery
// read as one piece. Only the two faces the first screen needs are preloaded.
export const display = Gloock({ subsets: ['latin'], weight: '400', variable: '--font-display', display: 'swap' })
export const body = Instrument_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap' })
export const accent = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-accent',
  display: 'swap',
  preload: false,
})
export const label = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-label',
  display: 'swap',
  preload: false,
})
export const stamp = National_Park({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-stamp',
  display: 'swap',
  preload: false,
  // Next has no metrics for this face; it only sets the stamp's numerals.
  adjustFontFallback: false,
})
export const hand = Nothing_You_Could_Do({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-hand',
  display: 'swap',
  preload: false,
})

export const fontVariables = [display, body, accent, label, stamp, hand].map((f) => f.variable).join(' ')
