<template>
  <div id="app">
    <Left/>
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Left from './components/left.vue'
import Footer from './components/footer.vue'

export default {
  name: 'app',
  components: {
    Left,
    Footer
  }
}
</script>

<style lang="scss">
@import "./assets/all"
</style>
