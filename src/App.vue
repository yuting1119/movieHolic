<template>
  <div id="app">
    <Left/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Left from './components/left.vue'

export default {
  name: 'app',
  components: {
    Left
  }
}
</script>

<style lang="scss">
@import "./assets/all"
</style>
