<template>
  <div id="top">
    <h1>Top20 movies</h1>
    <div class="top-container">
      <div class="top-rated-wrapper" v-for="(item, index) in recentMovies" :key="item.id">
        <router-link :to="{ name: 'Movie', params: { id: `${item.id}` }}">
          <div class="top-rated-content">
            <div class="top-rated-index">{{ index+1 }}</div>
            <div class="top-rated-left">
              <img :src="getImg(item)">
            </div>
            <div class="top-rated-right">
              <div class="rated-title">{{ item.title }}<span class="rated-date">{{ item.release_date }}</span></div>
              <div class="rated-overview">{{ item.overview }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recentMovies: []
    }
  },
  created () {
    this.getRecentMovies()
  },
  methods: {
    getRecentMovies () {
      const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=540c13e42b8f4dd5690d1ed0982c83c2&_page=1&_limit=10'
      const vm = this
      this.axios.get(POPULAR_URL).then((response) => {
        // console.log(response.data.results)
        vm.recentMovies.push(...response.data.results)
        // console.log(vm.recentMovies)
      })
    },
    getImg (recentMovies) {
      return `https://image.tmdb.org/t/p/w200/${recentMovies.poster_path}`
    }
  }
}
</script>
