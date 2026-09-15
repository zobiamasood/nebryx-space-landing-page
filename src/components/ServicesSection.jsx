import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '../utils/animations'

const services = [
  {
    title: 'Software Development',
    description: 'Enterprise-grade digital systems engineered to scale revenue and reduce friction.',
    value: 'Reduce operational costs and accelerate delivery with high-quality software products.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-current">
        <path d="M5 12h14M9 6h6M10 18h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Web Development',
    description: 'Custom online experiences built for conversion, speed, and memorable brand presence.',
    value: 'Increase user trust and conversion by delivering modern, lightning-fast digital platforms.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-current">
        <path d="M3 12h18M3 6h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'AI & Machine Learning',
    description: 'Data-driven automation that turns customer insight into strategic, profitable action.',
    value: 'Unlock predictive intelligence and streamline operations with modern AI systems.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-current">
        <path d="M12 3v18m9-9H3" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Workflow Automation',
    description: 'Eliminate manual work, reduce errors, and accelerate team productivity across departments.',
    value: 'Save time and deliver faster results with intelligent automation tailored to your business.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-current">
        <path d="M4 7h16M4 12h10M4 17h7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Premium storefronts and commerce engines that turn traffic into loyal customers.',
    value: 'Boost revenue with seamless shopping experiences and optimized purchase journeys.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-current">
        <path d="M5 6h14l-1.5 9h-11L5 6zm4 13a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Support & Optimization',
    description: 'Ongoing care that protects uptime, stabilizes growth, and keeps systems performing beautifully.',
    value: 'Maintain premium performance with proactive monitoring, updates, and optimization support.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-12 h-12 stroke-current">
        <path d="M12 4v4M12 16v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const ServicesSection = () => {
  return (
    <section id="services" className="section-py bg-slate-950/90">
      <div className="container mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Services</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Business-driven digital services with measurable ROI.
          </h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            We partner with teams to deliver premium digital products, automation systems, and marketing platforms built to scale.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-950/40 p-8 transition-all duration-300 hover:border-cyan-300/30 hover:bg-slate-900/60"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl border border-slate-700/50 bg-cyan-400/10 text-cyan-300 transition group-hover:border-cyan-300/50 group-hover:bg-cyan-400/20">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="rounded-3xl border border-slate-700/30 bg-slate-950/80 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-2">Value</p>
                <p className="text-sm font-semibold text-cyan-300 leading-relaxed">{service.value}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-primary">
            Let's Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection
