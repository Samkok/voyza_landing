import Link from 'next/link'
import type { ReactNode } from 'react'

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-600 hover:text-primary-700 underline break-words"
    >
      {children}
    </a>
  )
}

function Mail({ children = 'hengsamkok76@gmail.com' }: { children?: ReactNode }) {
  return (
    <a
      href="mailto:hengsamkok76@gmail.com"
      className="text-primary-600 hover:text-primary-700 underline"
    >
      {children}
    </a>
  )
}

function Code({ children }: { children: ReactNode }) {
  return (
    <code className="px-1 py-0.5 bg-gray-100 rounded text-[0.85em] font-mono text-gray-800">
      {children}
    </code>
  )
}

export default function PrivacyPage() {
  const h2 = 'text-2xl font-bold text-gray-900 mt-12 mb-4'
  const h3 = 'text-xl font-semibold text-gray-900 mt-6 mb-3'
  const p = 'text-gray-700 leading-relaxed'
  const ul = 'list-disc pl-6 space-y-2 text-gray-700'
  const strong = 'font-semibold text-gray-900'
  const tableWrap = 'overflow-x-auto my-6 rounded-xl border border-gray-200'
  const table = 'min-w-full text-sm text-gray-700'
  const thead = 'bg-gray-50'
  const th = 'px-4 py-3 text-left font-semibold text-gray-900 align-top'
  const td = 'px-4 py-3 align-top border-t border-gray-200'

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
            VoyZa Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg">
            <span className="font-semibold">Last updated:</span> July 3, 2026
          </p>
          <p className="text-gray-600 mb-12 text-lg">
            <span className="font-semibold">Effective date:</span> July 3, 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className={p}>
              This Privacy Policy explains how VoyZa ("VoyZa," "we," "us," or "our") collects, uses, shares, and protects your personal information when you use the VoyZa mobile application on iOS and Android (the "App"). VoyZa is a trip planner and multi-stop route optimizer that lets you save places, build itineraries, optimize routes, and collaborate on trips with people you invite.
            </p>
            <p className={p}>
              Please read this policy carefully. By using the App, you agree to the practices described here. If you do not agree, please do not use the App.
            </p>

            {/* 1 */}
            <section className="space-y-6">
              <h2 className={h2}>1. Who We Are and How to Contact Us</h2>
              <p className={p}>
                VoyZa is operated by <strong className={strong}>Heng Kok</strong>, an individual developer (sole trader) based in Phnom Penh, Cambodia, who is the <strong className={strong}>data controller</strong> for the personal information described in this policy. "VoyZa" and "Xtremon" are brand/trading names used by the operator; there is currently no separate registered company, so the responsible legal person is the individual named here.
              </p>
              <ul className={ul}>
                <li><strong className={strong}>Controller:</strong> Heng Kok (individual / sole trader, trading as VoyZa)</li>
                {/* <li><strong className={strong}>Business address:</strong> Chipmong 598, Street P33, Home 6, Phnom Penh, Cambodia</li> */}
                <li><strong className={strong}>Country of establishment:</strong> Cambodia</li>
                <li><strong className={strong}>App:</strong> VoyZa (iOS and Android)</li>
                <li><strong className={strong}>Website:</strong> <Ext href="https://voyza.xtremon.com">https://voyza.xtremon.com</Ext></li>
                <li><strong className={strong}>Privacy policy:</strong> <Ext href="https://voyza.xtremon.com/privacy">https://voyza.xtremon.com/privacy</Ext></li>
                <li><strong className={strong}>Contact email:</strong> <Mail /></li>
              </ul>
              <p className={p}>
                "VoyZa" is a brand/trading name operated by the individual named above. If you wish to identify, contact, or bring a claim against the controller, the individual and address named above is the responsible legal person.
              </p>
              <p className={p}>
                <strong className={strong}>Data Protection Officer.</strong> We have assessed our processing under Article 37 GDPR / UK GDPR and have determined that we are <strong className={strong}>not required to appoint a Data Protection Officer</strong> (our core activities do not consist of large-scale systematic monitoring or large-scale processing of special-category data). Privacy matters are handled directly by the controller at the contact details above.
              </p>
              <p className={p}>
                <strong className={strong}>EU and UK data subjects (Article 27).</strong> The controller is established outside the EU and the UK. We are a small independent developer and have <strong className={strong}>not</strong> appointed an Article 27 representative in the EU or the UK. If you are in the EEA, the UK, or Switzerland, you can raise any privacy matter with us directly at <Mail />, and we will respond. You also retain the right to lodge a complaint with your local supervisory authority at any time (see Section 13).
              </p>
              <p className={p}>
                If you have any questions about this policy or want to exercise your privacy rights, email us at <Mail /> or write to the controller at the registered address above.
              </p>
            </section>

            {/* 2 */}
            <section className="space-y-6">
              <h2 className={h2}>2. What Data We Collect</h2>
              <p className={p}>
                We collect the categories of personal information set out below. We only collect what we need to operate the App, process your subscription, keep the service secure, and improve it.
              </p>
              <div className={tableWrap}>
                <table className={table}>
                  <thead className={thead}>
                    <tr>
                      <th className={th}>Category</th>
                      <th className={th}>Examples</th>
                      <th className={th}>Source</th>
                      <th className={th}>Where it is stored / sent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={td}><strong className={strong}>Account &amp; identity</strong></td>
                      <td className={td}>Email address, password (used only to authenticate you), first and last name, phone number, your VoyZa user ID. Optional profile fields that you may choose to add: profile picture, bio, date of birth, gender, address, city, country, preferences.</td>
                      <td className={td}>You, at sign-up / in your profile</td>
                      <td className={td}>Supabase (authentication + profile database; password authentication is handled by Supabase). Your email, and — where you provide them at sign-up — your name and phone number, are shared with RevenueCat as subscriber attributes. Your email may be cached on your device if you choose "Remember me."</td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Trip &amp; location content</strong></td>
                      <td className={td}>Trips (name, description, dates, country, status), saved places (name, address, precise latitude/longitude, scheduled dates, stay duration, notes, opening-hours overrides, done/skipped flags), waypoints, optimized routes, place search queries, and CSV exports you create.</td>
                      <td className={td}>You, and place details returned by Google</td>
                      <td className={td}>On your device (Hive / local storage) and Supabase. Coordinates and search queries are sent to Google Maps Platform to provide search, geocoding, and routing. Content on a shared trip is visible to collaborators you invite.</td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Precise location</strong></td>
                      <td className={td}>Your device's current GPS latitude/longitude while you use the App.</td>
                      <td className={td}>Device sensor (location permission, while-in-use only)</td>
                      <td className={td}>Used on-device to show your position on the map, bias place searches, detect your country, and calculate distances. Sent to Google Maps Platform for these features. We do <strong className={strong}>not</strong> store your raw GPS history on our servers, and we do not collect background location.</td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Place photos</strong></td>
                      <td className={td}>Photos of places shown on place cards, sourced from Google Places (photo references resolved to image URLs and cached briefly on your device).</td>
                      <td className={td}>Third party (Google Places)</td>
                      <td className={td}>Google Maps Platform; image URLs cached on-device for a short period. The App does <strong className={strong}>not</strong> access your device camera or photo library.</td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Purchases &amp; subscriptions</strong></td>
                      <td className={td}>Subscription/product identifier, price, currency, entitlement and trial status, trial expiry, store receipts, and a RevenueCat app user ID (which may be anonymous before sign-up).</td>
                      <td className={td}>Your purchase via the App Store or Google Play</td>
                      <td className={td}>Raw store receipts stay with RevenueCat and Apple/Google; only derived subscription fields (status, product identifier, store, expiry, and renewal flags) are mirrored to Supabase. Price and currency of a purchase are sent to Firebase/Google Analytics as a conversion event (subject to the consent gate in Section 6).</td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Usage &amp; analytics</strong></td>
                      <td className={td}>In-app events such as sign-up, trip created, place added (and your total place count), route optimized (and number of stops), trial started, and purchase (with value and currency).</td>
                      <td className={td}>Derived from your use of the App</td>
                      <td className={td}>Firebase Analytics / Google Analytics 4 (subject to the consent gate described in Section 6).</td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Device identifiers</strong></td>
                      <td className={td}>A Firebase installation/app-instance ID; a RevenueCat app user ID; an FCM push registration token; a locally generated anonymous UUID for pre-sign-up activity; a device ID (Android ID or iOS identifier-for-vendor) used for free-trial and referral abuse prevention; and, on Android, the Advertising ID (analytics/measurement signals only; not collected before consent for EEA/UK/CH users — see Section 6).</td>
                      <td className={td}>Device/OS APIs and SDK-generated</td>
                      <td className={td}>Firebase/Google, RevenueCat, and Supabase (push token in <Code>device_tokens</Code>; abuse-prevention device ID in <Code>trial_devices</Code>). The anonymous UUID stays on your device.</td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Diagnostics: performance &amp; stability</strong></td>
                      <td className={td}>Cold-start time, slow/frozen frame traces, network latency, limited crash/stability signals, and related device/app metadata (device model, OS version, app version, network/carrier, country derived from IP).</td>
                      <td className={td}>Derived (Firebase Analytics / Performance SDKs)</td>
                      <td className={td}>Firebase (Analytics and Performance Monitoring). We do <strong className={strong}>not</strong> run a dedicated crash-reporting SDK (e.g., Crashlytics); only the limited stability signals captured by Firebase Analytics/Performance are collected.</td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Push token</strong></td>
                      <td className={td}>Your device's FCM push notification token and device platform (iOS/Android).</td>
                      <td className={td}>Device (Firebase Cloud Messaging)</td>
                      <td className={td}>Supabase <Code>device_tokens</Code>, keyed to your user ID. When you sign out, a token is marked inactive so we can stop sending to it and avoid resurrecting stale tokens; see the retention period in Section 10.</td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Support &amp; communications</strong></td>
                      <td className={td}>The content of emails you send us and emails we send you (e.g., onboarding welcome, activation reminder, referral reward, win-back; password reset and other authentication emails are sent via Supabase Auth).</td>
                      <td className={td}>You / our email service</td>
                      <td className={td}>Our inbox; lifecycle emails are sent via Resend; authentication emails (e.g., password reset) are sent via Supabase Auth's email service.</td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Referrals &amp; invitations</strong></td>
                      <td className={td}>Your personal referral code; a referral record linking you (as referrer) to the person who accepts your invitation (as referee) and the resulting reward status; and, when you invite someone who is <strong className={strong}>not yet</strong> a VoyZa user, the email address you entered for them together with the trip you invited them to and your referral code.</td>
                      <td className={td}>You (by inviting someone or entering a referral code)</td>
                      <td className={td}>Supabase (<Code>referral_codes</Code>, <Code>referrals</Code>, and <Code>pending_trip_invites</Code>). A pending-invitation email is stored only until that person signs up or the invitation expires (30 days), after which it is deleted. Used to operate the referral program, connect an invited person to your trip, reward eligible referrers and referees with promotional VoyZa Pro, and prevent referral fraud.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className={h3}>Location fingerprints (deduplication)</h3>
              <p className={p}>
                When your saved places sync, we compute a one-way SHA-256 hash of each place's name plus its coordinates. This "fingerprint" is used only to detect and remove duplicate places when local data syncs to the cloud. It is a content hash of place data — it is <strong className={strong}>not</strong> a device or person tracking identifier — and it is stored alongside your locations in Supabase.
              </p>

              <h3 className={h3}>Free-trial abuse prevention (device check)</h3>
              <p className={p}>
                To enforce one free trial per device and prevent abuse of our free tier, when you start a trial we read a device identifier (the Android ID on Android, or the identifier-for-vendor on iOS) and store it with your user ID and the product in our <Code>trial_devices</Code> registry. This is a persistent, hardware-linked identifier used to prevent abuse of our free and promotional offers — repeated free-trial sign-ups on the same device, and referral rewards claimed by referring an additional account of your own on a device you have already used. We do not use it for advertising. See Sections 4 (lawful basis and balancing test), 10 (retention), and 13 (your right to object and our automated-processing statement).
              </p>
            </section>

            {/* 3 */}
            <section className="space-y-6">
              <h2 className={h2}>3. How We Use Your Data</h2>
              <p className={p}>We use your personal information to:</p>
              <ul className={ul}>
                <li><strong className={strong}>Provide the App:</strong> create and manage your account, save your trips and places, optimize multi-stop routes, show maps, autocomplete and search for places, geocode addresses, and sync your data across devices.</li>
                <li><strong className={strong}>Enable collaboration:</strong> let you invite others to a trip and share trip content with the collaborators you choose; if you invite someone who does not yet have a VoyZa account, we hold a pending invitation (keyed to the email you entered) so they can join that trip when they sign up (see Section 7).</li>
                <li><strong className={strong}>Process subscriptions:</strong> manage purchases, trials, restores, and entitlements through RevenueCat and the app stores.</li>
                <li><strong className={strong}>Send notifications and transactional email:</strong> deliver push notifications about trip activity and collaboration, and transactional emails such as password reset.</li>
                <li><strong className={strong}>Send lifecycle / marketing email (with opt-out):</strong> send onboarding (welcome), activation-reminder, and win-back emails. These are sent on a soft opt-in / legitimate-interest basis and you can unsubscribe at any time (see Section 4).</li>
                <li><strong className={strong}>Operate the referral and invitation program:</strong> let you invite friends and collaborators, connect an invited person to the trip and to you when they join, grant referral rewards (promotional VoyZa Pro to eligible referrers and referees), and prevent referral fraud (see Sections 4 and 7).</li>
                <li><strong className={strong}>Prevent abuse and secure the service:</strong> enforce one free trial per device, prevent referral fraud, detect other fraud and misuse, and protect the integrity of the App.</li>
                <li><strong className={strong}>Understand and improve the App:</strong> measure how features are used through analytics and monitor performance and stability (subject to consent where required — see Section 6).</li>
                <li><strong className={strong}>Measure advertising:</strong> attribute installs and conversions from our marketing campaigns (see Section 6).</li>
                <li><strong className={strong}>Request feedback:</strong> occasionally show the native in-app rating prompt after you complete an action such as optimizing a route. This prompt is handled entirely by Apple or Google; we do not receive any personal data from it.</li>
                <li><strong className={strong}>Comply with law:</strong> meet our legal obligations and respond to lawful requests.</li>
              </ul>
            </section>

            {/* 4 */}
            <section className="space-y-6">
              <h2 className={h2}>4. Legal Bases for Processing (GDPR / UK GDPR)</h2>
              <p className={p}>
                If you are in the European Economic Area, the United Kingdom, or Switzerland, we rely on the legal bases mapped purpose-by-purpose in the table below.
              </p>
              <div className={tableWrap}>
                <table className={table}>
                  <thead className={thead}>
                    <tr>
                      <th className={th}>Processing purpose</th>
                      <th className={th}>Personal data involved</th>
                      <th className={th}>Lawful basis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={td}>Create and manage your account; authenticate you</td>
                      <td className={td}>Account &amp; identity</td>
                      <td className={td}>Performance of a contract — Art. 6(1)(b)</td>
                    </tr>
                    <tr>
                      <td className={td}>Provide core features (trips, places, route optimization, collaboration, sync)</td>
                      <td className={td}>Trip &amp; location content, precise location, place photos</td>
                      <td className={td}>Performance of a contract — Art. 6(1)(b)</td>
                    </tr>
                    <tr>
                      <td className={td}>Operate the referral and invitation program, including holding a pending invitation and its email so an invited person can join your trip and both sides can be rewarded</td>
                      <td className={td}>Referrals &amp; invitations; account &amp; identity</td>
                      <td className={td}>Taking steps at your request / performance of a contract — Art. 6(1)(b); and legitimate interests in running a referral program and connecting invited users — Art. 6(1)(f). For the email of a person who is not yet a user, we rely on our legitimate interest in delivering the invitation you asked us to send, balanced against their interests through data minimization and short retention (deleted on sign-up or after 30 days).</td>
                    </tr>
                    <tr>
                      <td className={td}>Process subscriptions, trials, restores, and entitlements; share email/name/phone with RevenueCat as subscriber attributes to operate billing</td>
                      <td className={td}>Purchases &amp; subscriptions; account &amp; identity</td>
                      <td className={td}>Performance of a contract — Art. 6(1)(b); and legitimate interests in fraud-resistant billing and account linkage — Art. 6(1)(f)</td>
                    </tr>
                    <tr>
                      <td className={td}>Send transactional email (e.g., password reset) and operational push notifications</td>
                      <td className={td}>Account &amp; identity, push token</td>
                      <td className={td}>Performance of a contract — Art. 6(1)(b); push delivery also relies on your OS-level notification permission</td>
                    </tr>
                    <tr>
                      <td className={td}>Send lifecycle/marketing email (welcome, activation reminder, win-back)</td>
                      <td className={td}>Account &amp; identity (email)</td>
                      <td className={td}>Consent / soft opt-in — Art. 6(1)(a) / PECR Reg. 22; you can unsubscribe by emailing us</td>
                    </tr>
                    <tr>
                      <td className={td}>Prevent free-trial and referral abuse via the device check (persistent device identifier)</td>
                      <td className={td}>Abuse-prevention device ID</td>
                      <td className={td}>Legitimate interests — Art. 6(1)(f); see the balancing-test summary below</td>
                    </tr>
                    <tr>
                      <td className={td}>Detect fraud/misuse and secure the service</td>
                      <td className={td}>Device identifiers, account &amp; identity, diagnostics</td>
                      <td className={td}>Legitimate interests — Art. 6(1)(f)</td>
                    </tr>
                    <tr>
                      <td className={td}>Product/usage analytics and performance/stability monitoring</td>
                      <td className={td}>Usage &amp; analytics, diagnostics, device identifiers</td>
                      <td className={td}><strong className={strong}>Consent</strong> — Art. 6(1)(a) (in the EEA/UK/CH these are off until you opt in — see Section 6)</td>
                    </tr>
                    <tr>
                      <td className={td}>Advertising attribution and conversion measurement (incl. Android Advertising ID, Google Ads conversion signals)</td>
                      <td className={td}>Usage &amp; analytics, Advertising ID (Android), purchase events</td>
                      <td className={td}><strong className={strong}>Consent</strong> — Art. 6(1)(a) (off until opt-in for EEA/UK/CH users — see Section 6)</td>
                    </tr>
                    <tr>
                      <td className={td}>Comply with tax, accounting, and lawful requests</td>
                      <td className={td}>Purchases &amp; subscriptions; relevant records</td>
                      <td className={td}>Legal obligation — Art. 6(1)(c)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={p}>
                <strong className={strong}>Device-check balancing test (legitimate-interest assessment, Art. 6(1)(f) + ePrivacy/PECR).</strong> We rely on legitimate interests to read and store a persistent, hardware-linked device identifier to prevent abuse of our free and promotional offers — enforcing one free trial per device and preventing referral-reward abuse (such as referring an additional account of your own on a device you have already used). We conducted a balancing test and concluded that: (a) the interest (preventing repeat-trial and referral-reward abuse of a paid service) is legitimate and necessary; (b) the processing is limited to a single identifier tied to your account and product, is never used for advertising or cross-app tracking, and is retained for a limited period (see Section 10); and (c) the limited impact on you does not override our interest, particularly given your right to object below. Because reading an identifier from the device can engage ePrivacy/PECR, for EEA/UK/CH users this access occurs only in connection with a trial you actively start (a service you request) and is not used for any non-essential analytics or advertising purpose. You can <strong className={strong}>object</strong> to this processing at any time (see Section 13); we will assess any objection and, where it succeeds, cease the processing.
              </p>
              <p className={p}>
                <strong className={strong}>Marketing email — soft opt-in.</strong> Lifecycle/marketing emails (welcome, activation reminder, win-back) are treated as direct marketing. We send them on a soft opt-in / consent basis to people who have an account, and you can unsubscribe at any time by emailing <Mail />; we will promptly stop sending them. Transactional and authentication emails (e.g., password reset) are separate and necessary to provide the service.
              </p>
              <p className={p}>
                Where we rely on consent, you can withdraw it at any time without affecting the lawfulness of processing before withdrawal (see Sections 6 and 13 for how).
              </p>
            </section>

            {/* 5 */}
            <section className="space-y-6">
              <h2 className={h2}>5. Push Notifications and Device Permissions</h2>
              <p className={p}>The App requests the following device permissions:</p>
              <ul className={ul}>
                <li><strong className={strong}>Location (while-in-use):</strong> to show your position on the map, bias place searches to your area, detect your country, and calculate distances. We do not request background or "always" location.</li>
                <li><strong className={strong}>Notifications:</strong> to deliver push notifications about trip activity and collaboration. You can disable notifications at any time in your device settings.</li>
                <li><strong className={strong}>Network / Internet:</strong> required for the App to function.</li>
                <li><strong className={strong}>Advertising ID (Android only):</strong> used for analytics and advertising measurement, subject to the consent gate in Section 6 (for EEA/UK/CH users it is not collected before opt-in consent).</li>
              </ul>
              <p className={p}>
                The App does <strong className={strong}>not</strong> request access to your camera, photo library, microphone, contacts, calendar, or Bluetooth.
              </p>
            </section>

            {/* 6 */}
            <section className="space-y-6">
              <h2 className={h2}>6. Advertising and Analytics</h2>
              <p className={p}>
                We keep advertising and analytics deliberately limited and transparent. Here is exactly what we do on each platform.
              </p>

              <h3 className={h3}>ePrivacy / PECR — consent before any non-essential access (EEA, UK, Switzerland)</h3>
              <p className={p}>
                For users in the EEA, the UK, and Switzerland, <strong className={strong}>no non-essential SDK reads from or writes to your device, and no analytics or advertising signal fires, before you give opt-in consent.</strong> This includes Firebase Analytics / Google Analytics 4, Google Ads conversion measurement, the Android Advertising ID, and any conversion/measurement signal. In particular, for these users the <strong className={strong}>Android Advertising ID is not collected for analytics or advertising before consent</strong>. Only essential, service-providing processing that you actively request runs without this consent. This reflects the prior-consent requirement under ePrivacy / PECR for storing or accessing information on your device, which applies independently of any GDPR legal basis.
              </p>

              <h3 className={h3}>On iOS</h3>
              <ul className={ul}>
                <li>On iOS we use the <strong className={strong}>Apple Search Ads (AdServices) attribution token only</strong>, for aggregate, campaign-level measurement of whether our marketing led to an install or subscription (collected via RevenueCat).</li>
                <li>We do <strong className={strong}>not</strong> register an SKAdNetwork ID or declare <Code>SKAdNetworkItems</Code>, and we do <strong className={strong}>not</strong> use SKAdNetwork ad-network attribution (the Google Analytics SDK bundles on-device conversion components, but they are not configured for SKAdNetwork attribution). We do <strong className={strong}>not</strong> show an App Tracking Transparency (ATT) prompt, we do <strong className={strong}>not</strong> access the IDFA, and we do <strong className={strong}>not</strong> track you across other companies' apps and websites for advertising. Our iOS privacy declaration is <Code>NSPrivacyTracking = false</Code> with no tracking domains.</li>
              </ul>

              <h3 className={h3}>On Android</h3>
              <ul className={ul}>
                <li>We use the <strong className={strong}>Advertising ID</strong> for analytics and advertising measurement (for example, to attribute app installs and subscriptions to our campaigns) — and, for EEA/UK/CH users, only after opt-in consent (see above).</li>
                <li>You can reset your Advertising ID or opt out of ad personalization at any time in your device's system settings (<strong className={strong}>Settings → Google → Ads</strong>). When you opt out at the OS level, we respect that choice.</li>
              </ul>

              <h3 className={h3}>Analytics and advertising consent (EEA, UK, Switzerland)</h3>
              <p className={p}>
                For users in the EEA, the UK, and Switzerland, advertising- and analytics-related signals (including Google Consent Mode signals such as <Code>ad_storage</Code>, <Code>ad_user_data</Code>, and <Code>ad_personalization</Code>) are <strong className={strong}>off by default until you give in-app consent (opt-in).</strong> You can change your choice at any time in the App at <strong className={strong}>Settings → Privacy → Analytics &amp; Ads consent</strong>, and you can withdraw consent there at any time.
              </p>
              <p className={p}>
                We determine whether the opt-in requirement applies based on your <strong className={strong}>device's locale/region setting</strong>. Where your device region indicates the EEA, the UK, or Switzerland, analytics and advertising signals remain <strong className={strong}>off until you opt in</strong>. We do <strong className={strong}>not</strong> currently use IP-based geolocation, so if your device region is set to a country outside the EEA/UK/CH these signals may default on. You can review and change your choice at any time in the App at <strong className={strong}>Settings → Privacy → Analytics &amp; Ads consent</strong>, and withdraw consent there at any time.
              </p>

              <h3 className={h3}>Our advertising and measurement partners</h3>
              <p className={p}>Today, we use only the following to run and measure marketing campaigns:</p>
              <ul className={ul}>
                <li><strong className={strong}>Google Ads</strong> for app-install campaign delivery and conversion measurement, and the RevenueCat → Firebase → Google Analytics 4 conversion pipeline (configured).</li>
                <li><strong className={strong}>Apple Search Ads (AdServices)</strong> attribution token on iOS, as described above.</li>
              </ul>
              <p className={p}>
                For ad measurement, <strong className={strong}>Google (Google Ads / Google Analytics)</strong> typically acts as an <strong className={strong}>independent or joint controller</strong> for the relevant device/event signals, not merely as our processor; their handling is governed by their own controller privacy terms (linked in Section 8). Any device or event data sent to them for EEA/UK/CH users is covered by the opt-in consent gate above.
              </p>
              <p className={p}>
                We do <strong className={strong}>not</strong> currently integrate Meta (Facebook/Instagram), AppsFlyer, Adjust, the Meta Audience Network, or any IDFA-based cross-app tracking SDK, and the App sends no data to Meta. <strong className={strong}>No user-level cross-app tracking occurs today.</strong> If we ever introduce Meta or any user-level attribution/tracking, we will first update this policy <strong className={strong}>and</strong> our iOS tracking declaration — presenting an ATT prompt, setting <Code>NSPrivacyTracking = true</Code>, and declaring tracking domains — before enabling it.
              </p>
            </section>

            {/* 7 */}
            <section className="space-y-6">
              <h2 className={h2}>7. Trip Collaboration and Sharing Between Users</h2>
              <p className={p}>
                Collaboration is a core feature of VoyZa, and it is the most important sharing surface to understand.
              </p>
              <ul className={ul}>
                <li><strong className={strong}>Inviting collaborators:</strong> You invite someone to a trip by entering their email address. If that email belongs to an existing VoyZa account, our backend (Supabase) links them to the trip. If it does <strong className={strong}>not</strong> yet belong to a VoyZa account, we store a <strong className={strong}>pending invitation</strong> — the email address you entered, the trip, your user ID, and your referral code — so that when that person signs up with the same email they are automatically added to the trip and both of you may receive a referral reward. A pending invitation is deleted when it is claimed or when it expires (30 days). Only invite people who are happy to be contacted and added.</li>
                <li><strong className={strong}>Referral program:</strong> When you share a referral link or code and someone signs up through it — or when you invite a non-user as described above — we record a referral connecting you (the referrer) to that person (the referee) so we can grant the reward. Both of you may receive promotional VoyZa Pro when the referee starts a qualifying trial or subscription. Referral rewards are subject to anti-fraud checks and the limits described in the app's Terms; see Sections 3 and 4.</li>
                <li><strong className={strong}>What collaborators can see:</strong> Once added, a collaborator with read or write access can see the <strong className={strong}>entire</strong> trip's contents — all saved places (names, precise coordinates, addresses, photos, scheduled dates, notes, durations) and the trip name, description, and dates. Edits stream between collaborators in real time.</li>
                <li><strong className={strong}>Collaborator emails are visible to the group:</strong> Every member of a shared trip can see the email address of every other member, and who invited whom.</li>
                <li><strong className={strong}>CSV export / OS share sheet:</strong> When you export a trip to CSV or use your device's share sheet, the full itinerary (place names, addresses, scheduled dates, durations, travel times) leaves the App and is sent to whatever app or person you choose. Once you share it, that data is outside our control.</li>
                <li><strong className={strong}>In-app notifications:</strong> when someone invites you to a trip or collaborates with you, we store an in-app notification on our servers (including the inviter's name and the trip name) so you can see your notification history in the App. These are protected by row-level security, retained while your account is active, and deleted when you delete your account.</li>
              </ul>
              <p className={p}>Only add content and invite people if you are comfortable with this visibility.</p>
            </section>

            {/* 8 */}
            <section className="space-y-6">
              <h2 className={h2}>8. Sharing and Disclosure</h2>
              <p className={p}>
                <strong className={strong}>We do not sell your personal information.</strong> We do not share your personal information for cross-context behavioral advertising. We disclose data only as described below.
              </p>
              <p className={p}>
                Most providers below act as our <strong className={strong}>processors</strong> (acting only on our instructions). However, our <strong className={strong}>advertising/measurement partners (Google Ads and Google Analytics for ad-conversion measurement)</strong> typically act as <strong className={strong}>independent or joint controllers</strong> for the device/event signals involved; their processing is governed by their own controller privacy terms, linked below, and is subject to the consent gate in Section 6 for EEA/UK/CH users.
              </p>
              <h3 className={h3}>Service providers and partners</h3>
              <div className={tableWrap}>
                <table className={table}>
                  <thead className={thead}>
                    <tr>
                      <th className={th}>Provider</th>
                      <th className={th}>Role</th>
                      <th className={th}>Purpose</th>
                      <th className={th}>What is shared</th>
                      <th className={th}>Privacy policy / terms</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={td}><strong className={strong}>Supabase</strong></td>
                      <td className={td}>Processor</td>
                      <td className={td}>Authentication (incl. password auth, password-reset and other authentication emails, and the email→user lookup for collaboration invites), database, realtime sync, backend functions</td>
                      <td className={td}>Account/identity, trip &amp; place content, push tokens, subscription mirror, abuse-prevention device ID, collaborator data</td>
                      <td className={td}><Ext href="https://supabase.com/privacy">supabase.com/privacy</Ext></td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>RevenueCat</strong></td>
                      <td className={td}>Processor</td>
                      <td className={td}>Subscription and in-app purchase management, paywall, restore</td>
                      <td className={td}>App user ID, email, and (where you provide them at sign-up) name and phone, purchase/receipt and entitlement data, attribution metadata (Apple Search Ads token on iOS + Firebase app-instance ID linkage)</td>
                      <td className={td}><Ext href="https://www.revenuecat.com/privacy">revenuecat.com/privacy</Ext></td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Firebase / Google — Analytics (GA4)</strong></td>
                      <td className={td}>Processor for product analytics; independent/joint controller for ad-conversion signals</td>
                      <td className={td}>Product and funnel analytics; ad conversion measurement</td>
                      <td className={td}>App-instance ID, usage events, purchase events, ad/consent signals, Advertising ID (Android)</td>
                      <td className={td}><Ext href="https://firebase.google.com/support/privacy">firebase.google.com/support/privacy</Ext> and <Ext href="https://policies.google.com/privacy">policies.google.com/privacy</Ext></td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Firebase / Google — Cloud Messaging (FCM)</strong></td>
                      <td className={td}>Processor</td>
                      <td className={td}>Push notifications</td>
                      <td className={td}>Push registration token, device platform, installation ID</td>
                      <td className={td}><Ext href="https://firebase.google.com/support/privacy">firebase.google.com/support/privacy</Ext></td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Firebase / Google — Performance Monitoring</strong></td>
                      <td className={td}>Processor</td>
                      <td className={td}>Performance and stability diagnostics</td>
                      <td className={td}>Performance/trace data, device/app metadata, instance ID</td>
                      <td className={td}><Ext href="https://firebase.google.com/support/privacy">firebase.google.com/support/privacy</Ext></td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Google Maps Platform / Places</strong></td>
                      <td className={td}>Processor</td>
                      <td className={td}>Maps, place search/autocomplete, geocoding, directions, place photos</td>
                      <td className={td}>Search queries, precise coordinates, place IDs, addresses</td>
                      <td className={td}><Ext href="https://policies.google.com/privacy">policies.google.com/privacy</Ext> and <Ext href="https://cloud.google.com/maps-platform/terms">cloud.google.com/maps-platform/terms</Ext></td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Resend</strong></td>
                      <td className={td}>Processor</td>
                      <td className={td}>Lifecycle email (onboarding welcome, activation reminder, win-back)</td>
                      <td className={td}>Email address</td>
                      <td className={td}><Ext href="https://resend.com/legal/privacy-policy">resend.com/legal/privacy-policy</Ext></td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Apple App Store</strong></td>
                      <td className={td}>Independent controller</td>
                      <td className={td}>Payment processing and subscription receipts (iOS)</td>
                      <td className={td}>Purchase/receipt data, store transaction IDs</td>
                      <td className={td}><Ext href="https://www.apple.com/legal/privacy/">apple.com/legal/privacy</Ext></td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Google Play</strong></td>
                      <td className={td}>Independent controller</td>
                      <td className={td}>Payment processing and subscription receipts (Android)</td>
                      <td className={td}>Purchase/receipt data, store transaction IDs</td>
                      <td className={td}><Ext href="https://policies.google.com/privacy">policies.google.com/privacy</Ext></td>
                    </tr>
                    <tr>
                      <td className={td}><strong className={strong}>Google Ads</strong></td>
                      <td className={td}>Independent/joint controller for ad measurement</td>
                      <td className={td}>App-install campaign delivery and conversion measurement</td>
                      <td className={td}>Conversion/attribution signals, Advertising ID (Android)</td>
                      <td className={td}><Ext href="https://policies.google.com/privacy">policies.google.com/privacy</Ext> and <Ext href="https://business.safety.google/adscontrollerterms/">business.safety.google/adscontrollerterms</Ext></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h3 className={h3}>Other disclosures</h3>
              <ul className={ul}>
                <li><strong className={strong}>Other users:</strong> trip content you share with collaborators, as described in Section 7.</li>
                <li><strong className={strong}>Legal and safety:</strong> we may disclose information where required by law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of VoyZa, our users, or others.</li>
                <li><strong className={strong}>Business transfers:</strong> if VoyZa is involved in a merger, acquisition, financing, or sale of assets, your information may be transferred as part of that transaction. We will notify you of any change in ownership or use of your personal information.</li>
              </ul>
            </section>

            {/* 9 */}
            <section className="space-y-6">
              <h2 className={h2}>9. International Data Transfers</h2>
              <p className={p}>
                VoyZa is operated with the help of service providers located in the United States and other countries. When you use the App, your personal information may be transferred to, stored, and processed in countries other than your own, including the United States, where data-protection laws may differ from those in your jurisdiction.
              </p>
              <p className={p}>
                Where we transfer personal information out of the EEA, UK, or Switzerland, we rely on the specific safeguards below. We confirm that the EU Standard Contractual Clauses (with the UK International Data Transfer Addendum and the Swiss addendum where applicable) are in place with each US processor we engage, that we have carried out a transfer risk assessment for these transfers, and that, where a provider is certified under the EU-US Data Privacy Framework (and its UK Extension and Swiss-US framework), we additionally rely on that certification.
              </p>
              <div className={tableWrap}>
                <table className={table}>
                  <thead className={thead}>
                    <tr>
                      <th className={th}>Recipient / group</th>
                      <th className={th}>Country</th>
                      <th className={th}>Transfer mechanism relied on</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={td}>Google / Firebase (Analytics, FCM, Performance, Maps/Places, Google Ads)</td>
                      <td className={td}>United States</td>
                      <td className={td}>EU-US Data Privacy Framework certification (and UK Extension / Swiss-US framework) <strong className={strong}>and</strong> EU SCCs + UK IDTA</td>
                    </tr>
                    <tr>
                      <td className={td}>Apple (App Store, Apple Search Ads)</td>
                      <td className={td}>United States</td>
                      <td className={td}>EU-US Data Privacy Framework certification <strong className={strong}>and/or</strong> EU SCCs + UK IDTA</td>
                    </tr>
                    <tr>
                      <td className={td}>RevenueCat</td>
                      <td className={td}>United States</td>
                      <td className={td}>EU SCCs + UK IDTA (and Swiss addendum)</td>
                    </tr>
                    <tr>
                      <td className={td}>Supabase</td>
                      <td className={td}>United States / EU regions</td>
                      <td className={td}>EU SCCs + UK IDTA where data is processed outside the EEA/UK</td>
                    </tr>
                    <tr>
                      <td className={td}>Resend</td>
                      <td className={td}>United States</td>
                      <td className={td}>EU SCCs + UK IDTA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={p}>
                You have the right to obtain a copy of the relevant safeguards (e.g., the executed SCCs, with commercially confidential terms redacted). To request a copy, email <Mail /> with the subject "Transfer safeguards request," and we will provide it.
              </p>
            </section>

            {/* 10 */}
            <section className="space-y-6">
              <h2 className={h2}>10. Data Retention</h2>
              <p className={p}>
                We keep your personal information only for as long as we need it. Concrete periods and criteria are set out below:
              </p>
              <ul className={ul}>
                <li><strong className={strong}>Account and profile data, trips, and saved places:</strong> retained while your account is active. When you delete your account, this data is deleted as described in Section 12.</li>
                <li><strong className={strong}>Subscription and purchase records:</strong> retained for the life of the subscription relationship and then for up to <strong className={strong}>7 years</strong> to meet legal, tax, and accounting obligations.</li>
                <li><strong className={strong}>Subscription event history (<Code>user_subscription_history</Code>):</strong> a per-event audit log retained to support billing accuracy and reconciliation. Events recorded before you sign up are keyed only to an anonymous store identifier (no account link); a signed-up user's history is deleted when you delete your account.</li>
                <li><strong className={strong}>Push tokens:</strong> an inactive token is retained to suppress stale deliveries; all push tokens are deleted when you delete your account.</li>
                <li><strong className={strong}>Referrals and invitations:</strong> your referral code and referral records (who referred whom, and reward status) are retained while your account is active and deleted when you delete your account. A pending invitation to a person who is not yet a user (their email, the trip, and your referral code) is deleted as soon as it is claimed or after it expires (<strong className={strong}>30 days</strong>), whichever comes first.</li>
                <li><strong className={strong}>Abuse-prevention device IDs (<Code>trial_devices</Code>):</strong> retained for as long as necessary to enforce the one-free-trial-per-device limit, and <strong className={strong}>de-linked from your account</strong> (the account reference is cleared) when you delete your account, consistent with storage limitation (Art. 5(1)(e)).</li>
                <li><strong className={strong}>Analytics and advertising data (GA4):</strong> user-level data is retained in Google Analytics 4 for the configured <strong className={strong}>14-month</strong> user-data retention window and then automatically deleted; aggregated reporting may persist longer in de-identified form.</li>
                <li><strong className={strong}>Performance / stability data (Firebase Performance):</strong> retained for Firebase's standard performance retention window (up to approximately <strong className={strong}>90 days</strong> for detailed traces).</li>
                <li><strong className={strong}>Support and email records:</strong> retained for as long as needed to handle your request and keep reasonable business records (typically up to <strong className={strong}>24 months</strong>).</li>
              </ul>
              <p className={p}>When data is no longer needed, we delete or anonymize it.</p>
            </section>

            {/* 11 */}
            <section className="space-y-6">
              <h2 className={h2}>11. Security</h2>
              <p className={p}>
                We take reasonable technical and organizational measures to protect your personal information. These include encrypted connections (HTTPS/TLS) for data in transit, authentication and access controls, database row-level security to enforce access rules, and platform-level protections that disable plaintext network traffic and exclude app data from device backups.
              </p>
              <p className={p}>
                No method of transmission or storage is completely secure, so we cannot guarantee absolute security. You are responsible for keeping your account password confidential.
              </p>
            </section>

            {/* 12 */}
            <section className="space-y-6">
              <h2 className={h2}>12. Account and Data Deletion</h2>
              <p className={p}>
                You can delete your VoyZa account at any time from within the App (<strong className={strong}>Settings → Delete account</strong>). When you delete your account, we:
              </p>
              <ul className={ul}>
                <li>delete your profile, trips, and saved locations from our servers;</li>
                <li>cascade-delete your trip collaborations, your referral code and referral records, any pending invitations you created, associated subscription records, and your stored push tokens (<Code>device_tokens</Code>); and</li>
                <li>clear VoyZa data stored locally on your device.</li>
              </ul>
              <p className={p}>
                <strong className={strong}>Retained after deletion:</strong> To enforce our one-free-trial-per-device limit and prevent referral-reward abuse, the device identifier in our abuse-prevention registry (<Code>trial_devices</Code>) is retained after account deletion — de-linked from your account — for the period stated in Section 10. See Sections 2 and 10. Some other information may be retained where we are legally required to keep it (for example, transaction records for tax purposes) or in backups for a limited period before being overwritten. Content you previously shared with collaborators or exported (for example, via CSV) may remain with those recipients.
              </p>
              <p className={p}>
                <strong className={strong}>Deleting without the App.</strong> If you cannot access the App, you can request account and data deletion via our web route at <Ext href="https://voyza.xtremon.com/#how-can-i-delete-my-voyza-account">https://voyza.xtremon.com/#how-can-i-delete-my-voyza-account</Ext>, or by emailing <Mail />. This web route is also referenced in our Google Play and App Store data-handling declarations.
              </p>
            </section>

            {/* 13 */}
            <section className="space-y-6">
              <h2 className={h2}>13. Your Privacy Rights</h2>

              <h3 className={h3}>How to exercise your rights (all regions)</h3>
              <p className={p}>
                You can exercise your rights by: (a) using the in-app controls described below; or (b) emailing <Mail />; or (c) writing to the controller at the registered address in Section 1; or (d) for deletion, using <Ext href="https://voyza.xtremon.com/#how-can-i-delete-my-voyza-account">https://voyza.xtremon.com/#how-can-i-delete-my-voyza-account</Ext>. EEA/UK users may also contact the Article 27 representatives named in Section 1.
              </p>
              <ul className={ul}>
                <li><strong className={strong}>Withdraw analytics/advertising consent or object to analytics:</strong> in the App at <strong className={strong}>Settings → Privacy → Analytics &amp; Ads consent</strong>.</li>
                <li><strong className={strong}>Object to legitimate-interest processing</strong> (e.g., the free-trial abuse device check or fraud/security analytics): email <Mail /> with the subject "Objection," identifying the processing; we will assess it and stop where required.</li>
                <li><strong className={strong}>Unsubscribe from lifecycle/marketing email:</strong> use the unsubscribe link in any such email, or email us.</li>
                <li><strong className={strong}>Delete your account/data:</strong> in-app (<strong className={strong}>Settings → Delete account</strong>) or via <Ext href="https://voyza.xtremon.com/#how-can-i-delete-my-voyza-account">https://voyza.xtremon.com/#how-can-i-delete-my-voyza-account</Ext>.</li>
              </ul>
              <p className={p}>
                We respond to rights requests <strong className={strong}>free of charge</strong> and <strong className={strong}>within one month</strong> of receipt (extendable by two further months for complex or numerous requests, in which case we will tell you within the first month). We may need to verify your identity before responding.
              </p>

              <h3 className={h3}>GDPR / UK GDPR (EEA, UK, Switzerland)</h3>
              <p className={p}>If you are in the EEA, the UK, or Switzerland, you have the right to:</p>
              <ul className={ul}>
                <li><strong className={strong}>Access</strong> the personal information we hold about you;</li>
                <li><strong className={strong}>Rectify</strong> inaccurate or incomplete information;</li>
                <li><strong className={strong}>Erase</strong> your information ("right to be forgotten");</li>
                <li><strong className={strong}>Restrict</strong> processing in certain circumstances;</li>
                <li><strong className={strong}>Object</strong> to processing based on legitimate interests, and to direct marketing;</li>
                <li><strong className={strong}>Data portability</strong> — receive your data in a structured, commonly used, machine-readable format;</li>
                <li><strong className={strong}>Withdraw consent</strong> at any time where we rely on consent; and</li>
                <li><strong className={strong}>Lodge a complaint</strong> with a supervisory authority.</li>
              </ul>
              <p className={p}>
                <strong className={strong}>Automated decision-making / profiling.</strong> We do <strong className={strong}>not</strong> carry out automated decision-making that produces legal or similarly significant effects about you under Article 22. The free-trial abuse device check is a simple rule-based duplicate-device check (it does not profile you or make significant automated decisions about you), and you may object to it as described above.
              </p>
              <p className={p}>
                <strong className={strong}>Supervisory authorities and complaints.</strong> You can lodge a complaint with your local supervisory authority. You can find your EEA authority via the European Data Protection Board's list at <Ext href="https://www.edpb.europa.eu/about-edpb/about-edpb/members_en">edpb.europa.eu</Ext>. In the UK, you can contact the Information Commissioner's Office (ICO) at <Ext href="https://ico.org.uk/make-a-complaint/">ico.org.uk/make-a-complaint</Ext>. In Switzerland, you can contact the Federal Data Protection and Information Commissioner (FDPIC) at <Ext href="https://www.edoeb.admin.ch/">edoeb.admin.ch</Ext>. We would, however, appreciate the chance to address your concerns first.
              </p>

              <h3 className={h3}>California (CCPA / CPRA)</h3>
              <p className={p}>If you are a California resident, you have the right to:</p>
              <ul className={ul}>
                <li><strong className={strong}>Know</strong> what personal information we collect, use, and disclose;</li>
                <li><strong className={strong}>Access</strong> and obtain a copy of your personal information;</li>
                <li><strong className={strong}>Delete</strong> your personal information;</li>
                <li><strong className={strong}>Correct</strong> inaccurate personal information; and</li>
                <li><strong className={strong}>Not be discriminated against</strong> for exercising your rights.</li>
              </ul>
              <p className={p}>
                <strong className={strong}>Categories and recipients.</strong> For the categories of personal information we collect, see Section 2; for the categories of recipients (service providers/processors and our ad-measurement controllers) and what we disclose to each for a business purpose, see Section 8. In the preceding 12 months we disclosed personal information (identifiers, account/contact data, commercial/purchase information, internet/usage activity, approximate and precise geolocation, and inferences) <strong className={strong}>only to service providers for business purposes</strong>, plus device/event signals to our advertising-measurement controllers for ad attribution. <strong className={strong}>We do not disclose personal information to third parties for monetary or other valuable consideration.</strong>
              </p>
              <p className={p}>
                <strong className={strong}>No sale / no sharing.</strong> We do not sell your personal information, and we do not share it for cross-context behavioral advertising, as those terms are defined under the CCPA/CPRA. We have not done so in the preceding 12 months. Because we do not sell or share personal information in this sense, <strong className={strong}>no "Do Not Sell or Share My Personal Information" opt-out is required.</strong>
              </p>
              <p className={p}>
                <strong className={strong}>Response times.</strong> We confirm receipt of verifiable consumer requests within 10 business days and respond within <strong className={strong}>45 days</strong> (extendable by a further 45 days with notice). Requests are free of charge.
              </p>
              <p className={p}>
                To exercise your California rights, email <Mail /> or write to the controller at the address in Section 1. You may use an authorized agent, and we will verify requests as required by law.
              </p>
              <p className={p}>
                <strong className={strong}>Notice of Financial Incentive.</strong> Our free trial and any trial-recap/win-back messaging are standard product features and are <strong className={strong}>not</strong> financial-incentive programs that are conditioned on, or that pay you for, your personal information; we do not currently offer any CPRA "financial incentive" or price/service difference in exchange for personal information. If we introduce one, we will add the required Notice of Financial Incentive here first.
              </p>

              <h3 className={h3}>Do Not Track / Global Privacy Control</h3>
              <p className={p}>
                Because VoyZa does <strong className={strong}>not</strong> sell your personal information or share it for cross-context behavioral advertising, no opt-out is required. Global Privacy Control (GPC) and "Do Not Track" are <strong className={strong}>browser-based signals</strong> that are not transmitted to native mobile apps; the App therefore has no mechanism to receive them, and they do not apply to the App. We manage advertising and analytics through the on-device consent controls and OS-level settings described in Section 6. If our website at voyza.xtremon.com processes GPC in the future, we will honor it there; we make no commitment to "honor GPC" in the App, which cannot receive it.
              </p>
            </section>

            {/* 14 */}
            <section className="space-y-6">
              <h2 className={h2}>14. Children's Privacy</h2>
              <p className={p}>
                VoyZa is a general-audience trip-planning app and is <strong className={strong}>not directed to children.</strong> The minimum age to use the App is:
              </p>
              <ul className={ul}>
                <li><strong className={strong}>16</strong> in the EEA, the UK, and Switzerland, <strong className={strong}>except</strong> where a Member State has set a lower age of digital consent under Article 8 GDPR (which may be <strong className={strong}>13, 14, 15, or 16</strong>), in which case that national age applies; and</li>
                <li><strong className={strong}>13</strong> in the United States and elsewhere.</li>
              </ul>
              <p className={p}>
                We do not knowingly collect personal information from anyone below the applicable minimum age. Most processing for account holders relies on <strong className={strong}>contract</strong> rather than consent; where national law sets a minimum age for entering into the relevant contract or for valid consent, that minimum-age rule applies, and a user below it should not use the App or should do so only with verifiable parental/guardian consent. Where processing relies on consent (e.g., analytics/advertising for EEA/UK/CH users), and a user is below the applicable age of digital consent, we require parental/guardian consent before that consent-based processing occurs; we use a self-declared date of birth and consent-gating as our age-assurance measure and do not knowingly proceed where the user is under age.
              </p>
              <p className={p}>
                If we learn that we have collected personal information from a child below the applicable minimum age without the required parental/guardian consent, we will <strong className={strong}>delete the account and associated personal information</strong> and remove any related abuse-prevention identifier from active use. If you believe a child has provided us personal information, contact us at <Mail /> and we will act promptly.
              </p>
            </section>

            {/* 15 */}
            <section className="space-y-6">
              <h2 className={h2}>15. Third-Party Links and Services</h2>
              <p className={p}>
                The App may link to or open third-party apps and services — for example, opening Google Maps or a ride-hailing app for directions, or the Apple App Store / Google Play for subscriptions. These third parties have their own privacy policies, and we are not responsible for their practices. We encourage you to review the privacy policy of any third-party service you use.
              </p>
            </section>

            {/* 16 */}
            <section className="space-y-6">
              <h2 className={h2}>16. Changes to This Policy</h2>
              <p className={p}>
                We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page and, where appropriate, notify you in the App or by email, giving prior notice of material changes.
              </p>
              <p className={p}>
                For any change that requires your <strong className={strong}>consent</strong> (for example, new analytics or advertising processing), we will seek <strong className={strong}>fresh, affirmative opt-in consent</strong> before that processing begins — continued use of the App will <strong className={strong}>not</strong> be treated as consent to it. For non-consent-based informational updates, your continued use of the App after the update takes effect, following appropriate notice, indicates your awareness of the revised policy.
              </p>
            </section>

            {/* 17 */}
            <section className="space-y-6">
              <h2 className={h2}>17. Contact Us</h2>
              <p className={p}>
                If you have any questions, requests, or complaints about this Privacy Policy or how we handle your personal information, contact us at:
              </p>
              <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 border-2 border-primary-200 mt-4">
                <p className="text-gray-900 font-semibold mb-1">Controller:</p>
                <p className="text-gray-700 mb-4">Heng Kok (individual, trading as VoyZa)</p>
                <p className="text-gray-900 font-semibold mb-1">Email:</p>
                <a
                  href="mailto:hengsamkok76@gmail.com"
                  className="text-primary-600 hover:text-primary-700 font-medium underline"
                >
                  hengsamkok76@gmail.com
                </a>
                <p className="text-gray-900 font-semibold mt-4 mb-1">Website:</p>
                <Ext href="https://voyza.xtremon.com">https://voyza.xtremon.com</Ext>
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
