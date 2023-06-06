<template>
  <div>
    <!-- v-slot="{scope}" 获取子组件传上来的数据 -->
    <!-- :list="list" 把list传给子组件 -->
    <Child v-slot="{scope}" :list="list">
      <div>
        <div>名字：{{ scope.name }}</div>
        <div>职业：{{ scope.occupation }}</div>
        <hr>
      </div>
    </Child>
    <slot></slot>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import Child from './AreaSlotChild.vue'

  const list = ref([
    { name: 'c', occupation: 'web' },
    { name: 'z', occupation: 'c++' },
    { name: 'y', occupation: 'java' },
  ])
</script>

<style scoped lang='scss'>
</style>