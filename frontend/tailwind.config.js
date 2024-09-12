// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '0.875rem', // small
      base: '1rem', // body2
      lg: '1.125rem', // body1
      xl: '1.25rem', // h6
      '2xl': '1.5rem', // h5
      '3xl': '2rem', //h4
      '4xl': '3rem', // h3
      '5xl': '3.25rem', // h2
      '6xl': '4rem', // h1
      '7xl': '5rem', // h1
    },
    extend: {
      colors: {
        blue: '#0D2878',
        blueLight: '#2660DD',
        dark: '#3d3d3d',
        orange: '#F69A4D',
        gray: '#DCDCCF',
        darkorange: '#F6DB4D',
        darkgray: '#333',
        darkgray2: '#d8d8d8',
        lightorange: '#FEC89A',
        lightgray: '#E9E9E9',
        gray: '#EDEDED',
      },
      screens: {
        xl: '1175px',
        xsl: '1280px',
        xxl: '1440px',
      },
    },
  },
  plugins: [],
}

