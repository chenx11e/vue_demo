<template>
  <Child>
    <!-- 在父组件中传入div -->
    <div>我是你爸</div>
  </Child>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import Child from './DefaultSlotChild.vue'
</script>

<style scoped lang='scss'>
</style>