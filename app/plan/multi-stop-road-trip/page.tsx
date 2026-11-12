import type { Metadata } from 'next'
import InfoPage, { FaqSection, InApp, RouteSteps, styles as s, type Faq, type Step } from '@/components/InfoPage'

export const metadata: Metadata = {
  title: 'Multi-stop road trip planner: put your stops in the best order',
  description:
    'Plan a road trip with many stops: fix the anchors, order the rest by route, respect opening hours and daylight, keep the plan alive on the road.',
  alternates: { canonical: '/plan/multi-stop-road-trip' },
}

const faqs: Faq[] = [
  { q: 'How many stops can VoyZa optimize in one day?', a: 'Any number you can realistically visit; the optimizer orders the whole day. Days with more than about 25 stops are better split across days, and VoyZa offers to do that with Auto-plan.' },
  { q: 'Does it use real driving routes or straight lines?', a: 'Real routes from Google Maps, so a stop across a river or on the far side of a one-way system is placed where the road actually takes you.' },
  { q: 'What about where we sleep?', a: 'Tag the overnight place as "stay" and give it the nights it covers; it shows on each of those days so the day\u2019s route is planned around it.' },
  { q: 'Is this for deliveries or sales visits too?', a: 'The ordering works the same for any list of addresses, and VoyZa is used that way, but it is built for travellers: opening hours, tags like food and sights, and sharing the trip with the people in the car.' },
]

const steps: Step[] = [
  { title: 'Fix the anchors', body: <>Where you sleep each night is fixed. Everything else is movable.</> },
  { title: 'Put every stop on the map', body: <>Viewpoints, towns, trailheads, the one bakery someone insisted on. Seeing them together is what makes the order obvious.</> },
  { title: 'Order each day as one loop or one line', body: <>Between the anchors, visit stops in the sequence that keeps the car moving forward. Detours of twenty minutes each add up to a lost afternoon.</> },
  { title: 'Check hours and daylight', body: <>A viewpoint after dark and a café on its closing day are both wasted stops.</> },
  { title: 'Expect to drop stops', body: <>Decide in advance which ones are optional, so the day does not fall apart when the first stop runs long.</> },
]

export default function Page() {
  return (
    <InfoPage
      kicker="Guide · Road trips"
      title="Multi-stop road trip planner:"
      titleAccent="put your stops in the best order"
      lead="Ten stops can be a great day or a wasted one. The difference is the order, and the order is the one thing most map apps will not do for you."
      updated="2026-11-10"
    >
      <h2 className={s.h2}>The method</h2>
      <RouteSteps steps={steps} />

      <InApp>
        <p className={s.p}>
          Save the stops, tag the overnight places as "stay" with the nights they cover, and tap Optimize on each
          day. VoyZa orders the day’s stops along real roads and shows how much driving it saved. Pins show whether a stop will be open when you get
          there. On the road, it routes from where you are to the next stop, asks whether to mark a stop done when
          you arrive, and carries skipped stops forward to today. Everyone in the car can have the same trip open,
          with changes appearing live.
        </p>
        <p className={s.p}>
          Creating trips and trying the sample trip are free with no account. Adding your own places needs
          VoyZa Pro, and the yearly plan starts with a free trial.
        </p>
      </InApp>

      <FaqSection faqs={faqs} />
    </InfoPage>
  )
}
