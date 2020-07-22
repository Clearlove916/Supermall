<template>
  <div class="paramsInfo" v-if="Object.keys(paramsInfo).length!==0">
    <table v-for="(table,index) in paramsInfo.rule.tables" class="infoSize" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key=indez>
          {{td}}
        </td>
      </tr>
    </table>
    <div class="line"></div>
    <table class="InfoType">
      <tr v-for="(tr,index) in paramsInfo.info.set">
        <td>{{tr.key}}</td>
        <td>{{tr.value}}</td>
      </tr>
    </table>
    <div class="line"></div>
    <div class="infoImg" v-if="paramsInfo.info.images">
      <img :src="paramsInfo.info.images[0]" alt="">
    </div>
  </div>
</template>
<script>
  export default{
    name:'ParamsInfo',
    props:{
      paramsInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods: {

    },
  }
</script>
<style scoped>
  .title{
    text-align: center;
    padding: 10px 0px 20px 0px;
  }
  .paramsInfo{
    margin-top: 20px;
    border-top: 4px solid rgb(243, 243, 243);
  }
  table{
    margin-top: 20px;
    padding-left: 8px;
    width: 94vw;
  }
  table tr td{
    text-align: center;
    height: 34px;
    border-bottom: 1px solid rgb(235, 235, 235);
  }
  table tr td:first-child{
    text-align:left;
    width: 55px;
  }
  .line{
    margin-top: 30px;
    width: 100vw;
    height: 4px;
    background-color: rgb(235, 235, 235);
  }
  .InfoType tr td:last-child{
    color: red;
    text-align: left;
    padding-left: 40px;
  }
  .infoImg img{
    width: 100%;
  }
</style>