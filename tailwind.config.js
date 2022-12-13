/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false
  },
  prefix: 'tw-',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '601px',
      md: '901px',
      lg: '1021px',
      xl: '1231px'
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
};
