module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      spacing: {
        '50': '15rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '100': '28rem',
        '105': '40rem',
      }
    },
  },
  variants: {
    display: ['responsive', 'group-hover', 'group-focus'],
    extend: {
      
    },
  },
  plugins: [],
}
