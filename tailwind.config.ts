import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0d1321',
          deep: '#080c18',
          light: '#1a2236',
          mid: '#141b2d',
        },
        gold: {
          DEFAULT: '#c9a96e',
          dark: '#9a7b3c',
          light: '#e8d5a3',
          bright: '#d4af37',
        },
        burgundy: {
          DEFAULT: '#722f37',
          dark: '#4a1525',
          light: '#8b3a4a',
        },
        pearl: {
          DEFAULT: '#f5f0e8',
          light: '#faf7f2',
        },
        rose: {
          DEFAULT: '#d4838a',
          light: '#e8b4b8',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'star-twinkle': 'star-twinkle 4s ease-in-out infinite',
        'fade-up': 'fade-up 1s ease-out forwards',
        'gold-shimmer': 'gold-shimmer 3s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'star-twinkle': {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gold-shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(2.5)', opacity: '0' },
        },
      },
      backgroundSize: {
        'shimmer': '200% 100%',
      },
    },
  },
  plugins: [],
};

export default config;
