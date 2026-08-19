import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#dc2626',
          light: '#ef4444',
          dark: '#7f1d1d',
        },
        ink: {
          950: '#0a0a0a',
          900: '#141414',
          800: '#1f1f1f',
          700: '#262626',
          500: '#525252',
          300: '#a3a3a3',
        },
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
    },
  },
}
