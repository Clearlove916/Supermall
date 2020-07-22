<template>
  <div class="goodsInfo">
    <div class="title">
      <div class="lineTop">
        <div class="block"></div>
        <div class="line"></div>
      </div>
      <div class="detailTitle">
        <span>{{goodsInfo.desc}}</span>
      </div>
      <div class="lineBottom">
        <div class="line"></div>
        <div class="block"></div>
      </div>
    </div>
    <div class="goodImageShow">
      <div class="goodImageShowItem" v-for="item in goodsInfo.detailImage"> 
        <span>{{item.key}}</span>
        <img v-for="(img,index) in item.list" :src="img" alt="" :key="index" @load="imageLoad">
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'GoodsInfo',
    props:{
      goodsInfo:{
        type:Object,
        default(){
          return {}
       }
      }    
    },
    methods: {
      imageLoad(){
        this.$emit('detailImageLooad');
      }
    },
  }
</script>
<style scoped>
  .goodsInfo{
    margin: 0 auto;
    border-top: 4px solid rgb(236, 236, 236);
  }
  .title{
    width: 94%;
    margin: 0 auto;
  }
  .block{
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: black;
    border-radius: 50%;
  }
  .line{
    display: inline-block;
    width: 100px;
    height: 1px;
    background-color: rgb(216, 213, 213);
  }
  .lineTop{
    text-align: left;
  }
  .lineBottom{
    text-align: right;
  }
  .detailTitle{
    padding-top: 8px;
  }
  .detailTitle span{
    font-size: 13px;
  }
  .goodImageShow{
    margin-top: 10px;
  }
  .goodImageShowItem{
    padding-bottom: 30px;
  }
  .goodImageShowItem span{
    padding-left: 3vw;
    font-size: 14px;
  }
  .goodImageShowItem img{
    width: 100vw;
    margin-top: 15px;
  }
</style>