<template>
  <div id="search">
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-ball-tkyje7zclk"><div class="ldio-sr0mn239xt9">
      <div></div>
      </div></div>
    </loading>
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
import loading from 'vue-loading-overlay'
export default {
  props: ['keywords'],
  components: {
    loading
  },
  data () {
    return {
      searchedMovie: [],
      isLoading: false
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
      vm.isLoading = true
      const SEARCH_API = `https://api.themoviedb.org/3/search/movie?query=${keyWord}&api_key=540c13e42b8f4dd5690d1ed0982c83c2`
      this.axios.get(SEARCH_API).then((res) => {
        vm.isLoading = false
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

<style type="text/css" scope>
@keyframes ldio-sr0mn239xt9 {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.45,0,0.9,0.55)
  }
  0% {
    transform: translate(0,0)
  }
  50% {
    transform: translate(0,54px);
    animation-timing-function: cubic-bezier(0,0.45,0.55,0.9);
  }
  100% {
    transform: translate(0,0);
  }
}

.ldio-sr0mn239xt9 div {
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #85a2b6;
  left: 37px;
  top: 10px;
  animation: ldio-sr0mn239xt9 0.6666666666666666s linear infinite;
}
.loadingio-spinner-ball-tkyje7zclk {
  width: 41px;
  height: 41px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.ldio-sr0mn239xt9 {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.41);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-sr0mn239xt9 div { box-sizing: content-box; }
</style>
