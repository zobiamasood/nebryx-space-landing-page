// src/utils/constants.js
// Space Theme Color Palette & Design Constants

export const COLORS = {
  // Primary backgrounds
  bg: {
    dark: '#0f0f2e',
    darker: '#000000',
    card: '#1a0033',
    overlay: 'rgba(15, 15, 46, 0.7)',
  },
  
  // Accent colors
  accent: {
    cyan: '#06b6d4',
    blue: '#0EA5E9',
    purple: '#6d28d9',
    gold: '#fbbf24',
  },
  
  // Text colors
  text: {
    primary: '#ffffff',
    secondary: '#a1a1aa',
    muted: '#71717a',
  },
  
  // Gradients
  gradients: {
    heroOverlay: 'linear-gradient(180deg, rgba(15,15,46,0) 0%, rgba(15,15,46,0.9) 100%)',
    cyanGlow: 'linear-gradient(135deg, #06b6d4, #0EA5E9)',
    purpleGlow: 'linear-gradient(135deg, #6d28d9, #9333ea)',
    spaceGradient: 'linear-gradient(135deg, #0f0f2e, #1a0033, #2d0052)',
  },
  
  // Shadows for glow effects
  shadows: {
    cyanGlow: '0 0 20px rgba(6, 182, 212, 0.5)',
    purpleGlow: '0 0 20px rgba(109, 40, 217, 0.5)',
    cardShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  },
};

export const TYPOGRAPHY = {
  fonts: {
    display: 'font-family: "Poppins", "Geist", sans-serif;',
    body: 'font-family: "Inter", sans-serif;',
  },
  
  sizes: {
    h1: '3.5rem',      // Hero heading
    h2: '2.5rem',      // Section heading
    h3: '1.875rem',    // Card heading
    body: '1rem',      // Body text
    small: '0.875rem', // Small text
  },
  
  weights: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700,
  },
};

export const ANIMATION = {
  duration: {
    fast: '0.15s',
    normal: '0.3s',
    slow: '0.5s',
    verySlow: '1s',
  },
  
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    custom: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
};

export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
};

export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
  '3xl': '6rem',
};

// Services list (make dynamic from CMS later)
export const SERVICES = [
  {
    id: 1,
    icon: '🚀',
    title: 'Web Development',
    description: 'Custom React apps and modern web solutions built for speed and scalability.',
  },
  {
    id: 2,
    icon: '🤖',
    title: 'AI Solutions',
    description: 'Machine learning models and AI automation to power your business.',
  },
  {
    id: 3,
    icon: '💻',
    title: 'Software Development',
    description: 'Enterprise-grade software built with cutting-edge technologies.',
  },
  {
    id: 4,
    icon: '🛒',
    title: 'E-commerce Stores',
    description: 'High-converting online stores with secure payment integration.',
  },
  {
    id: 5,
    icon: '📊',
    title: 'SEO & Analytics',
    description: 'Data-driven strategies to boost your online visibility and rankings.',
  },
  {
    id: 6,
    icon: '🎟️',
    title: 'Booking Systems',
    description: 'Scalable appointment and event booking platforms.',
  },
  {
    id: 7,
    icon: '🔧',
    title: 'Maintenance & Automation',
    description: '24/7 support and automated systems to keep your business running.',
  },
];

// Pricing tiers (make dynamic from CMS later)
export const PRICING_TIERS = [
  {
    id: 1,
    name: 'Starter',
    price: '999',
    period: 'month',
    description: 'Perfect for small projects and startups',
    features: [
      'Custom Website',
      'Hosting & SSL',
      'Email Setup',
      'Basic SEO',
      'Mobile Responsive',
      'Monthly Updates',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    id: 2,
    name: 'Explorer',
    price: '2999',
    period: 'month',
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Starter',
      'AI Integration',
      'E-commerce Setup',
      'Advanced Analytics',
      'Priority Support',
      'Advanced SEO',
      'Custom Features',
    ],
    cta: 'Start Your Journey',
    featured: true,
  },
  {
    id: 3,
    name: 'Pioneer',
    price: 'Custom',
    period: '',
    description: 'Enterprise-grade solutions',
    features: [
      'Everything in Explorer',
      'Dedicated Team',
      'Custom Infrastructure',
      '24/7 Support',
      'Advanced Automation',
      'Scalability Suite',
      'Consulting Included',
    ],
    cta: 'Contact Us',
    featured: false,
  },
];

// Portfolio projects (make dynamic from CMS later)
export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'AI Analytics Dashboard',
    category: 'Web Development',
    description: 'Real-time analytics platform with AI-powered insights',
    image: '/earth1.jpg', // Replace with CMS
    tags: ['React', 'AI', 'Dashboard'],
    link: '#',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    category: 'E-commerce',
    description: 'Full-stack e-commerce solution with payment integration',
    image: '/earth2.jpg', // Replace with CMS
    tags: ['React', 'Node.js', 'Stripe'],
    link: '#',
  },
  {
    id: 3,
    title: 'SaaS Web App',
    category: 'Web Development',
    description: 'Multi-tenant SaaS platform with advanced features',
    image: '/galaxy.jpg', // Replace with CMS
    tags: ['React', 'Firebase', 'Tailwind'],
    link: '#',
  },
  {
    id: 4,
    title: 'Mobile Booking App',
    category: 'Booking Systems',
    description: 'Appointment booking system with calendar integration',
    image: '/earth1.jpg', // Replace with CMS
    tags: ['React Native', 'Backend API'],
    link: '#',
  },
  {
    id: 5,
    title: 'Marketing Website',
    category: 'Web Development',
    description: 'High-converting marketing site with animations',
    image: '/earth2.jpg', // Replace with CMS
    tags: ['React', 'Framer Motion', 'SEO'],
    link: '#',
  },
  {
    id: 6,
    title: 'Automation Platform',
    category: 'AI Solutions',
    description: 'Business process automation with ML models',
    image: '/galaxy.jpg', // Replace with CMS
    tags: ['Python', 'AI/ML', 'API'],
    link: '#',
  },
];
