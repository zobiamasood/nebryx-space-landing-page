import { motion } from 'framer-motion'
import galaxyImage from '../assets/galaxy.jpg'
import moonSurface from '../assets/moon-surface.jpg'
import astronaut from '../assets/astronaut.jpg'

const projects = [
  {
    brand: 'Astral Labs',
    title: 'AI-Powered Analytics Platform',
    description: 'Revolutionary data analytics platform using machine learning for predictive insights and scalable business intelligence.',
    image: galaxyImage,
    tags: ['AI Solutions', 'Web Development', 'Analytics'],
    type: 'SaaS Platforms'
  },
  {
    brand: 'Lunar Commerce',
    title: 'E-commerce Revolution',
    description: 'Next-generation online marketplace with advanced automation, AI recommendations, and seamless user experience.',
    image: moonSurface,
    tags: ['E-commerce', 'AI Solutions', 'Automation'],
    type: 'E-Commerce Stores'
  },
  {
    brand: 'Orbital Systems',
    title: 'Space Mission Control System',
    description: 'Real-time monitoring and control system for satellite operations with intelligent automation and predictive maintenance.',
    image: astronaut,
    tags: ['Software Development', 'Maintenance', 'Analytics'],
    type: 'Dashboard Applications'
  },
  {
    brand: 'Nebula Travel',
    title: 'Booking Platform',
    description: 'Comprehensive travel booking system with integrated payment processing and real-time availability management.',
    image: galaxyImage,
    tags: ['Booking Systems', 'Web Development', 'Automation'],
    type: 'Booking Platforms'
  },
  {
    brand: 'Quantum Finance',
    title: 'Financial Dashboard',
    description: 'Advanced financial management platform with AI-driven insights and automated reporting capabilities.',
    image: moonSurface,
    tags: ['AI Solutions', 'Dashboard', 'Analytics'],
    type: 'Dashboard Applications'
  },
  {
    brand: 'Stellar Health',
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare platform with patient management, appointment scheduling, and medical record integration.',
    image: astronaut,
    tags: ['Software Development', 'Web Development', 'Maintenance'],
    type: 'SaaS Platforms'
  }
]

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative py-20 bg-gradient-to-b from-space-card to-black">
      <div className="container mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Discover our premium projects that showcase cutting-edge technology, innovative design, and exceptional results
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-4xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#050812] shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
                <div className="portfolio-frame absolute inset-x-6 top-5 h-3 rounded-full bg-white/10 backdrop-blur-xl flex items-center gap-2 px-3">
                  <span className="frame-dot bg-red-400" />
                  <span className="frame-dot bg-yellow-300" />
                  <span className="frame-dot bg-green-400" />
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-cyan-400/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-xs text-cyan-300 font-medium">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.28em] text-cyan-300">
                  <span>{project.brand}</span>
                  <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-purple-300">Premium</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary">View All Projects</a>
        </motion.div>
      </div>
    </section>
  )
}

export default PortfolioSection