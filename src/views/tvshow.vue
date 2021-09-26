<template>
  <div id="tvshow">
    <div class="container">
      <div class="rated-wrapper" v-for="(item, index) in tvshow" :key="item.id">
        <router-link :to="{ name: 'TVshow', params: { id: `${item.id}` }}">
          <div class="rated-content">
            <div class="rated-index">{{ index+1 }}</div>
            <div class="rated-left">
              <img :src="getImg(item)">
            </div>
            <div class="rated-right">
              <div class="rated-title">{{ item.name }}<span class="rated-date">since : {{ item.first_air_date }}</span><span class="rated-vote"><i class="fas fa-star"></i>{{ item.vote_average }}</span></div>
              <div class="rated-overview">{{ item.overview }}</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="up" @click="goTop"><i class="fas fa-angle-double-up"></i></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tvshow: []
    }
  },
  created () {
    this.getTvShow()
  },
  methods: {
    getTvShow () {
      const TVSHOW_URL = 'https://api.themoviedb.org/3/tv/popular?api_key=540c13e42b8f4dd5690d1ed0982c83c2&language=en-US&page=1'
      const vm = this
      this.axios.get(TVSHOW_URL).then((response) => {
        // console.log(response.data.results)
        vm.tvshow.push(...response.data.results)
        // console.log(vm.recentMovies)
      })
    },
    getImg (recentMovies) {
      return `https://image.tmdb.org/t/p/w200/${recentMovies.poster_path}`
    },
    goTop () {
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
