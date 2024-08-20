import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      boxShadow: {
        'md-top': '0px -4px 6px -1px rgba(0,0,0,0.1)'
      },
      fontSize: {
        'h1': '56px',
        'h2': '36px',
        'h3': '24px'
      },
      colors: {
        'azure': '#67c1bf'
      }
    },
  },
  plugins: [],
} satisfies Config

