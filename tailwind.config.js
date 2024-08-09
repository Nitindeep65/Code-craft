/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main1/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}

