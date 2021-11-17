
import DefaultLayout from '~/layouts/Default.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

export default function (Vue, { router, head, isClient }) {
  Vue.mixin({
    data() {
      return {
        GRIDSOME_API_URL:process.env.GRIDSOME_API_URL
      }
    }
  })
  Vue.component('Layout', DefaultLayout)
}
