<template>
  <div class="checkButton">
    <img :class="{checked:isChecked}" src="~assets/img/shopCar/CheckButton.svg" alt="">
  </div>
</template>
<script>
  export default{
    name:'CheckButton',
    data() {
      return {
       
      }
    },
    props:{
      isChecked:{
        type:Boolean,
        default(){
          return false
        }
      }
    },
    methods: {
    },
  }
</script>
<style scoped>
  img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border:  1px solid #aaaaaa;
    background-color: white;
  }
  .checked{
    background-color: rgb(255, 129, 150);
    border:  1px solid red;
  }
</style>