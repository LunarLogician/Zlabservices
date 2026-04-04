import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#06060f',
        'primary': '#7c3aed',
        'secondary': '#0d9488',
        'accent': '#ec4899',
      },
      fontFamily: {
        'display': ['"Clash Display"', 'Syne', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI'],
        'body': ['Inter', 'Outfit', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI'],
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(124, 58, 237, 0.3)',
        'glow-sm': '0 0 10px rgba(124, 58, 237, 0.2)',
      },
    },
  },
  plugins: [],
}
export default config
