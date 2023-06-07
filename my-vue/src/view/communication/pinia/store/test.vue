<template>
  <div>
    <div>name:{{name}}</div>
    <div>加一点：{{fullName}}</div>
    <button @click="handleClick">修改</button>

  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import { storeToRefs } from 'pinia'
  import { useUserStore } from './user.js'

  const userStore = useUserStore()
  const { name, fullName } = storeToRefs(userStore)
  const handleClick = () => {
    userStore.updateName('李四')
  }
</script>

<style scoped lang='scss'>
</style>