import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-4">
              VoyZa
            </h3>
            <p className="text-gray-400">
              VoyZa turns the places you save into the smartest route for each day of your trip.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Guides</h4>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="text-gray-400 hover:text-primary-400 transition-colors">How VoyZa works</Link></li>
              <li><Link href="/plan/multi-day-itinerary" className="text-gray-400 hover:text-primary-400 transition-colors">Plan a multi-day itinerary</Link></li>
              <li><Link href="/plan/multi-stop-road-trip" className="text-gray-400 hover:text-primary-400 transition-colors">Multi-stop road trip planner</Link></li>
              <li><Link href="/plan/group-trip" className="text-gray-400 hover:text-primary-400 transition-colors">Plan a group trip together</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hengsamkok76@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  hengsamkok76@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} VoyZa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
