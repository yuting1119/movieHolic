<template>
  <div id="search">
    <h1>results for：  {{ keywords }} </h1>
    <div class="search-container">
      <div class="search-wrapper" v-for="item in searchedMovie" :key="item.id">
        <router-link :to="{ name: 'Movie', params: { id: `${item.id}` }}">
          <img class="search-poster" :src="getPoster(item)" alt="">
          <div class="search-title">{{ item.title }}</div>
        </router-link>
      </div>
    </div>
    <div class="search-no" v-if="this.searchedMovie.length === 0">
      <span>found nothing...</span><br>
      <img src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/v2/assets/empty.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: ['keywords'],
  data () {
    return {
      searchedMovie: []
    }
  },
  created () {
    this.getSearchedMovie()
  },
  methods: {
    getSearchedMovie () {
      // console.log(this.keywords)
      const keyWord = this.$route.params.keywords
      const vm = this
      const SEARCH_API = `https://api.themoviedb.org/3/search/movie?query=${keyWord}&api_key=540c13e42b8f4dd5690d1ed0982c83c2`
      this.axios.get(SEARCH_API).then((res) => {
        vm.searchedMovie = res.data.results
        console.log(vm.searchedMovie)
      })
    },
    getPoster (searchedMovie) {
      return `https://image.tmdb.org/t/p/w200/${searchedMovie.poster_path}`
    }
  },
  watch: {
    $route: 'getSearchedMovie'
  }
}
</script>
