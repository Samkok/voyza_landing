import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-primary-50/30 to-accent-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold mb-8 transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border-2 border-gray-100">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 via-accent-600 to-teal-600 bg-clip-text text-transparent mb-4">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 mb-12 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Welcome to VoyZa ("App", "we", "our", or "us"). These Terms and Conditions ("Terms") govern your access to and use of the VoyZa mobile application and related services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By downloading, accessing, or using VoyZa, you agree to be bound by these Terms. If you do not agree, do not use the App.
            </p>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Eligibility</h2>
              <p className="text-gray-700 leading-relaxed">
                You must be at least 13 years old to use VoyZa. By using the App, you represent that you meet this requirement.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Accounts and Usage</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Anonymous Use</h3>
              <p className="text-gray-700 leading-relaxed">
                VoyZa allows you to use certain features without creating an account. In anonymous mode:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Data may be stored locally on your device.</li>
                <li>If you delete the app or change devices, locally stored data may be lost.</li>
                <li>Subscriptions purchased anonymously are tied to your App Store or Google Play account.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Registered Accounts</h3>
              <p className="text-gray-700 leading-relaxed">
                When you create an account:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li>You are responsible for all activities under your account.</li>
                <li>You must provide accurate and complete information.</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Trips, Locations, and Collaboration</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.1 Trip Ownership</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>The user who creates a trip is considered the trip owner.</li>
                <li>Trip owners may invite other users with read-only or write access.</li>
                <li>Trip owners control permissions and access.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.2 Collaborators</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Collaborators may view or edit trips based on permissions granted.</li>
                <li>Collaborators do not own the trip and cannot manage subscriptions or permissions unless explicitly allowed.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">3.3 Data Responsibility</h3>
              <p className="text-gray-700 leading-relaxed">
                You are responsible for the accuracy of locations, routes, and trip data you add. VoyZa does not guarantee correctness of routes, distances, or travel feasibility.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Subscriptions and Payments</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.1 Free and Paid Plans</h3>
              <p className="text-gray-700 leading-relaxed">
                VoyZa offers both free and paid subscription plans ("VoyZa Pro").
              </p>
              <p className="text-gray-700 leading-relaxed">
                Paid plans may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Unlimited locations</li>
                <li>Ad-free experience</li>
                <li>Offline access</li>
                <li>Route optimization</li>
                <li>Collaboration features</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Features may change over time.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.2 Billing</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Payments are processed through Apple App Store or Google Play.</li>
                <li>Subscriptions automatically renew unless canceled through your store account.</li>
                <li>VoyZa does not manage refunds directly.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">4.3 Restore Purchases</h3>
              <p className="text-gray-700 leading-relaxed">
                Users may restore purchases using the "Restore Purchases" option, subject to App Store or Google Play policies.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Ads</h2>
              <p className="text-gray-700 leading-relaxed">
                Free users may see advertisements. VoyZa is not responsible for the content of third-party ads or external links.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Acceptable Use</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use the App for illegal purposes</li>
                <li>Attempt to reverse engineer or exploit the App</li>
                <li>Interfere with the App's infrastructure or security</li>
                <li>Abuse collaboration features or other users</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to suspend or terminate access for violations.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                VoyZa and all related content, logos, designs, and software are owned by VoyZa or its licensors and are protected by intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not copy, modify, distribute, or create derivative works without permission.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">8. Data and Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Your use of VoyZa is also governed by our Privacy Policy, which explains how we collect, use, and store your data.
              </p>
              <p className="text-gray-700 leading-relaxed">
                VoyZa collects crash reports, diagnostic information, and app performance data to improve stability and performance. This information is shared with third-party providers such as Firebase or Sentry and does not include personal user data.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">9. Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                VoyZa is provided "as is" and "as available".
              </p>
              <p className="text-gray-700 leading-relaxed">
                We do not guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Accuracy of routes or travel data</li>
                <li>Availability of the App at all times</li>
                <li>That the App will meet your specific needs</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Use the App at your own risk.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">10. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                To the maximum extent permitted by law, VoyZa shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Loss of data</li>
                <li>Travel delays or disruptions</li>
                <li>Indirect or consequential damages</li>
              </ul>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">11. Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                You may stop using VoyZa at any time. We may suspend or terminate access if you violate these Terms.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">12. Changes to These Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms from time to time. Continued use of the App after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">13. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of your applicable jurisdiction, without regard to conflict of law principles.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">14. Contact</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about these Terms, contact us at:
              </p>
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border-2 border-primary-200 mt-4">
                <p className="text-gray-900 font-semibold mb-2">Email:</p>
                <a
                  href="mailto:hengsamkok76@gmail.com"
                  className="text-primary-600 hover:text-primary-700 font-medium underline"
                >
                  hengsamkok76@gmail.com
                </a>
                <p className="text-gray-900 font-semibold mt-4 mb-2">App Name:</p>
                <p className="text-gray-700">VoyZa</p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
