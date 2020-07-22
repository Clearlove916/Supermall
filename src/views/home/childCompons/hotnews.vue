<template>
  <div class="hotnews">
      <div v-for="item in recommends">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </a>       
      </div>
  </div>
</template>
<script>
  export default{
    name:"HotNews",
    props:{
      recommends:{
        type:Array,
        dafault(){
          return [];
        }
      }
    },
    data() {
      return {
        
      }
    },
  }
</script>
<style scoped>
  .hotnews{
    width: 100%;
    display: flex;
    padding-top: 20px;
    margin: auto;
  }
  .hotnews div{
    flex: 1;
    text-align: center;
  }
  .hotnews img{
    width: 65px;
    height: 65px;
  }
  .hotnews a{
    text-decoration: none;
    color: gray;
    margin-top: 10px;
  }
  .hotnews a p{
    margin-top: 10px;
    margin-bottom: 0;
  }
</style>