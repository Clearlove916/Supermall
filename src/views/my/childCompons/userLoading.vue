<template>
  <div class="userLoading">
    <div class="headImg">
      <img src="~assets/img/my/my.svg" alt="">
    </div>
    <div class="load">
      <span>登录/注册</span>
      <div class="phone">
        <div class="phoneImg">
          <img src="~assets/img/my/phone.svg" alt="">
        </div>
        <div class="text">暂无绑定手机号</div>
      </div>
    </div>
    <div class="more">
      <img src="~assets/img/my/more.svg" alt="">
    </div>
  </div>
</template>
<script>
  export default{
    name:'UserLoading'
  }
</script>
<style scoped>
  .userLoading{
    width: 100vw;
    height: 80px;
    background-color: #FF5577;
    display: flex;
    justify-content: space-between;
  }
  .headImg{
    flex: 1;
  }
  .headImg img{
    width: 54px;
    height: 54px;
    margin-top: 10px;
    margin-left: 20px;
    border-radius: 50%;
    background-color: #F2F2F2;
  }
  .load{
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    color: #FFF5FB;
    flex: 3;
  }
  .load>span{
    padding-top: 16px;
    font-size: 16px;
  }
  .phone{
    margin-top: 5px;
    display: flex;
    font-size: 14px;
  }
  .phone img{
    width: 20px;
    height: 25px;
  }
  .phone div:last-child{
    padding-left: 5px;
    line-height: 28px;
  }
  .more{
    text-align: center;
    flex: 1;
  }
  .more img{
    width: 40px;
    height: 40px;
    margin-top: 20px;
  }
</style>