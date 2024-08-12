/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:true,
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.25) 0px 5px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        'xl-white':' 5px 1px 8px 1px rgba(255,255,255,0.14)'
      },
      fontFamily:{
        'montserrat' : '"Montserrat", sans-serif',
        'code' : '"Source Code Pro", monospace;'
      },
      animation: {
        'tilt' :'tilt-in-fwd-tl 4s cubic-bezier(.25,.46,.45,.94) 0s alternate both',
        'pulse' :'pulse 2s ease-in-out 1s infinite both'
      },
      keyframes:{
        'tilt-in-fwd-tl':{ '0%' :{transform:'scale(0);transform-origin:100% 0;opacity:1'},
        '100%' :{transform:'scale(1);transform-origin:100% 0;opacity:1'}
        },
        'pulse':{
          "0%":{transform:'scale(1) '},
          "50%":{transform:'scale(1.1) '},
          "100%":{transform:'scale(1) '}
        }
      }
    },
  },
  plugins: [],
}


