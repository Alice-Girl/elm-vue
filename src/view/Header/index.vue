<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="Seller.avatar" alt="logo"/>
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{ Seller.name }}</span>
        </div>
        <div class="description">
          {{ Seller.description }} / {{ Seller.deliveryTime }}分钟送达
        </div>
        <div class="support" v-if="Seller.supports">
          <span class="icon"></span>
          <span class="text">{{ Seller.supports[0].description }}</span>
        </div>
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

<style scoped lang="scss">
.header {
  color: #fff;
  background: rgba(7, 17, 27, 0.5);

  .content-wrapper {
    display: flex;
    flex-direction: row;
    padding: 24px 12px 18px 24px;

    .avatar {
      img {
        width: 64px;
        height: 64px;
        border-radius: 2px;
      }
    }

    .content {
      margin-left: 16px;

      .title {
        margin: 2px 0 8px 0;

        .name {
          margin-left: 6px;
          font-size: 16px;
          line-height: 18px;
          font-weight: bold;
        }
      }

      .description {
        margin-bottom: 10px;
        line-height: 12px;
        font-size: 12px;
      }

      .support {
        .text {
          line-height: 12px;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
