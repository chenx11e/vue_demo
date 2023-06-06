<template>
  <div>
    父组件:
    <span style="margin-right: 30px;">message: {{ message }}</span>
    <span>msg: {{ msg }}</span>
  </div>
  <Child></Child>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import Bus from './bus.js'
  import Child from './BusChild.vue'

  const msg = ref(Bus.msg)
  const message = ref('hello')

  Bus.$on('changeMsg', data => {
    message.value = data
  })
</script>

<style scoped lang='scss'>
</style>