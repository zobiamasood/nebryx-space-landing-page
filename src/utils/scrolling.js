import { useState, useEffect } from 'react'

const SCROLL_OFFSET = 90

export const smoothScroll = (targetId) => {
  const element = document.getElementById(targetId)
  if (element) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    })
  }
}

export const useScrollSpy = (sections) => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + SCROLL_OFFSET + 20

      for (let section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            return
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  return activeSection
}
