/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "engineering-blue": "#003366",
        "concrete-gray": "#6B7280",
        "safety-orange": "#FF6B35",
      },
    },
  },
  plugins: [],
}