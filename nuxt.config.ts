export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  ssr: true,

  nitro: {
    preset: 'static'
  },

  build: {
    transpile: ['vuetify'],
  },

  modules: [
    '@nuxtjs/tailwindcss',
    async (options, nuxt) => {
      const { default: vuetifyPlugin } = await import('vite-plugin-vuetify')

      nuxt.hook('vite:extendConfig', (config) => {
        config.plugins ??= []
        config.plugins.push(
          vuetifyPlugin({
            autoImport: true,
          })
        )
      })
    },
  ],
})
