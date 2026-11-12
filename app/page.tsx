import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Download from '@/components/home/Download'
import GalleryPan from '@/components/home/GalleryPan'
import HeroSection from '@/components/home/HeroSection'
import OnTheDay from '@/components/home/OnTheDay'
import PlanTogether from '@/components/home/PlanTogether'
import Plans from '@/components/home/Plans'
import RevealObserver from '@/components/home/RevealObserver'
import SiteNav from '@/components/home/SiteNav'
import Steps from '@/components/home/Steps'

// The home page follows the "paper map" App Store set: paper for planning,
// a night map for the day itself, and one dotted itinerary throughout.
export default function Home() {
  return (
    <>
      <SiteNav />
      {/* One sheet of paper for the whole page, so the contour lines run unbroken between sections. */}
      <main className="paper grain font-body text-ink">
        <HeroSection />
        <Steps />
        <GalleryPan />
        <OnTheDay />
        <PlanTogether />
        <Plans />
        <FAQ />
        <Download />
      </main>
      <Footer />
      <RevealObserver />
    </>
  )
}
