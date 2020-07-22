<template>
  <div class="tabConotral">
    <div class="tabItem" v-for="(item,index) in typelist"
     :class="{active:index===selecrIndex}" @click="itemClick(index)">
      <span>{{item}}</span>  
    </div>
  </div>
</template>
<script>
  export default{
    name:'tabConotral',
    props:{
      typelist:{
        type:Array,
        default:[]
      }
    },
    data() {
      return {
        selecrIndex:0
      }
    },  
    methods: {
      itemClick(index){
        this.selecrIndex=index;
        this.$emit("itemClick",index);
      }
    }, 
  }
</script>
<style scoped>
  .tabConotral{
    background-color: #ffffff;
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
  }
  .tabItem{
    flex: 1;
  }
  .active span{
    padding: 5px;
    color: pink;
    border-bottom: 3px solid pink;
  }
</style>