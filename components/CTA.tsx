export default function CTA() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 via-accent-600 to-teal-600 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.2),transparent_50%)]"></div>
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
          Start planning smarter trips today
        </h2>
        <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
          Join thousands of travelers who use VoyZa to plan their perfect trips.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.96-3.24-1.44-2.24-1.16-3.89-2.03-5.31-3.33-1.77-1.73-3.09-3.88-4.11-6.12C1.79 8.5 1.66 7.3 2.03 6.15c.28-.88 1.1-1.5 2.05-1.5.16 0 .32.02.48.06l3.24.74c.4.09.73.35.9.72l1.36 2.65c.17.33.15.73-.05 1.05l-1.9 2.87c-.12.18-.12.42 0 .6.12.18.33.3.56.3h2.9c.24 0 .44.12.56.3.12.18.12.42 0 .6l-1.9 2.87c-.2.3-.22.72-.05 1.05l1.36 2.65c.17.37.5.63.9.72l3.24.74c.16.04.32.06.48.06.95 0 1.77-.62 2.05-1.5.37-1.15.24-2.35-.29-3.48zM21.5 2.5L13 11l-2-2-1.5 1.5 3.5 3.5 10-10L21.5 2.5z" />
            </svg>
            App Store
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-50 transition-all shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L16.81,15.12L14.54,12.85L16.81,10.81L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            Google Play
          </a>
        </div>
      </div>
    </section>
  )
}
