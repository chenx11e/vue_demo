<template>
  <div>子组件：{{message}}</div>

</template>

<script setup>
  import { ref, defineExpose } from "vue"


  let message = ref('子组件数据')


  const changeMessage = (data) => {
    message.value = data
  }

  //使用 defineExpose 向外暴露指定的数据和方法
  defineExpose({
    message, changeMessage
  })
</script>

<style>

</style>