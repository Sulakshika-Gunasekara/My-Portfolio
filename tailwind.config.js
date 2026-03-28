/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        opensans: ['"Open Sans"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        blue: {
          primary: '#1976d2',
          dark: '#0d47a1',
          mid: '#4a759f',
          light: '#6ba0d8',
        }
      },
      animation: {
        'gradientBG': 'gradientBG 8s ease-in-out infinite',
        'float1': 'float1 12s ease-in-out infinite alternate',
        'float2': 'float2 10s ease-in-out infinite alternate',
      },
      keyframes: {
        gradientBG: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        float1: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(40px) scale(1.1)' },
        },
        float2: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '100%': { transform: 'translateY(-30px) scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
