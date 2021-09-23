<template>
  <div id="news">
    <loading :active.sync="isLoading"></loading>
    <h1>entertainment news</h1>
    <div class="search-container">
      <input type="text" class="search-input" placeholder="search news" @keyup.enter="getSearchNews">
      <input type="button" value="submit" class="search-btn" @click="getSearchNews">
    </div>
    <div class="news-container">
      <div class="news-wrapper" v-for="item in allNews" :key="item.author">
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
  </div>
</template>

<script>
export default {
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
          searchHTML += `<div class="news-wrapper">
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
    }
  }
}
</script>
