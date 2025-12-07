/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode:'class',
  content: ["./src/**/*.html"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '840px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'iran_Bold': 'iran_Bold',
      'iran_Light': 'iran_Light',
      'iran_Medium': 'iran_Medium',
      'iran_Regular': 'iran_Regular',
    },
    extend: {
      colors: {
        main_digikala: '#ef4056',
        menu_bg_dark: 'rgba(0,0,0,0.2)',
        gray:'#ccc',
        red:'#f00',
        gray_light:'#eee',
        text_dark:'#fff',
        bg_dark1:'#242424',
        bg_dark2:'#000'
      },
      keyframes:{
        resNavAnim:{
          '0%':{width:'0px',opacity:'1'},
          '100%':{width:'100%',opacity:'0'}
        }
      },
      
    },
  },
  plugins: [],
}