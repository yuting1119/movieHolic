<template>
  <div id="tvshowpage">
    <div class="container">
       <!-- :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.thisMovie.poster_path})`}" -->
      <div class="movie-name">
        <div class="movie-title">{{ thisTVshow.name }}<span class="heart" @click="addHeart"><i class="fab fa-gratipay"></i></span></div>
        <div class="movie-info">latest{{ thisTVshow.last_air_date }} ｜ since{{ thisTVshow.first_air_date }} ｜ <i class="fas fa-star"></i> {{ thisTVshow.vote_average }}</div>
        <div class="movie-genres" v-for="item in thisTVshow.genres" :key="item.id">{{ item.name }}</div>
      </div>
      <div class="movie-wrapper">
        <div class="movie-poster">
          <img :src="posterImg(thisTVshow)" alt="">
        </div>
        <div class="movie-content">
          <span>CAST：</span><br>
          <div class="cast-container" v-for="item in cast" :key="item.order">
            <div class="movie-cast">{{ item.name }}</div>
          </div>
          <div class="movie-overview">{{ thisTVshow.overview }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data () {
    return {
      thisTVshow: [],
      cast: [],
      videoYT: [],
      backdrop: [],
      similarTVshow: []
    }
  },
  created () {
    this.getTVshowInfo()
  },
  methods: {
    getTVshowInfo () {
      // console.log(this.$route.params.id)
      const TVID = this.$route.params.id
      const TV_API = `https://api.themoviedb.org/3/tv/${TVID}?api_key=540c13e42b8f4dd5690d1ed0982c83c2&language=en-US`
      this.axios.get(TV_API).then((res) => {
        this.thisTVshow = res.data
        // console.log(vm.thisMovie)
        this.getPeople()
        this.getVideo()
        this.getSimilarTVshow()
      })
    },
    posterImg (item) {
      return `https://image.tmdb.org/t/p/w300/${this.thisTVshow.poster_path}`
    },
    getPeople () {
      const TVID = this.$route.params.id
      const PEOPLE_API = `https://api.themoviedb.org/3/tv/${TVID}/credits?api_key=540c13e42b8f4dd5690d1ed0982c83c2&language=en-US`
      this.axios.get(PEOPLE_API).then((res) => {
        const castPeople = res.data.cast
        this.cast = castPeople.filter(function (item) {
          if (item.order < 7) {
            return item
          }
        })
      })
    },
    getSimilarTVshow () {
      const TVID = this.$route.params.id
      const SIMILAR_API = `https://api.themoviedb.org/3/tv/${TVID}/similar?api_key=540c13e42b8f4dd5690d1ed0982c83c2&language=en-US&page=1`
      this.axios.get(SIMILAR_API).then((res) => {
        const similarData = res.data.results
        this.similarTVshow = similarData.filter(function (item, index) {
          if (index < 3) {
            return item
          }
        })
        // console.log(this.similarMovie)
      })
    },
    addHeart () {
      const list = JSON.parse(localStorage.getItem('heartMovie')) || []
      for (let i = 0; i < list.length; i++) {
        if (this.thisTVshow.id === list[i].id) {
          alert('already added')
          return
        }
      }
      list.push(this.thisMovie)
      localStorage.setItem('heartMovie', JSON.stringify(list))
    }
  },
  watch: {
    $route: 'getTVshowInfo'
  }
}
</script>
