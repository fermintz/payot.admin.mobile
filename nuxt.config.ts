// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:false,
  css: [
    '@/assets/styles/reset.scss',
    'material-icons/iconfont/material-icons.css',
  ],
  app: {
    head: {
      script: [],
      title:'페이오티 관리자시스템',
      meta:[
        {charset:'utf-8'},
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          property: 'og:description',
          content: '무인세탁매장을 편리하게 관리하기 위한 관리자시스템',
        },
        {
          property: 'og:locale',
          content: 'ko_KR',
        },
        {
          property: 'og:title',
          content: '페이오티 관리자시스템',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:author',
          content: '페이오티',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
})
