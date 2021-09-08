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
          <div class="list-title">{{ item.title }}</div>
        </div>
        <div class="list-wrapper-right">
          <div class="list-overview">{{ item.overview }}</div>
          <!-- <div class="list-edit" v-if="item.id === cacheList.id">
            <textarea name="" id="" v-model="editList" @keyup.esc="cancel"></textarea>
          </div>
          <div class="list-done">
          </div> -->
          <div class="list-del" @click="deleteItem(key)"><i class="fas fa-trash-alt"></i></div>
          <!-- <div class="list-write" @click="edit(item)" v-if="editList.length === 0"><i class="fas fa-pencil-alt"></i></div>
          <div class="list-ok" @click="doneEdit(item)" v-if="item.id === cacheList.id"><i class="far fa-check-circle"></i></div> -->
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
      cacheList: {},
      editList: ''
    }
  },
  created () {
    this.getHeart()
  },
  methods: {
    getHeart () {
      const localList = JSON.parse(localStorage.getItem('heartMovie'))
      this.heartList.push(...localList)
      console.log(this.heartList)
    },
    // edit (item) {
    //   // console.log(item)
    //   this.cacheList = item
    //   // this.editList = item.overview
    // },
    // cancel () {
    //   this.cacheList = {}
    // },
    // doneEdit (item, index) {
    //   const editOK = document.querySelector('.list-done')
    //   editOK.innerText = this.editList
    //   let obj = {}
    //   obj = {
    //     id: item.id,
    //     content: this.editList
    //   }
    //   const list = JSON.parse(localStorage.getItem('thoughtEdit')) || []
    //   list.push(obj)
    //   localStorage.setItem('thoughtEdit', JSON.stringify(list))
    //   this.editList = ''
    //   this.cacheList = {}
    // },
    deleteItem (key) {
      this.heartList.splice(key, 1)
      localStorage.setItem('heartMovie', JSON.stringify(this.heartList))
      location.reload()
    }
  }
}
</script>
