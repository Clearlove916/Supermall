<template>
  <div>
    <tab-bar>
      <tabbar-item path="/home" activecolor='pink'>
        <img slot="item-img" src="~assets/img/首页.svg" alt="">
        <img slot="item-img-active" src="~assets/img/首页(select).svg" alt="">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/classification" activecolor='pink'>
        <img slot="item-img" src="~assets/img/类目 品类 分类 类别.2.svg" alt="">
        <img slot="item-img-active" src="~assets/img/类目 品类 分类 类别（select）.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/shoppingcart" activecolor='pink'>
        <img slot="item-img" src="~assets/img/购物车.svg" alt="">
        <img slot="item-img-active" src="~assets/img/购物车(select).svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/my" activecolor='pink'>
        <img slot="item-img" src="~assets/img/我的 (2).svg" alt="">
        <img slot="item-img-active" src="~assets/img/我的 (2) (select).svg" alt="">
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tab-bar>
  </div>
</template>
<script>
  import TabBar from '../../common/tabbar/tabbar.vue'
  import TabbarItem from '../../common/tabbar/tabbaritem.vue'
  export default{
    name:'MainTabbar',
    components:{
      TabBar,
      TabbarItem
    }
  }
</script>
<style scoped>
  @import '~assets/css/base.css';
</style>