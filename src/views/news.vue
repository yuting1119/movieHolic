<template>
  <div id="news">
    <h1>entertainment news</h1>
    <loading :active.sync="isLoading">
      <div class="loadingio-spinner-ball-tkyje7zclk"><div class="ldio-sr0mn239xt9">
      <div></div>
      </div></div>
    </loading>
    <div class="search-container">
      <input type="text" class="search-input" placeholder="  search news" @keyup.enter="getSearchNews">
      <input type="button" value="submit" class="search-btn" @click="getSearchNews">
    </div>
    <div class="news-container">
      <div class="news-wrapper" v-for="item in allNews" :key="item.author">
        <div class="social-container">
          <a :href="`https://www.facebook.com/sharer.php?u＝${item.url}`" target="_blank"><i class="fab fa-facebook"></i></a>
          <a :href="`http://line.naver.jp/R/msg/text/?${item.url}`" target="_blank"><i class="fab fa-line"></i></a>
          <a :href="`https://twitter.com/share?text=文字&url=${item.url}`" target="_blank"><i class="fab fa-twitter"></i></a>
        </div>
        <a class="news-link" :href="item.url">
          <div class="news-card">
            <h6 class="news-title">{{ item.title }}</h6>
            <div class="news-author">{{ item.author }}</div>
            <div class="news-pic"><img :src="item.urlToImage"></div>
            <div class="news-content">{{ item.content }}</div>
          </div>
        </a>
      </div>
    </div>
    <div class="up" @click="goTop"><i class="fas fa-angle-double-up"></i></div>
  </div>
</template>

<script>
import loading from 'vue-loading-overlay'
export default {
  components: {
    loading
  },
  data () {
    return {
      allNews: [],
      isLoading: false
    }
  },
  mounted () {
    this.getNews()
  },
  methods: {
    getNews () {
      const NEWS_API = 'https://sleepy-waters-79700.herokuapp.com/NEWS'
      const vm = this
      vm.isLoading = true
      this.axios.get(NEWS_API).then((response) => {
        // console.log(response.data.articles)
        vm.isLoading = false
        vm.allNews.push(...response.data)
        // console.log(this.allNews)
      })
    },
    getSearchNews () {
      const searchInput = document.querySelector('.search-input')
      const searchWord = searchInput.value.trim()
      const NEWSSEARCH_API = `https://sleepy-waters-79700.herokuapp.com/NEWS?q=${searchWord}`
      this.axios.get(NEWSSEARCH_API).then((res) => {
        // console.log(res.data)
        const searchNews = []
        searchNews.push(...res.data)
        let searchHTML = ''
        searchNews.forEach(data => {
          searchHTML += `
          <div class="news-wrapper">
        <div class="social-container">
          <a href="https://www.facebook.com/sharer.php?u＝${data.url}" target="_blank"><i class="fab fa-facebook"></i></a>
          <a href="http://line.naver.jp/R/msg/text/?${data.url}" target="_blank"><i class="fab fa-line"></i></a>
        </div>
        <a class="news-link" href="${data.url}">
          <div class="news-card">
            <h6 class="news-title">${data.title}</h6>
            <div class="news-author">${data.author}</div>
            <div class="news-pic"><img src="${data.urlToImage}"></div>
            <div class="news-content">${data.content}</div>
          </div>
        </a>
      </div>`
          const newsContainer = document.querySelector('.news-container')
          newsContainer.innerHTML = searchHTML
        })
      })
    },
    goTop () {
      document.documentElement.scrollTop = 0
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
