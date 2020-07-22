<template>
  <div class="detail">
    <detail-navbar class="detailnav"
     @titleClick="navbarCilck"
     ref="navbar"
     ></detail-navbar>
    <scroll class="content" ref="scroll" :probe-type="3" @sendPsition="contentScroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-info :goods="goods"></detail-info>
      <shop-Info :shopInfo="shop"></shop-Info>
      <goods-info :goodsInfo="goodsInfo" @detailImageLooad="detailImageLoad"></goods-info>
      <params-info ref="params" :paramsInfo="paramsInfo"></params-info>
      <commont-info ref="commont" :commontInfo="commontInfo"></commont-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>   
    </scroll>
    <back-top @click.native="backTop" v-show="backTopIsshow"></back-top>
    <detail-bottom-bar @addToShopCar="addToShopCar"></detail-bottom-bar> 
    <!-- <toast :message="message" :show="isshow"></toast> -->
  </div>
</template>
<script>
  import Scroll from 'components/common/scroll/Scroll.vue'
  // import Toast from 'components/common/toast/toast.vue'
  import GoodsList from 'components/content/goods/goodsList.vue'

  import {itemListenerMixin,backToTopMixin} from 'common/mixin.js'
  import {debounce} from 'common/ulits.js'

  import DetailNavbar from './childCompons/detailNavbar.vue'
  import {DetailRequest,Goods,Shop,GetRecommend} from 'network/detail.js'

  import DetailSwiper from './childCompons/detailSwiper.vue'
  import DetailInfo from './childCompons/detailBaseInfo.vue'
  import ShopInfo from './childCompons/detailShopInfo.vue'
  import GoodsInfo from './childCompons/detailGoodsInfo.vue'
  import ParamsInfo from './childCompons/detailParamsInfo.vue'
  import CommontInfo from './childCompons/detailCommonInfo.vue'
  import DetailBottomBar from './childCompons/detailBottomBar.vue'

  import {mapActions} from 'vuex'

  export default{
    name:'Detail',
    data() {
      return {
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        goodsInfo:{},
        paramsInfo:{},
        commontInfo:{},
        recommends:[],
        themeTopYs:[],
        getThemTopys:null,
        currentIndex:0,
        backTopIsshow:false,
        shopProduct:{},
        // message:'',
        // isshow:false,
      }
    },
    components:{
      DetailNavbar,
      DetailSwiper,
      DetailInfo,
      ShopInfo,
      Scroll,
      GoodsInfo,
      ParamsInfo,
      CommontInfo,
      GoodsList,
      DetailBottomBar,
      // Toast
    },

    
    mixins:[itemListenerMixin,backToTopMixin],
    
    
    created() {
      this.iid=this.$route.params.id;


      //商品详情数据请求
      DetailRequest(this.iid).then(res=>{
        const data=res.data.result;
        this.topImages=data.itemInfo.topImages;
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        this.shop=new Shop(data.shopInfo);
        this.goodsInfo=data.detailInfo;
        this.paramsInfo=data.itemParams;
        if(data.rate.cRate!==0){
          this.commontInfo=data.rate.list[0];
        }

        this.getThemTopys=debounce(()=>{
          this.themeTopYs=[];
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop-44);
          this.themeTopYs.push(this.$refs.commont.$el.offsetTop-44);
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44);
          this.themeTopYs.push(Number.MAX_VALUE);
        },200)

        //获取各个区域的Y位置(因为图片加载问题，取到的值不对)
        // this.$nextTick(()=>{
        //   this.themeTopYs=[];
        //   this.themeTopYs.push(0);
        //   this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        //   this.themeTopYs.push(this.$refs.commont.$el.offsetTop);
        //   this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        //   console.log(this.themeTopYs);
        // })
      })
     
      //推荐商品信息请求
      GetRecommend().then(res=>{
        const data=res.data.data;
        this.recommends=data.list;
      })
    },   
    
    mounted() {
      
    },
    // mounted() {
    //   const refresh=debounce(this.$refs.scroll.refresh,200);
    //   this.$bus.$on('detailitemImageLoad',()=>{
    //     refresh();
    //   })
    // },
    destroyed() {
      //取消全局事件函数监听
      this.$bus.$off('itemImageLoad',this.itemimgListener);
    },
    methods: {
      ...mapActions({addCart:'addCart'}),

      //点击顶部提示栏跳转
      navbarCilck(index){
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],500);
      },
      //详情页面图片加载
      detailImageLoad(){
        this.refresh();
        this.getThemTopys();
      },
      //下拉界面顶部快捷栏切换状态
      contentScroll(position){
        const positionY=-position.y;
        let length=this.themeTopYs.length;
        for(let i=0;i<length-1;i++){
          if(this.currentIndex!==i && (positionY>=this.themeTopYs[i] && positionY<this.themeTopYs[i+1])){
              this.currentIndex=i;
              this.$refs.navbar.currentIndex=this.currentIndex;
            }
        }
        this.backTopIsshow=positionY>1000;
      },
    
      //点击添加购物车事件
      addToShopCar(){
        this.shopProduct.image=this.topImages[0];
        this.shopProduct.title=this.goods.title;
        this.shopProduct.desc=this.goods.desc;
        this.shopProduct.newPrice=this.goods.lowNowPrice;
        this.shopProduct.id=this.iid;

        //引入...mapActions直接调用actions js中的方法

        this.addCart(this.shopProduct).then((res)=>{
          // this.message=res;
          // this.isshow=true;

          // setTimeout(() => {
          //   this.isshow=false;
          // }, 1500);
          this.$toast.show(res,2000);
        })

        //通过$store.dispatch调用actions js中的方法
        // this.$store.dispatch("addCart",this.shopProduct).then((res)=>{
        //   console.log(res);
        // })

      }
    },
  }
</script>
<style scoped> 
  .detail{
    position: relative;
    z-index: 10;
    background-color: white;
    height: 100vh;
  }
  /* .detailnav{
    position: relative;
    z-index: 9;
    background-color: white;
  } */
  .content{
    height: calc(100% - 44px - 49px);
    overflow: hidden;
  }
</style>