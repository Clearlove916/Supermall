<template>
  <div class="carList">
    <scroll class="content" ref="scroll">
      <car-list-item v-for="(item,index) in goodslist"
      :key="index" :product="item"></car-list-item>
    </scroll>
  </div>
</template>
<script>

import Scroll from 'components/common/scroll/Scroll.vue' 

import {mapGetters} from 'vuex'

import CarListItem from './carGoodsListItem'

  export default{
    name:'CarGoodsList',
    components:{
      Scroll,
      CarListItem
    },
    computed: {
      // carLength(){
      //   return this.$store.getters.carLength;
      // }
      ...mapGetters({goodslist:'carList'},
      )
    },
    activated() {
      this.$refs.scroll.refresh();
    },
    methods: {
      // checkedBtnClick(timer){
      //   this.$emit('checkedBtnClick', timer);
      // },
    },
  }
</script>
<style scoped>
  .carList{
    height: calc(100% - 44px - 49px - 40px);
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
</style>