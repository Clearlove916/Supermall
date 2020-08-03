<template>
  <div class="remClassList">
    <rem-class-list-item v-for="(item,index) in detailType"
     :key="index" :detailTypeItem="item">
    </rem-class-list-item>
  </div>
</template>
<script>
  import RemClassListItem from './remClassListItem.vue'

  export default{
    name:'RemClassList',
    props:{
      detailType:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components: {
      RemClassListItem
    }
  }
</script>
<style scoped>
.remClassList{
  display: flex;
  flex-wrap: wrap;
  padding: 20px 20px 20px 20px;
}
</style>