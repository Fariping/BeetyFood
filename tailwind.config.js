/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'amber': {
          50: '#fffbeb',
          100: '#fef3c7',
          800: '#92400e',
          900: '#78350f',
        },
      },
    },
  },
  plugins: [],
}
