// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {},
  devtools: { enabled: true },
  app: {
    head: {
      title: 'JCI',
      "meta": [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],

      link: [
        { rel:"icon", type:"image/png", href:"/logos/yopougon_logo.png.png"},
        { rel: 'stylesheet', href: 'https://use.typekit.net/vjy4axf.css' }
      ],

    }
  },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", '@pinia/nuxt', "@nuxt/image", 'nuxt-time', 'nuxt-swiper'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})

