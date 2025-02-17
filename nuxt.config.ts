
import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  compatibilityDate: '2024-10-25',
  css: ['./assets/css/main.css'],

  app: {
    head: {
      title: 'My application',
      titleTemplate: '%s | youtube.com/@TheAlexLichter'
    }
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
  ],

  

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  

  
});