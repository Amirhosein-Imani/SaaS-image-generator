/** @type {import('tailwindcss').Config} */

import rtl from 'tailwindcss-rtl'

export default {

  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: { extend: {} },
  plugins: [rtl],

}