module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
   
    extend: {

    },
    colors: {
      green: '#00E0A6',
			red: '#FC1370',
			blue: '#0AA4D9',
			orange: '#FFB132',
			purple: '#8342E8',
			black: '#222222',
			white: '#ffffff',
			black_100: '#EEEEEE',
			white_200: '#DADADA',
			white_100: '#F5F5F5'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {},
  plugins: [],
}