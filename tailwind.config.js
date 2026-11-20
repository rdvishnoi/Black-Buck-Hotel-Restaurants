/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f2f7f4',
          100: '#e0ebe4',
          200: '#c2d8cb',
          300: '#97bca8',
          400: '#679a7f',
          500: '#477f62',
          600: '#35644e',
          700: '#2b5140',
          800: '#264235',
          900: '#1f372d',
          950: '#0f1f18',
        },
        charcoal: {
          50: '#f6f6f5',
          100: '#e8e8e6',
          200: '#d2d2cf',
          300: '#b0b0ac',
          400: '#888884',
          500: '#6c6c67',
          600: '#555551',
          700: '#444440',
          800: '#2b2b28',
          900: '#1c1c1a',
          950: '#121211',
        },
        ivory: {
          50: '#fdfcf8',
          100: '#faf6ea',
          200: '#f4ecd2',
          300: '#ecdfb4',
          400: '#e2cc8c',
          500: '#d9ba6e',
          600: '#cda055',
          700: '#b07d44',
          800: '#8f653c',
          900: '#755334',
        },
        gold: {
          50: '#fbf7ee',
          100: '#f5ecd4',
          200: '#ebd7a8',
          300: '#dfbd76',
          400: '#d6a651',
          500: '#c98f37',
          600: '#a96f2a',
          700: '#875324',
          800: '#6f4323',
          900: '#5d3922',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      boxShadow: {
        soft: '0 10px 40px -15px rgba(31, 55, 45, 0.25)',
        card: '0 20px 50px -20px rgba(28, 28, 26, 0.35)',
        gold: '0 10px 30px -10px rgba(201, 143, 55, 0.4)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.12) translate(-1%, -1%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        kenburns: 'kenburns 18s ease-out infinite alternate',
      },
    },
  },
  plugins: [],
};
