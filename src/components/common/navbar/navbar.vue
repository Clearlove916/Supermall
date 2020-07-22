<template>
  <div class="navBar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
  export default{
    name:'NavBar'
  }
</script>
<style>
  .navBar{
    height: 44px;
    display: flex;
    line-height: 44px;
    box-shadow: 0 1px 2px rgb(100, 100, 100,.1);
  }
  .left,.right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
  
</style>