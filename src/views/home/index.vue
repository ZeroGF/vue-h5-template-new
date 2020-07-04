<!-- home -->
<template>
  <div class="index-container">
    <van-nav-bar
      title="首页"
      :fixed='true'
      :placeholder ='true'
      z-index='100'
    />
    <div class="banner">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in 5" :key="item">Slide {{item}}</swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
    </div>
    <van-cell icon="success" v-for="item in list" :key="item" :title="item" />
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1.1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
      },
      list: [
        'Vue-cli4',
        '配置多环境变量',
        'VantUI 组件按需加载',
        'Sass 全局样式',
        'Webpack 4',
        'Vuex 状态管理',
        'Axios 封装及接口管理',
        'Vue-router',
        'Webpack 4 vue.config.js 基础配置',
        '配置 proxy 跨域',
        '配置 alias 别名',
        '配置 打包分析',
        '配置 externals 引入 cdn 资源',
        '去掉 console.log',
        'splitChunks 单独打包第三方模块',
        '添加 IE 兼容',
        'Eslint+Pettier 统一开发规范'
      ]
    }
  },

  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },

  mounted() { 
    // this.swiper.slideTo(3, 1000, false)
  },

  methods: {}
}
</script>
<style lang="scss" scoped>
.index-container {
  .banner{
    width: 100%;
    height: 200px;
    .swiper-container{
      height: 100%;
      .swiper-wrapper{
        .swiper-slide{
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 33px;
          background: cornflowerblue;
          transition: 300ms;
	        transform: scale(0.95);
        }
        .swiper-slide-active,.swiper-slide-duplicate-active{
            transform: scale(1);
        }
      }
    }
  }
  .warpper {
    padding: 12px;
    background: #fff;
    .demo-home__title {
      margin: 0 0 6px;
      font-size: 32px;
      .demo-home__title img,
      .demo-home__title span {
        display: inline-block;
        vertical-align: middle;
      }
      img {
        width: 32px;
      }
      span {
        margin-left: 16px;
        font-weight: 500;
      }
    }
    .demo-home__desc {
      margin: 0 0 20px;
      color: rgba(69, 90, 100, 0.6);
      font-size: 14px;
    }
  }
}
</style>
