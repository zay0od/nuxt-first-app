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
  app: {
    //Those will be the default Head meta content
    head: {
      title: "Nuxt | Products App",
      meta: [
        {
          name: "description",
          content: "List of E-commerce products",
        },
      ],
      link: [],
    },
  },
  runtimeConfig: {
    appName: process.env.APP_NAME, // this will only be exposed on the Server not the FE browser
    public: {
      // those nested keys will be exposed on the browser
      AppVersion: process.env.APP_VERSION,
    },
  },
});
