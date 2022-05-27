module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#baf5ff',
      },
    },
  },
  plugins: [require("daisyui")],
}