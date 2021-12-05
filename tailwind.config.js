/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: { dark: `#141936`, light: `#800838` },
        transparent: `transparent`,
        pre: `#fcfcfc`,
        code: `#fcfcfc`,
        offwhite: `#fcfcfc`,
        green: `#56d187`,
        orange: `#ff9938`,
        "pale-blue": `#3546a8`,
      },
      fontFamily: {
        sans: `DM Sans`,
        serif: `Lora`,
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark']
    },
    backgroundColor: [`light`],
    textColor: [`light`],
  },
  plugins: [
    plugin(function ({ addVariant, e }) {
      const lightSelector = `.light`;
      addVariant(`light`, ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `${lightSelector} .${e(`light${separator}${className}`)}`;
        });
      });
    }),
    require('@tailwindcss/typography'), 
    require('@tailwindcss/forms'), 
    require('@tailwindcss/aspect-ratio'),
  ],
}
