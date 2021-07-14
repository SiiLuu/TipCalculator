module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        StrongCyan: 'hsl(172, 67%, 45%)',
        VeryDarkCyan: 'hsl(183, 100%, 15%)',
        DarkGrayishCyan1: 'hsl(186, 14%, 43%)',
        DarkGrayishCyan2: 'hsl(184, 14%, 56%)',
        LightGrayishCyan1: 'hsl(185, 41%, 84%)',
        LightGrayishCyan2: 'hsl(189, 41%, 97%)',
        White: 'hsl(0, 0%, 100%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
