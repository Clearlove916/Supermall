import Vue from 'vue'
import Router from 'vue-router'

const Home=()=>import('views/home/home.vue')
const Classification=()=>import('views/classification/classification.vue')
const Shoppingcart=()=>import('views/Shopping Cart/shoppingcart.vue')
const My=()=>import('views/my/my.vue')
const Detail=()=>import('views/detail/detail.vue')

Vue.use(Router)

const routes=[
  {
    path:'',
    redirect: '/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/classification',
    component:Classification
  },
  {
    path:'/shoppingcart',
    component:Shoppingcart
  },
  {
    path:'/my',
    component:My
  },
  {
    path:'/detail/:id',
    component:Detail
  }
]

export default new Router({
  routes,
  mode:'history'
})
