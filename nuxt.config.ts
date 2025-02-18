// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxthq/studio",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxt/fonts",
  ],

  css: ['vue-final-modal/style.css'],


  colorMode: {
    classSuffix: "",
  },

  // https://content.nuxt.com/
  content: {
    documentDriven: {
      injectPage: false,
    },
    highlight: false,
  },

  ogImage: {
    defaults: {
      component: "OgImage",
    },
  },

  runtimeConfig: {
    public: {
      // posthogPublicKey: process.env.POSTHOG_PUBLIC_KEY,
      // posthogHost: process.env.POSTHOG_HOST,
      mdc: {
        useNuxtImage: true,
        headings: {
          anchorLinks: false
        }
      },
    },
  },
  build: {
    transpile: ['unenv'],
  },
  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ["/", "/sitemap.xml"],
    },
    
  },
  experimental: {
    payloadExtraction: false
  },
  site: {
    url: "https://latvija.ai",
  },
  compatibilityDate: "2025-02-11",
});
