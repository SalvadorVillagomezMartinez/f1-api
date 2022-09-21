import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../modules/auth/store'
import articles from '../modules/Articles/store'

Vue.use(Vuex)
export default new Vuex.Store({
  state:{
    count: 1
  },
  modules: {
    auth,
    articles
    
  }

})
