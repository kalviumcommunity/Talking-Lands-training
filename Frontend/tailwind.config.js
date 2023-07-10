/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#333333',
        'white': '#ffffff',
        'graywhite': '#aaa',
        'lightgray':'#d9d9d9',
        'whitegray':'#787878',
        'Steelgray': '#858585',
        'grayblack': '#1F1F1F',
        'pink': '#FF24BD'
      },
      spacing: {
        '100':'25rem',
        '110': '22.5rem',
        '12':'4.5rem',
        '140': '20rem',
        '141':'36rem',
        '160': '20rem',
        '17': '8rem',
        '81':'22rem',
        '19':'4.8rem',
        '150': '38rem'
      },
      caretColor: {
        'custom': '#d9d9d9', // Replace 'blue' with your desired color
      },
      gridTemplateColumns: {
        'main': '25% 1fr',
        'video': 'auto 22rem'
      },
      gridTemplateRows : {
        'modal': '5px auto'
      },
      dropShadow : {
        '3xl': '0 35px 35px rgba(222, 222, 222, 0.25)'
      },
      fontFamily : {
        roboto : ['Roboto', 'sans-serif']
      }
    },
    
  },
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}