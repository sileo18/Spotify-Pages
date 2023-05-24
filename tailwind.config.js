/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      color: {
        green: {
          50: '#1ed760',
          100: '#1db954',
          200: '#8cebb6',
          300: '#57e295',
          400: '#36dc81',
          500: '#04d361',
          600: '#04c058',
          700: '#039645',
          800: '#027435',
          900: '#025929',
        },

        black: {          
          800: '#191414',
        }
      },
      fontSize: {
        '5xl' : '3rem',
        '6xl' : '4rem',
      },
      width: {
        '400': '440px',
      },
    },
  },
  plugins: [],
}

