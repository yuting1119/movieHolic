import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import Search from '../views/Search.vue'
import Wish from '../views/Wish.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/Wish',
    name: 'Wish',
    component: Wish
  }
]

const router = new VueRouter({
  routes
})

export default router
