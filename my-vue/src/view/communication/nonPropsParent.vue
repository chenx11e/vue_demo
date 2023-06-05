<template>
  <div>nonPropsParent--------------</div>
  <Child id="non-parent" name="parent"></Child>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import Child from './nonPropsChild.vue'
</script>

<style scoped lang='scss'>
</style>