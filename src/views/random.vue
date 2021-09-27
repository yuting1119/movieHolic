<template>
  <div id="random" :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.chosenMovie.backdrop_path})`}">
    <h1>find movies</h1>
    <div class="random-select">
      <select id="genres" @click="findTheMovie">
        <option >pick today's movie!</option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
        <option value="35">Comedy</option>
        <option value="80">Crime</option>
        <option value="99">Documentary</option>
        <option value="18">Drama</option>
        <option value="10751">Family</option>
        <option value="14">Fantasy</option>
        <option value="36">History</option>
        <option value="27">Horror</option>
        <option value="10402">Music</option>
        <option value="9648">Mystery</option>
        <option value="10749">Romance</option>
        <option value="878">Science Fiction</option>
        <option value="53">Thriller</option>
        <option value="10752">War</option>
        <option value="37">Western</option>
      </select>
    </div>
    <div class="random-first" v-if="this.chosenMovie.length == 0">
      <img class="first-pic" src="@/assets/undraw_searching_p5ux.svg" alt="">
    </div>
    <loading :active.sync="isLoading" :can-cancel="true">
      <div class="loadingio-spinner-ball-tkyje7zclk"><div class="ldio-sr0mn239xt9">
      <div></div>
      </div></div>
    </loading>
    <router-link :to="{ name: 'Movie', params: { id: `${this.chosenMovie.id}` }}" v-if="chosenMovie != ''">
      <div class="ans-container">
        <div class="ans-title">{{ chosenMovie.title }}</div>
        <div class="ans-release">{{ chosenMovie.release_date }}</div>
        <div class="ans-rate"><i class="fas fa-star"></i>{{ chosenMovie.vote_average }}</div>
        <div class="ans-poster">
          <img :src="getPoster(this.chosenMovie)" alt="">
        </div>
        <div class="ans-overview">{{ chosenMovie.overview}}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
import loading from 'vue-loading-overlay'
export default {
  components: {
    loading
  },
  data () {
    return {
      chosenMovie: [],
      videoYT: [],
      isLoading: false
    }
  },
  created () {
    // this.findTheMovie()
  },
  methods: {
    findTheMovie () {
      const genresSelect = document.querySelector('#genres')
      const genresAns = genresSelect.value
      const randomPage = Math.floor(Math.random() * 10)
      // console.log(genresAns)
      this.isLoading = true
      const GENRES_API = `https://api.themoviedb.org/3/discover/movie?api_key=540c13e42b8f4dd5690d1ed0982c83c2&with_genres=${genresAns}&sort_by=popularity.desc&page=${randomPage}`
      this.axios.get(GENRES_API).then((res) => {
        // console.log(res.data.results)
        this.isLoading = false
        const genresMovie = res.data.results
        this.chosenMovie = genresMovie.find(function (item, index) {
          return index === Math.floor(Math.random() * 5)
        })
        // console.log(this.chosenMovie)
      })
      this.getPoster()
      // console.log(randomPage)
    },
    getPoster (chosenMovie) {
      return `https://image.tmdb.org/t/p/w300${this.chosenMovie.poster_path}`
    }
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
