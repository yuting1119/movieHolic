<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">TOP</router-link> |
      <router-link to="/search">SEARCH</router-link> |
      <router-link to="/wish">WISH / SEEN</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import "./assets/all"
</style>
