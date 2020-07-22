<template>
  <div v-if="topImages.length">
    <common-swiper>
      <div slot="swiper" class="swiper-slide" v-for="item in topImages">
        <img :src="item" @load="imageLoad">
      </div>
    </common-swiper>   
  </div>
</template>
<script>
  import commonSwiper from 'components/common/swiper/commonswiper.vue'

  export default{
    name:'DetailSwiper',
    data() {
      return {
        
      }
    },
    props:{
      topImages:{
        type:Array,
        default:[]
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
    height: 370px; 
  } 
</style>