/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: '512px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        'gilroy': ['Gilroy', 'sans-serif'],
        'days-one': ["Days One"],
      },
      fontSize: {
        sm: ['14px', '1.05rem'],
        base: ['16px', '1.1875rem'],
        '44': ['44px', '3.5063rem'],
        '56': ['56px', '4.4556rem'],
      },
      maxWidth: {
        base: '75.5rem',
      },
      colors: {
        brand: {
          body: '#0C0C0C',
          black: '#101010',
          dark: '#080808',
          primary: '#767676',
          secondary: '#191919',
          gray: {
            100: '#D9D9D9',
            200: '#E3E3E3',
          },
          green: {
            400: '#4F9279',
            500: '#1C5B44',
            600: '#ACACAC',
          },
          'dark-gray': '#2C2C2C'
        },
      },
      spacing: {
        'five': '0.3125rem',
        '15': '0.9375rem',
        '25': '1.5625rem',
        '30': '1.875rem',
      },
      borderRadius: {
        '15': '0.9375rem',
      }
    },
  },
  plugins: [],
}

