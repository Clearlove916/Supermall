import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import Toast from 'components/common/toast/index.js'

// import 'swiper/css/swiper.css'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)

Vue.prototype.$bus=new Vue()

Vue.use(Toast)

//图片懒加载
Vue.use(VueLazyload)

Fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
