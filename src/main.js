
import DefaultLayout from '~/layouts/Default.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/index.css'

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}
