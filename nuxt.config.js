const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.description,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: pkg.description },
      { 'http-equiv': 'x-ua-compatible',  content: 'ie=edge' },
      { name: 'msapplication-TileColor',  content: '#ffffff' },
      { name: 'msapplication-TileImage',  content: '/ms-icon-144x144.png' },
      { name: 'theme-color',  content: '#ffffff' },
      
      // Facebook open graph
      { property: 'og:type',  content: 'website' },
      { property: 'og:url',  content: 'https://mymenuis.netlify.app' },
      { property: 'og:title',  content: 'Loki Mobile Menu' },
      { property: 'og:image',  content: '/images/default.jpg' },
      { property: 'og:description',  content: 'Mobile menu for touch free ordering' },
      { property: 'og:site_name',  content: 'Mobile Menu' },
      { property: 'og:locale',  content: 'en_US' },

      // Twitter card
      { property: 'twitter:card',  content: 'summary' },
      { property: 'twitter:site',  content: '@site_account' },
      { property: 'twitter:creator',  content: '@einargustafsson' },
      { property: 'twitter:url',  content: 'https://mymenuis.netlify.app' },
      { property: 'twitter:title',  content: 'Loki Mobile Menu' },
      { property: 'twitter:description',  content: 'Mobile menu for touch free ordering' },
      { property: 'twitter:image',  content: '/images/default.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  build: {               // customize webpack build
    vendor: ['vue-i18n'] // webpack vue-i18n.bundle.js
  },
  router: {              // customize nuxt.js router (vue-router).
    middleware: 'i18n'   // middleware all pages of the application
  },
  
  generate: {
    routes: ['/', '/about', '/is', '/is/about']
  },

  /*
  ** Global CSS
  */
  css: [
    {
      src: 'bulma/bulma.sass',
      lang: 'sass'
    },
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/i18n.js'], // webpack plugin

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    //'@nuxtjs/font-awesome'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  }
}
