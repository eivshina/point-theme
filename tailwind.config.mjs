/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F5F2EC',
          dark: '#EDE9E0',
        },
        ink: {
          DEFAULT: '#1A1916',
          soft: '#4A4844',
          muted: '#9A9693',
        },
        accent: '#8B7355',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
