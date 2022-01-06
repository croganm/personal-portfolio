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
      spacing: {
        "1/12" : "8.333333333333332%",
        "2/12" : "16.666666666666664%",
        "3/12" : "25%",
        "4/12" : "33.33333333333333%",
        "5/12" : "41.66666666666667%",
        "6/12" : "50%",
        "7/12" : "58.333333333333336%",
        "8/12" : "66.66666666666666%",
        "9/12" : "75%",
        "10/12" : "83.33333333333334%",
        "11/12" : "91.66666666666666%",
        "12/12" : "100%",
      },
    },
  },
}