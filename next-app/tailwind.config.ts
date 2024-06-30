/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'header-fade': {
          from: { opacity: '0', top: '-50px' },
          to: { opacity: '1', top: '0' },
        },
        fade: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'header-fade': 'header-fade 0.6s ease',
        fade: 'fede 1s ease',
      },
      backgroundImage: {
        'card-title':
          'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'extras-banner':
          'linear-gradient(0deg, #0066B3 0%, rgba(80, 115, 119, 0) 40%, rgba(0, 102, 179, 0) 100%)',
        'extra-service-icons':
          'linear-gradient(279.69deg, #0066B3 0%, #38BDC6 100%)',
      },
      transitionDuration: {
        '1500': '1500ms',
      },
    },
  },
  plugins: [],
};
export default config;
