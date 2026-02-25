import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-accent-50 to-teal-50 px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Text side ── */}
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-teal-600 bg-clip-text text-transparent leading-tight">
              Plan complex trips without the chaos
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto lg:mx-0 font-medium">
              VoyZa helps you visualize, optimize, and collaborate on trips with multiple locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#download"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-accent-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get the App
              </a>
              <a
                href="#solution"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl border-2 border-primary-600 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 transition-all shadow-md"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* ── Phone mockup side ── */}
          <div className="relative flex justify-center lg:justify-end items-center min-h-[600px]">

            {/* Ambient glow orbs behind phone */}
            <div
              className="absolute w-80 h-80 bg-primary-400 rounded-full opacity-[0.12] blur-[90px] pointer-events-none"
              style={{ top: '50%', left: '50%', transform: 'translate(-55%, -55%)' }}
            />
            <div
              className="absolute w-60 h-60 bg-accent-400 rounded-full opacity-[0.12] blur-[70px] pointer-events-none"
              style={{ top: '50%', left: '50%', transform: 'translate(-35%, -45%)' }}
            />

            {/* Floating badge — Route optimised */}
            <div className="absolute top-10 left-0 sm:-left-2 z-20 hero-badge-1">
              <div className="bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100/80 backdrop-blur-sm">
                <div className="w-9 h-9 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 leading-none mb-0.5">Route Optimized</div>
                  <div className="text-xs text-gray-400">5 stops · 12.3 km</div>
                </div>
              </div>
            </div>

            {/* Floating badge — Active trip */}
            <div className="absolute bottom-16 right-0 sm:-right-2 z-20 hero-badge-2">
              <div className="bg-white rounded-2xl shadow-xl px-4 py-3 border border-gray-100/80 backdrop-blur-sm">
                <div className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                  <span>🗺️</span> VN Trip Feb 1-8
                </div>
                <div className="text-xs text-gray-400 mt-1">Vietnam · Active</div>
              </div>
            </div>

            {/* Floating badge — Locations pill */}
            <div className="absolute top-[38%] right-0 sm:-right-4 z-20 hero-badge-3">
              <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl shadow-xl px-4 py-3">
                <div className="text-xs font-bold text-white leading-none mb-0.5">5 Locations</div>
                <div className="text-xs text-white/70">Saved to map</div>
              </div>
            </div>

            {/* ── Phone frame ── */}
            <div className="hero-phone-float relative z-10">
              {/* Outer shell — mimics aluminium rail */}
              <div
                className="hero-phone-glow relative w-[258px] sm:w-[276px] rounded-[46px] p-[3px]"
                style={{
                  background: 'linear-gradient(160deg, #3a3a3c 0%, #1c1c1e 40%, #0d0d0e 100%)',
                  boxShadow:
                    '0 30px 60px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 -1px 0 rgba(0,0,0,0.6)',
                }}
              >
                {/* Inner bezel / screen */}
                <div
                  className="w-full bg-black rounded-[43px] overflow-hidden relative hero-screen-shimmer"
                  style={{ aspectRatio: '1181 / 2560' }}
                >
                  {/* App screenshot */}
                  <Image
                    src="/app-screenshot.png"
                    alt="VoyZa Trip Planning App"
                    width={1181}
                    height={2560}
                    className="w-full h-auto object-cover"
                    priority
                  />

                  {/* Subtle glass sheen */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none rounded-[43px]" />
                </div>

                {/* Physical buttons */}
                {/* Power / side button (right) */}
                <div
                  className="absolute -right-[3.5px] rounded-r-sm"
                  style={{
                    top: '27%',
                    width: '3.5px',
                    height: '64px',
                    background: 'linear-gradient(180deg, #3a3a3c, #2a2a2c)',
                  }}
                />

                {/* Silent switch (left) */}
                <div
                  className="absolute -left-[3.5px] rounded-l-sm"
                  style={{
                    top: '17%',
                    width: '3.5px',
                    height: '20px',
                    background: 'linear-gradient(180deg, #3a3a3c, #2a2a2c)',
                  }}
                />

                {/* Volume up (left) */}
                <div
                  className="absolute -left-[3.5px] rounded-l-sm"
                  style={{
                    top: '23%',
                    width: '3.5px',
                    height: '44px',
                    background: 'linear-gradient(180deg, #3a3a3c, #2a2a2c)',
                  }}
                />

                {/* Volume down (left) */}
                <div
                  className="absolute -left-[3.5px] rounded-l-sm"
                  style={{
                    top: '31%',
                    width: '3.5px',
                    height: '44px',
                    background: 'linear-gradient(180deg, #3a3a3c, #2a2a2c)',
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
