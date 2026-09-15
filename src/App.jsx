import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TrustSection from './components/TrustSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import WhyChooseUsSection from './components/WhyChooseUsSection'
import WorkProcessSection from './components/WorkProcessSection'
import PortfolioSection from './components/PortfolioSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import ContactSection from './components/ContactSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-shell text-white">
      <Navbar />

      <main>
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <WorkProcessSection />
      </main>

      <Footer />
    </div>
  )
}

export default App

