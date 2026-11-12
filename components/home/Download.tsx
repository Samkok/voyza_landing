import FlightPath from './FlightPath'
import StoreBadges from './StoreBadges'

export default function Download() {
  return (
    <section id="download" className="px-5 py-24 sm:px-8 sm:py-32">
      <div
        data-reveal
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-paper-line bg-paper-hi px-6 pb-14 pt-10 text-center shadow-[0_30px_70px_-40px_rgba(19,34,56,.6)] sm:px-12"
      >
        <div className="relative mx-auto max-w-xl">
          <FlightPath />
          <p aria-hidden="true" className="absolute -right-2 top-[58%] rotate-[-6deg] font-hand text-[26px] text-coral-ink sm:right-0 sm:text-[30px]">
            bon voyage!
          </p>
        </div>
        <h2 className="mt-6 font-display text-[clamp(2.5rem,5.2vw,4.25rem)] leading-[1] tracking-[-.02em] text-ink">
          Your next trip, <em className="font-accent text-[1.08em] italic text-coral">in order.</em>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[18px] leading-relaxed text-ink-soft">
          Free to download on iPhone and Android. Start with the sample trip, no account needed.
        </p>
        <StoreBadges className="mt-9 justify-center" />
      </div>
    </section>
  )
}
