import type { Metadata } from 'next'
import InfoPage, { FaqSection, POSITIONING, styles as s, type Faq } from '@/components/InfoPage'

export const metadata: Metadata = {
  title: 'How VoyZa works: trip route planner for multi-stop days',
  description:
    'What VoyZa does, who it is for, how the route optimizer orders your saved places, what is free and what VoyZa Pro adds, and how it differs from map lists and itinerary apps.',
  alternates: { canonical: '/how-it-works' },
}

const faqs: Faq[] = [
  {
    q: 'What is VoyZa?',
    a: 'VoyZa is a trip route planner for iPhone and Android. You save the places you want to visit, and VoyZa reorders them into the shortest sensible route for each day, spreads them across the days of a multi-day trip, and follows along once you are there. It is made by an independent developer, not a travel agency, and it does not sell bookings.',
  },
  {
    q: 'Who is VoyZa for?',
    a: 'People visiting a city or region with more places on their list than fit in a day: city-break travellers, families, couples, backpackers, digital nomads, and groups planning a shared trip. It is for the ordering problem, not for finding flights or hotels.',
  },
  {
    q: 'How does the route optimization work?',
    a: 'Save three or more places, then tap Optimize. VoyZa works out the order that visits all of them with the least travel, using real routes rather than straight lines, and shows how much backtracking it removed. For multi-day trips, Auto-plan proposes which places go on which day; previewing the plan is free and applying it needs VoyZa Pro.',
  },
  {
    q: 'Is VoyZa free?',
    a: 'Yes to start. Without an account you can save up to 10 places, optimize the route, plan days, and share a route card. VoyZa Pro removes the 10-place cap, lets you apply Auto-plan proposals, and lets you copy more than one shared trip. Pro is sold as a weekly Trip Pass, monthly, yearly, or a one-time Lifetime purchase; prices and any free trial are shown in the app before you confirm.',
  },
  {
    q: 'Do I need an account?',
    a: 'No. VoyZa works without one, and your trips stay on your device. A free account syncs trips across devices and lets you invite friends to plan together.',
  },
  {
    q: 'Can I plan a trip with friends?',
    a: 'Yes, on the free plan. Invite people to a trip by email as editors or viewers; everyone sees the same map and changes appear live. You can also share a trip as a link that opens without the app, or as a code that lets someone copy the trip into their own VoyZa.',
  },
  {
    q: 'Does VoyZa work offline?',
    a: 'VoyZa needs a connection to search for places, optimize a route, show the map and sync with friends, because those use Google Maps data and VoyZa\u2019s servers. Trips planned without an account are stored on the device itself.',
  },
  {
    q: 'How is VoyZa different from a saved list in Google Maps?',
    a: 'A Google Maps list remembers places; it does not put them in order, split them across days, or tell you how much walking an order costs. VoyZa does those three things, and then tracks the day as you go: it prompts you to mark a stop done when you arrive and carries unvisited places forward to today.',
  },
  {
    q: 'How is VoyZa different from itinerary apps like Wanderlog or TripIt?',
    a: 'TripIt organizes bookings from confirmation emails. Wanderlog is a full itinerary tool with route optimization among many features. VoyZa is narrower on purpose: it is built around the order of your stops and the day itself, with opening hours on the pins, arrival prompts, carry-forward of what you skipped, and routing from wherever you are standing.',
  },
  {
    q: 'Which countries does VoyZa work in?',
    a: 'Anywhere Google Maps has places and routes. The app is in English; the store listing shows availability by country.',
  },
]

export default function HowItWorksPage() {
  return (
    <InfoPage
      title="How VoyZa works"
      lead={POSITIONING}
      updated="2026-10-26"
    >
      <section id="demo" className="mt-2 mb-4">
        <h2 className={s.h2}>Optimize, in 20 seconds</h2>
        <p className={s.p}>
          A day in Paris with 12 saved places: open the day, tap Optimize, choose where the day starts,
          and VoyZa orders the stops into one route. At the end, one leg is switched from driving to
          transit and the total updates.
        </p>
        <div className="flex justify-center">
          <video
            className="w-full max-w-[320px] rounded-[28px] shadow-xl border border-gray-200 bg-black"
            controls
            playsInline
            muted
            preload="metadata"
            poster="/optimize-demo-poster.jpg"
            width={720}
            height={1280}
            aria-label="VoyZa optimizing a day in Paris: twelve saved places reordered into one route"
          >
            <source src="/optimize-demo.mp4" type="video/mp4" />
            Your browser cannot play this video. <a href="/optimize-demo.mp4" className={s.a}>Download the clip</a>.
          </video>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoObject',
              name: 'VoyZa: optimizing a day in Paris in 20 seconds',
              description:
                'Twelve saved places in Paris reordered into one route with VoyZa\u2019s Optimize, then one leg switched to transit.',
              thumbnailUrl: ['https://voyza.xtremon.com/optimize-demo-poster.jpg'],
              contentUrl: 'https://voyza.xtremon.com/optimize-demo.mp4',
              uploadDate: '2026-10-26',
              duration: 'PT20S',
              width: 720,
              height: 1280,
            }),
          }}
        />
      </section>

      <h2 className={s.h2}>What VoyZa does</h2>
      <p className={s.p}>
        VoyZa is a trip route planner for iPhone and Android. You save the places you want to visit in a city
        or region, and VoyZa puts them in the order that visits all of them with the least walking or driving,
        splits them across the days of your trip, and then follows along while you travel. It replaces the
        part of trip planning that usually happens on a paper list and a lot of backtracking.
      </p>
      <p className={s.p}>
        It does not sell flights, hotels, or tours, and it does not try to be a guidebook. It takes the places
        you have already chosen, from any source, and makes the days work.
      </p>

      <h2 className={s.h2}>Who it is for</h2>
      <ul className={s.ul}>
        <li>City-break travellers with more places saved than fit in a day.</li>
        <li>Families and couples who want a day that holds together without arguments over the map.</li>
        <li>Groups planning one trip from several phones.</li>
        <li>Road-trippers and backpackers with many stops and limited time.</li>
      </ul>

      <h2 className={s.h2}>How it works, step by step</h2>
      <ol className={s.ol}>
        <li><span className={s.strong}>Save places.</span> Search by name, or long-press the map to see what is nearby. Give each place a tag: food, sights, culture, nature, shopping, nightlife, transport or stay. Pins take the tag's colour.</li>
        <li><span className={s.strong}>Set the days.</span> Add the dates of the trip, or leave them open and decide later. Arrival and departure times shape the first and last day.</li>
        <li><span className={s.strong}>Tap Optimize.</span> VoyZa reorders the day's places into the shortest route using real roads and paths, and shows how much backtracking it removed. Auto-plan goes further and proposes which places belong on which day.</li>
        <li><span className={s.strong}>Check the hours.</span> Pins turn red when a place is closed at your planned arrival and yellow when it is about to close, so you are not planning around locked doors.</li>
        <li><span className={s.strong}>Go.</span> On the day, VoyZa routes you from where you stand to the next stop, asks whether to mark a stop done when you arrive, and moves anything you did not reach to today.</li>
        <li><span className={s.strong}>Share.</span> Send a route card, a link that opens without the app, or a code that lets a friend copy the whole trip into their VoyZa.</li>
      </ol>

      <h2 className={s.h2}>What is free and what Pro adds</h2>
      <p className={s.p}>
        Free, with no account: 10 saved places, route optimization, day planning, opening hours, sharing, and
        one copy of a trip shared with you. A free account adds sync across devices and planning together with
        friends.
      </p>
      <p className={s.p}>
        VoyZa Pro removes the 10-place cap, lets you apply Auto-plan proposals across the whole trip, and lets
        you copy more than one shared trip. It is sold through the App Store and Google Play as a weekly Trip
        Pass, monthly, yearly, or a one-time Lifetime purchase. Prices and any free trial are shown in the app
        before you confirm, and subscriptions are cancelled through your store account.
      </p>

      <h2 className={s.h2}>How it compares</h2>
      <ul className={s.ul}>
        <li><span className={s.strong}>A saved list in Google Maps</span> remembers places but does not order them, split them across days, or track what you have done. VoyZa does, and it uses Google's map data to do it.</li>
        <li><span className={s.strong}>TripIt</span> organizes bookings from confirmation emails. VoyZa is about the places in between the bookings.</li>
        <li><span className={s.strong}>Wanderlog</span> is a broad itinerary app with route optimization among many features. VoyZa is narrower: the order of stops and the day itself, with arrival prompts, carry-forward and routing from where you are.</li>
      </ul>

      <h2 className={s.h2}>Privacy, in one paragraph</h2>
      <p className={s.p}>
        Trips and places stay on your device unless you create an account, in which case they sync through
        VoyZa's servers. Analytics and ads measurement are off until you allow them in the European Economic
        Area, the UK and Switzerland, and can be switched off anywhere in Settings. The full{' '}
        <a href="/privacy" className={s.a}>privacy policy</a> and <a href="/terms" className={s.a}>terms</a> are short and current.
      </p>

      <FaqSection faqs={faqs} />
    </InfoPage>
  )
}
