<template>
  <div class="BottomBar">
    <div class="checkBox">
      <check-button :key="timer" @click.native="allChecked" :is-checked="isSelectAll" class="checkButton"></check-button>
      <span>全选</span>
    </div>
    <div class="sumPrice">
      合计￥{{backSumPrice}}
    </div>
    <div class="calculate" @click="settlement">
      去结算 : ({{checkLength}})
    </div>
  </div>
</template>
<script>
  import CheckButton from 'components/content/checkButton/checkButton.vue'
  import {mapGetters} from 'vuex'

  export default{
    name:'BottomBar',
    components:{
      CheckButton
    },
    computed: {
      backSumPrice(){
        let sumPrice=parseFloat(this.sumPrice());
        return sumPrice.toFixed(2);
      },
      ...mapGetters({carList:'carList',timer:'backTimer'},
      ),
      checkLength(){
        return this.carList.filter(item=>item.ischecked).length;
      },
      isSelectAll(){
        if(this.carList.length===0) return false;
        return !this.carList.find(item=>!item.ischecked);

        // return !(this.carList.filter(item=>!item.ischecked).length);

        // for(let item of this.carList){
        //   if(!item.ischecked){
        //     return false;
        //   }
        //   return true;
        // }
      } ,
      
    },
    methods: {
      sumPrice(){
        return this.carList.filter(item=>{
          return item.ischecked
        }).reduce((preVale,item)=>{
          return preVale + item.newPrice * item.count;  
        },0)
      },
      allChecked(){
        this.$store.dispatch("checkedAll");
        this.$store.dispatch("checkedBtnClick");
      },
      settlement(){
        if(this.checkLength===0){
          this.$toast.show('请选择要购买的商品',2000);
        }
      }
    },
  }
</script>
<style scoped>
  .BottomBar{
    height: 40px;
    position: relative;
    background-color: #f6f6f6;
    display: flex;
  }
  .checkBox{
    width: 70px;
    height: 100%;
    display: flex;
    padding-left: 5px;
  }
  .checkBox .checkButton{
    line-height: 48px;
  }
  .checkBox span{
    line-height: 40px;
    padding-left: 5px;
    font-size: 14px;
    color: gray;
  }
  .sumPrice{
    font-size: 14px;
    line-height: 40px;
    color: gray;
    flex:1;
  }
  .calculate{
    width: 100px;
    line-height: 40px;
    color: white;
    background-color: pink;
    text-align: center;
  }
</style>