module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    screens: {
      "2xs": '375px',
      "xs": '480px',
      "sm": '640px',
      "md": '768px',
      "lg": '1024px',
      "xl": '1440px',
      "2xl": '1536px',
    },
    extend: {
      colors: {
        'lightgreen': "#33BD52",
        'darkgreen': "#2D9664",
      },
    },
  },
  plugins: [],
}
