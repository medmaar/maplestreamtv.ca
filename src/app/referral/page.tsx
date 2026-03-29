import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Canada Referral Program | Refer a Friend, Get +1 Year Free",
  description:
    "Refer a friend to IPTV Canada and earn +1 free year of service. No limits — every successful referral adds 12 months to your account.",
  keywords:
    "IPTV Canada referral, refer a friend IPTV, IPTV Canada free year, IPTV affiliate Canada",
  alternates: { canonical: "https://www.iptvsubscriptioncanada.ca/referral" },
};

const steps = [
  {
    number: "01",
    title: "Refer a Friend",
    description:
      "Share your referral with a friend who hasn't used our service before. Send them your info via WhatsApp or fill out the referral form below.",
  },
  {
    number: "02",
    title: "Friend Subscribes",
    description:
      "Your friend signs up and purchases at least a 12-month subscription to IPTV Canada.",
  },
  {
    number: "03",
    title: "You Get +1 Year FREE",
    description:
      "Once their payment is verified, 12 months are added to your account automatically. No cap — refer as many friends as you want!",
  },
];

const rules = [
  "The referred friend must purchase at least a 1-year IPTV subscription.",
  "Your +1 year bonus is added after payment verification.",
  "The referral must be a new customer who has never used our service.",
  "Referrals are unlimited — every successful referral gives you +12 more months.",
];

export default function ReferralPage() {
  return (
    <main className="bg-gray-950 text-white min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-950 to-black py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
            Referral Program
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Refer 1 Friend,{" "}
            <span className="text-red-500">Get +1 Year FREE</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Love IPTV Canada? Share it with your friends and family — every
            successful referral adds a full year of free service to your
            account. No limits.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Unlimited referrals
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> +12 months per referral
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Instant reward
            </span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            How It <span className="text-red-500">Works</span>
          </h2>
          <p className="text-center text-gray-400 mb-14">
            Three simple steps to earn free service.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-red-700 transition-colors"
              >
                <div className="text-5xl font-extrabold text-red-600 opacity-30 mb-4 leading-none">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reward highlight */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-br from-red-900 to-gray-900 border border-red-700 rounded-2xl p-10">
            <div className="text-6xl font-extrabold text-red-500 mb-3">+1 Year</div>
            <div className="text-2xl font-bold mb-4">FREE for every referral</div>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              There is no cap. Refer 3 friends and get 3 free years. Refer 10
              and get 10 free years. The more you share, the more you earn.
            </p>
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Program <span className="text-red-500">Rules</span>
          </h2>
          <div className="space-y-4">
            {rules.map((rule, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-gray-900 border border-gray-800 rounded-xl px-6 py-5"
              >
                <span className="text-red-500 font-bold text-lg mt-0.5">
                  {i + 1}.
                </span>
                <p className="text-gray-300 text-sm leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral form */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Submit Your <span className="text-red-500">Referral</span>
          </h2>
          <p className="text-center text-gray-400 mb-10 text-sm">
            Fill in your details and your friend&apos;s details below. We&apos;ll
            take care of the rest.
          </p>
          <form
            action="https://wa.me/15144882330"
            target="_blank"
            className="bg-gray-950 border border-gray-800 rounded-2xl p-8 space-y-6"
          >
            <div>
              <p className="text-xs text-red-400 font-bold uppercase tracking-widest mb-4">
                Your Details
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Your First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Your WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 514 000 0000"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs text-red-400 font-bold uppercase tracking-widest mb-4">
                Friend&apos;s Details
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Friend&apos;s First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Friend&apos;s WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 514 000 0000"
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/15144882330?text=Hi%2C+I%27d+like+to+submit+a+referral"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Submit via WhatsApp
            </a>
            <p className="text-center text-gray-600 text-xs">
              Clicking the button will open WhatsApp so you can send us your
              referral details directly.
            </p>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-900 to-gray-900 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Not a Customer Yet?
          </h2>
          <p className="text-gray-300 mb-8">
            Try IPTV Canada free for 24 hours — no credit card required. Then
            start referring and earn free years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/free-trial"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              Get Free Trial
            </a>
            <a
              href="/pricing"
              className="border border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
