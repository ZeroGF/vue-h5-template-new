<template>
  <div class="mine">
    <div class="mine-user">
      <van-nav-bar title="我的" >
        <template slot='right'>
          <van-icon name="setting-o" size="18" />
        </template>
      </van-nav-bar>
      <div class="info">
        <van-image
          round
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <span>易烊千玺</span>
      </div>
    </div>
    <div class="mine-main">
      <div class="card order">
        <div v-for="item in orderNavs" :key="item.name" class="order-item">
          <van-icon name="orders-o" />
          <span>{{item.name}}</span>
        </div>
      </div>
      <div class="card links">
        <van-cell title="收货地址" is-link />
        <van-cell title="关于我们" is-link />
        <van-cell title="收货地址" is-link />
        <van-cell title="收货地址" is-link />
      </div>
      <van-button block type="info">退出登录</van-button>
    </div>
    
  </div>
</template>

<script>
  export default {
    name:'mine',
    data() {
      return {
        orderNavs:[
          {name:'全部',icon:''},
          {name:'待付款',icon:''},
          {name:'待发货',icon:''},
          {name:'代收货',icon:''},
          {name:'待评价',icon:''},
        ]     
      }
    },
  }
</script>

<style lang="scss" scoped>
.mine{
  &-user{
    height: 200px;
    background: #1276e9d2;
    /deep/.van-nav-bar{
      background-color: transparent;
      color: #fff;
      .van-nav-bar__title,.van-icon{
        color: #fff;
      }
      &::after{
        border-width: 0;
      }
    }
    .info{
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      .van-image{
        width: 80px;
        height: 80px;
        margin: 10px 0;
      }
    }
  }
  &-main{
    padding: 10px;
    .card{
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px #eee;
    }
    .order{
      display: flex;
      align-items: center;
      
      height: 60px;

      &-item{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .van-icon{
          font-size: 25px;
          color: #333;
          margin-bottom: 5px;
        }
      }
    }
    .links{
      margin: 10px 0;
    }
  }
 
}
</style>