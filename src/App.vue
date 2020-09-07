<template>
  <div id="app">
    <v-header></v-header>
    <tab/>
  </div>
</template>

<script type="text/ecmascript-6">
  import VHeader from './view/Header/index.vue';
  import Tab from './view/Tab/index.vue';

  export default {
    name: 'App',
    data() {
      return {}
    },
    components: {
      'v-header': VHeader,
      Tab
    }
  }
</script>

<style lang="scss">
</style>
