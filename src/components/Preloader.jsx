import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import brandLogoImage from '../assets/logo.jpeg'
import brandNameImage from '../assets/brand name .jpeg'

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 900)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 600)
          return 100
        }
        return prev + 3
      })
    }, 25)

    return () => {
      clearTimeout(timer)
      clearInterval(interval)
    }
  }, [onComplete])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative w-full max-w-xl px-6 py-10 text-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto mb-8 w-28 h-28 rounded-4xl bg-white/5 border border-cyan-400/15 shadow-[0_0_60px_rgba(56,189,248,0.2)] overflow-hidden"
        >
          <img
            src={brandLogoImage}
            alt="Nebryx Brand"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.22), transparent 42%)'}} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: showText ? 1 : 0, y: showText ? 0 : 24 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-3"
        >
          <img
            src={brandNameImage}
            alt="Nebryx Solutions"
            className="mx-auto mb-4 h-auto w-60 object-contain"
          />
          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-slate-400">
            Cinematic premium digital agency experience
          </p>
        </motion.div>

        <div className="mt-10 w-full rounded-full bg-white/10 border border-white/10 overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.16)]">
          <motion.div
            className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 shadow-[0_0_30px_rgba(56,189,248,0.35)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.15, ease: 'linear' }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-5 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.32em] text-slate-400"
        >
          <span className="inline-flex items-center gap-2">Launching premium journey</span>
          <span className="text-cyan-300">{progress}%</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Preloader