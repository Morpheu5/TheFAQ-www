import { sortRoutes } from '@nuxt/utils'
require('dotenv').config()

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'TheFAQ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'TheFAQ'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'manifest', href: '/site.webmanifest' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    ['@nuxtjs/google-analytics', {
      id: 'UA-1176762-9'
    }]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    ['@nuxtjs/axios',
      {
        baseURL: process.env.API_URL || 'http://localhost:4567'
      }
    ],
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  markdownit: {
    preset: 'commonmark',
    html: true,
    typographer: true,
    injected: true
  },
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'faq-id',
        path: '/faq/*',
        component: resolve(__dirname, 'components/faq_id.vue')
      })
      routes.push({
        name: 'faq',
        path: '/faq',
        redirect: '/'
      })
      sortRoutes(routes)
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  }
}
