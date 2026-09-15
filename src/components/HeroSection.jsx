import { useState } from 'react'
import { motion } from 'framer-motion'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { scrollIndicator } from '../utils/animations'
import brandHeroImage from '../assets/brand name .jpeg'

const HeroSection = () => {
  const [particlesLoaded, setParticlesLoaded] = useState(false)

  const particlesInit = async (engine) => {
    await loadFull(engine)
    setParticlesLoaded(true)
  }

  const particlesOptions = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 3,
        },
        repulse: {
          distance: 180,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ['#42d2ff', '#9f7aea', '#ffffff'],
      },
      links: {
        color: '#42d2ff',
        distance: 140,
        enable: true,
        opacity: 0.16,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'out',
        },
        random: true,
        speed: 0.6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 900,
        },
        value: 110,
      },
      opacity: {
        value: 0.35,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-hero-gradient">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute inset-0 opacity-80"
      />

      <div className="absolute inset-0 hero-stars pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at top left, rgba(56, 189, 248, 0.14), transparent 20%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1), transparent 22%)'}} />

      <div className="relative z-10 container mx-auto px-5 lg:px-8 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mb-6 inline-flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-4 py-2 text-sm uppercase tracking-[0.35em] text-cyan-300 shadow-[0_12px_35px_rgba(56,189,248,0.08)]">
                Premium Digital Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.9 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.98] tracking-tigher text-slate-100"
            >
              Creating cinematic, futuristic digital experiences that feel expensive, immersive, and unforgettable.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.7 }}
              className="max-w-3xl mx-auto lg:mx-0 mt-8 text-lg md:text-xl text-slate-300 leading-relaxed tracking-[0.01em]"
            >
              We design premium web platforms, branded experiences, and intelligent automation for visionary companies ready to lead the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#contact" className="btn-primary relative overflow-hidden">
                Start Your Project
              </a>
              <a href="#portfolio" className="btn-outline">View Portfolio</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.66, duration: 0.7 }}
              className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0"
            >
              {['AI Powered', 'Cinematic UI', 'Scalable Systems'].map((badge) => (
                <div
                  key={badge}
                  className="rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-cyan-200 shadow-[0_18px_50px_rgba(15,23,42,0.25)]"
                >
                  <span className="block text-xs uppercase tracking-[0.35em] text-slate-400 mb-2">Signature</span>
                  <span className="font-semibold text-white">{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-xl">
              <div className="absolute -right-12 -top-10 w-72 h-72 rounded-full bg-cyan-400/15 blur-3xl" />
              <div className="absolute -left-12 bottom-8 w-56 h-56 rounded-full bg-purple-400/15 blur-3xl" />
              <div className="hero-card relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 shadow-[0_40px_120px_rgba(8,15,28,0.55)]">
                <div className="absolute inset-0" style={{background: 'radial-gradient(circle at top left, rgba(56, 189, 248, 0.12), transparent 24%), radial-gradient(circle at 80% 30%, rgba(168, 85, 247, 0.1), transparent 24%)'}} />
                <div className="absolute left-6 top-6 h-3 w-24 rounded-full bg-white/10 backdrop-blur-xl" />
                <div className="absolute right-6 top-10 h-24 w-24 rounded-full bg-cyan-300/5 blur-3xl" />
                <div className="absolute left-10 bottom-10 h-28 w-28 rounded-full bg-purple-300/8 blur-3xl" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="hero-planet relative">
                    <div className="hero-planet-inner" />
                    <div className="absolute -inset-7 rounded-full border border-cyan-400/15" />
                    <div className="absolute -inset-12 rounded-full border border-purple-400/15" />
                  </div>
                </motion.div>

                <div
                  className="absolute top-10 right-10 w-36 rounded-4xl border border-white/10 bg-white/10 backdrop-blur-xl p-4 shadow-[0_25px_60px_rgba(15,23,42,0.28)] animate-float"
                  style={{ animationDuration: '4.4s' }}
                >
                  <img
                    src={brandHeroImage}
                    alt="Nebryx Brand"
                    className="w-full h-24 object-cover rounded-3xl border border-white/10 shadow-lg"
                  />
                  <p className="mt-3 text-xs uppercase tracking-[0.35em] text-cyan-200">
                    Signature Brand
                  </p>
                </div>

                <div
                  className="absolute left-8 bottom-12 w-40 rounded-4xl border border-white/10 bg-white/10 backdrop-blur-xl p-4 shadow-[0_25px_60px_rgba(15,23,42,0.28)] animate-float"
                  style={{ animationDuration: '4.6s', animationDelay: '0.8s' }}
                >
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-cyan-200">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" /> Orbit
                  </div>
                  <p className="mt-3 text-sm text-slate-300">
                    Floating interface elements and premium depth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          {...scrollIndicator}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Scroll to explore</p>
          <div className="flex flex-col items-center gap-1">
            <svg
              className="w-6 h-6 text-cyan-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection

