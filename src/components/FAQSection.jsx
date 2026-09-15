import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations'

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Most projects take 8-16 weeks depending on scope. We conduct an initial discovery phase to establish realistic timelines, breaking down complex projects into phases with clear milestones for better management and transparency.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes, we provide 24/7 technical support and proactive maintenance packages. Our support includes regular security updates, performance monitoring, bug fixes, and feature enhancements to keep your platform running optimally.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Absolutely. We specialize in seamless integrations with existing platforms, APIs, and third-party services. Our team assesses your current infrastructure and builds custom solutions that complement your existing tech stack.",
  },
  {
    question: "How do you ensure quality and performance?",
    answer: "We follow industry best practices including automated testing, code reviews, performance optimization, and security audits. Every project undergoes rigorous QA testing across devices and browsers before launch.",
  },
  {
    question: "What is your communication process during development?",
    answer: "We maintain transparent communication through weekly standups, project dashboards, and monthly reviews. You'll have direct access to your project manager and development team for real-time updates and feedback.",
  },
  {
    question: "Do you provide training and documentation?",
    answer: "Yes, we provide comprehensive documentation, video guides, and training sessions for your team. We ensure you have all the resources needed to manage and scale your platform independently.",
  },
]

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-py bg-slate-950/90">
      <div className="container mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-300">
            Find answers to common questions about our services, process, and how we can help your business.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-2"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="group rounded-2xl border border-slate-700/50 bg-slate-950/40 overflow-hidden transition-all duration-300 hover:border-cyan-300/30 hover:bg-slate-900/60"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-all"
              >
                <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="shrink-0 flex items-center justify-center w-6 h-6"
                >
                  <svg
                    className="w-5 h-5 text-cyan-300"
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
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedIndex === index ? "auto" : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-slate-300 leading-relaxed border-t border-slate-700/30">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-slate-700/50 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-3">
            Didn't find what you're looking for?
          </h3>
          <p className="text-slate-300 mb-6">
            Have a specific question? Our team is ready to help.
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQSection
