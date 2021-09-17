import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'dist/loading.gif',
  attempt: 1,
  lazyComponent: true
})
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
// axios.defaults.withCredentials = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
