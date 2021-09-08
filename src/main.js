import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueYoutube from 'vue-youtube'
// // import swiper, { Navigation } from 'swiper'
// import { Swiper as SwiperClass, Pagination } from 'swiper/js/swiper.esm'
// import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// SwiperClass.use([Pagination])
// Vue.use(getAwesomeSwiper(SwiperClass))
Vue.use(VueAxios, axios)
Vue.use(VueAwesomeSwiper)
// swiper.use([Navigation])
Vue.config.productionTip = false
// axios.defaults.withCredentials = true
Vue.use(VueYoutube)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
