<template>
  <div class="shopInfo">
    <div class="shopTop">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shopMiddle">
      <div class="shopMiddleLeft">
        <div> 
          <div>{{(shopInfo.sells-shopInfo.sells%1000)/10000}}万</div>
          <span>总销量</span>
        </div>
        <div>
          <div>{{shopInfo.goodsCount}}</div>
        <span>全部宝贝</span>
        </div>
      </div>
      <div class="shopMiddleRight">
        <div v-for="item in shopInfo.score">
          <span>{{item.name}}</span>
          <span style="color: rgb(245, 139, 0);" v-if="item.isBetter===true">{{item.score}}</span>
          <span style="color: rgb(46, 230, 46);" v-if="item.isBetter===false">{{item.score}}</span>
          <span style="background-color: rgb(245, 139, 0);" v-if="item.isBetter===true">高</span>
          <span style="background-color: rgb(46, 230, 46);"  v-if="item.isBetter===false">低</span>
        </div>
      </div>
    </div>
    <div class="shopBottom">
      <span>进店逛逛</span>
    </div>
  </div>
</template>
<script>

  export default{
    name:'ShopInfo',
    data() {
      return {
        sells:0
      }
    },
    props:{
      shopInfo:{
        type:Object,
        default(){
          return {}
        }
     },
    },
    created() {
    },
    methods: {
      
    },
  }
</script>
<style>
  .shopInfo{
    margin-top: 20px;
    padding: 30px 10px;
    border-top: 4px solid rgb(252, 245, 245);
  }
  .shopTop{
    padding-left: 30px;
    height: 35px;
    display: flex;
  }
  .shopTop img{
    width: 35px;
    height: 35px;
  }
  .shopTop span{
    font-size: 15px;
    padding-left: 8px;
    color: gray;
    text-align: center;
    line-height: 35px;
  }
  .shopMiddle{
    margin-top: 15px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between; 
  }
  .shopMiddle>div{
    flex: 1;
    text-align: center;
  }
  .shopMiddleLeft{
    display: flex;
    border-right: 1px dashed rgb(201, 198, 198);
  }
  .shopMiddleLeft>div{
    flex: 1;
  }
  .shopMiddleLeft div div{
    text-align: center;
    padding-bottom: 5px;
  }
  .shopMiddleLeft div span{
    font-size: 12px;
  }
  .shopMiddleRight div{
    display: flex;
    padding-bottom: 5px;
  }
  .shopMiddleRight div span{
    font-size: 13px;
    
  }
  .shopMiddleRight div span:first-child{
    text-align: right;
    flex: 3;
  }
  .shopMiddleRight div span:nth-child(2){
    flex: 2;
  }
  .shopMiddleRight div span:last-child{
    text-align: left;
    color: white;
    width: 12px!important;
  }
  .shopBottom{
    margin-top: 15px;
    text-align: center;
  }
  .shopBottom span{
    font-size: 14px;
    color: gray;
    line-height: 32px;
    display: inline-block;
    width: 130px;
    height: 32px;
    background-color: rgb(238, 238, 238);
    border-radius: 20px;
  }
</style>