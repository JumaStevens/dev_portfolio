const pkg = require('./package')
// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: 'universal',

  buildDir: '../firebase/functions/nuxt',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
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
    // '@assets/sass/main.sass'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // { src: '~/plugins/vue-lazyload.js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',

    // '@nuxtjs/pwa',

    // ['nuxt-sass-resources-loader', {
    //   resources: '@/assets/sass/global.sass'
    // }],

    // ['nuxt-validate'],

    // ['nuxt-client-init-module'],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/,
      //     options: {
      //       fix: true
      //     }
      //   })
      // }

      // Load SVG as Vue Components
      // const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))
      // svgRule.test = /\.(png|jpe?g|gif|webp)$/
      // config.module.rules.push({
      //   test: /\.svg$/,
      //   loader: 'vue-svg-loader',
      // })
    },

    publicPath: '/'
  }
}
