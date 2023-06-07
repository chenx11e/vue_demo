import { createStore } from 'vuex'
import user from './modules/user'
import goods from './modules/goods'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    goods
  }
})
