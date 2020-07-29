<template>
  <div class="Classification">
    <nav-bar class="typeNavBar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <type-bar @typeSelect="typeSelect"></type-bar>
      <scroll ref="scroll" class="typeContent">
        <ul>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
          <li>111</li>
        </ul>
      </scroll>
    </div>
  </div>
</template>
<script>
  import Scroll from 'components/common/scroll/Scroll.vue'
  import NavBar from 'components/common/navbar/navbar.vue'

  import TypeBar from 'components/content/typeBar/typeBar.vue'

  export default{
    name:'Classification',
    components:{
      NavBar,
      TypeBar,
      Scroll
    },
    methods: {
      typeSelect(typeName){
        console.log(typeName);
      }
    },
  }
</script>
<style scoped>
  .content{
    display: flex;
  }
  .typeContent{
    width: calc(100vw - 80px);
    height: calc(100vh - 49px - 44px);
    overflow: hidden;
  }
</style>