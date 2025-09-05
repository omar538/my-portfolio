// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B5FFF',      // Vibrant blue
        secondary: '#00D9FF',    // Light blue accent
        accent: '#FFD700',       // Gold accent
        light: '#F8FAFC',        // Light background
        dark: '#1E293B',         // Dark text
        card: '#FFFFFF',         // Card background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      boxShadow: {
        'card': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 30px -10px rgba(0, 0, 0, 0.15), 0 10px 15px -5px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(11, 95, 255, 0.5)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0B5FFF, #00D9FF)',
        'gradient-light': 'linear-gradient(135deg, #F8FAFC, #E2E8F0)',
      },
    },
  },
  plugins: [],
}