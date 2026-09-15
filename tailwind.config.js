/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#EEEEEE',
        foreground: '#0B0909',
        'dark-bg': '#0B0909',
        'dark-secondary': '#151313',
        muted: '#6F6B6B',
        'border-custom': '#D0CECE',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1440px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      letterSpacing: {
        display: '-0.045em',
        heading: '-0.035em',
      },
    },
  },
  plugins: [],
};
