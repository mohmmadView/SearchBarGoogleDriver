import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'
const { createThemes } = require('tw-colors')

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: 'nextui', // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: 'light', // default theme from the themes object
      defaultExtendTheme: 'light', // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: '#f1e1e0',
            primary: '#6690FF',
            success: '#a4cbb4',
            warning: '#1486b3',
            danger: '#8C0327',
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: '#1a103d',
            primary: '#FBB0FC',
            success: '#88e3ff',
            warning: '#FCB125',
            danger: '#FF6693',
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
}
export default config
