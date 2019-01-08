const pkg = require('./package')

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/Text_Nuxt_sweet/'
  }
} : {}

module.exports = {
  mode: 'universal',

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
    link: [     
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.4.1/css/all.css" ,integrity:"sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" ,crossorigin: "anonymous"},
      { rel: "stylesheet" ,href:"https://fonts.googleapis.com/icon?family=Material+Icons"  }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/css/all.css',
    
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vee-validate',
     //'~plugins/element-ui',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/toast',
   
  
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  toast: {
    position: 'top-right',
    theme: "bubble",
    duration : 3000,
    iconPack : 'material'
  },


  ...routerBase,

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   vendor: ['veevalidate'],
   //vendor: ['element-ui'],
    extend(config, ctx) {
      
    }
  }

  
  
}
