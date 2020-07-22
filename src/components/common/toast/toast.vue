<template>
  <div class="toast" v-show="isshow">
    <div>{{message}}</div>
  </div>
</template>
<script>
  export default{
    name:'Toast',
    data() {
      return {
        isshow:false,
        message:''
      }
    },
    props:{
      // message:{
      //   type:String,
      //   default(){
      //     return ''
      //   }
      // },
      // show:{
      //   type:Boolean,
      //   default(){
      //     return false
      //   }
      // }
    },
    methods: {
      show(message,duration){
        this.isshow=true;
        this.message=message;

        setTimeout(()=>{
          this.isshow=false;
          this.message='';
        },duration)
      }
    },
  }
</script>
<style>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 8px 10px;
    transform: translate(-50%,-50%);
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10000;
    border-radius: 15px;
  }
</style>