import { motion } from 'framer-motion'
import Logo from './Logo'

const Footer = () => {
  const footerLinks = {
    services: [
      { label: 'Web Development', href: '#services' },
      { label: 'Software Development', href: '#services' },
      { label: 'AI Solutions', href: '#services' },
      { label: 'E-Commerce', href: '#services' },
    ],
    company: [
      { label: 'About', href: '#about' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Process', href: '#process' },
      { label: 'Contact', href: '#contact' },
    ],
    support: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Documentation', href: '#' },
      { label: 'Support', href: '#contact' },
      { label: 'Blog', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: '𝕏', label: 'Twitter', href: '#' },
    { icon: 'in', label: 'LinkedIn', href: '#' },
    { icon: '⚙️', label: 'GitHub', href: '#' },
    { icon: '★', label: 'Other', href: '#' },
  ]

  return (
    <footer className="bg-slate-950/90 border-t border-slate-800/70">
      <div className="container mx-auto px-5 py-16 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Logo size="medium" />
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              Premium digital solutions for ambitious brands ready to lead the future.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg border border-slate-700/50 bg-slate-950/40 flex items-center justify-center text-slate-400 hover:border-cyan-300/50 hover:text-cyan-300 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <h4 className="font-semibold text-white mb-4">Ready to start?</h4>
            <p className="text-sm text-slate-400 mb-4">
              Let's discuss your next digital project.
            </p>
            <a
              href="#contact"
              className="btn-primary text-sm inline-block"
            >
              Get Started
            </a>
            <p className="mt-6 text-xs text-slate-500">
              📧 contact@nebryxsolutions.com
            </p>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800/70 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© 2026 Nebryx Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-cyan-300 transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
