/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto Mono", "monospace"],
        serif: ["Lilita One", "sans - serif"],
      },
    },
    colors: {
      'primary':'#F3EEF8',
      'secondary':'#857e81',
      'ui':'#FCDF78',
     
    },
  },
  plugins: [],
};
