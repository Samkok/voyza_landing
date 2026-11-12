import type { Metadata } from 'next'
import Link from 'next/link'
import { legal } from '@/components/LegalPage'
import { PageFrame, PageHeader } from '@/components/PageFrame'

export const metadata: Metadata = {
  title: 'Page not found · VoyZa',
}

const PAGES = [
  { href: '/', label: 'VoyZa home' },
  { href: '/how-it-works', label: 'How VoyZa works' },
  { href: '/plan/multi-day-itinerary', label: 'Plan a multi-day itinerary' },
  { href: '/plan/multi-stop-road-trip', label: 'Multi-stop road trip planner' },
  { href: '/plan/group-trip', label: 'Plan a group trip together' },
]

export default function NotFound() {
  return (
    <PageFrame>
      <article className="mx-auto max-w-[46rem] px-5 pb-28 pt-28 sm:px-8 sm:pt-36">
        <PageHeader
          kicker="Error 404"
          title="This page is"
          titleAccent="off the map."
          lead="The link may be old or mistyped. These pages are where they should be:"
        />
        <ul className={`${legal.ul} mt-10 text-[18px]`}>
          {PAGES.map((p) => (
            <li key={p.href}>
              <Link href={p.href} className={legal.a}>
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </PageFrame>
  )
}
