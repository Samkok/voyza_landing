import type { Metadata } from 'next'
import InfoPage, { FaqSection, styles as s, type Faq } from '@/components/InfoPage'

export const metadata: Metadata = {
  title: 'Plan a multi-day city itinerary in the right order',
  description:
    'Turn a long list of places into days that make sense: group by area, order each day as a route, check opening hours, keep a buffer. By hand or with VoyZa.',
  alternates: { canonical: '/plan/multi-day-itinerary' },
}

const faqs: Faq[] = [
  { q: 'How many places fit in one day of a city trip?', a: 'Four to six stops with time to enjoy them is a comfortable day in most cities; eight is a full one. Markets, museums and viewpoints take longer than cafés and landmarks, so count by time, not by pins.' },
  { q: 'Should I plan by day or by area?', a: 'By area first, then by day. Places that are near each other belong on the same day; ordering within the day is what cuts the backtracking. VoyZa’s Auto-plan does the grouping for you, and Optimize does the ordering.' },
  { q: 'What if I don’t know my dates yet?', a: 'You can plan the days without dates and attach the dates later; the plan shifts to the real calendar when you do. VoyZa supports trips with open dates for exactly this.' },
  { q: 'Can I plan a 3-day Tokyo or Lisbon itinerary with VoyZa?', a: 'Yes. Save the places, set three days, let Auto-plan propose a day for each place, then tap Optimize on each day. Opening hours are shown on the pins so you can swap a closed museum for a park.' },
]

export default function Page() {
  return (
    <InfoPage
      title="Plan a multi-day city itinerary in the right order"
      lead="The hard part of a 3-day or 5-day trip is not finding places. It is deciding which day each one belongs on and in what order, so you are not crossing the city twice."
      updated="2026-10-26"
    >
      <h2 className={s.h2}>The method, whether or not you use an app</h2>
      <ol className={s.ol}>
        <li><span className={s.strong}>Collect everything first.</span> Put every place you are considering on one map before you decide anything. Lists hide distances; maps show them.</li>
        <li><span className={s.strong}>Group by area, one area per day.</span> Clusters on the map become days. A place that sits between two clusters goes on whichever day has room.</li>
        <li><span className={s.strong}>Order each day as a route.</span> Start near where you sleep or arrive, finish near dinner, and visit the stops in a loop rather than out-and-back. This is where most backtracking is lost or saved.</li>
        <li><span className={s.strong}>Check opening hours against the order.</span> Markets in the morning, viewpoints near sunset, museums on the day they are open. A good order with one closed door in the middle is a bad day.</li>
        <li><span className={s.strong}>Leave a buffer.</span> One fewer stop per day than you think you can do. Anything missed moves to the next day.</li>
      </ol>

      <h2 className={s.h2}>How VoyZa does it</h2>
      <p className={s.p}>
        Save the places by search or by long-pressing the map, give the trip its days, and let Auto-plan propose
        which places go on which day. Then tap Optimize on each day: VoyZa reorders the stops into the shortest
        route on real streets and tells you how much backtracking it removed. Pins show opening hours for your
        planned arrival. On the trip, stops you did not reach are carried forward to today, so the plan survives
        a slow morning.
      </p>
      <p className={s.p}>
        The first 10 places are free with no account. Applying an Auto-plan proposal and saving more than 10
        places need VoyZa Pro, shown in the app with current prices.
      </p>

      <h2 className={s.h2}>Common mistakes</h2>
      <ul className={s.ul}>
        <li>Planning by "famous first" instead of by area, which sends you across the city and back every day.</li>
        <li>Forgetting that the first and last day are short: arrival and departure times eat half a day each.</li>
        <li>Booking timed entries before the order is settled, then bending the whole day around one ticket.</li>
      </ul>

      <FaqSection faqs={faqs} />
    </InfoPage>
  )
}
