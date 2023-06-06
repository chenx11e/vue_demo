<template>
  <div>
    <!-- slot 渲染父组件传入的内容 -->
    <slot></slot>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue';
</script>

<style scoped lang='scss'>
</style>