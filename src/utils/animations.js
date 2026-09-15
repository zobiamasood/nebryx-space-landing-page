// src/utils/animations.js
// Reusable animation configurations for Framer Motion

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export const staggerContainer = {
  initial: 'initial',
  whileInView: 'animate',
  viewport: { once: true },
  variants: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
};

export const staggerItem = {
  variants: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  },
};

export const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(6, 182, 212, 0.3)',
      '0 0 40px rgba(6, 182, 212, 0.6)',
      '0 0 20px rgba(6, 182, 212, 0.3)',
    ],
  },
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const hoverScale = {
  whileHover: { scale: 1.05 },
  transition: { type: 'spring', stiffness: 300, damping: 30 },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: '0 0 30px rgba(6, 182, 212, 0.8)',
  },
  transition: { duration: 0.3 },
};

export const scrollIndicator = {
  animate: {
    y: [0, 8, 0],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const counterAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const slideInHorizontal = {
  initial: { opacity: 0, scaleX: 0 },
  whileInView: { opacity: 1, scaleX: 1 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: 'easeOut' },
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -10 },
  whileInView: { opacity: 1, rotate: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const textGradientAnimation = {
  animate: {
    backgroundPosition: ['0% center', '100% center'],
  },
  transition: {
    duration: 3,
    repeat: Infinity,
    repeatType: 'reverse',
  },
};

export const parallaxY = (offset) => ({
  style: {
    y: offset,
  },
});

// CSS-based animations (for Tailwind)
export const customAnimations = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  
  @keyframes glow-pulse {
    0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
    50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.6); }
  }
  
  @keyframes star-twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
  }
  
  @keyframes slide-up {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes gradient-shift {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }
  
  .float {
    animation: float 3s ease-in-out infinite;
  }
  
  .glow-pulse {
    animation: glow-pulse 2s ease-in-out infinite;
  }
  
  .star-twinkle {
    animation: star-twinkle 3s ease-in-out infinite;
  }
  
  .slide-up {
    animation: slide-up 0.6s ease-out;
  }
  
  .gradient-shift {
    background-size: 200% 200%;
    animation: gradient-shift 3s ease infinite;
  }
`;
