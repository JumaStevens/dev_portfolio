const path = require('path')
const isProd = process.env.NODE_ENV === 'production'

const headConfig = {
  meta: {
    content: 'Juma Stevens | Full Stack Web Developer' || process.env.npm_package_description
  }
}

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Juma Stevens | Portfolio' || process.env.npm_package_name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: headConfig.meta.content
      },
      {
        hid: 'author',
        name: 'author',
        content: 'Juma Stevens',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@jumastevens',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: headConfig.meta.content,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: headConfig.meta.content,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.jumastevens.com/og-image.jpg',
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: headConfig.meta.content,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: headConfig.meta.content,
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.jumastevens.com',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: headConfig.meta.content,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.jumastevens.com/og-image.jpg',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://www.jumastevens.com/og-image.jpg',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: headConfig.meta.content,
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
    '@/assets/sass/main.sass'
  ],

  /*
   ** Server middleware
   */
  serverMiddleware: [
    {
      path: '/api',
      handler: '~/serverMiddleware/api/index.js'
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
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       styles: {
    //         name: 'styles',
    //         test: /\.(css|vue)$/,
    //         chunks: 'all',
    //         enforce: true
    //       }
    //     }
    //   }
    // },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Custom alias
      config.resolve.alias['~comp'] = path.resolve(__dirname, 'nuxt', 'components')
    }
  }
}
