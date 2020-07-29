<template>
  <div class="Car">
    <nav-bar class="shopNavBar">
      <div slot="center">购物车({{carlength}})</div>
    </nav-bar>
    <car-goods-list @checkedBtnClick="checkedBtnClick" ref="carGoodsList"></car-goods-list>
    <bottom-bar :key="timer"></bottom-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/navbar.vue'


import CarGoodsList from './childCompons/carGoodsList'
import BottomBar from './childCompons/carBottomBar'

import {mapGetters} from 'vuex'

  export default{
    name:'Shoppingcart',
    data() {
      return {
        // timer:''
      }
    },
    components:{
      NavBar,
      CarGoodsList,
      BottomBar,
    },
    computed: {
      // carLength(){
      //   return this.$store.getters.carLength;
      // }
      ...mapGetters({carlength:'carLength',timer:'backTimer'},
      )
    },
    methods: {
      checkedBtnClick(timer){
        this.timer=timer;
      },
    },
  }
</script>
<style scoped> 
  .Car{
    height: 100vh;
  }
</style>