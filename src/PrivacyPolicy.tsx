import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-slate-900 selection:bg-blue-500/20">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/60 bg-white/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Dumbbell className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">PROTOCOL</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Privacy Policy</h1>
          <p className="text-slate-500 font-semibold mb-12">Last updated: March 29, 2026</p>

          <div className="prose-custom space-y-10">
            <section>
              <h2>1. Introduction</h2>
              <p>
                Protocol Fitness ("Protocol," "we," "us," or "our") operates the Protocol mobile application
                (the "App") and the website at protocolfit.app (the "Site"). This Privacy Policy explains how
                we collect, use, disclose, and safeguard your information when you use our App and Site.
                By using Protocol, you consent to the practices described in this policy. If you do not agree,
                please discontinue use immediately.
              </p>
            </section>

            <section>
              <h2>2. Information We Collect</h2>

              <h3>2.1 Account Information</h3>
              <p>
                When you create an account, we collect your name, email address, and authentication credentials.
                If you sign in via <strong>Sign in with Apple</strong> or <strong>Google Sign-In</strong>, we receive
                a unique identifier, your name (if you choose to share it), and your email address from those providers.
                We do not receive or store your Apple ID password or Google account password.
              </p>

              <h3>2.2 Health & Fitness Data</h3>
              <p>
                Protocol collects health and fitness information that you manually enter, including but not limited to:
              </p>
              <ul>
                <li><strong>Workout logs</strong> — exercises, sets, reps, weight, volume, duration, and personal records</li>
                <li><strong>Body weight & measurements</strong> — body weight entries over time, body measurements</li>
                <li><strong>Sleep data</strong> — self-reported sleep duration, sleep quality ratings, and bedtime/wake-up times from morning check-ins</li>
                <li><strong>Recovery & wellness</strong> — energy levels, soreness ratings, mood, and recovery scores</li>
                <li><strong>Supplement tracking</strong> — supplements you log, dosages, and adherence records</li>
              </ul>
              <p>
                This data is entered by you directly within the App. We do not read from Apple HealthKit,
                Google Health Connect, or any other device-level health frameworks unless explicitly stated
                in a future update with your separate consent.
              </p>

              <h3>2.3 Progress Photos</h3>
              <p>
                If you use the progress photo feature, images are stored <strong>locally on your device</strong> by default.
                If you are a Protocol Pro subscriber, photos may optionally be uploaded to our cloud storage
                (powered by <strong>Supabase Storage</strong>) for backup and cross-device syncing. Photos are stored
                in private, authenticated buckets and are not accessible to other users or the public.
              </p>

              <h3>2.4 Usage & Analytics Data</h3>
              <p>
                We use <strong>PostHog</strong>, a product analytics platform, to collect anonymous usage data
                that helps us understand how the App is used and improve the experience. This includes:
              </p>
              <ul>
                <li>Screen views and navigation patterns (e.g., which features are used most)</li>
                <li>Feature engagement metrics (e.g., workout started, set logged)</li>
                <li>App version, device type, and operating system version</li>
                <li>Session duration and frequency</li>
                <li>Crash and error reports</li>
              </ul>
              <p>
                PostHog data is <strong>anonymized</strong> and does not include your name, email, workout details,
                or health information. We use PostHog's cloud-hosted (US) instance. You can learn more about
                PostHog's privacy practices at{' '}
                <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">posthog.com/privacy</a>.
              </p>

              <h3>2.5 Device & Technical Information</h3>
              <p>
                We automatically collect certain technical information such as your device model, operating system
                version, app version, IP address (truncated/anonymized for analytics), language preference,
                and timezone. This data is used for debugging, compatibility, and service improvement.
              </p>
            </section>

            <section>
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and maintain the App's core features (workout logging, insights, progress tracking)</li>
                <li>Sync your data across devices if you are a Pro subscriber using cloud backup</li>
                <li>Generate personalized coaching suggestions, smart weight predictions, and recovery insights</li>
                <li>Process subscription purchases and manage your account</li>
                <li>Analyze anonymous usage patterns to improve the App (via PostHog)</li>
                <li>Send transactional emails (account verification, password reset, subscription receipts)</li>
                <li>Detect, investigate, and prevent fraudulent or unauthorized activity</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>
                We <strong>never</strong> sell your personal data, health data, or workout information to third parties
                for advertising or marketing purposes.
              </p>
            </section>

            <section>
              <h2>4. Cloud Storage & Data Infrastructure</h2>
              <p>
                Protocol uses <strong>Supabase</strong> as its backend-as-a-service provider. Supabase hosts our
                database (PostgreSQL) and file storage infrastructure. Your account data and, if you are a Pro
                subscriber, your synced workout history and progress photos are stored on Supabase's cloud servers.
              </p>
              <ul>
                <li><strong>Hosting provider:</strong> Amazon Web Services (AWS)</li>
                <li><strong>Region:</strong> US East (N. Virginia, us-east-1)</li>
                <li><strong>Encryption:</strong> Data is encrypted at rest (AES-256) and in transit (TLS 1.2+)</li>
                <li><strong>Access control:</strong> Row-level security (RLS) policies ensure users can only access their own data</li>
              </ul>
              <p>
                For more information on Supabase's security practices, visit{' '}
                <a href="https://supabase.com/security" target="_blank" rel="noopener noreferrer">supabase.com/security</a>.
              </p>
            </section>

            <section>
              <h2>5. Third-Party Services</h2>
              <p>
                We integrate with the following third-party services. Each has its own privacy policy governing
                the data they process:
              </p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      <th>Service</th>
                      <th>Purpose</th>
                      <th>Data Shared</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>PostHog</strong></td>
                      <td>Product analytics & feature usage</td>
                      <td>Anonymized usage events, device type, OS version</td>
                    </tr>
                    <tr>
                      <td><strong>Supabase</strong></td>
                      <td>Database, authentication, file storage</td>
                      <td>Account info, workout data, progress photos (Pro users)</td>
                    </tr>
                    <tr>
                      <td><strong>RevenueCat</strong></td>
                      <td>Subscription management & in-app purchases</td>
                      <td>Anonymous app user ID, purchase history, subscription status</td>
                    </tr>
                    <tr>
                      <td><strong>Apple (Sign in with Apple)</strong></td>
                      <td>Authentication</td>
                      <td>Apple user ID, name (optional), email (optional relay)</td>
                    </tr>
                    <tr>
                      <td><strong>Google (Google Sign-In)</strong></td>
                      <td>Authentication</td>
                      <td>Google user ID, name, email, profile photo URL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                <strong>RevenueCat</strong> processes subscription transactions on our behalf. We do not directly
                handle or store credit card numbers or payment method details — all payment processing is handled
                by the Apple App Store or Google Play Store, with RevenueCat managing entitlement and receipt
                validation. See{' '}
                <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">revenuecat.com/privacy</a>{' '}
                for their privacy policy.
              </p>
            </section>

            <section>
              <h2>6. Your Rights (CCPA / GDPR)</h2>
              <p>
                Depending on your jurisdiction, you may have the following rights regarding your personal data:
              </p>

              <h3>6.1 Right to Access</h3>
              <p>
                You have the right to request a copy of all personal data we hold about you, including workout
                history, account information, and analytics identifiers.
              </p>

              <h3>6.2 Right to Export (Data Portability)</h3>
              <p>
                You may export your workout data, body weight history, supplement logs, and other personal data
                in a machine-readable format (JSON or CSV) directly from the App's settings, or by contacting us.
              </p>

              <h3>6.3 Right to Deletion</h3>
              <p>
                You may request complete deletion of your account and all associated data. Upon receiving a
                verified deletion request, we will permanently remove your data from our active systems within
                30 days. Residual copies in encrypted backups will be purged within 90 days.
              </p>

              <h3>6.4 Right to Rectification</h3>
              <p>
                You can update or correct your personal information at any time through the App's account settings.
              </p>

              <h3>6.5 Right to Opt Out of Analytics</h3>
              <p>
                You may opt out of PostHog analytics collection from the App's privacy settings. When opted out,
                no usage events will be sent to PostHog from your device.
              </p>

              <h3>6.6 CCPA-Specific Rights (California Residents)</h3>
              <p>
                Under the California Consumer Privacy Act (CCPA), California residents have the right to:
              </p>
              <ul>
                <li>Know what personal information is collected and how it is used</li>
                <li>Request deletion of personal information</li>
                <li>Opt out of the "sale" of personal information — <strong>we do not sell your data</strong></li>
                <li>Non-discrimination for exercising your privacy rights</li>
              </ul>

              <h3>6.7 How to Exercise Your Rights</h3>
              <p>
                To exercise any of the above rights, you can:
              </p>
              <ul>
                <li>Use the in-app privacy controls under <strong>Settings → Privacy & Data</strong></li>
                <li>Email us at <a href="mailto:privacy@protocolfit.app">privacy@protocolfit.app</a></li>
              </ul>
              <p>
                We will respond to verified requests within 30 days. We may ask you to verify your identity
                before processing your request.
              </p>
            </section>

            <section>
              <h2>7. Children's Privacy</h2>
              <p>
                Protocol is not intended for children under the age of 13. We do not knowingly collect
                personal information from children under 13 years of age. If you are under 13, you may not
                use the App or provide any information to us.
              </p>
              <p>
                In compliance with the <strong>Children's Online Privacy Protection Act (COPPA)</strong>,
                if we learn that we have collected personal information from a child under 13 without
                verifiable parental consent, we will delete that information as quickly as possible.
                If you believe we might have any information from or about a child under 13, please
                contact us at{' '}
                <a href="mailto:privacy@protocolfit.app">privacy@protocolfit.app</a>.
              </p>
              <p>
                Users between the ages of 13 and 17 may use the App with the consent and supervision of a
                parent or legal guardian.
              </p>
            </section>

            <section>
              <h2>8. Data Retention & Account Deletion</h2>
              <p>
                We retain your personal data for as long as your account is active or as needed to provide
                you with our services. Specifically:
              </p>
              <ul>
                <li><strong>Active accounts:</strong> All data is retained while your account is active</li>
                <li><strong>Account deletion:</strong> When you delete your account (via Settings → Account → Delete Account),
                  all personal data — including workout logs, progress photos, supplement logs, body weight entries,
                  check-in data, and account credentials — is permanently deleted from our active database within 30 days</li>
                <li><strong>Backup purge:</strong> Residual copies in encrypted database backups are automatically rotated
                  and purged within 90 days of deletion</li>
                <li><strong>Analytics data:</strong> Anonymized PostHog analytics events are not linked to your identity
                  and are retained for product improvement for up to 12 months</li>
                <li><strong>Subscription records:</strong> RevenueCat may retain anonymized transaction records as required
                  for financial compliance and audit purposes</li>
              </ul>
              <p>
                Locally-stored data (progress photos stored only on-device, cached workouts) is not affected by
                server-side deletion — you must delete these from your device manually.
              </p>
            </section>

            <section>
              <h2>9. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your data, including:
              </p>
              <ul>
                <li>TLS 1.2+ encryption for all data in transit</li>
                <li>AES-256 encryption for data at rest</li>
                <li>Row-level security (RLS) at the database level, ensuring users cannot access other users' data</li>
                <li>Secure authentication via Supabase Auth with support for Apple and Google OAuth</li>
                <li>Regular security audits and dependency updates</li>
              </ul>
              <p>
                While we strive to protect your personal information, no method of electronic transmission or
                storage is 100% secure. We cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2>10. International Data Transfers</h2>
              <p>
                Our services are primarily hosted in the United States (AWS us-east-1). If you access Protocol
                from outside the United States, your information may be transferred to, stored, and processed in
                the United States. By using the App, you consent to such transfers. We take steps to ensure that
                your data receives adequate protection in accordance with this Privacy Policy regardless of where
                it is processed.
              </p>
            </section>

            <section>
              <h2>11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will update the "Last updated"
                date at the top of this page and, for material changes, notify you via in-app notification or email.
                Your continued use of Protocol after changes are posted constitutes your acceptance of the revised policy.
              </p>
            </section>

            <section>
              <h2>12. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:privacy@protocolfit.app">privacy@protocolfit.app</a></li>
                <li><strong>General support:</strong> <a href="mailto:support@protocolfit.app">support@protocolfit.app</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center">
              <Dumbbell className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800">PROTOCOL</span>
          </Link>
          <div className="flex gap-6 text-sm font-semibold text-slate-500">
            <Link to="/privacy" className="text-blue-600">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            <a href="mailto:support@protocolfit.app" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">
            © 2026 Protocol Fitness.
          </div>
        </div>
      </footer>
    </div>
  );
}
