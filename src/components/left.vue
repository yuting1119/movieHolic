<template>
  <div id="left">
    <div class="left-container">
      <router-link to="/"><p class="title">moVieHoLic</p></router-link>
      <div class="menu">
        <router-link to="/top"><span class="menustyle">TOP 20</span></router-link><span>|</span>
        <router-link to="/random"><span class="menustyle">RANDOM</span></router-link><span>|</span>
        <router-link to="/news"><span class="menustyle">NEWS</span></router-link><br>
        <router-link to="/list"><span class="menustyle">my list</span></router-link><br>
      </div>
      <div class="search">
        <input type="text" class="search-movie" placeholder=" search movie">
        <router-link :to="{ name: 'Search', params: { keywords: `${this.searchMovie}` }}">
          <input type="button" value="submit" class="search-movie-btn" @click="getSearchMovie">
        </router-link>
      </div>
      <div class="copyright">
        © 2021 moVieHoLic All Rights Reserved by Yuting Hung.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchMovie: []
    }
  },
  methods: {
    getSearchMovie () {
      const searchInput = document.querySelector('.search-movie')
      this.searchMovie = searchInput.value.trim()
      // console.log(this.searchMovie)
      searchInput.value = ''
    }
  }
}
</script>
