import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, MessageCircle, Clock, BookOpen, HelpCircle, ChevronRight } from 'lucide-react';

const faqs = [
  {
    q: 'How do I cancel my Protocol Pro subscription?',
    a: 'On iOS, go to Settings → [Your Name] → Subscriptions → Protocol Pro → Cancel. On Android, open Google Play Store → Menu → Subscriptions → Protocol Pro → Cancel. Cancellation takes effect at the end of your current billing period.',
  },
  {
    q: 'How do I export my workout data?',
    a: 'Go to Settings → Privacy & Data → Export Data in the app. You can export your full workout history, body weight logs, and supplement records as a CSV or JSON file.',
  },
  {
    q: 'How do I delete my account and all my data?',
    a: 'Go to Settings → Account → Delete Account. This permanently removes all your data from our servers within 30 days. Make sure to cancel any active subscription first to avoid further charges.',
  },
  {
    q: 'My workouts aren\'t syncing across devices.',
    a: 'Cloud sync is a Protocol Pro feature. Make sure you\'re signed in to the same account on both devices, have an active Pro subscription, and have a stable internet connection. Try pulling down to refresh on the Today screen.',
  },
  {
    q: 'How do I restore my purchases on a new device?',
    a: 'Sign in with the same Apple ID or Google account you used to subscribe. Go to Settings → Subscription → Restore Purchases. Your Pro features will be reactivated automatically.',
  },
  {
    q: 'Is my health and fitness data private?',
    a: 'Yes. Your workout logs, body weight, and wellness data are only accessible to you. We never sell personal data to third parties. See our Privacy Policy for full details on how we handle your information.',
  },
];

export default function Support() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-slate-900 selection:bg-blue-500/20">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/60 bg-white/40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-bold text-xl tracking-tight text-slate-800">PROTOCOL</Link>
          <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">Support</h1>
          <p className="text-slate-500 font-semibold text-lg mb-12">
            Need help with Protocol? We're here for you.
          </p>

          {/* Contact Card */}
          <div className="glass-panel p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center border border-blue-200">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-slate-900">Email Support</h2>
                <p className="text-slate-500 font-medium text-sm">Our primary support channel</p>
              </div>
            </div>
            <p className="text-slate-600 font-medium mb-6 leading-relaxed">
              For bug reports, account issues, feature requests, subscription questions, or anything else — send us an email and we'll get back to you as soon as possible.
            </p>
            <a
              href="mailto:support@protocolapp.fyi"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30"
            >
              <Mail className="w-5 h-5" />
              support@protocolapp.fyi
            </a>
            <div className="flex items-center gap-2 mt-4 text-sm text-slate-500 font-medium">
              <Clock className="w-4 h-4" />
              <span>Typical response time: within 24 hours</span>
            </div>
          </div>

          {/* What to Include */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-12 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-5 h-5 text-slate-600" />
              <h2 className="text-lg font-extrabold text-slate-900">When contacting support, please include:</h2>
            </div>
            <ul className="space-y-3">
              {[
                'Your device model and OS version (e.g., iPhone 16, iOS 19.1)',
                'The Protocol app version (found in Settings → About)',
                'A description of the issue or question',
                'Screenshots or screen recordings if applicable',
                'Your account email (so we can look up your account)',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
                  <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center border border-purple-200">
                <HelpCircle className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-slate-800 hover:bg-slate-50 transition-colors">
                    {faq.q}
                    <ChevronRight className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-90 flex-shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-5 h-5 text-slate-600" />
              <h2 className="text-lg font-extrabold text-slate-900">Helpful Links</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/privacy" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all group">
                <span className="text-slate-700 font-semibold group-hover:text-blue-600 transition-colors">Privacy Policy</span>
                <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
              </Link>
              <Link to="/terms" className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all group">
                <span className="text-slate-700 font-semibold group-hover:text-blue-600 transition-colors">Terms of Service</span>
                <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 py-12 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <Link to="/" className="font-bold text-lg tracking-tight text-slate-800">PROTOCOL</Link>
          <div className="flex gap-6 text-sm font-semibold text-slate-500">
            <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
            <Link to="/support" className="text-blue-600">Support</Link>
          </div>
          <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">
            © 2026 Protocol Fitness.
          </div>
        </div>
      </footer>
    </div>
  );
}
