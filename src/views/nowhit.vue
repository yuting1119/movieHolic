<template>
  <div id="nowhit">
    <loading :active.sync="isLoading"></loading>
    <VueSlickCarousel class="slick-wrapper" v-bind="settings">
      <div class="slick-content slick-bg" :style="{backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.movieOne.backdrop_path})`}">
        <div class="slick-title">{{ movieOne.title }}</div>
        <div class="slick-tagline">－－ “ {{ movieOne.tagline }} ”</div>
        <div class="slick-overview">{{ movieOne.overview }}</div>
      </div>
      <div class="slick-content slick-bg" :style="{backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.movieTwo.backdrop_path})`}">
        <div class="slick-title">{{ movieTwo.title }}</div>
        <div class="slick-tagline">－－ “ {{ movieTwo.tagline }} ”</div>
        <div class="slick-overview">{{ movieTwo.overview }}</div>
      </div>
      <div class="slick-content slick-bg"  :style="{backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.movieThree.backdrop_path})`}">
        <div class="slick-title">{{ movieThree.title }}</div>
        <div class="slick-tagline">－－ “ {{ movieThree.tagline }} ”</div>
        <div class="slick-overview">{{ movieThree.overview }}</div>
      </div>
      <div class="slick-content slick-bg"  :style="{backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.movieFour.backdrop_path})`}">
        <div class="slick-title">{{ movieFour.title }}</div>
        <div class="slick-tagline">－－ “ {{ movieFour.tagline }} ”</div>
        <div class="slick-overview">{{ movieFour.overview }}</div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import loading from 'vue-loading-overlay'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'MyComponent',
  components: {
    VueSlickCarousel,
    loading
  },
  data () {
    return {
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        fade: true,
        isLoading: false
      },
      movieOne: [],
      movieTwo: [],
      movieThree: [],
      movieFour: []
    }
  },
  created () {
    this.getHitMovie()
  },
  methods: {
    getHitMovie () {
      const vm = this
      vm.isLoading = true
      this.axios.get('https://api.themoviedb.org/3/movie/436969?api_key=540c13e42b8f4dd5690d1ed0982c83c2')
        .then((res) => {
          // console.log(res.data)
          vm.isLoading = false
          vm.movieOne = res.data
          // console.log(this.movieOne)
        })
      this.axios.get('https://api.themoviedb.org/3/movie/566525?api_key=540c13e42b8f4dd5690d1ed0982c83c2')
        .then((res) => {
          vm.movieTwo = res.data
        })
      this.axios.get('https://api.themoviedb.org/3/movie/550988?api_key=540c13e42b8f4dd5690d1ed0982c83c2')
        .then((res) => {
          vm.movieThree = res.data
        })
      this.axios.get('https://api.themoviedb.org/3/movie/588228?api_key=540c13e42b8f4dd5690d1ed0982c83c2')
        .then((res) => {
          vm.movieFour = res.data
        })
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
