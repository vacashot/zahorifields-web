/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#f8f7f4',
        white: '#ffffff',
        surface: '#ffffff',
        'surface-2': '#f0efe9',
        border: '#e2e0d8',
        text: '#1a1a1a',
        muted: '#7a7870',
        accent: '#3a7d28',
        'accent-hover': '#2e6420',
        'accent-light': '#edf5ea',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
