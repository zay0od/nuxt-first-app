// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //We override and extent Nuxt Default configs here
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
