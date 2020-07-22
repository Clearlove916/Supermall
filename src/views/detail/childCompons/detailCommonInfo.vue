<template>
  <div class="commontInfo" v-if="Object.keys(commontInfo).length!==0">
    <div class="head">
      <span>用户评价</span>
      <span>更多<img src="~assets/img/detail/more.svg" alt=""></span>
    </div>
    <div class="userInfo">
      <img v-if="commontInfo.user.avatar" :src="commontInfo.user.avatar" alt="">
      <span>{{commontInfo.user.uname}}</span>
    </div>
    <div class="userCommont">
      <p>{{commontInfo.content}}</p>
      <div class="userGoodInfo">
        <span>{{commontInfo.created | showData}}</span>
        <span>{{commontInfo.style}}</span>
      </div>
      <div class="userGoodImg">
        <img v-for="(image,index) in commontInfo.images" :src="image" alt="" :key="index">
        <div class="imageExplain">
          <span v-for="explain in commontInfo.extraInfo">{{explain}}</span>
        </div>  
      </div>
    </div>
  </div>
</template>
<script>
  import {formatTime} from 'common/ulits.js'

  export default{
    name:'CommontInfo',
    props:{
      commontInfo:{
        type:Object,
        default(){
          return {};
        }
      }
    },
    filters:{
      showData(value){
        const data=new Date(value * 1000);
        return formatTime(data,'Y-M-D h:m:s')
      }
    }
  }
</script>
<style scoped>
  .commontInfo{
    margin-top: 15px;
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid rgb(235, 235, 235);
  }
  .head{
    width: 94vw;
    margin: 0 auto;
    padding-bottom: 12px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid rgb(230, 230, 230);
  }
  .head span:last-child{
    font-weight: bold;
  }
  .userInfo{
    display: flex;
    padding: 10px 0 5px 10px;
  }
  .userInfo img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .userInfo span{
    height: 50px;
    padding-left: 15px;
    line-height: 50px;
  }
  .userCommont{
    padding: 0 10px;
    color: rgb(80, 79, 79);
    font-size: 14px;
  }
  .userCommont p{
    margin: 0;
  }
  .userGoodInfo{
    margin-top: 8px;
  }
  .userGoodInfo span{
    padding-right: 8px;
  }
  .userGoodImg{
    margin-top: 10px;
    display: flex;
  }
  .userGoodImg img{
    width: 80px;
    height: 80px;
    margin-right: 15px;
  }
  .imageExplain{
    display: flex;
    flex-flow: column;
  }
  .imageExplain span{
    flex: 1;
  }
</style>