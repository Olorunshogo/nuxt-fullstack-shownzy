// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // compatibilityDate: '2024-04-03',
  // devtools: { enabled: true }

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

  compatibilityDate: '2024-10-25'
})