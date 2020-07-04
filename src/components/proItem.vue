<template>
  <div class="item">
    <van-image
      src="https://img.yzcdn.cn/vant/cat.jpeg"
    />
    <div class="info">
      <div class="title">卡通布绒玩具{{itemData}}</div>
      <div class="tag">卡通</div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      itemData:{
        // type:Object,
        required:true
      }
    },
    data() {
      return {
        
      }
    },
  }
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';
.item{
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 0 10px #eee;
  margin-bottom: 10px;
  overflow: hidden;
  .van-image{
    width: 100%;
  }
  .info{
    padding: 10px;
    .title{
       @include textoverflow;
    }
  }
}
</style>