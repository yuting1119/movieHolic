<template>
  <div id="top">
    <h1>Top20s</h1>
    <div class="link">
      <router-link to="/top/"><div class="linkstyle">recently popular</div></router-link><span>/</span>
      <div class="linkstyle"><router-link to="/top/classic">most rated</router-link></div><span>/</span>
      <div class="linkstyle"><router-link to="/top/tvshow">tvshow</router-link></div>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>
