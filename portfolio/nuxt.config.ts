// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  features: {
    inlineStyles: true,
  },
  routeRules: {
    "/": { noScripts: true },
  },
  app: {
    head: {
      title: "hiepnn's portfolio",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [
        { name: "description", content: "hiepnn's portfolio" },
        { name: "author", content: "hiepnn" },
      ],
    },
  },
});
