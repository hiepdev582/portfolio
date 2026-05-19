// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts"],
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      "Plus Jakarta Sans": [300, 400, 500, 600, 700, 800],
    },
    display: "swap",
    download: true,
  },
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
        class: "scroll-smooth",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      meta: [
        { name: "description", content: "hiepnn's portfolio" },
        { name: "author", content: "hiepnn" },
      ],
    },
  },
});
