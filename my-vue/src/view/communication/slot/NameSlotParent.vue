<template>
  <Child>
    <!-- 包一层template -->
    <button>变身</button>
    <template v-slot:dad>
      <div>我是你爸</div>
    </template>

  </Child>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import Child from './NameSlotChild.vue'
</script>

<style scoped lang='scss'>
</style>