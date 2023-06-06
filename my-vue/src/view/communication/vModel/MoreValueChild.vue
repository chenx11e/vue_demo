<template>
  <div><button @click="changeMsg1">修改msg1</button> {{msg1}}</div>
  <div><button @click="changeMsg2">修改msg2</button> {{msg2}}</div>

</template>

<script setup>
  import { ref, reactive, defineProps, defineEmits } from 'vue';

  // 接收
  const props = defineProps({
    // 多个modeL用对象形式
    msg1: String,
    msg2: String,
  })
  const emit = defineEmits(['update:msg1', 'update:msg2'])//必须用 update:modelValue 这个名字来通知父组件修改值
  const changeMsg1 = () => {
    emit('update:msg1', '我已经不是当初的msg1了')
  }
  const changeMsg2 = () => {
    emit('update:msg2', '我已经不是当初的msg2了')
  }
</script>

<style scoped lang='scss'>
</style>