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
      dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          "primary": "#91CDD7",
          "secondary": "#425661",
          "base-100": "#18181D",
          "base-300": "#171717",
          "base-content": "#637488",
          // "accent": "#37cdbe",
          // "neutral": "#3d4451",
          // "primary-content": "#3d4451",
      },
      light: {
        ...require("daisyui/src/theming/themes")["light"],
        "primary": "#13adc7",
        "secondary": "91CDD7",
        "base-100": "#eee",
        // "accent": "#37cdbe",
        // "neutral": "#3d4451",
        // "primary-content": "#3d4451",
    },
    },"light", "dark", "night"],
    darkTheme: "gtTheme",
  },
}