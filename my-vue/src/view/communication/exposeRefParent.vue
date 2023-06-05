<template>
  <div>expose-ref--------------</div>
  <div>父组件：拿到子组件的message数据：{{msg}}</div>
  <button @click="callChildFn">调用子组件的方法</button>

  <Child ref="childRef"></Child>
</template>

<script setup>
  import { ref, onMounted } from "vue"
  import Child from './exposeRefChild.vue'

  let msg = ref('')
  const childRef = ref(null)


  onMounted(() => {
    // 在加载完成后，将子组件的 message 赋值给 msg
    msg.value = childRef.value.message
  })

  const callChildFn = () => {
    // 调用子组件的 changeMessage 方法
    childRef.value.changeMessage('子组件的方法')
    // 重新将 子组件的message 赋值给 msg
    msg.value = childRef.value.message
  }
</script>

<style>

</style>