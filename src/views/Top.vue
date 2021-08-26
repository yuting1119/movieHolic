<template>
  <div id="top">
    <h1>Top10 in the world</h1>
    <div class="top-recent">
      <h2>recent popup</h2>
      <div class="popumovieList" v-for="item in movies" :key="item.id">
        <img :src="getImg(item)">
        <div class="title">{{ item.title }}</div>
        <div class="date">{{ item.release_date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      movies: []
    }
  },
  created () {
    this.getmovie()
  },
  methods: {
    getmovie () {
      const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=540c13e42b8f4dd5690d1ed0982c83c2&page=1'
      const vm = this
      this.axios.get(POPULAR_URL).then((response) => {
        // console.log(response.data.results)
        vm.movies.push(...response.data.results)
        console.log(vm.movies)
        return vm.movies
      })
    },
    getImg (movies) {
      return `https://image.tmdb.org/t/p/w200/${movies.poster_path}`
    }
  }
}

</script>
