<template>
  <div>
    子组件：
    <button @click="handleBusEmit">触发Bus.$emit</button>
    <button @click="changeBusMsg">修改总线里的 msg</button>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import Bus from './bus.js'

  function handleBusEmit () {
    Bus.$emit('changeMsg', 'hi好呀')
  }
  function changeBusMsg () {
    Bus.msg.value = '子组件里面修改了总线的值'
  }
</script>

<style scoped lang='scss'>
</style>