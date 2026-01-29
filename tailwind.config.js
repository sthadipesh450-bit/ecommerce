/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#6d28d9',
          700: '#5b21b6',
          800: '#4c1d95',
          900: '#3b176b',
        },
        accent: {
          DEFAULT: '#ff3d95',
          50: '#fff0f8',
          100: '#ffe0f3',
          200: '#ffb8dd',
          300: '#ff8fc6',
          400: '#ff6bb3',
          500: '#ff3d95',
          600: '#e02a7a',
          700: '#b71f5f',
          800: '#8c1749',
          900: '#611035',
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 10px 30px rgba(16,24,40,0.08)',
      }
    },
  },
  plugins: [],
}