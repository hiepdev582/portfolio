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
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" }
      ],
      meta: [
        { name: "description", content: "hiepnn's portfolio" },
        { name: "author", content: "hiepnn" },
      ],
    },
  },
});
