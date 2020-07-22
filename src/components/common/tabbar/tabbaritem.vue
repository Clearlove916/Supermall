<template>
  <div class="tabbar-item" @click="itemclick">
    <div v-if="!isActive">
      <slot name="item-img"></slot>     
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="isActiveColor">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script scoped>
  export default{
    name:'TabbarItem',
    props:{
      path:String,
      activecolor:{
        type:String,
        default:'red'
      }
    },
    data() {
      return {
        
      }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path)!==-1;
      },
      isActiveColor(){
        return this.isActive?{color:this.activecolor}:{}
      }
    },
    methods: {
      itemclick(){
        this.$router.replace(this.path)
      }
    },
  }
</script>
<style>
  .tabbar-item{
    height: 49px;
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .tabbar-item img{
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }
  /* .active{
    color: red;
  } */
</style>