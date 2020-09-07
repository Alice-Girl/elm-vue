<template>
  <div id="app">
    <v-header :Seller="seller"></v-header>
    <tab/>
  </div>
</template>

<script type="text/ecmascript-6">
  import VHeader from './view/Header/index.vue';
  import Tab from './view/Tab/index.vue';
  import axios from 'axios'

  export default {
    name: 'App',
    data() {
      return {
        seller: {}
      }
    },
    created() {
      axios({
        method: 'get',
        url: '/api/seller',
      })
      // 注意点： this 指向
      .then(response =>{
        this.seller = response.data.data
      })
    },
    components: {
      'v-header': VHeader,
      Tab
    }
  }
</script>

<style lang="scss">
</style>
