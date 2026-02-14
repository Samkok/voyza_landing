export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-accent-50 to-teal-50 px-4 sm:px-6 lg:px-8 pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-teal-600 bg-clip-text text-transparent leading-tight">
              Plan complex trips without the chaos
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 max-w-2xl mx-auto lg:mx-0 font-medium">
              VoyZa helps you visualize, optimize, and collaborate on trips with multiple locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#"
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
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm aspect-[9/19] bg-gradient-to-br from-primary-600 to-accent-600 rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform">
              <div className="w-full h-full bg-gray-900 rounded-[2.5rem] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 relative">
                    <svg
                      className="w-full h-full"
                      viewBox="0 0 400 800"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="400" height="800" fill="#111827" />
                      <circle cx="200" cy="400" r="150" fill="#3b82f6" opacity="0.2" />
                      <circle cx="150" cy="350" r="10" fill="#ef4444" />
                      <circle cx="250" cy="380" r="10" fill="#f97316" />
                      <circle cx="180" cy="450" r="10" fill="#10b981" />
                      <circle cx="220" cy="420" r="10" fill="#3b82f6" />
                      <circle cx="160" cy="480" r="10" fill="#a855f7" />
                      <circle cx="240" cy="460" r="10" fill="#ec4899" />
                      <path
                        d="M 150 350 L 250 380 L 180 450 L 220 420 L 160 480 L 240 460"
                        stroke="#3b82f6"
                        strokeWidth="3"
                        fill="none"
                        opacity="0.8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
