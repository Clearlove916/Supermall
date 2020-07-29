<template>
  <div class="myInfomation">
    <nav-bar class="typeNavBar">
      <div slot="center">我的信息</div>
    </nav-bar>
    <user-loading></user-loading>
    <user-about-info></user-about-info>
    <user-business></user-business>
  </div>
</template>
<script>
  import NavBar from 'components/common/navbar/navbar.vue'

  import UserLoading from './childCompons/userLoading.vue'
  import UserAboutInfo from './childCompons/userAboutInfo.vue'
  import UserBusiness from './childCompons/userBusiness.vue'

  export default{
    name:'My',
    components:{
      NavBar,
      UserLoading,
      UserAboutInfo,
      UserBusiness
    }
  }
</script>