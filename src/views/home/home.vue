<template>
  <div id="home">
    <nav-bar class="homeNavBar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-contral class="tabContral" :typelist="typelist" 
      @itemClick="tabControlClick" 
      ref="tabContral1" v-show="istabfixed"></tab-contral>
    <scroll class="content" ref="scroll" 
      :probe-type="probeType" @sendPsition="receivePosition" 
      :pull-up-load="pullUpLoad" @pullupload="loadMore">
      <swiper class="swiper" :banners="banners" @swiperImageLad="swiperImageLad"></swiper>
      <hotnews :recommends="recommends"></hotnews>
     <feature-view></feature-view>
      <tab-contral class="tabContral" :typelist="typelist" 
      @itemClick="tabControlClick" 
      ref="tabContral2"></tab-contral>
      <goods-list :goods="goodsShow"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="backTopIsshow"></back-top>
  </div>
</template>
<script>

  import Scroll from 'components/common/scroll/Scroll.vue'
  import NavBar from 'components/common/navbar/navbar.vue'

  import tabContral from 'components/content/tabContral/tabContral.vue'
  import GoodsList from 'components/content/goods/goodsList.vue'
  

  import Hotnews from './childCompons/hotnews.vue'
  import swiper from './childCompons/swiper.vue'
  import FeatureView from './childCompons/featureview.vue'

  import {getHomeMultidata,getHomeGoods} from 'network/home.js' 

  import {itemListenerMixin,backToTopMixin} from 'common/mixin.js'

  export default{
    name:'Home',
    data() {
      return {
        banners:[],
        recommends:[],
        typelist:['流行','新款','精选'],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        typeCount:['pop','new','sell'],
        typelistIndex:0,
        selectType:'pop',
        probeType:3,
        pullUpLoad:true,
        taboffsetTop:0,
        istabfixed:false,
        location:0
      }
    },
    components:{
      NavBar,
      swiper,
      Hotnews,
      tabContral,
      FeatureView,
      GoodsList,
      Scroll,
    },
    mixins:[itemListenerMixin,backToTopMixin],
    created() {
      this.getHomeMultidata();

      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    }, 
    activated() {
      this.$refs.scroll.scrollTo(0,this.location,0);
      this.$refs.scroll.refresh();
    },
    deactivated() {
      //保存y值
      this.location=this.$refs.scroll.getScolly();
      //取消全局事件函数监听
      this.$bus.$off('itemImageLoad',this.itemimgListener);
    },
    computed: {
      goodsShow(){
        return this.goods[this.selectType].list;
      }
    },
    mounted() {
      
    },
    methods: {
      // 事件监听
      tabControlClick(index){
        this.selectType=this.typeCount[index];
        this.$refs.tabContral1.selecrIndex=index;
        this.$refs.tabContral2.selecrIndex=index;
      },
      receivePosition(positino){
        //判断backtop是否显示
        this.backTopIsshow=(-positino.y)>1500;
        //判断tabcontrol是否吸顶

        this.istabfixed=(-positino.y)>this.taboffsetTop;
      },
      loadMore(){
        this.getHomeGoods(this.selectType); 
      },
      swiperImageLad(){
        this.taboffsetTop=this.$refs.tabContral2.$el.offsetTop;
      },
      // 事件监听 end
      

      // 网络监听

      getHomeMultidata(){
        getHomeMultidata().then(res=>{
          this.banners=res.data.data.banner.list;
          this.recommends=res.data.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page=this.goods[type].page+1;
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page+=1;
          this.$refs.scroll.finishPullUp();
       })
      }
      
      // 网络监听 end
    }, 
  }
</script>
<style scoped>
  #home{
    height: 100vh;
    position: relative;
  }
  .tabContral{
    position:relative;
    z-index: 9;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>