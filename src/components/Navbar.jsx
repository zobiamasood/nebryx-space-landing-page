import { useState } from 'react'
import { smoothScroll, useScrollSpy } from '../utils/scrolling'
import Logo from './Logo'

const navItems = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Services', href: 'services' },
  { label: 'Why Us', href: 'why' },
  { label: 'Process', href: 'process' },
  { label: 'Portfolio', href: 'portfolio' },
  { label: 'Testimonials', href: 'testimonials' },
  { label: 'FAQ', href: 'faq' },
  { label: 'Contact', href: 'contact' },
]

const Navbar = () => {
  const activeSection = useScrollSpy(navItems.map((item) => item.href))
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (href) => {
    smoothScroll(href)
    setMenuOpen(false)
  }

  return (
    <header className="site-header sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <div className="flex items-center gap-4">
          <Logo size="small" className="min-w-12" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-300">Nebryx</p>
            <p className="text-xs text-slate-400">Premium Digital Agency</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className={`text-sm font-medium transition ${activeSection === item.href ? 'text-cyan-300' : 'text-slate-300 hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            onClick={() => handleNavClick('contact')}
            className="btn-primary text-sm"
          >
            Get Started
          </button>
        </div>

        <button
          type="button"
          className="lg:hidden menu-btn text-slate-100"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="block h-0.5 w-6 bg-white transition-all duration-300" />
          <span className="mt-1 block h-0.5 w-6 bg-white transition-all duration-300" />
          <span className="mt-1 block h-0.5 w-6 bg-white transition-all duration-300" />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
          <div className="flex flex-col gap-2 px-5 py-5">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className={`w-full text-left text-sm font-medium py-3 transition ${activeSection === item.href ? 'text-cyan-300' : 'text-slate-300 hover:text-white'}`}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="btn-primary w-full text-center"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
