const services = [
  {
    title: 'Web Development',
    description: 'Build fast, secure websites with modern architecture and seamless performance.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-current">
        <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    title: 'App Development',
    description: 'Native and cross-platform experiences designed for speed, reliability, and scale.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-current">
        <path d="M8 3h8l3 3v12l-3 3H8l-3-3V6l3-3Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M8 7h8" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'UI/UX Design',
    description: 'Craft premium digital interfaces with elegant motion and intuitive user flows.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-current">
        <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Cloud Strategy',
    description: 'Deploy scalable systems and secure cloud infrastructure for mission-critical apps.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-current">
        <path d="M6 16c-2 0-3-2-2-4 1-2 3-2 4-2 .2-2.4 2.3-4 4.9-4 2.8 0 5 2.3 5 5 0 .2 0 .4-.1.6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M16 17H8a4 4 0 0 1 0-8h1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    title: 'Product Innovation',
    description: 'Accelerate product vision with research-led development and digital transformation.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-current">
        <path d="M12 3v18M3 12h18" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Tech Consulting',
    description: 'Partner with experts who turn complex challenges into winning solutions.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 stroke-current">
        <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 7v10M16 7v10" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
]

const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 16.8 7.1 18.2l.9-5.5-4-3.9 5.5-.8L12 3Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    title: 'Innovation First',
    description: 'We blend futuristic design with pragmatic engineering for a premium digital presence.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M3 12h18M12 3v18" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: 'Fast Delivery',
    description: 'Rapid roadmaps and agile delivery keep launches on schedule without losing quality.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path d="M5 12l4 4L19 6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    title: 'Reliable Solutions',
    description: 'Built for stability, scale, and long-term growth across digital ecosystems.',
  },
]

const Services = () => (
  <section className="container mx-auto px-5 py-20 lg:px-8">
    <div className="mb-12 max-w-3xl space-y-3 text-center">
      <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">What we do</p>
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">Premium services for modern digital brands.</h2>
      <p className="text-slate-300">From product launches to platform optimization, we deliver strategic services that feel futuristic, polished, and reliable.</p>
    </div>
    <div className="service-grid">
      {services.map((service) => (
        <article key={service.title} className="service-card">
          <div className="icon-box text-cyan-300">{service.icon}</div>
          <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
          <p className="mt-3 text-slate-300">{service.description}</p>
        </article>
      ))}
    </div>
    <div className="mt-16 rounded-4xl border border-slate-700/60 bg-slate-950/80 p-8 shadow-[0_35px_120px_rgba(30,58,138,0.18)] sm:p-12">
      <div className="grid gap-10 lg:grid-cols-3 lg:items-start">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Why choose us</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">A trusted partner for faster innovation.</h2>
          <p className="max-w-md text-slate-300">Every engagement is crafted to make your product stronger, launch-ready, and built for long-term growth across digital ecosystems.</p>
        </div>
        {reasons.map((item) => (
          <div key={item.title} className="flex items-start gap-4 rounded-3xl border border-slate-700/50 bg-slate-950/60 p-6 transition hover:border-cyan-300/50 hover:bg-slate-900/80">
            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-300">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Services
