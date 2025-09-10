// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  // ... (content, plugins, etc.)
  theme: {
    extend: {
      colors: {
        background: '#0b090a',
        surface: '#161a1d',
        accent: {
          darkest: '#660708',
          dark: '#a4161a',
          DEFAULT: '#ba181b', // Default accent is the mid-tone red
          light: '#e5383b',
        },
        neutral: {
          warm: '#b1a7a6',
          medium: '#d3d3d3',
          light: '#f5f3f4',
          lightest: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'], // Our workhorse/body font
        display: ['var(--font-base-neue)'], // Our heading/display font
      },
    },
  },
}
export default config