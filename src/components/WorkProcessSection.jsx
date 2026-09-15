import { motion } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We uncover audience needs, brand goals, and market opportunities before the first wireframe.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We define positioning, messaging, and conversion routes for a winning product roadmap.',
  },
  {
    step: '03',
    title: 'Design',
    description: 'We create premium interfaces, motion systems, and polished experience design.',
  },
  {
    step: '04',
    title: 'Development',
    description: 'We engineer stable, scalable products with clean code and performance-first architecture.',
  },
  {
    step: '05',
    title: 'Launch',
    description: 'We deploy with precision, validate performance, and ensure a seamless rollout.',
  },
  {
    step: '06',
    title: 'Support',
    description: 'We provide ongoing optimization, updates, and support so your product keeps improving.',
  },
]

const WorkProcessSection = () => (
  <section id="process" className="section-py bg-slate-950/90">
    <div className="container mx-auto px-5 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12 max-w-3xl"
      >
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Process</p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          A premium process designed for predictable delivery and measurable outcomes.
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300 leading-relaxed">
          From discovery through launch and support, our framework keeps every project aligned to your business goals.
        </p>
      </motion.div>

      <div className="relative grid gap-8 lg:grid-cols-2">
        <div className="timeline-line absolute left-8 top-10 bottom-10 hidden lg:block" />
        {steps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            viewport={{ once: true }}
            className={`glass-card border border-slate-700/70 bg-slate-950/70 p-7 shadow-[0_25px_60px_rgba(15,23,42,0.35)] ${index % 2 === 0 ? 'lg:mr-auto lg:w-[85%]' : 'lg:ml-auto lg:w-[85%]'}`}
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/10 text-xl font-semibold text-cyan-300">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            </div>
            <p className="text-slate-300 leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default WorkProcessSection
