import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ArrowLeft } from 'lucide-react';

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Terms of Service</h1>
          <p className="text-slate-500 font-semibold mb-12">Last updated: March 29, 2026</p>

          <div className="prose-custom space-y-10">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>
                These Terms of Service ("Terms") govern your access to and use of the Protocol mobile application
                ("App") and the website at protocolfit.app ("Site"), operated by Protocol Fitness ("Protocol," "we,"
                "us," or "our"). By downloading, installing, or using Protocol, you agree to be bound by these Terms.
                If you do not agree, do not use the App.
              </p>
              <p>
                We reserve the right to update or modify these Terms at any time. Material changes will be
                communicated via in-app notification or email. Continued use of the App after changes are posted
                constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2>2. Eligibility</h2>
              <p>
                You must be at least <strong>13 years of age</strong> to use Protocol. If you are between 13 and 17,
                you may only use the App with the consent and supervision of a parent or legal guardian. By using the
                App, you represent and warrant that you meet these requirements.
              </p>
            </section>

            <section>
              <h2>3. Account Registration</h2>
              <p>
                To use certain features, you must create an account using an email/password combination,
                Sign in with Apple, or Google Sign-In. You are responsible for:
              </p>
              <ul>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access at{' '}
                  <a href="mailto:support@protocolfit.app">support@protocolfit.app</a>
                </li>
              </ul>
              <p>
                We reserve the right to suspend or terminate accounts that violate these Terms or are used for
                fraudulent purposes.
              </p>
            </section>

            <section>
              <h2>4. Subscriptions & Auto-Renewal</h2>

              <h3>4.1 Protocol Pro Subscription</h3>
              <p>
                Protocol offers a premium subscription ("Protocol Pro") that unlocks additional features including
                cloud backup & sync, advanced analytics, unlimited progress photos, personalization options, and
                AI weight predictions.
              </p>

              <h3>4.2 Subscription Plans & Pricing</h3>
              <p>
                Protocol Pro is available as a monthly or annual auto-renewing subscription. Current pricing is
                displayed in the App at the time of purchase and may vary by region.
              </p>

              <h3>4.3 Auto-Renewal Terms</h3>
              <p>
                <strong>Your subscription will automatically renew</strong> at the end of each billing period
                (monthly or annually) unless you cancel at least 24 hours before the end of the current period.
                Your Apple ID account or Google Play account will be charged for renewal within 24 hours prior to
                the end of the current period at the same rate as your current subscription.
              </p>

              <h3>4.4 How to Cancel</h3>
              <p>
                You can manage or cancel your subscription at any time through:
              </p>
              <ul>
                <li><strong>iOS:</strong> Settings → [Your Name] → Subscriptions → Protocol Pro → Cancel Subscription</li>
                <li><strong>Android:</strong> Google Play Store → Menu → Subscriptions → Protocol Pro → Cancel</li>
              </ul>
              <p>
                Cancellation takes effect at the end of the current billing period. You will retain access to Pro
                features until the period expires. <strong>No partial refunds</strong> are provided for the remaining
                time in a billing period.
              </p>

              <h3>4.5 Free Trial</h3>
              <p>
                We may offer a free trial period for Protocol Pro. If you do not cancel before the free trial ends,
                your subscription will automatically convert to a paid subscription and your account will be charged.
                Free trial eligibility is determined by the Apple App Store or Google Play Store and is typically
                limited to one trial per Apple ID or Google account.
              </p>

              <h3>4.6 Price Changes</h3>
              <p>
                We reserve the right to change subscription prices. Any price changes will take effect at the start
                of the next billing period following notice. The App Store or Play Store may require you to confirm
                the new pricing before renewal.
              </p>

              <h3>4.7 Refunds</h3>
              <p>
                All purchases are processed through the Apple App Store or Google Play Store. Refund requests
                must be directed to Apple or Google according to their respective refund policies.
              </p>
            </section>

            <section>
              <h2>5. User Content & Data</h2>

              <h3>5.1 Your Data</h3>
              <p>
                You retain ownership of all data you enter into Protocol, including workout logs, body weight
                entries, progress photos, supplement logs, and wellness check-in data. By using the App, you grant
                us a limited license to store, process, and display your data solely for the purpose of providing
                and improving the service.
              </p>

              <h3>5.2 Progress Photos</h3>
              <p>
                Progress photos are stored locally on your device by default. Pro subscribers may opt in to cloud
                backup, in which case photos are uploaded to our servers (Supabase Storage on AWS). You are solely
                responsible for the content of photos you upload. Do not upload photos containing illegal content.
              </p>

              <h3>5.3 Shared Content</h3>
              <p>
                When you use Protocol's "Pump Card" sharing feature to generate share-ready images from your
                workout data, those images are generated locally on your device. We do not receive, store, or
                have access to images you share on social media or messaging platforms.
              </p>
            </section>

            <section>
              <h2>6. Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the App for any unlawful purpose or in violation of any applicable laws</li>
                <li>Attempt to reverse-engineer, decompile, or disassemble the App</li>
                <li>Interfere with or disrupt the App's servers, networks, or infrastructure</li>
                <li>Attempt to gain unauthorized access to other users' accounts or data</li>
                <li>Use automated scripts, bots, or scraping tools to access the App</li>
                <li>Upload malicious code, viruses, or harmful data</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Use the App to harass, abuse, or harm another person</li>
              </ul>
            </section>

            <section>
              <h2>7. Health & Fitness Disclaimer</h2>
              <p>
                Protocol is a <strong>fitness tracking and logging tool</strong>. It is <strong>not</strong> a
                medical device, and nothing in the App constitutes medical advice, diagnosis, or treatment.
              </p>
              <ul>
                <li>Smart weight suggestions and coaching insights are algorithmically generated based on your
                  logged data and should be treated as informational guidance, not professional recommendations</li>
                <li>Always consult a qualified healthcare professional before starting any new exercise program,
                  especially if you have pre-existing health conditions</li>
                <li>Recovery scores and wellness metrics are based on self-reported data and are not a substitute
                  for professional medical assessment</li>
                <li>You use Protocol and follow any suggestions at your own risk</li>
              </ul>
            </section>

            <section>
              <h2>8. Intellectual Property</h2>
              <p>
                The App, including its design, code, graphics, logos, icons, text, and all other content, is owned
                by Protocol Fitness and is protected by copyright, trademark, and other intellectual property laws.
                The "Protocol" name, logo, and related branding are trademarks of Protocol Fitness.
              </p>
              <p>
                You may not copy, modify, distribute, sell, or lease any part of the App or its content, nor may
                you reverse-engineer or attempt to extract the source code, except as permitted by law.
              </p>
            </section>

            <section>
              <h2>9. Third-Party Services</h2>
              <p>
                Protocol integrates with third-party services to provide its functionality:
              </p>
              <ul>
                <li><strong>Supabase</strong> — backend database, authentication, and file storage</li>
                <li><strong>RevenueCat</strong> — subscription and in-app purchase management</li>
                <li><strong>PostHog</strong> — anonymous product analytics</li>
                <li><strong>Apple (Sign in with Apple)</strong> — authentication provider</li>
                <li><strong>Google (Google Sign-In)</strong> — authentication provider</li>
              </ul>
              <p>
                Your use of these third-party services is subject to their respective terms and privacy policies.
                We are not responsible for the practices or content of third-party services.
              </p>
            </section>

            <section>
              <h2>10. Account Termination & Data Deletion</h2>
              <p>
                You may delete your account at any time through <strong>Settings → Account → Delete Account</strong>
                in the App. Upon account deletion:
              </p>
              <ul>
                <li>All personal data (workout logs, photos, supplements, body weight, check-ins, account info)
                  will be permanently deleted from our active systems within 30 days</li>
                <li>Residual copies in encrypted backups will be purged within 90 days</li>
                <li>Active subscriptions are <strong>not</strong> automatically cancelled — you must cancel your
                  subscription through the App Store or Google Play before deleting your account to avoid
                  further charges</li>
                <li>Anonymized analytics data retained by PostHog will not be deleted, as it is not linked to
                  your identity</li>
              </ul>
              <p>
                We may also terminate or suspend your account if you violate these Terms, with or without notice.
              </p>
            </section>

            <section>
              <h2>11. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, Protocol Fitness and its officers, directors,
                employees, and agents shall not be liable for any indirect, incidental, special, consequential,
                or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out
                of or in connection with your use of the App.
              </p>
              <p>
                Our total liability for any claim arising from the use of the App shall not exceed the amount you
                paid us in the 12 months preceding the claim, or $100, whichever is greater.
              </p>
              <p>
                Some jurisdictions do not allow the exclusion or limitation of certain damages, so some of the
                above limitations may not apply to you.
              </p>
            </section>

            <section>
              <h2>12. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Protocol Fitness and its affiliates, officers,
                directors, employees, and agents from and against any claims, liabilities, damages, losses, and
                expenses (including reasonable attorneys' fees) arising from your use of the App, violation of
                these Terms, or infringement of any rights of a third party.
              </p>
            </section>

            <section>
              <h2>13. Disclaimer of Warranties</h2>
              <p>
                The App is provided on an <strong>"as is" and "as available"</strong> basis without warranties of
                any kind, whether express or implied, including but not limited to implied warranties of
                merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p>
                We do not warrant that the App will be uninterrupted, error-free, or free of viruses or other
                harmful components. We do not guarantee the accuracy, reliability, or completeness of any content,
                coaching suggestions, or AI-generated recommendations provided through the App.
              </p>
            </section>

            <section>
              <h2>14. Governing Law & Dispute Resolution</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of
                California, United States, without regard to its conflict of law provisions.
              </p>
              <p>
                Any dispute arising from these Terms or your use of the App shall first be attempted to be
                resolved through informal negotiation by contacting us at{' '}
                <a href="mailto:legal@protocolfit.app">legal@protocolfit.app</a>. If the dispute cannot be
                resolved informally within 60 days, either party may pursue binding arbitration under the rules
                of the American Arbitration Association (AAA), conducted in California.
              </p>
              <p>
                <strong>Class action waiver:</strong> You agree that any dispute resolution will be conducted on
                an individual basis only, and not as a class, consolidated, or representative action.
              </p>
            </section>

            <section>
              <h2>15. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be
                limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain
                in full force and effect.
              </p>
            </section>

            <section>
              <h2>16. Entire Agreement</h2>
              <p>
                These Terms, together with our{' '}
                <Link to="/privacy" className="text-blue-600 hover:text-blue-700 font-semibold">Privacy Policy</Link>,
                constitute the entire agreement between you and Protocol Fitness regarding the use of the App
                and supersede all prior agreements and understandings.
              </p>
            </section>

            <section>
              <h2>17. Contact Us</h2>
              <p>
                If you have questions about these Terms of Service, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:legal@protocolfit.app">legal@protocolfit.app</a></li>
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
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-blue-600">Terms of Service</Link>
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
