const path = require('path')
const isProd = process.env.NODE_ENV === 'production'


module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/sass/main.sass',
    {
      src: '~/node_modules/highlight.js/styles/github.css',
      lang: 'css'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: '~/plugins/vue-scrollto.js', ssr: false },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    // '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    '@nuxtjs/moment',
    'nuxt-validate',
    'nuxt-svg-loader',
    'nuxt-client-init-module',
    'nuxt-vuex-router-sync',
  ],
  /*
   ** Markdown options
   */
  markdownit: {
    injected: false,
    linkify: true,
    use: [
      'markdown-it-highlightjs'
    ]
  },
  /*
   ** Style resource settings
   */
  styleResources: {
    sass: ['@/assets/sass/global.sass']
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Define the development or production mode of Nuxt.js
   ** See https://nuxtjs.org/api/configuration-dev
   */
  dev: !isProd,
  /*
   ** Build configuration
   */
  build: {
    extractCSS: isProd,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Custom alias
      config.resolve.alias['~comp'] = path.resolve(__dirname, 'nuxt', 'components')
    }
  }
}
