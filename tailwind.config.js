module.exports = {
  content: ['./dist/**/*.html', './src/**/*.{js,jsx,ts,tsx}', './*.html'],
  presets: [require('./theme.presets.js')],
  plugins: [require('@tailwindcss/forms')],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
}
