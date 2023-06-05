<template>
  <div>
    <div>props--------------</div>
    <Child :msg="message"></Child>
  </div>
</template>

<script setup>
import Child from './propsChild.vue'

let message="你好"
</script>

<style>

</style>