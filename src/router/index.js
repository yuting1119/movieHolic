import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import Random from '../views/random.vue'
import News from '../views/news.vue'
import moviePage from '../views/moviepage.vue'
import List from '../views/list.vue'
import nowHit from '../views/nowhit.vue'
import Search from '../views/search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'nowHit',
    component: nowHit
  },
  {
    path: '/top',
    name: 'Top',
    component: Top
  },
  {
    path: '/random',
    name: 'Random',
    component: Random
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/moviepage/:id',
    name: 'Movie',
    component: moviePage,
    props: true
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/search/:keywords',
    name: 'Search',
    component: Search,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
