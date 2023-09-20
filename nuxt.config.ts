export default defineNuxtConfig({
  runtimeConfig: {
    apiKey:process.env.API_KEY,
    public: {
      baseUrl: process.env.API_BASE_URL,
    }
  },
  ssr: true,
  
  css: [
    "~/assets/css/main.scss",
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image"
  ],

  image: {
    quality: 80,
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
      head: {
          title: 'Gamezone',
          viewport: 'width=device-width, initial-scale=1',
          meta: [
              { charset: 'utf-8'},
              { name: 'viewport', content: 'width=device-width, initial-scale=1' },
              {hid: 'description', name: 'description' , content: 'All about the hottest games of all times'},
              {name: 'format-detection', content: 'telephone=no'}
          ],
          link: [
              { 
                rel: 'stylesheet',
                href: "https://fonts.googleapis.com/icon?family=Material+Icons" ,
              },
              {
                rel: 'icon',
                type:'image/x-icon',
                href: '/favicon.ico' 
              },
              {
                rel: 'stylesheet',
                href: '/assets/css/fonts.css'
              },
          ],
      }
  },

  googleFonts: {
    download: true
  },

  devtools: {
    enabled: true,
  },
})
