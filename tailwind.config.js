/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        backgroundImage: {
          'hero-pattern':
            'linear-gradient(256.73deg, #1CBDDD 27.86%, #4DCA79 100%), #FFFFFF',
          'footer-texture': "url('/img/footer-texture.png')",
        },
      },
    },
  },
  plugins: [],
};
