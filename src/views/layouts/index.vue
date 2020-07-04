<template>
  <div class="app-container">
    <div class="layout-content">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <div class="layout-footer">
      <TabBar :data="tabbars" @change="handleChange" />
    </div>
  </div>
</template>

<script>
import TabBar from '@/components/TabBar'
export default {
  name: 'AppLayout',
  data() {
    return {
      tabbars: [
        {
          title: '首页',
          to: {
            name: 'Home'
          },
          icon: 'home-o'
        },
        {
          title: '产品',
          to: {
            name: 'Product'
          },
          icon: 'shop-o'
        },
        {
          title: '购物车',
          to: {
            name: 'Cart'
          },
          icon: 'cart-o'
        },
        {
          title: '我的',
          to: {
            name: 'Mine'
          },
          icon: 'user-o'
        }
      ]
    }
  },
  computed:{
  },
  components: {
    TabBar
  },
  methods: {
    handleChange(v) {
      console.log('tab value:', v)
    }
  }
}
</script>
