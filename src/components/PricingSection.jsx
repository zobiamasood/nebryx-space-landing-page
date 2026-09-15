const pricingPlans = [
  {
    name: 'Starter',
    price: '$2,999',
    description: 'Perfect for small businesses and startups',
    features: [
      'Custom Website Development',
      'Basic SEO Setup',
      'Mobile Responsive Design',
      '3 Months Support',
      'Basic Analytics',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$7,999',
    description: 'Ideal for growing businesses with complex needs',
    features: [
      'Full-Stack Web Development',
      'Advanced SEO & Analytics',
      'E-commerce Integration',
      'AI Solutions Integration',
      '6 Months Support',
      'Performance Optimization',
      'Custom API Development',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large-scale operations',
    features: [
      'Everything in Professional',
      'Custom Software Development',
      'Advanced AI/ML Solutions',
      '24/7 Premium Support',
      'Dedicated Development Team',
      'Scalable Cloud Infrastructure',
      'Ongoing Maintenance & Updates',
    ],
    popular: false,
  },
]

const PricingSection = () => (
  <section id="pricing" className="relative py-20">
    <div className="container mx-auto px-5 lg:px-8">
      <div className="mb-12 max-w-3xl space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Pricing Plans</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Choose the perfect plan for your mission</h2>
        <p className="text-slate-300">Transparent pricing with no hidden fees. All plans include our premium support and cutting-edge technology stack.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-4xl border bg-slate-950/80 p-8 shadow-[0_35px_120px_rgba(14,165,233,0.12)] transition-all duration-300 hover:scale-105 hover:shadow-[0_45px_150px_rgba(14,165,233,0.18)] ${
              plan.popular
                ? 'border-cyan-400/60 bg-slate-950/90 shadow-[0_35px_120px_rgba(56,189,248,0.18)]'
                : 'border-slate-700/60'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 text-sm font-semibold text-white">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-cyan-300">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-slate-400">/project</span>}
              </div>
              <p className="text-slate-300 text-sm mb-6">{plan.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3 text-slate-300">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 text-cyan-300 shrink-0">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full rounded-2xl py-3 font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                  : 'border border-slate-600 bg-slate-800/50 text-slate-200 hover:border-cyan-400/50 hover:bg-cyan-400/10'
              }`}
            >
              {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-slate-400 mb-4">Need a custom solution?</p>
        <a href="#contact" className="text-cyan-300 hover:text-cyan-200 transition-colors">
          Contact our team for a personalized quote →
        </a>
      </div>
    </div>
  </section>
)

export default PricingSection