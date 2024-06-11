/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'naranja-navbar': '#ffe600',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

