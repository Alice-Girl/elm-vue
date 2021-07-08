<template>
  <div class="container">
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

<style scoped lang="scss">
.tab {
  width: 100%;
  display: flex;
  flex-direction: row;

  .tab-item {
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;

    & > a {
      // 行内元素转换成块级元素
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);

      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>