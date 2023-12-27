module.exports = {
  content: ["./content/**/*.{html,md}", "./layouts/**/*.{html,js}", "./themes/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
};
