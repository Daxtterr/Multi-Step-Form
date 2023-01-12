/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fashion': "url('/src/images/bg-sidebar-desktop.svg')",
        'fashionmobile': "url('/src/images/bg-sidebar-mobile.svg')",
        
      }
    },
  },
  plugins: [],
}

