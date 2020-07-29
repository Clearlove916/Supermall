<template>
  <div class="userBusiness">
    <div class="userBusinessItem">
      <img src="~assets/img/my/information.svg" alt="">
      <div class="userBusItemText">我的消息</div>
    </div>
    <div class="userBusinessItem">
      <img src="~assets/img/my/integral.svg" alt="">
      <div class="userBusItemText">积分商城</div>
    </div>
    <div class="userBusinessItem">
      <img src="~assets/img/my/member.svg" alt="">
      <div class="userBusItemText">会员卡</div>
    </div>
    <div class="userBusinessItem divisionDiv">
      <img src="~assets/img/my/shopcar.svg" alt="">
      <div class="userBusItemText">我的购物车</div>
    </div>
    <div class="userBusinessItem">
      <img src="~assets/img/my/shoping.svg" alt="">
      <div class="userBusItemText">下载购物APP</div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'UserBusiness'
  }
</script>
<style scoped>
  .userBusiness{
    background-color: #F8F8F8;
  }
  .userBusinessItem{
    display: flex;
    margin-top: 2px;
    background-color: white;
  }
  .userBusinessItem img{
    width: 23px;
    height: 23px;
    margin: 20px 10px 0 18px;
  }
  .userBusItemText{
    height: 60px;
    color: #767676;
    line-height: 60px;
    font-size: 20px;
  }
  .divisionDiv{
    margin-top: 20px;
  }
</style>