<template>
  <div>
    <!-- slot 渲染父组件传入的内容 -->
    <slot v-for="item in list" :scope="item"></slot>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  const props = defineProps({
    list: {
      type: Array,
      default: () => []
    }
  })
</script>

<style scoped lang='scss'>
</style>