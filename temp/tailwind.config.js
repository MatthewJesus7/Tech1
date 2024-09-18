/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      width: {
        '110': '110%',
        'fit': 'fit-content',
      },
      height: {
        '110': '110%',
        'fit': 'fit-content',
      },
    },
  },
  plugins: [],
}

