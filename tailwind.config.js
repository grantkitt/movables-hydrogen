/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'womanHeader': "url('./womanChair.png')",
        'couchDog': "url('https://www.thesprucepets.com/thmb/9dIK-JGnWPDn-9Uh58Yfwb8oaK4=/941x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/allowing_dogs_on_furniture_1118283_2479-648af7c6eb8f4e40a23678dd698db1f4.jpg')"
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
