import Link from 'next/link'
import LegalPage, { legal } from '@/components/LegalPage'

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions" meta={<p>Last updated: November 14, 2026</p>}>
      <p className={legal.p}>
        Welcome to VoyZa ("App", "we", "our", or "us"). These Terms and Conditions ("Terms") govern your access to and use of the VoyZa mobile application and related services.
      </p>
      <p className={legal.p}>
        By downloading, accessing, or using VoyZa, you agree to be bound by these Terms. If you do not agree, do not use the App.
      </p>

      <section className="space-y-6">
        <h2 className={legal.h2}>1. Eligibility</h2>
        <p className={legal.p}>
          You must be at least 13 years old to use VoyZa — 16 in the EEA, the UK and Switzerland unless your country sets a lower age of digital consent (see section 14 of the Privacy Policy). By using the App, you represent that you meet this requirement.
        </p>
      </section>

      <section className="space-y-6">
        <h2 id="offered-by" className={legal.h2}>2. Who Offers VoyZa</h2>
        <p className={legal.p}>
          VoyZa is offered by Kok Heng, an individual developer (sole trader) based in Phnom Penh, Cambodia, trading as VoyZa. "VoyZa" and "Xtremon" are trading names; there is no separate registered company, so Kok Heng is the person you contract with when you use the App or buy VoyZa Pro.
        </p>
        <ul className={legal.ul}>
          <li>Trader: Kok Heng (sole trader, trading as VoyZa), Phnom Penh, Cambodia</li>
          <li>Email: <a href="mailto:hengsamkok76@gmail.com" className={legal.a}>hengsamkok76@gmail.com</a></li>
          {/* Postal address set 2026-11-14 (as on the Play account); keep it identical in the privacy policy, the in-app Terms and the EMAIL_POSTAL_ADDRESS secret. Public phone number still undecided. */}
          <li>Postal address: Home 6, Street P33, Chip Mong 598, Phnom Kha Pir, Chrang Chamreh Ti Pir, Phnom Penh 12000, Cambodia</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className={legal.h2}>3. Accounts and Usage</h2>
        
        <h3 className={legal.h3}>3.1 Anonymous Use</h3>
        <p className={legal.p}>
          VoyZa allows you to use certain features without creating an account. In anonymous mode:
        </p>
        <ul className={legal.ul}>
          <li>Data may be stored locally on your device.</li>
          <li>If you delete the app or change devices, locally stored data may be lost.</li>
          <li>Subscriptions purchased anonymously are tied to your App Store or Google Play account.</li>
        </ul>

        <h3 className={legal.h3}>3.2 Registered Accounts</h3>
        <p className={legal.p}>
          When you create an account:
        </p>
        <ul className={legal.ul}>
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>You are responsible for all activities under your account.</li>
          <li>You must provide accurate and complete information.</li>
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className={legal.h2}>4. Trips, Locations, and Collaboration</h2>
        
        <h3 className={legal.h3}>4.1 Trip Ownership</h3>
        <ul className={legal.ul}>
          <li>The user who creates a trip is considered the trip owner.</li>
          <li>Trip owners may invite other users with read-only or write access.</li>
          <li>Trip owners control permissions and access.</li>
        </ul>

        <h3 className={legal.h3}>4.2 Collaborators</h3>
        <ul className={legal.ul}>
          <li>Collaborators may view or edit trips based on permissions granted.</li>
          <li>Collaborators do not own the trip and cannot manage subscriptions or permissions unless explicitly allowed.</li>
        </ul>

        <h3 className={legal.h3}>4.3 Data Responsibility</h3>
        <p className={legal.p}>
          You are responsible for the accuracy of locations, routes, and trip data you add. VoyZa does not guarantee correctness of routes, distances, or travel feasibility.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className={legal.h2}>5. Subscriptions and Payments</h2>
        
        <h3 className={legal.h3}>5.1 Free and Paid Plans</h3>
        <p className={legal.p}>
          VoyZa offers a free tier and paid access to premium features ("VoyZa Pro"). VoyZa Pro is available as an auto-renewing subscription — weekly ("Trip Pass"), monthly, or yearly — or as a one-time Lifetime purchase. Prices, billing period, and any free-trial terms are shown at the point of purchase and may vary by region and over time. A free trial, where the store offers you one, is available on the yearly plan only (currently 7 days); the weekly, monthly and Lifetime options start with payment.
        </p>
        <p className={legal.p}>
          On the free plan you can create trips, explore the sample trip, view and edit trips you are invited to, optimize routes for the places already in a trip, share, and make one copy of a shared trip. Adding new places — to your own trip or to one shared with you — needs VoyZa Pro, as do copying a place to another day, duplicating a trip with its places, applying an Auto-plan proposal, and copying more than one shared trip. This follows the person who adds the place, not the owner of the trip. Places you have already saved stay in your trips. We may change what the free plan includes from time to time. Whether you qualify for the free trial is decided by the store; when a trial starts while you are signed in, we record a device identifier to detect repeated trials and referral abuse (see the Privacy Policy).
        </p>
        <p className={legal.p}>
          Paid plans may include:
        </p>
        <ul className={legal.ul}>
          <li>Adding places to your trips (search, nearby, or a pasted Maps link)</li>

          <li>Applying Auto-plan proposals to your trip</li>

          <li>Unlimited copies of shared trips (the free plan includes one)</li>
        </ul>
        <p className={legal.p}>
          Features may change over time.
        </p>

        <h3 className={legal.h3}>5.2 Billing</h3>
        <ul className={legal.ul}>
          <li>Payments are processed through Apple App Store or Google Play.</li>
          <li>Subscription plans automatically renew unless canceled through your store account; a Lifetime purchase is one-time and does not renew.</li>
          <li>Refunds go through the store's refund process; section 6 explains your legal rights.</li>
        </ul>

        <h3 className={legal.h3}>5.3 Restore Purchases</h3>
        <p className={legal.p}>
          Users may restore purchases using the "Restore Purchases" option, subject to App Store or Google Play policies.
        </p>


        <h3 className={legal.h3}>5.4 Referral program</h3>
        <p className={legal.p}>You can invite friends with your referral link or code. A person who signs up with your code, or who joins a trip you invited them to by email, may receive a promotional period of VoyZa Pro (currently 30 days); you receive a promotional period of your own (currently 30 days) when they go on to start a paid subscription — a one-time Lifetime purchase does not count. A code can be redeemed once per account, within 14 days of creating the account, and only with a verified email address. Rewards are capped at 12 rewarded referrals per 12-month period, are granted as promotional access with no cash value, and are not transferable; if you already have a paid subscription, your reward is applied when the current period ends. Self-referrals, fake or duplicate accounts, referring your own devices or accounts, and automated or deceptive activity are prohibited; we use limited signals, including a device identifier, to detect them, and we may change or end the program or withhold rewards obtained through prohibited activity. Bonus place slots granted under an earlier version of the program no longer have any effect, because adding places is now part of VoyZa Pro.</p>
      </section>

      <section className="space-y-6">
        <h2 className={legal.h2}>6. Refunds and Your Right of Withdrawal</h2>
        <p className={legal.p}>
          VoyZa Pro is bought through the Apple App Store or Google Play, which takes the payment and issues your receipt. If you live in the European Economic Area or the United Kingdom, you have a legal right to withdraw from a purchase within 14 days without giving a reason.
        </p>
        <ul className={legal.ul}>
          <li>A subscription starts as soon as you buy it, at your request, so if you withdraw within those 14 days you may be charged a proportionate amount for the days you had access.</li>
          <li>A Lifetime purchase is digital content delivered immediately: by buying it you ask for immediate delivery and acknowledge that the right of withdrawal ends once it is delivered.</li>
          <li>To withdraw or ask for a refund, use the store's refund request (the quickest route) or email us at <a href="mailto:hengsamkok76@gmail.com" className={legal.a}>hengsamkok76@gmail.com</a> with your store receipt. Where the law gives you a right to a refund we honour it.</li>
        </ul>
        <p className={legal.p}>
          Outside the EEA and the UK, refunds follow the store's refund policy and the law of your country.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className={legal.h2}>7. Analytics and Advertising</h2>
        <p className={legal.p}>
          We use Firebase Analytics and Google Analytics to understand how VoyZa is used so we can improve it. We also advertise VoyZa on other companies' platforms and measure whether that advertising works: where ads measurement is on, the App tells Google and Meta (Facebook and Instagram) when one of our ads leads to an install, a trial, or a subscription, using your device's advertising identifier where you have allowed it.
        </p>
        <p className={legal.p}>
          VoyZa does not display third-party advertising inside the App, and we never send advertisers your name, email address, trips, saved places, or location.
        </p>
        <p className={legal.p}>
          These are two separate choices, each with its own switch in the App at Settings → Preferences:
        </p>
        <ul className={legal.ul}>
          <li><span className={legal.strong}>Usage analytics</span> — how the App is used, so we can improve it.</li>
          <li><span className={legal.strong}>Ads measurement</span> — telling Google and Meta when one of our ads has worked.</li>
        </ul>
        <p className={legal.p}>
          For users in the EEA, the UK, and Switzerland, both stay off until you opt in. Elsewhere they are on by default — ads measurement only after the App has shown you a notice — and you can switch either off at any time. On iOS, the App also asks through Apple's tracking prompt before it uses your device's advertising identifier; if you allow it, that is "tracking" as Apple defines it, and you can change your answer in iOS Settings → Privacy &amp; Security → Tracking. On Android, you can reset or delete your Advertising ID in your device settings (Settings → Google → Ads).
        </p>
        <p className={legal.p}>
          Full details, including exactly what each company receives, are in our{' '}
          <Link href="/privacy" className={legal.a}>Privacy Policy</Link>.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className={legal.h2}>8. Acceptable Use</h2>
        <p className={legal.p}>
          You agree not to:
        </p>
        <ul className={legal.ul}>
          <li>Use the App for illegal purposes</li>
          <li>Attempt to reverse engineer or exploit the App</li>
          <li>Interfere with the App's infrastructure or security</li>
          <li>Abuse collaboration features or other users</li>
        </ul>
        <p className={legal.p}>
          We reserve the right to suspend or terminate access for violations.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className={legal.h2}>9. Intellectual Property</h2>
        <p className={legal.p}>
          VoyZa and all related content, logos, designs, and software are owned by VoyZa or its licensors and are protected by intellectual property laws.
        </p>
        <p className={legal.p}>
          You may not copy, modify, distribute, or create derivative works without permission.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className={legal.h2}>10. Data and Privacy</h2>
        <p className={legal.p}>
          Your use of VoyZa is also governed by our{' '}
          <Link href="/privacy" className={legal.a}>Privacy Policy</Link>, which explains what we collect, how we use and share it, the choices you have, and how to exercise your rights.
        </p>
        <p className={legal.p}>
          VoyZa collects performance and stability diagnostics to keep the App working well. This information is processed by Firebase (Google). The Privacy Policy lists every provider we rely on and what each one receives.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className={legal.h2}>11. Your Statutory Rights</h2>
        <p className={legal.p}>
          If you use VoyZa as a consumer, nothing in these Terms limits or excludes any right you have under the mandatory consumer protection law of your country of residence that cannot be excluded by agreement. In particular, if you live in the EEA or the UK, the App and VoyZa Pro must conform to the contract (the legal guarantee of conformity for digital content and digital services), and you are entitled to the remedies that law provides, such as having a fault fixed, a price reduction or ending the contract. Sections 12 and 13 apply only to the extent permitted by that law.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className={legal.h2}>12. Disclaimer</h2>
        <p className={legal.p}>
          Subject to section 11, VoyZa is provided "as is" and "as available".
        </p>
        <p className={legal.p}>
          We do not guarantee:
        </p>
        <ul className={legal.ul}>
          <li>Accuracy of routes or travel data</li>
          <li>Availability of the App at all times</li>
          <li>That the App will meet your specific needs</li>
        </ul>
        <p className={legal.p}>
          Use the App at your own risk.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className={legal.h2}>13. Limitation of Liability</h2>
        <p className={legal.p}>
          To the maximum extent permitted by law, VoyZa shall not be liable for:
        </p>
        <ul className={legal.ul}>
          <li>Loss of data</li>
          <li>Travel delays or disruptions</li>
          <li>Indirect or consequential damages</li>
        </ul>
        <p className={legal.p}>
          Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, for fraud or fraudulent misrepresentation, or for anything else that cannot be excluded or limited by law.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className={legal.h2}>14. Termination</h2>
        <p className={legal.p}>
          You may stop using VoyZa at any time. We may suspend or terminate access if you violate these Terms.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className={legal.h2}>15. Changes to These Terms</h2>
        <p className={legal.p}>
          We may update these Terms from time to time. Continued use of the App after changes constitutes acceptance of the updated Terms.
        </p>
        <p className={legal.p}>
          If a change materially affects a paid VoyZa Pro plan, we will tell you at least 30 days before it takes effect, in the App or by email, and you may cancel your subscription before then; if you do, the change does not apply to the period you have already paid for.
        </p>
        <p className={legal.p}>
          This does not apply to data processing that needs your consent. Where our Privacy Policy says we will ask for your consent — for example, before new analytics or advertising measurement — we ask for it separately, and continued use of the App is never treated as that consent.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className={legal.h2}>16. Governing Law and Complaints</h2>
        <p className={legal.p}>
          These Terms are governed by the laws of Cambodia, except that if you are a consumer you also benefit from the mandatory consumer protection law of the country where you live, and nothing here takes away your right to bring a claim in your local courts.
        </p>
        <p className={legal.p}>
          If something goes wrong, email us first at <a href="mailto:hengsamkok76@gmail.com" className={legal.a}>hengsamkok76@gmail.com</a>; we aim to reply within 14 days. If you live in the EEA or the UK and we cannot resolve a complaint, you may be able to refer it to an approved alternative dispute resolution body in your country.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className={legal.h2}>17. Contact</h2>
        <p className={legal.p}>
          If you have questions about these Terms, contact us at:
        </p>
        <div className={legal.card}>
          <p className={legal.label}>Email:</p>
          <a
            href="mailto:hengsamkok76@gmail.com"
            className={legal.a}
          >
            hengsamkok76@gmail.com
          </a>
          <p className={`${legal.label} mt-4`}>Offered by:</p>
          <p className={legal.value}>Kok Heng (sole trader, trading as VoyZa), Home 6, Street P33, Chip Mong 598, Phnom Kha Pir, Chrang Chamreh Ti Pir, Phnom Penh 12000, Cambodia</p>
          <p className={`${legal.label} mt-4`}>App Name:</p>
          <p className={legal.value}>VoyZa</p>
        </div>
      </section>
    </LegalPage>
  )
}
