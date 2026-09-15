import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="container mx-auto px-5 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-4xl border border-slate-700/60 bg-slate-950/90 p-8 shadow-[0_35px_120px_rgba(14,165,233,0.12)] sm:p-10">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Start your next digital mission.</h2>
          <p className="mt-3 max-w-xl text-slate-300">Reach out to create a tailored strategy, launch your product, or accelerate your existing platform with refined technology.</p>
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block text-sm text-slate-200">
                <span className="text-slate-300">Name</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="input-field"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="block text-sm text-slate-200">
                <span className="text-slate-300">Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="input-field"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <label className="block text-sm text-slate-200">
              <span className="text-slate-300">Message</span>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your project"
                className="input-field resize-none"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit" className="btn-primary">Send Message</button>
            {submitted && (
              <p className="mt-4 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-cyan-200">Thanks! Your message is ready to send. This is a frontend-only demo form.</p>
            )}
          </form>
        </div>
      <div className="relative overflow-hidden rounded-4xl border border-slate-700/60 p-8" style={{background: 'radial-gradient(circle at top, rgba(59, 130, 246, 0.16), transparent 40%), radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.1), transparent 30%)'}}>
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at top left, rgba(59, 130, 246, 0.2), transparent 26%), radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.16), transparent 24%)'}} />
        <div className="relative z-10 flex h-full flex-col justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Reach us</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">Send a message and get a bespoke roadmap.</h3>
          </div>
          <div className="grid gap-5 text-slate-200">
            <div className="rounded-3xl border border-slate-700/60 bg-slate-950/60 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Email</p>
              <p className="mt-2 text-lg">contact@nebryxsolutions.com</p>
            </div>
            <div className="rounded-3xl border border-slate-700/60 bg-slate-950/60 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Office</p>
              <p className="mt-2 text-lg">Global team, available for digital launches worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}

export default Contact
