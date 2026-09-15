import aboutImage from '../assets/ChatGPT Image May 5, 2026, 12_07_10 AM.png'

const About = () => (
  <section className="container mx-auto px-5 py-20 lg:px-8">
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About Nebryx</p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">Designing tomorrow’s technology with a human-centered edge.</h2>
        <p className="max-w-xl text-slate-300">Nebryx Solutions delivers futuristic digital products, intelligent web and mobile ecosystems, and strategic technology consulting that helps ambitious brands move faster. We combine research-led design with cloud-ready engineering to build experiences that feel premium, powerful, and refined.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="feature-card">
            <h3 className="text-lg font-semibold text-white">Mission</h3>
            <p className="text-slate-300">Empower teams with transformative platforms that push modern digital boundaries.</p>
          </div>
          <div className="feature-card">
            <h3 className="text-lg font-semibold text-white">Vision</h3>
            <p className="text-slate-300">A future where technology is elegant, reliable, and inspired by the wonder of the cosmos.</p>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-4xl border border-slate-700/70 bg-slate-950/80 p-5 shadow-[0_30px_120px_rgba(99,102,241,0.15)]">
        <img src={aboutImage} alt="Satellite orbiting a glowing planet" className="h-full w-full rounded-[28px] object-cover shadow-2xl shadow-cyan-500/10" />
        <div className="absolute bottom-5 left-5 rounded-3xl border border-cyan-300/20 bg-slate-950/70 p-4 backdrop-blur-xl text-sm text-slate-100">High-impact space-grade strategy with visual storytelling and performance at its core.</div>
      </div>
    </div>
  </section>
)

export default About
