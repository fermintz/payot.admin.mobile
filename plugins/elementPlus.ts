import elementPlus from 'element-plus'
import "element-plus/dist/index.css";
import '~/assets/styles/global.scss';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(elementPlus, {

  })
})