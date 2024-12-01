/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          400: '#b08d57',
        },
        darkGray: {
          400: '#121212',
        },
        secondary: {
          400: '#1a1f2e',
        },
      },
      fontFamily: {
        explore: ['Explore', 'sans-serif'],
        proximaNova: ['Proxima Nova', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
