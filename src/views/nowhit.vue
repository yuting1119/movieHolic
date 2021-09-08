<template>
  <div id="nowhit">
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
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
  data () {
    return {
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        fade: true
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
      this.axios.get('https://api.themoviedb.org/3/movie/436969?api_key=540c13e42b8f4dd5690d1ed0982c83c2')
        .then((res) => {
          // console.log(res.data)
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
