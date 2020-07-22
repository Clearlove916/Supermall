<template>
  <div v-if="banners.length">
    <common-swiper>
      <div slot="swiper" class="swiper-slide" v-for="item in banners">
        <img :src="item.image" @load="imageLoad">
      </div>
    </common-swiper>   
  </div>
</template>
<script>
  import commonSwiper from 'components/common/swiper/commonswiper.vue'
  export default{
    name:"Swiper",
    data() {
      return {
        isLoad:false
      }
    },
    props:{
      banners:{
        type:Array
      }
    },
    components:{
      commonSwiper
    },
    methods: {
      imageLoad(){
        if (!this.isLoad) {
         this.$emit('swiperImageLad');
         this.isLoad=true
        }       
      }
    },
  }
</script>
<style scoped>
  img{
    width: 100%;
    height: 300px; 
  } 
</style>