/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui")
  ],
  daisyui: {
    themes: [{
      gtTheme: {
          ...require("daisyui/src/theming/themes")["dark"],
          // fontFamily: {
          //   'sans': 'Inter, Helvetica, Arial, sans-serif',
          // },
          "primary": "#91CDD7",
          "secondary": "#425661",
          "base-100": "#18181D",
      //   "accent": "#37cdbe",
      //   "neutral": "#3d4451",
      },
    },"light", "dark", "night"],
  },
}