<template>
  <Child></Child>
</template>

<script setup>
  import { ref, reactive, provide, readonly } from 'vue';
  import Child from './inject.vue'

  const name = ref('classList')
  const msg = ref('contain')
  // 使用readonly可以让子组件无法直接修改，需要调用provide往下传的方法来修改
  provide('name', readonly(name))
  provide('msg', msg)

  provide('changeName', (value) => {
    name.value = value
  })

</script>

<style scoped lang='scss'>
</style>