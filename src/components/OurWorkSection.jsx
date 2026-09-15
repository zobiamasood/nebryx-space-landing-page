import galaxyImage from '../assets/galaxy.jpg'
import moonSurface from '../assets/moon-surface.jpg'

const projects = [
  {
    brand: 'Astral Labs',
    title: 'AI-Powered Analytics Platform',
    description: 'Revolutionary data analytics platform using machine learning for predictive insights.',
    image: galaxyImage,
    tags: ['AI Solutions', 'Web Development', 'Analytics'],
  },
  {
    brand: 'Lunar Commerce',
    title: 'E-commerce Revolution',
    description: 'Next-generation online marketplace with advanced automation and AI recommendations.',
    image: moonSurface,
    tags: ['E-commerce', 'AI Solutions', 'Automation'],
  },
  {
    brand: 'Orbital Systems',
    title: 'Space Mission Control System',
    description: 'Real-time monitoring and control system for satellite operations and space missions.',
    image: galaxyImage,
    tags: ['Software Development', 'Maintenance', 'Analytics'],
  },
]

const OurWorkSection = () => (
  <section id="work" className="relative py-20">
    <div className="container mx-auto px-5 lg:px-8">
      <div className="mb-12 max-w-3xl space-y-3 text-center">
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Our Portfolio</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Pushing the boundaries of digital innovation</h2>
        <p className="text-slate-300">Explore our recent projects that showcase our expertise in cutting-edge technologies and creative solutions.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article key={index} className="group relative overflow-hidden rounded-4xl border border-slate-700/60 bg-slate-950/80 shadow-[0_35px_120px_rgba(14,165,233,0.12)] transition-all duration-500 hover:scale-105 hover:shadow-[0_45px_150px_rgba(14,165,233,0.18)]">
            <div className="aspect-4/3 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="mb-3 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.28em] text-cyan-300">
                <span>{project.brand}</span>
                <span className="rounded-full border border-cyan-400/20 bg-slate-950/70 px-3 py-1">Featured</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-slate-300 text-sm">{project.description}</p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a href="#contact" className="btn-primary">Start Your Project</a>
      </div>
    </div>
  </section>
)

export default OurWorkSection