import { motion } from 'framer-motion'

const reasons = [
  {
    icon: 'Growth',
    title: 'Growth Driven',
    label: 'Focused on revenue and audience expansion through digital excellence.',
    value: '140%',
    suffix: 'Growth',
  },
  {
    icon: 'Tech',
    title: 'Tech Powered',
    label: 'Built on modern systems that scale with your business ambitions.',
    value: '10x',
    suffix: 'Performance',
  },
  {
    icon: 'Future',
    title: 'Future Ready',
    label: 'Designed to adapt, evolve, and keep your platform competitive.',
    value: '24/7',
    suffix: 'Support',
  },
  {
    icon: 'Results',
    title: 'Results Focused',
    label: 'Optimized for conversion, retention, and long-term value.',
    value: '98%',
    suffix: 'Retention',
  },
]

const WhyChooseUsSection = () => (
  <section id="why" className="section-py bg-slate-950/90">
    <div className="container mx-auto px-5 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12 max-w-3xl"
      >
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Why Choose Us</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          A premium approach to digital growth, strategy, and design.
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
          We combine high-end execution, conversion-first thinking, and robust technology to create experiences that feel premium and perform exceptionally.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-4">
        {reasons.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card border border-slate-700/70 bg-slate-950/70 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-cyan-400/60"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-400/10 text-2xl text-cyan-300">
              {item.icon}
            </div>
            <div className="text-3xl font-semibold text-white">{item.value}</div>
            <p className="mt-1 text-sm uppercase tracking-[0.3em] text-cyan-300">{item.suffix}</p>
            <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-slate-300 text-sm leading-relaxed">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default WhyChooseUsSection
