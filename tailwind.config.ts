import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: 'var(--blue)',
        orange: 'var(--orange)',
        white: 'var(--white)',
        lightGray: 'var(--light-gray)',
        darkGray: 'var(--dark-gray)',
      },
      backgroundColor: {
        darkGray: 'var(--dark)',
        lightGray: 'var(--light-gray)',
        blue: 'var(--blue)',
        orange: 'var(--orange)',
      },
    },
    fontFamily: {
      title: ['Arial Narrow', 'Helvetica', 'sans-serif'],
    },
  },
  plugins: [],
} satisfies Config;
