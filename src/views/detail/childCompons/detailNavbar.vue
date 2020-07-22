<template>
  <div>
    <navbar>
      <div slot="left" class="back" @click="backClick()"> 
        <img src="~assets/img/common/back.svg" alt="" >
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in btnList" 
        class="titleItem" 
        :class="{active:index===currentIndex}"
         @click="itemclick(index)">
        {{item}}
        </div>
      </div>
    </navbar>   
  </div>
</template>
<script>
  import Navbar from 'components/common/navbar/navbar.vue'
  
  export default{
    name:'DetailNavbar',
    data() {
      return {
        currentIndex:0,
        btnList:['商品','参数','评论','详情']
      }
    },
    components:{
      Navbar
    },
    methods: {
      itemclick(index){
        this.currentIndex=index;
        this.$emit('titleClick', index)
      },
      backClick(){
        this.$router.back();
      }
    },
  }
</script>
<style scoped>
  .title{
    display: flex;
  }
  .back img{
    width: 18px;
    height: 18px;
    margin-top: 12px;
    margin-left: 10px;
  }
  .titleItem{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
  .active{
    color: pink;
  }
</style>