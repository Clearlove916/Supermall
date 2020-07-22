import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from './mutations'
import actions from './actions'
import getters from './getter'

const store=new Vuex.Store({
  state:{
    shopCarList:[],
    timer:''
  },
  mutations,
  actions,
  getters
})

export default store