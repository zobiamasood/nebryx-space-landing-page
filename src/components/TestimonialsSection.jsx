import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeInUp } from '../utils/animations'

const testimonials = [
  {
    quote: 'Nebryx transformed our online brand and delivered a website that feels modern, fast, and truly premium.',
    name: 'Ava Sinclair',
    role: 'Founder, Stellar Commerce',
    company: 'Stellar Commerce',
    rating: 5,
    image: '👩‍💼',
  },
  {
    quote: 'The Nebryx team helped us launch with speed and precision. Their process is clear and their work is outstanding.',
    name: 'Jordan Blake',
    role: 'CEO, Luna Labs',
    company: 'Luna Labs',
    rating: 5,
    image: '👨‍💼',
  },
  {
    quote: 'Their focus on growth and performance helped us increase conversion rates by 38% in three months.',
    name: 'Priya Nair',
    role: 'Marketing Lead, Nova Retail',
    company: 'Nova Retail',
    rating: 5,
    image: '👩‍🔬',
  },
]

const TestimonialsSection = () => {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="section-py bg-slate-950/90">
      <div className="container mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            What our clients say.
          </h2>
          <p className="mt-4 text-slate-300">
            Trusted by leading brands to deliver exceptional results.
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-[36px] border border-slate-700/70 bg-slate-950/80 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.3)]">
          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={`rounded-full border px-4 py-2 text-sm transition ${active === index ? 'border-cyan-300 text-white bg-slate-900' : 'border-slate-700 text-slate-400 hover:border-cyan-300'}`}
                onClick={() => setActive(index)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="mt-10 rounded-4xl bg-slate-950/90 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.25)]">
            <p className="text-xl leading-relaxed text-slate-200 sm:text-2xl">“{testimonials[active].quote}”</p>
            <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-semibold text-white">{testimonials[active].name}</p>
                <p className="text-sm text-slate-400">{testimonials[active].role}</p>
              </div>
              <div className="flex items-center gap-1 text-cyan-300">
                {Array.from({ length: testimonials[active].rating }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection