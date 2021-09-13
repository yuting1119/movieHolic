<template>
  <div id="moviepage">
    <div class="moviepage-container">
       <!-- :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.thisMovie.poster_path})`}" -->
      <div class="movie-name">
        <div class="movie-title">{{ thisMovie.title }}<span class="heart" @click="addHeart"><i class="fab fa-gratipay"></i></span></div>
        <div class="movie-info">{{ thisMovie.release_date }} ｜ {{ thisMovie.runtime }} mins ｜ <i class="fas fa-star"></i> {{ thisMovie.vote_average}}</div>
        <div class="movie-genres" v-for="item in thisMovie.genres" :key="item.id">{{ item.name }}</div>
      </div>
      <div class="movie-wrapper">
        <div class="movie-poster">
          <img :src="posterImg(thisMovie)" alt="">
        </div>
        <div class="movie-content">
          <span>DIRECTOR：</span>
          <div class="movie-director">{{ director.name }}</div>
          <span>CAST：</span><br>
          <div class="cast-container" v-for="item in cast" :key="item.order">
            <div class="movie-cast">{{ item.name }}</div>
          </div>
          <div class="movie-overview">{{ thisMovie.overview }}</div>
          <div class="movie-photo">
            <button @click="toggler = !toggler">trailers</button>
            <FsLightbox
            :toggler="toggler"
            :sources="[
              `https://www.youtube.com/watch?v=${this.videoYT[0].key}`
            ]"
            />
          </div>
        </div>
      </div>
      <div class="similar-container">
        similar movies<br>
        <div class="similar" v-for="item in similarMovie" :key="item.id">
          <router-link :to="{ name: 'Movie', params: { id: `${item.id}` }}">
            <div class="similar-title">{{ item.title }}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FsLightbox from 'fslightbox-vue'
export default {
  props: ['id'],
  components: {
    FsLightbox
  },
  data () {
    return {
      thisMovie: [],
      cast: [],
      director: [],
      videoYT: [],
      backdrop: [],
      similarMovie: [],
      toggler: false
    }
  },
  created () {
    this.getMovieInfo()
  },
  methods: {
    getMovieInfo () {
      console.log(this.$route.params.id)
      const movieID = this.$route.params.id
      const MOVIE_API = `https://api.themoviedb.org/3/movie/${movieID}?api_key=540c13e42b8f4dd5690d1ed0982c83c2`
      this.axios.get(MOVIE_API).then((res) => {
        this.thisMovie = res.data
        // console.log(vm.thisMovie)
        this.getPeople()
        this.getVideo()
        this.getSimilarMovie()
      })
    },
    posterImg (item) {
      return `https://image.tmdb.org/t/p/w300/${this.thisMovie.poster_path}`
    },
    getPeople () {
      const movieID = this.$route.params.id
      const PEOPLE_API = `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=540c13e42b8f4dd5690d1ed0982c83c2`
      this.axios.get(PEOPLE_API).then((res) => {
        const castPeople = res.data.cast
        this.cast = castPeople.filter(function (item) {
          if (item.order < 7) {
            return item
          }
        })
        const crewPeople = res.data.crew
        this.director = crewPeople.find(function (item, index, array) {
          return item.job === 'Director'
        })
        // console.log(vm.cast)
      })
    },
    getVideo () {
      const movieID = this.$route.params.id
      const VIDEO_API = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=540c13e42b8f4dd5690d1ed0982c83c2`
      this.axios.get(VIDEO_API).then((res) => {
        const videoData = res.data.results
        this.videoYT = videoData.filter(function (item) {
          return item.site === 'YouTube'
        })
      })
    },
    getSimilarMovie () {
      const movieID = this.$route.params.id
      const SIMILAR_API = `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=540c13e42b8f4dd5690d1ed0982c83c2&page=1`
      this.axios.get(SIMILAR_API).then((res) => {
        const similarData = res.data.results
        this.similarMovie = similarData.filter(function (item, index) {
          if (index < 5) {
            return item
          }
        })
        // console.log(this.similarMovie)
      })
    },
    addHeart () {
      const list = JSON.parse(localStorage.getItem('heartMovie')) || []
      for (let i = 0; i < list.length; i++) {
        if (this.thisMovie.id === list[i].id) {
          alert('此電影已經在最愛囉！')
          return
        }
      }
      list.push(this.thisMovie)
      localStorage.setItem('heartMovie', JSON.stringify(list)) // 將list轉成字串存入
    }
  },
  watch: {
    $route: 'getMovieInfo'
  }
}
</script>
