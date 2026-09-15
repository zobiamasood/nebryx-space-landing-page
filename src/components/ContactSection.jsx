import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations'
import Logo from './Logo'

const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'contact@nebryxsolutions.com',
    href: 'mailto:contact@nebryxsolutions.com',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: '📍',
    label: 'Office',
    value: 'Global team, worldwide availability',
    href: null,
  },
]

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', company: '', budget: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '', company: '', budget: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="section-py bg-slate-950/90">
      <div className="container mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Let's discuss your next project.
          </h2>
          <p className="mt-4 text-slate-300">
            Reach out to explore how we can transform your vision into a premium digital experience.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-700/70 bg-gradient-to-br from-slate-900/60 to-slate-950/60 p-8 sm:p-10 shadow-[0_35px_120px_rgba(14,165,233,0.12)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative">
                  <label className="block text-sm text-slate-300 mb-2">
                    Name <span className="text-cyan-300">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="input-field"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm text-slate-300 mb-2">
                    Email <span className="text-cyan-300">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="input-field"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    required
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="relative">
                  <label className="block text-sm text-slate-300 mb-2">
                    Company
                  </label>
                  <input
                    name="company"
                    type="text"
                    placeholder="Your company"
                    className="input-field"
                    value={formData.company}
                    onChange={handleChange}
                    onFocus={() => setFocused('company')}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm text-slate-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    className="input-field"
                    value={formData.budget}
                    onChange={handleChange}
                    onFocus={() => setFocused('budget')}
                    onBlur={() => setFocused(null)}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10K</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="over-100k">$100K+</option>
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm text-slate-300 mb-2">
                  Project Details <span className="text-cyan-300">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project, goals, and timeline..."
                  className="input-field resize-none"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
                className="btn-primary w-full text-lg"
              >
                {submitted ? 'Message Sent! 🎉' : 'Send Message'}
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-200 text-sm"
                >
                  ✓ Thanks! We've received your message and will be in touch within 24 hours.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col justify-between gap-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-900/40 to-slate-950/40 p-8"
            >
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-300 mb-4">Reach us</p>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in touch</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className="p-4 rounded-2xl border border-slate-700/30 bg-slate-950/40 hover:border-cyan-300/30 hover:bg-slate-900/50 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{info.icon}</span>
                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm text-slate-200 hover:text-cyan-300 transition-colors mt-1"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-slate-200 mt-1">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-slate-700/50 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 p-8"
            >
              <h3 className="text-lg font-semibold text-white mb-3">Response Time</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
              </p>
              <div className="mt-4 p-3 rounded-xl bg-slate-950/40 border border-slate-700/30">
                <p className="text-xs text-slate-400">Available</p>
                <p className="text-sm font-semibold text-cyan-300 mt-1">Monday - Friday, 9 AM - 6 PM EST</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
