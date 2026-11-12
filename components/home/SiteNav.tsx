'use client'

import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#app', label: 'The app' },
  { href: '#together', label: 'Together' },
  { href: '#plans', label: 'Free & Pro' },
  { href: '#faq', label: 'FAQ' },
]

/** `base` is '' on the home page (in-page anchors) and '/' elsewhere, so the links lead back to home. */
export default function SiteNav({ base = '' }: { base?: string }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled ? 'bg-paper/90 shadow-[0_1px_0_rgba(19,34,56,.1)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a href={base || '#top'} className="flex items-center gap-2.5 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-coral">
          <img src="/brand/voyza-icon.png" alt="" width={32} height={32} className="h-8 w-8 rounded-[9px] shadow-sm" />
          <span className="font-display text-[22px] leading-none text-ink">VoyZa</span>
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={base + l.href}
                className="font-label text-[11px] uppercase tracking-[.16em] text-ink-soft underline-offset-[7px] transition-colors hover:text-ink hover:underline hover:decoration-coral hover:decoration-2 focus:outline-none focus-visible:text-ink focus-visible:underline focus-visible:decoration-coral"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#download"
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper-hi transition hover:bg-[#1d3150] focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        >
          Get the app
        </a>
      </nav>
    </header>
  )
}
