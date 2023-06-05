<template>
  <div>
    <div>emits--------------</div>
    <div>父组件</div>{{message}}
    <Child @changeMsg="changeMessage"></Child>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Child from './EmitsChild.vue'

let message=ref("你好")

const changeMessage=(data)=>{
    message.value=data
}
</script>

<style>

</style>