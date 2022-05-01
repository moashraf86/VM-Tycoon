module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'slate-900'  : '#050748',
        'slate-600'  : '#6a6a8e',
        'slate-500'  : '#a6afbd',
        'slate-200'  : '#e6e6e6',
        'gray-400'   : '#a2a2a2',
        'pink-600'   : '#e60072',
        'violet-600' : '#673AB7', 
        'blue-600'   : '#2196F3',
        'black-500'  : '#151515', 
        'black-900'  : '#101010', 
        'white-200'  : '#fafaff',
        'white'      : '#FFFFFF',
        'cursor' : '#ffbd84'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'sun'              : 'url("../dist/images/sun.svg")',
        'moon'             : 'url("../dist/images/moon.svg")',
        'shape-1'          : 'url("../dist/images/shape-1.svg")',
        'shape-2'          : 'url("../dist/images/shape-2.svg")',
        'arrow-up'         : 'url("../dist/images/up-arrow.svg")',
        'hero-gradient'    : 'url("../dist/images/bg-gradient.jpg")',
        'blue-gradient'    : 'linear-gradient(to right, #673AB7 0%,#2196F3 100%)',
        'red-gradient'     : 'linear-gradient(to right, #f92c8b 0%,#b02cd6 100%)',
        'heading-gradient' : 'linear-gradient(to right, #673AB7 0%,#E91E63 36%,#E91E63 65%,#673AB7 100%)',
        'section-gradient' :  'linear-gradient(to bottom, #fff6f3 0%,#fffefb 100%)',
        'pseudo-gradient'  :  'linear-gradient(to right, #007bff 0%,#ff1f8e 100%)',
        'cursor-gradient'  : 'linear-gradient(to right, #ffbd84 0%,#ff1f8e 100%)'
      },
      boxShadow: {
        'btn'   : '0 10px 15px 0px rgb(56 0 189 / 20%)',
        'card'  : '0 3.4px 2.7px -30px rgba(0, 0, 0, 0.059), 0 8.2px 8.9px -30px rgba(0, 0, 0, 0.071), 0 25px 40px -30px rgba(0, 0, 0, 0.2)',
        'image' : '-20px 20px 35px #dcdcdc, 20px -40px 35px #ffffff'
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
