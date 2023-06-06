<template>
  <div>MoreValueParent---------------</div>
  {{message1}}------{{message2}}
  <!-- 绑定多个v-model -->
  <Child v-model:msg1="message1" v-model:msg2="message2"></Child>

</template>

<script setup>
  import { ref, reactive } from 'vue';
  import Child from './MoreValueChild.vue'

  const message1 = ref('我是message1')
  const message2 = ref('我是message2')
</script>

<style scoped lang='scss'>
</style>