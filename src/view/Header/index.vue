<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="Seller.avatar" alt="logo" />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "Header",
  props: {
    Seller: Object
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>
