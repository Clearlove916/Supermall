import {debounce} from './ulits.js'

import BackTop from 'components/content/backTop/backtop.vue'

export const itemListenerMixin={
  data() {
    return {
      itemimgListener:null,
      refresh:null
    }
  },
  mounted() {
    this.refresh=debounce(this.$refs.scroll.refresh,200);
    this.itemimgListener=()=>{
      this.refresh();
    };
    this.$bus.$on('itemImageLoad',this.itemimgListener);
  },
}

export const backToTopMixin={
  components:{
    BackTop
  },
  data() {
    return {
      backTopIsshow:false
    }
  },
  methods: {
    backTop(){
      this.$refs.scroll.scrollTo(0,0,1500);
    },
  },
}