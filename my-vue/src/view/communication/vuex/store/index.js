import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

/**
 *  state：数据仓库，用来存数据的。
    getters：获取数据的，有点像 computed 的用法(个人觉得)。
    mutations: 更改 state 数据的方法都要写在 mutations 里。
    actions：异步异步异步，异步的方法都写在这里，但最后还是需要通过 mutations 来修改 state 的数据。
    modules：分包。如果项目比较大，可以将业务拆散成独立模块，然后分文件管理和存放。
 */