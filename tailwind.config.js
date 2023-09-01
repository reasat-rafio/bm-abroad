/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      borderRadius: {
        md: '20px',
        lg: '25px',
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
};
