
import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  compatibilityDate: '2024-10-25',
  css: [
    '~/assets/css/main.css'
  ],

  app: {
    head: {
      title: 'My application',
      titleTemplate: '%s | github.com/olorunshogo'
    },
  },

  $development: {
    app: {
      head: {
        title: 'DEV'
      }
    }
  },

  modules: [
    '@nuxtjs/color-mode',
    // '@nuxtjs/tailwindcss'
  ],

  

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  

  
});