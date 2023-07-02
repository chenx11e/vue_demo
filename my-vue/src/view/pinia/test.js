import { defineStore } from "pinia"

// 1. Store 是用 defineStore() 定义的
// 2. defineStore的第一个参数是应用中的store中的唯一id(唯一！！！！)
// 3. defineStore() 的第二个参数可接受两类值：Setup 函数或 Option 对象。
export const useTestStore = defineStore('uniqueName', {
  // 相关配置之option Store
  // 1. state 是 store 的数据 (data)
  // 2. getters 是 store 的计算属性 (computed)
  // 3. actions 则是方法 (methods)
  state: () => ({
    count: 0
  }),
  getters: {
    double: (state) => state.count * 2
  },
  actions: {
    increment () {
      this.count++
    }
  }
})

export const useCounterStore = defineStore('counter', () => {
  // setup Store
  // 1. ref() 就是 state 属性
  // 2. computed() 就是 getters
  // 3. function() 就是 actions
  const count = ref(0)
  function increment () {
    count.value++
  }
  return { count, increment }
})