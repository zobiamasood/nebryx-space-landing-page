import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      
      let start = 0
      const increment = end / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}</span>
}

const partnerLogos = ['Aurora', 'Pulse', 'Vertex', 'Nabla', 'Flux', 'Nova']

const stats = [
  { number: 120, label: 'Products Delivered', suffix: '+' },
  { number: 34, label: 'Global Clients', suffix: '+' },
  { number: 98, label: 'Client Retention', suffix: '%' },
  { number: 14, label: 'Industries Served', suffix: '+' },
]

const TrustSection = () => (
  <section id="trust" className="section-py bg-slate-950/95">
    <div className="container mx-auto px-5 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-14 text-center max-w-3xl mx-auto"
      >
        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Trust & proof</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          Built with trusted partners and performance that moves businesses forward.
        </h2>
        <p className="mt-5 text-slate-400 leading-relaxed">
          Our clients rely on us for elegant digital platforms, strategic execution, and measurable growth across enterprise and startup ecosystems.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-4 mb-14">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 text-center"
          >
            <div className="text-5xl font-black text-white mb-3">
              <Counter end={stat.number} />{stat.suffix}
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-2">{stat.label}</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Proven business value designed to scale with every launch.
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="rounded-4xl border border-white/10 bg-slate-950/70 p-8"
      >
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 mb-3">Featured partners</p>
          <h3 className="text-2xl font-semibold text-white">
            Trusted by category leaders across technology, finance, and commerce.
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {partnerLogos.map((logo) => (
            <div key={logo} className="rounded-3xl border border-slate-700/50 bg-slate-900/70 p-4 text-center text-sm text-slate-300 transition hover:border-cyan-300/50 hover:bg-slate-950/90">
              {logo}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

export default TrustSection
