<template>
  <div class="goodsListItem" @click="goodItemClick">
    <img v-lazy="showImage" alt="" @load="imageLoad">
    <div class="goodsInfoo">
      <p>{{goodsItem.title}}</p>
      <div class="bottom">
        <span>￥{{goodsItem.price}}</span>
        <span><img src="~assets/img/收藏.svg" alt=""> {{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'GoodsListItem',
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed: {
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img;
      }
    },
    methods: {
      imageLoad(){
        this.$bus.$emit('itemImageLoad');
        // if(this.$route.path.indexOf('/home')){
        //   this.$bus.$emit('homeitemImageLoad');
        // }
        // else if(this.$route.path.indexOf('/detail')){
        //   this.$bus.$emit('detailitemImageLoad');
        // }
      },
      goodItemClick(){
        this.$router.push('/Detail/'+this.goodsItem.iid);
        // this.$router.push({
        //   path:'/Detail',
        //   query:{
        //     id:1
        //   }
        // })
      }
    },
  }
</script>
<style scoped>
  .goodsListItem{
    width: 48%;
    margin-top: 10px;
  }
  .goodsListItem img{
    width: 100%;
    border-radius: 5px;
    height: 270px;
  }
  .goodsInfoo{
    margin-top: 5px;
    position: relative;
    height: 70px;
    font-size: 12px;
    left: 0;
    width: 100%;
  }
  .bottom{
    width: 100%;
    position: absolute;
    bottom: 0;
    padding-top: 8px;
  }
  .goodsInfoo P{
    margin: 0;
    line-height: 15px;
  }
  .goodsInfoo span{
    font-size: 14px;
  }
  .goodsInfoo span:first-child{
    color: rgb(250, 147, 165);
    float: left;
  }
  .goodsInfoo span:last-child{
    float: right;
  }
  .goodsInfoo span img{
    width: 14px;
    height: 14px;
  }
  .clearfix:after{
     content:".";        
     display:block;        
     height:0;        
     clear:both;        
     visibility:hidden;        
  }
</style>