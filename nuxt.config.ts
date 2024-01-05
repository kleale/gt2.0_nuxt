// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // runtimeConfig: {
  //   public: {
  //     baseURL: process.env.BASE_URL || 'https://kleale.github.io/gt2.0_nuxt/',
  //   },
  // },
  css: ["~/assets/css/main.css"],
  modules: ["nuxt-svgo"],
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
