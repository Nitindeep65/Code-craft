/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./book/getintouch/index/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}

