/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif'],
      },
      colors: {
        'dark-cyan': 'hsl(158, 36%, 37%)',
        'darker-cyan': 'hsl(156 43% 18%)',
        'cream': 'hsl(30, 38%, 92%)',
        'very-dark-blue': 'hsl(212, 21%, 14%)',
        'dark-grayish-blue': 'hsl(228, 12%, 48%)',
      },
    },
  },
  plugins: [],
}
