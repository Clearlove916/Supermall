<template>
  <div class="swiper-container">
     <div class="swiper-wrapper">
        <!-- <div class="swiper-slide" v-for="item in imgs">
            <img :src="item.name" alt="">
        </div> -->
        <slot name="swiper"></slot>
    </div>
    <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->

    </div>
</template>
<script>
  
  import Swiper from 'swiper'
  import '../../../../node_modules/swiper/dist/css/swiper.css'

  export default{
    name:'CommonSwiper',
    data() {
      return {
        
      }
    },
    methods: {
      initswiper(){
        var mySwiper = new Swiper('.swiper-container', {
        speed:2000,
        autoplay:{
          delay:2000,
          disableOnInteraction: false
        },
        loop:true,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
        },
        freeMode : false,
        observeParents:false,
        observer:true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        })
      }
    },
    mounted(){
      this.initswiper()
    },
}
</script>
<style scoped>

</style>