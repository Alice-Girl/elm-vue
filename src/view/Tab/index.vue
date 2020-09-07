<template>
  <div class="tab">
    <div class="tab-item">
      <router-link to="/seller">商品</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/goods">评论</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/ratings">商家</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "index",
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>