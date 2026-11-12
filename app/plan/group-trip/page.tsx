import type { Metadata } from 'next'
import InfoPage, { FaqSection, InApp, RouteSteps, styles as s, type Faq, type Step } from '@/components/InfoPage'

export const metadata: Metadata = {
  title: 'Plan a group trip together on one map',
  description:
    'Plan a trip with friends without a 200-message chat: one shared map, one owner, everyone’s places in one plan, the route optimized once. Sharing and editing together are free in VoyZa.',
  alternates: { canonical: '/plan/group-trip' },
}

const faqs: Faq[] = [
  { q: 'Is planning together free in VoyZa?', a: 'Yes. Inviting people to a trip, editing together and live sync are on the free plan, and each person needs a free account. Adding new places needs VoyZa Pro for the person adding them, on any trip.' },
  { q: 'Can some people view without editing?', a: 'Yes. Invite each person as an editor or a viewer. The owner can change roles or remove people later.' },
  { q: 'What happens to places someone added if they leave the trip?', a: 'They stay in the trip and pass to the trip owner, so the plan does not lose stops when someone drops out.' },
  { q: 'Can I share the plan with someone who does not have the app?', a: 'Yes. Share the trip as a link that opens in any browser with the stops and the map, or as a route card image. Someone with the app can copy the whole trip into their own VoyZa with a code.' },
]

const steps: Step[] = [
  { title: 'One owner, one trip', body: <>Someone creates the trip and invites the rest. Decisions live in the trip, not in the thread.</> },
  { title: 'Everyone adds, nobody argues yet', body: <>Each person drops their places on the shared map with a tag. Seeing them together ends most arguments before they start.</> },
  { title: 'Group by day, then optimize', body: <>Places near each other go on the same day; the route for each day is ordered once, by the app, not by whoever shouts loudest.</> },
  { title: 'Give the plan to the people who are not in the app', body: <>A link anyone can open, or a route card in the chat, so grandparents and the friend who refuses to install things still know where to be.</> },
]

export default function Page() {
  return (
    <InfoPage
      kicker="Guide · Group trips"
      title="Plan a group trip"
      titleAccent="together on one map"
      lead="Group trips fail in the chat: forty suggestions, no map, and nobody sure what was decided. One shared trip fixes that."
      updated="2026-11-10"
    >
      <h2 className={s.h2}>The method</h2>
      <RouteSteps steps={steps} />

      <InApp>
        <p className={s.p}>
          Create the trip, invite people by email as editors or viewers, and plan on one map that
          updates live on every phone. Tap Optimize on each day to order everyone's places into the shortest
          route. Share the finished plan as a link that works without the app, or as a code that copies the trip
          into a friend's VoyZa. Planning together is on the free plan; adding new places needs VoyZa Pro for
          whoever adds them.
        </p>
      </InApp>

      <FaqSection faqs={faqs} />
    </InfoPage>
  )
}
