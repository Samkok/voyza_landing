import Hero from '@/components/Hero'
import FeatureCard from '@/components/FeatureCard'
import PricingCard from '@/components/PricingCard'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-orange-50/30 to-pink-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Planning trips with many locations is chaotic
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              You know the struggle. Too many places to visit, no clear order, and trying to coordinate with others makes it even harder.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 text-center border-2 border-red-200 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Too many locations</h3>
              <p className="text-gray-700">Keeping track of dozens of places becomes overwhelming</p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 text-center border-2 border-orange-200 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">No clear order</h3>
              <p className="text-gray-700">Uncertain which places to visit first or how to sequence them</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 text-center border-2 border-yellow-200 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hard to visualize</h3>
              <p className="text-gray-700">Can't see how locations relate to each other geographically</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center border-2 border-purple-200 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Group planning is messy</h3>
              <p className="text-gray-700">Coordinating with others leads to confusion and missed details</p>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-teal-50 to-accent-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-600 via-teal-600 to-accent-600 bg-clip-text text-transparent mb-4">
              VoyZa organizes, visualizes, and optimizes trips effortlessly
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
              Everything you need to plan complex trips with confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              colorIndex={0}
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              }
              title="Plot all locations on a map"
              description="See all your destinations in one place with an interactive map view."
            />
            <FeatureCard
              colorIndex={1}
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              }
              title="Automatically optimize the route"
              description="Get the most efficient path between all your locations with one tap."
            />
            <FeatureCard
              colorIndex={2}
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              }
              title="Group nearby places visually"
              description="Automatically cluster locations that are close together for better organization."
            />
            <FeatureCard
              colorIndex={3}
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              }
              title="Switch trips on and off instantly"
              description="Toggle between multiple trips and focus on what matters right now."
            />
            <FeatureCard
              colorIndex={4}
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              }
              title="Work solo or with others"
              description="Plan trips by yourself or invite friends and family to collaborate."
            />
            <FeatureCard
              colorIndex={5}
              icon={
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              title="Real-time synchronization"
              description="See changes instantly when collaborating with others on shared trips."
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-accent-50/50 to-pink-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent-600 via-pink-600 to-primary-600 bg-clip-text text-transparent mb-6">
                Collaborate seamlessly with shared trips
              </h2>
              <p className="text-lg text-gray-700 mb-8 font-medium">
                Planning a trip with others doesn't have to be chaotic. VoyZa makes group planning simple and organized.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-4 border-2 border-primary-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Invite others</h3>
                    <p className="text-gray-700">
                      Send invitations to friends, family, or travel companions with a simple link.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gradient-to-r from-accent-50 to-pink-50 rounded-xl p-4 border-2 border-accent-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Read / write permissions</h3>
                    <p className="text-gray-700">
                      Control who can edit your trip. Give full access to co-planners or view-only access to others.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 bg-gradient-to-r from-teal-50 to-primary-50 rounded-xl p-4 border-2 border-teal-200">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Real-time updates</h3>
                    <p className="text-gray-700">
                      When one person plans, everyone stays in sync. See changes as they happen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 via-accent-100 to-pink-100 rounded-3xl p-8 shadow-2xl border-4 border-white">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg mb-4 border-2 border-primary-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                      A
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Alice</div>
                      <div className="text-sm text-primary-600 font-semibold">Owner</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    Added "Tokyo Tower" to the trip
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg mb-4 border-2 border-accent-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                      B
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Bob</div>
                      <div className="text-sm text-accent-600 font-semibold">Editor</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    Optimized route for 12 locations
                  </div>
                </div>
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border-2 border-teal-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                      C
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Carol</div>
                      <div className="text-sm text-teal-600 font-semibold">Viewer</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    Viewing trip updates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <CTA />
      <Footer />
    </main>
  )
}
