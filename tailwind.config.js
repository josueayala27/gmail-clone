module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {
      padding: ['hover', 'focus'],
    },
  },
  plugins: [],
}
