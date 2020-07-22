<template>
  <div class="carListItem">
    <div class="heckButton">
      <check-button :is-checked="product.ischecked"
       @click.native="Checked"
       :key="timer"></check-button>
    </div>
    <div class="image">
      <img :src="product.image" alt="">
    </div>
    <div class="carGoodsInfo">
      <div class="title text">{{product.title}}</div>
      <div class="desc text">{{product.desc}}</div>
      <div class="price-num">
        <span>￥{{product.newPrice}}</span>
        <span>x{{product.count}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import CheckButton from 'components/content/checkButton/checkButton.vue'

  import {mapGetters} from 'vuex'

  export default{
    name:'CarListItem',
    data() {
      return {
        // timer:''
      }
    },
    props:{
      product:{
        type:Object,
        default(){
          return {}
        }
      },
    },
    components:{
      CheckButton
    },
    computed: {
      ...mapGetters({timer:'backTimer'},
      )
    },
    methods: {
      Checked(){
        this.$store.dispatch("changeChecked",this.product);
        this.$store.dispatch("checkedBtnClick");
        // this.timer = new Date().getTime()
        // this.$emit('checkedBtnClick', this.timer)
      }
    },
  }
</script>
<style scoped>
  .carListItem{
    display: flex;
    padding-top: 10px;
    height: 100px;
  }
  .heckButton{
    padding: 0 5px;
    line-height: 100px;
  }
  .image img{
    width: 80px;
    height: 100px;
  }
  .text{
    width: 240px;
    height: 35px;
    display: block;
    white-space:nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    padding: 0 10px;
    color: rgb(87, 87, 87);
  }
  .title{
    font-size: 18px;    
  }
  .desc{
    font-size: 14px;
  }
  .price-num{
    width: 240px;
    height: 20px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
  }
  .price-num span:first-child{
    color: rgb(255, 94, 0);
  }
</style>