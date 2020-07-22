<template>
  <div class="goodsList">
    <goods-list-item v-for="(item,index) in goods" :goodsItem="item" :key="index">

    </goods-list-item>
  </div>
</template>
<script>

  import GoodsListItem from './goodsListItem.vue'

  export default{
    name:'GoodsList',
    props:{
      goods:{
        type:Array,
        default(){
          return [];
        }
      }
    },
    components:{
      GoodsListItem
    },
  }
</script>
<style scoped>
  .goodsList{
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
  }
</style>