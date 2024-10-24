/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },
    extend: {
      colors: {
        'space-blue': '#1B1464',
        'dark-gray': '#6E6E6E',
        'slate-blue': '#764AF1',
      },
      letterSpacing: {
        sm: '0.28px',
        md: '0.4px',
      },
      lineHeight: {
        md: '160%',
        lg: '180%',
      },
      spacing: {
        lg: '64px',
        xl: '92px',
        '2xl': '160px',
      },
      fontSize: {
        h1: '64px',
        'h1-md': '47px',
        'h1-sm': '32px',
        h2: '32px',
        'h2-md': '28px',
        'h2-sm': '24px',
        p1: '18px',
        'p1-sm': '14px',
        p2: '16px',
        'p2-sm': '14px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      borderRadius: {
        sm: '16px',
        md: '20px',
        lg: '25px',
      },
      boxShadow: {
        cta: '0px 18px 40px -1px rgba(118, 74, 241, 0.35)',
      },
      keyframes: {
        floating: {
          '0%': {
            transform: 'translate(0, 0) scale(1) rotate(0deg)',
          },
          '25%': {
            transform: 'translate(3px, 10px) scale(1.02) rotate(-2deg)',
          },
          '50%': {
            transform: 'translate(5px, 15px) scale(1.05) rotate(2deg)',
          },
          '75%': {
            transform: 'translate(-5px, 5px) scale(1.02) rotate(0deg)',
          },
          '100%': {
            transform: 'translate(0, 0) scale(1) rotate(0deg)',
          },
        },
      },
      animation: {
        floating:
          'floating 10s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite alternate',
        'floating-reverse':
          'floating 5s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite alternate-reverse',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
