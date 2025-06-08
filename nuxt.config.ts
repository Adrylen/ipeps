import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          href: '/favicon.ico',
          rel: 'icon',
          type: 'image/x-icon',
        },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  css: [
    "~/assets/stylesheets/global.css",
  ],
  devtools: {
    enabled: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
