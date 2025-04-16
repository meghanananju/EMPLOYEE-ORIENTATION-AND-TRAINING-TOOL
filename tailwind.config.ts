// tailwind.config.js
import { type Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // enables dark mode via a class
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // blue-500
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#6B7280', // gray-500
          foreground: '#ffffff',
        },
        success: {
          DEFAULT: '#10B981', // green-500
          foreground: '#ffffff',
        },
        danger: {
          DEFAULT: '#EF4444', // red-500
          foreground: '#ffffff',
        },
        warning: {
          DEFAULT: '#F59E0B', // yellow-500
          foreground: '#000000',
        },
        info: {
          DEFAULT: '#0EA5E9', // sky-500
          foreground: '#ffffff',
        },
      },
       animation: {
        slide: 'slide 1s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
plugins: [require('@tailwindcss/aspect-ratio')],
}

export default config
