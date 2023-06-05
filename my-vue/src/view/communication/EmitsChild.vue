<template>
  <div>
    <div>子组件</div>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script setup>
const emit=defineEmits(['changeMsg'])

const handleClick=()=>{
    emit('changeMsg','我是子组件的数据')
}
</script>

<style>

</style>