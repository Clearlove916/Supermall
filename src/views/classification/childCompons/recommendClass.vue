<template>
  <div class="recommendClass">
    <rem-class-list :detailType="detailType">
    </rem-class-list>
  </div>
</template>
<script>
  import RemClassList from './remClassList.vue'

  export default{
    name:'RecommendClass',
    props:{
      detailType:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components: {
      RemClassList
    }
  }
</script>
<style scoped>

</style>