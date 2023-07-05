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
        'lightgray':'#d9d9d9',
        'whitegray':'#787878',
        'Steelgray': '#858585',
        'grayblack': '#1F1F1F',
        'pink': '#FF24BD'
      },
      spacing: {
        '100':'25rem',
        '110': '27.5rem',
        '12':'4.5rem',
        '140': '30rem'
      },
      caretColor: {
        'custom': '#d9d9d9', // Replace 'blue' with your desired color
      },
    },
    
  },
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
}