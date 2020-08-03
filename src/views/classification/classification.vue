<template>
  <div class="Classification">
    <nav-bar class="typeNavBar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <scroll ref="scroll" class="typeBarScroll">
        <type-bar ref="typeList" :typeList="typeList"
         @typeSelect="typeSelect"></type-bar>
      </scroll>  
      <scroll ref="scroll" class="typeContentScroll">
        <recommend-class :detailType="detailType"></recommend-class>
        <goods-list class="goodsList" :goods="goodsList"></goods-list>
      </scroll>
    </div>
  </div>
</template>
<script>
  import Scroll from 'components/common/scroll/Scroll.vue'
  import NavBar from 'components/common/navbar/navbar.vue'

  import TypeBar from 'components/content/typeBar/typeBar.vue'

  import GoodsList from 'components/content/goods/goodsList.vue'

  import RecommendClass from './childCompons/recommendClass.vue'

  import {getInitialInfo,getClassInfo,getClassDetail} from 'network/classification.js' 

  export default{
    name:'Classification',
    data() {
      return {
        typeList:[],
        detailType:[],
        goodsList:[]
      }
    },
    components:{
      NavBar,
      TypeBar,
      Scroll,
      RecommendClass,
      GoodsList
    },
    created() {
      this.getInitialInfo();
    },
    methods: {
      typeSelect(maitKey,miniWallkey){
        this.goodsList=[];
        getClassInfo(maitKey).then(res=>{
          const detailType=res.data.data.list;
          this.detailType=detailType;
        }),
        this.getClassDetail(miniWallkey,"pop");
        this.getClassDetail(miniWallkey,"new");
        this.getClassDetail(miniWallkey,"sell");
      },
      getInitialInfo(){
        getInitialInfo().then(res=>{
          const typeList=res.data.data.category.list;
          this.typeList=typeList;
          this.firstTypeMaitKey=typeList[0].maitKey;
        }) 
      },
      getClassDetail(miniWallkey,type){
        getClassDetail(miniWallkey,type).then(res=>{
          res.data.forEach(item=>{
            this.goodsList.push(item);
          })
        })
      }
    },
  }
</script>
<style scoped>
  .content{
    display: flex;
  }
  .typeBarScroll{
    height: calc(100vh - 49px - 44px);
    overflow: hidden;
  }
  .typeContentScroll{
    width: calc(100vw - 80px);
    height: calc(100vh - 49px - 44px);
    overflow: hidden;
  }
</style>