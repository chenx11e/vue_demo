<template>
  <div @click="handleClick">{{modelValue}}</div>
</template>

<script setup>
  import { ref, reactive, defineProps, defineEmits } from 'vue';

  // 接收
  const props = defineProps([
    'modelValue'// 接收父组件使用 v-model 传进来的值，必须用 modelValue 这个名字来接收
  ])
  const emit = defineEmits(['update:modelValue'])//必须用 update:modelValue 这个名字来通知父组件修改值
  const handleClick = () => {
    emit('update:modelValue', 'childVal')
  }
</script>

<style scoped lang='scss'>
</style>