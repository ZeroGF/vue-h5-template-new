<template>
  <div class="product">
    <van-nav-bar
      title="产品列表"
      :fixed='true'
      :placeholder ='true'
      z-index='100'
    />
    <div class="product-main">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
      </van-dropdown-menu>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div class="product-list">
              <proItem v-for="item in listNum" :key="item" :itemData='item' />
          </div>
          
        </van-list>
      </van-pull-refresh>
      

    </div>
  </div>
</template>

<script>
import proItem from '@/components/proItem'
  export default {
    data() {
      return {
        value1: 0,
        value2: 'a',
        option1: [
          { text: '全部商品', value: 0 },
          { text: '新款商品', value: 1 },
          { text: '活动商品', value: 2 },
        ],
        option2: [
          { text: '默认排序', value: 'a' },
          { text: '好评排序', value: 'b' },
          { text: '销量排序', value: 'c' },
        ],
        loading: false,
        finished: false,
        refreshing: false,
        listNum:20,
      };
    },
    components:{
      proItem
    },
    methods:{
      onRefresh() {
        // 清空列表数据
        this.finished = false;

        // 重新加载数据
        // 将 loading 设置为 true，表示处于加载状态
        this.loading = true;
        this.onLoad();
      },
      onLoad() {
        setTimeout(() => {
          if (this.refreshing) {
            this.listNum = 0;
            this.refreshing = false;
          }
          this.listNum+=20
          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.listNum>= 100) {
            this.finished = true;
          }
        }, 1000);
      },
    }
  }
</script>

<style lang="scss" scoped>
.product{
  &-main{
    .product-list{
      min-height: calc(100vh - 150px);
      column-count: 2; //多列的列数
      column-gap: 10px;//列间距
      padding: 10px;
    }
  }
}
</style>