<template>
  <div class="userAboutInfo">
    <div class="aboutInfoItem">
      <span><p>0.00</p>元</span>
      <span>我的余额</span>
    </div>
    <div class="aboutInfoItem">
      <span><p>0</p>个</span>
      <span>我的优惠</span>
    </div>
    <div class="aboutInfoItem">
      <span><p>0</p>分</span>
      <span>我的积分</span>
    </div>
  </div>
</template>
<script>
  export default{
    name:'UserAboutInfo'
  }
</script>
<style scoped>
  .userAboutInfo{
    width: 100vw;
    height: 120px;
    display: flex;
    justify-content: space-between;
    background-color: #F8F8F8;
  }
  .aboutInfoItem{
    width: 32.6vw;
    height: 100px;
    color: #767676;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #FFFFFF;
  }
  .aboutInfoItem p{
    color: #EF6051;
    font-size: 20px;
    display: inline-block;
    margin: 24px 2px 8px 0;
  }
</style>