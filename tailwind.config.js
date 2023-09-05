/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      spacing: {
        lg: '64px',
        '2xl': '160px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      borderRadius: {
        md: '20px',
        lg: '25px',
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
  plugins: [],
};
