<template>
  <div class="detailBottomBar">
    <div class="leftBar">
      <div class="leftBarBox">
        <img src="~assets/img/detail/customer-service.svg" alt="">
        <div>客服</div>
      </div>
      <div class="leftBarBox">
        <img src="~assets/img/detail/shop.svg" alt="">
        <div>店铺</div>
      </div>
      <div class="leftBarBox">
        <img src="~assets/img/detail/Collection.svg" alt="">
        <div>收藏</div>
      </div>
    </div>
    <div class="rightBar">
      <div class="rightBarBox1" @click="addToShopCar">
        加入购物车
      </div>
      <div class="rightBarBox2">
        购买
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'DetailBottomBar',
    methods: {
      addToShopCar(){
        this.$emit("addToShopCar");
      }
    },
  }
</script>
<style scoped>
  .detailBottomBar{
    height: 49px;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    margin-top: 60px;
    display: flex;
  }
  .detailBottomBar>div{
    flex: 1;
  }
  .leftBar{
    display: flex;
    background-color: white;
  }
  .leftBarBox{
    flex: 1;
    color: rgb(77, 77, 77);
    text-align: center;
  }
  .leftBarBox img{
    width: 25px;
    height: 25px;
  }
  .rightBar{
    display: flex;
  }
  .rightBarBox1,.rightBarBox2{
    flex: 1;
    text-align: center;
    line-height: 49px;
  }
  .rightBarBox1{
    background-color: rgb(240, 147, 7);
  }
  .rightBarBox2{
    background-color: rgb(255, 158, 174);
    color: white;
  }
</style>