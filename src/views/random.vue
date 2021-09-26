<template>
  <div id="random" :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.chosenMovie.backdrop_path})`}">
    <loading :active.sync="isLoading"></loading>
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

export default {
  data () {
    return {
      chosenMovie: [],
      videoYT: [],
      isLoading: false
    }
  },
  created () {
    this.findTheMovie()
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
        const genresMovie = res.data.results
        this.chosenMovie = genresMovie.find(function (item, index) {
          return index === Math.floor(Math.random() * 5)
        })
        console.log(this.chosenMovie)
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
