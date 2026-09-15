/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          dark: '#0f0f2e',
          darker: '#000000',
          card: '#1a0033',
        },
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(135deg, #0f0f2e, #1a0033, #2d0052)',
        'hero-overlay': 'linear-gradient(180deg, rgba(15,15,46,0) 0%, rgba(15,15,46,0.9) 100%)',
        'cyber-gradient': 'linear-gradient(90deg, #06b6d4, #6d28d9, #06b6d4)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'star-twinkle': 'star-twinkle 3s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.6)' },
        },
        'star-twinkle': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        'slide-up': {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.5)',
        'glow-cyan-lg': '0 0 40px rgba(6, 182, 212, 0.6)',
        'glow-purple': '0 0 20px rgba(109, 40, 217, 0.5)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
