/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  variant: {
    extend: {
      backgroundColor: ['even']
    }
  },
  plugins: [],
}