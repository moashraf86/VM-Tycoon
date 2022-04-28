module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'slate-900'  : '#050748',
        'slate-600'  : '#6a6a8e',
        'slate-200'  : '#e6e6e6',
        'gray-400'   : '#a2a2a2',
        'pink-600'   : '#e60072',
        'violet-600' : '#673AB7', 
        'blue-600'   : '#2196F3 ',
        'black'      : '#101010', 
        'white'      : '#FFFFFF'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'sun'          : 'url("../dist/images/sun.svg")',
        'moon'         : 'url("../dist/images/moon.svg")',
        'gradient'  : 'url("../dist/images/bg-gradient.jpg")',
        'blue-gradient': 'linear-gradient(to right, #673AB7 0%,#2196F3 100%)',
        'red-gradient': 'linear-gradient(to right, #f92c8b 0%,#b02cd6 100%)',
        'heading-bg'   : 'linear-gradient(to right, #673AB7 0%,#E91E63 36%,#E91E63 65%,#673AB7 100%)' 
      },
      boxShadow: {
        'btn': '0 10px 15px 0px rgb(56 0 189 / 20%)',
      },
      zIndex: {
        '9999': 'z-index: 9999'
      },
      transition: {
        'overlay-trans': 'transition: 1.2s cubic-bezier(.17, .85, .438, .99)'
      }
    },
    container: {
        center: true,
        padding: {
        DEFAULT: '1rem',
        lg: '2rem',
        '2xl': '0rem',
        },
      },
  },
  darkMode: 'class',
  plugins: [],
}
