<template>
  <div id="top">
    <h1>Top20s</h1>
    <div class="link">
      <router-link to="/top/"><div class="linkstyle">recently popular</div></router-link><span>/</span>
      <router-link to="/top/classic"><div class="linkstyle">most rated</div></router-link><span>/</span>
      <router-link to="/top/tvshow"><div class="linkstyle">tvshow</div></router-link>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>
