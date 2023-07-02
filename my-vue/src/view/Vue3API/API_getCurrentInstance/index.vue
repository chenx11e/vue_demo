<template>
  <div>{{ num }}</div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
import { ref, reactive } from 'vue'
const num = ref(3)
// vue2中当前运行的组件实例：this
// vue3中this为undefined 用getCurrentInstance获取当前组件实例
const instance = getCurrentInstance()
console.log(instance)
</script>

<style scoped lang="scss"></style>
