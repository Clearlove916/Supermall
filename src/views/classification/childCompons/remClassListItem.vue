<template>
  <div class="remClassListItem">
    <img :src="detailTypeItem.image" alt="">
    <span>{{detailTypeItem.title}}</span>
  </div>
</template>
<script>
  export default{
    name:'RemClassListItem',
    props:{
      detailTypeItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
  }
</script>
<style scoped>
.remClassListItem{
    width: 33%;
    display: flex;
    flex-wrap:wrap;
  }
.remClassListItem img{
  width: 63px;
  height: 63px;
  margin: 0 auto;
}
.remClassListItem span{
  font-size: 14px;
  color: #7D7D7D;
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
}
</style>