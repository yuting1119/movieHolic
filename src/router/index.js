import Vue from 'vue'
import VueRouter from 'vue-router'
import Top from '../views/Top.vue'
import Random from '../views/random.vue'
import News from '../views/news.vue'
import moviePage from '../views/moviepage.vue'
import List from '../views/list.vue'
import nowHit from '../views/nowhit.vue'
import Search from '../views/search.vue'
import Recent from '../views/recent.vue'
import Classic from '../views/classic.vue'
import TVshow from '../views/tvshow.vue'
import TVshowPage from '../views/tvshowpage.vue'

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
    component: Top,
    children: [
      {
        path: 'classic',
        name: 'classic',
        component: Classic
      },
      {
        path: '',
        name: 'recent',
        component: Recent
      },
      {
        path: 'tvshow',
        name: 'tvshow',
        component: TVshow
      }
    ]
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
    path: '/tvshowpage/:id',
    name: 'TVshow',
    component: TVshowPage,
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
