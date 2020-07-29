<template>
  <div class="typeBar">
    <ul>
      <li v-for="(item,index) in typeList" :class="{isSelect:isSelectIndex===index}"
       @click="typeLiClick(index,item)">
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
    name:'TypeBar',
    data() {
      return {
        typeList:['正在流行','上衣','裤子','裙子','内衣',
        '女鞋','男友','包包','运动','配饰','美妆','个护','家具'],
        isSelectIndex:0
      }
    },
    methods: {
      typeLiClick(index,item){
        this.isSelectIndex=index;
        this.$emit("typeSelect",item);
      }
    },
  }
</script>
<style>
  .typeBar{
    background-color: #F6F6F6;
    width: 80px;
  }
  .typeBar ul{
    height: calc(100vh - 49px - 44px);
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .typeBar ul li{
    line-height: 44px;
    color: #7D7D7D;
    text-align: center;
    flex: 1;
  }
  .isSelect{
    background-color: white;
    color: #FF497A!important;
    font-weight: bolder;
    border-left: 4px solid #F35678;
  }
</style>