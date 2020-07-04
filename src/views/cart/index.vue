<template>
  <div class="cart">
    <div class="cart-head">
      <div class="title">
        <span>购物车</span>
        <span @click="toolType = !toolType" class="manage">{{toolType?'管理':'完成'}}</span>
      </div>
      <div class="notice">共34件宝贝</div>
    </div>
    <div class="cart-main">
      <div class="cart-list">
        <div v-for="card in 3" :key="card" class="card">
          <div class="card-title">
            <van-checkbox icon-size="16px" />毛毛旗舰店
          </div>
          <div v-for="item in 2" :key="item" class="card-item">
            <van-checkbox icon-size="16px" />
            <van-image radius='5'  src="https://img.yzcdn.cn/vant/cat.jpeg" />
            <div class="info">
              <div class="title">玩具熊玩具熊玩具熊玩具熊</div>
              <div class="tag"></div>
              <div class="other">
                <span class="price">￥99.9</span>
                <van-stepper  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-tool">
      <div class="cart-tool-checkall">
        <van-checkbox icon-size="16px" />全选
      </div>
      <div v-show="toolType" class="cart-tool-right">
        <span>合计：</span>
        <span>￥</span>
        <span class="price-color">99.9</span>
        <van-button round  color="linear-gradient(to right, #00B4DB, #0083B0)">结算(0)</van-button>
      </div>
      <div v-show="!toolType" class="cart-tool-right">
        <van-button round type="warning" >移入收藏夹</van-button>
        <van-button round type="danger" >删除</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        toolType:true
      }
    },
  }
</script>

<style lang="scss" scoped>
@import '../../assets/css/cart'
</style>