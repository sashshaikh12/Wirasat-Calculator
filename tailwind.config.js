/** @type {import('tailwindcss').Config} */
module.exports = {
  // Update content paths to include your app directory
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      screens: {
        'xs': '320px',   // Small phones
        'sm': '375px',   // iPhone SE / mid phones
        'md': '425px',   // Large phones
        'lg': '768px',   // Small tablets
        'xl': '1024px',  // Tablets / iPads
      },
    },
  },
  plugins: [],
}