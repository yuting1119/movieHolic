<template>
  <div id="list">
    <h1>my movie list</h1>
    <div class="list-empty" v-if="heartList.length === 0">
      <span>empty  now</span><br>
      <img src="@/assets/empty.svg" alt="">
    </div>
    <div class="list-container">
      <div class="list-wrapper" v-for="(item, key) in heartList" :key="item.id">
        <div class="list-wrapper-left">
          <div class="list-title">{{ item.title }}<span class="list-rate"><i class="fas fa-star"></i> {{ item.vote_average }}</span></div>
        </div>
        <div class="list-wrapper-right">
          <div class="list-overview">{{ item.overview }}</div>
          <div class="list-write" @click="edit(item)"><i class="fas fa-pencil-alt"></i></div>
          <div class="list-del" @click="deleteItem(key)"><i class="fas fa-trash-alt"></i></div>
        </div>
        <div class="list-edit" v-if="item.id === cacheList.id">
          <textarea class="list-text" name="" id="" placeholder="how about the movie?" v-model="editList" @keyup.esc="cancel"></textarea>
          <div class="list-ok" @click="doneEdit(item)"><i class="far fa-check-circle"></i></div>
        </div>
        <div class="list-thought" v-for="items in thoughtList" :key="items.id">
          <div v-if="items.id === item.id">
            <hr>
            <span>I think the movie was...</span><br>
            {{ items.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heartList: [],
      thoughtList: [],
      cacheList: {},
      editList: ''
    }
  },
  created () {
    this.getHeart()
    this.getThought()
  },
  methods: {
    getHeart () {
      const localList = JSON.parse(localStorage.getItem('heartMovie')) || []
      this.heartList.push(...localList)
      // console.log(this.heartList)
    },
    getThought (item) {
      const localList = JSON.parse(localStorage.getItem('thoughtEdit')) || []
      this.thoughtList.push(...localList)
      // console.log(this.thoughtList)
    },
    edit (item) {
      // console.log(item)
      for (let i = 0; i < this.thoughtList.length; i++) {
        if (item.id === this.thoughtList[i].id) {
          alert('already edited!')
          return
        }
      }
      this.cacheList = item
    },
    cancel () {
      this.cacheList = {}
    },
    doneEdit (item) {
      // const editOK = document.querySelector('.list-done')
      // editOK.innerText = this.editList
      let obj = {}
      obj = {
        id: item.id,
        content: this.editList
      }
      const list = JSON.parse(localStorage.getItem('thoughtEdit')) || []
      list.push(obj)
      localStorage.setItem('thoughtEdit', JSON.stringify(list))
      // this.editList = ''
      // this.cacheList = {}
      location.reload()
    },
    deleteItem (key) {
      this.heartList.splice(key, 1)
      localStorage.setItem('heartMovie', JSON.stringify(this.heartList))
      location.reload()
    }
  }
}
</script>
