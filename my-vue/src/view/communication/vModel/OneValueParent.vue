<template>
  <div>OneValueParent---------------</div>
  <Child v-model="message"></Child>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import Child from './OneValueChild.vue'

  const message = ref('OneValModel')
</script>

<style scoped lang='scss'>
</style>