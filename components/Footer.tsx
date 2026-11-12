import Link from 'next/link'

const link = 'text-paper/75 transition-colors hover:text-paper-hi focus:outline-none focus-visible:text-paper-hi focus-visible:underline'
const heading = 'mb-4 font-label text-[11px] uppercase tracking-[.2em] text-signal'

export default function Footer() {
  return (
    <footer className="night-contours relative overflow-hidden bg-ink-night px-5 pb-10 pt-16 font-body text-paper-hi sm:px-8">
      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img src="/brand/voyza-icon.png" alt="" width={32} height={32} className="h-8 w-8 rounded-[9px]" />
              <span className="font-display text-[24px] leading-none">VoyZa</span>
            </Link>
            <p className="mt-4 max-w-xs leading-relaxed text-paper/70">
              VoyZa turns the places you save into the smartest route for each day of your trip.
            </p>
          </div>
          <div>
            <h4 className={heading}>Guides</h4>
            <ul className="space-y-2.5">
              <li><Link href="/how-it-works" className={link}>How VoyZa works</Link></li>
              <li><Link href="/plan/multi-day-itinerary" className={link}>Plan a multi-day itinerary</Link></li>
              <li><Link href="/plan/multi-stop-road-trip" className={link}>Multi-stop road trip planner</Link></li>
              <li><Link href="/plan/group-trip" className={link}>Plan a group trip together</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={heading}>Legal</h4>
            <ul className="space-y-2.5">
              <li><Link href="/terms" className={link}>Terms and Conditions</Link></li>
              <li><Link href="/privacy" className={link}>Privacy Policy</Link></li>
              <li><Link href="/terms#offered-by" className={link}>Legal notice</Link></li>
            </ul>
          </div>
          <div>
            <h4 className={heading}>Contact</h4>
            <ul className="space-y-2.5">
              <li><a href="mailto:hengsamkok76@gmail.com" className={link}>hengsamkok76@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-ink-rule pt-6 font-label text-[10.5px] uppercase tracking-[.16em] text-paper/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} VoyZa. All rights reserved.</p>
          <p>Made by an independent developer</p>
        </div>
      </div>
    </footer>
  )
}
