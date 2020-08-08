export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Born in 1997.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '立野輝のポートフォリオです。私のスキルや制作物をご覧いただけます。',
      },
      {
        hid: 'keyword',
        name: 'keyword',
        content:
          '立野輝, Born in 1997., コーダー, フロントエンドエンジニア, Webデザイナー,',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/minireset.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'nuxt-webfontloader',
    'vue-scrollto/nuxt',
    '@nuxtjs/google-analytics',
  ],
  googleAnalytics: { id: 'UA-173519866-1' },
  /* WEB FONTS LOADER
  CSS rules to specify families
  font-family: 'Oswald', sans-serif;
  */
  webfontloader: {
    google: {
      families: ['Oswald:wght@400;600&display=swap'],
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  loading: '~/components/loading.vue',
}
