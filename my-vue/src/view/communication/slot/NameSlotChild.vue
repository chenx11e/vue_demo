<template>
  <div>
    <!-- slot 默认插槽 -->
    <slot></slot>

    <!-- slot 具名插槽 -->
    <slot name="dad"></slot>
    <!-- 渲染的顺序 以子组件里的排版为准  -->
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue';
</script>

<style scoped lang='scss'>
</style>