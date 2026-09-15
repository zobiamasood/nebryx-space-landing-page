import { motion } from 'framer-motion'
import aboutImage from '../assets/astronaut.jpg'

const aboutStats = [
  { value: '50+', label: 'Projects Launched' },
  { value: '20+', label: 'Global Clients' },
  { value: '100%', label: 'Retention Rate' },
]

const aboutValues = [
  {
    title: 'Innovation',
    description: 'We build solutions that make your brand feel modern, distinct, and memorable.',
  },
  {
    title: 'Performance',
    description: 'Every experience is optimized for speed, clarity, and business outcomes.',
  },
  {
    title: 'Strategy',
    description: 'We align your audience, positioning, and launch plan with conversion goals.',
  },
  {
    title: 'Design',
    description: 'Premium interfaces that communicate trust, energy, and modern luxury.',
  },
]

const AboutSection = () => (
  <section id="about" className="relative section-py overflow-hidden bg-slate-950/95 text-slate-100">
    <div className="pointer-events-none absolute -top-16 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
    <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-400/10 blur-3xl" />

    <div className="container mx-auto px-5 lg:px-8 relative">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8 relative z-10"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">About Nebryx</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            We design premium digital experiences that deliver measurable business growth.
          </h2>
          <p className="max-w-3xl text-lg text-slate-300 leading-relaxed">
            Nebryx crafts digital products, brand systems, and automation solutions for teams ready to launch with clarity, speed, and premium polish.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {aboutStats.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 120, damping: 14 }}
                className="glass-card border-white/10 bg-white/5 p-6"
              >
                <p className="text-4xl font-semibold text-white">{item.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-cyan-300">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {aboutValues.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="feature-card group bg-slate-950/90"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10"
        >
          <div className="relative overflow-hidden rounded-[36px] border border-slate-700/70 bg-slate-950/80 p-1 shadow-[0_35px_120px_rgba(99,102,241,0.15)]">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at top left, rgba(56, 189, 248, 0.12), transparent 20%), radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.12), transparent 20%)',
              }}
            />
            <img
              src={aboutImage}
              alt="Agency workspace illustration"
              className="relative h-full min-h-96 w-full rounded-[34px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default AboutSection
