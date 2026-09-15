import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useState } from 'react'

const CtaSection = () => {
  const [particlesLoaded, setParticlesLoaded] = useState(false)

  const particlesInit = async (engine) => {
    await loadFull(engine)
    setParticlesLoaded(true)
  }

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#06b6d4", "#6d28d9", "#ffffff"],
      },
      links: {
        color: "#06b6d4",
        distance: 120,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 0.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 600,
        },
        value: 40,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  }

  return (
    <section id="final-cta" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-16" style={{background: 'radial-gradient(circle at top left, rgba(56, 189, 248, 0.08), transparent 25%), linear-gradient(180deg, #050814, #02040c)'}}>
      <Particles
        id="cta-particles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0"
      />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl" style={{background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1), transparent 45%)'}} />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-purple-400/20 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-cyan-400/10 rounded-full blur-sm animate-float" style={{ animationDuration: '15s' }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md px-8 py-16 text-center shadow-2xl"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 text-sm uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-sm"
        >
          Ready to Innovate?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Ready to Build Something{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Extraordinary?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl text-lg text-slate-300 leading-relaxed"
        >
          Join us in creating the future of digital innovation. Let's transform your vision into reality with cutting-edge technology and premium design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="btn-primary text-lg px-8 py-4 text-center"
          >
            Start Your Project Today
          </a>
          <a
            href="#contact"
            className="btn-outline text-lg px-8 py-4 text-center"
          >
            Book a Consultation
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CtaSection