<template>
  <div>
    <button @click="changeTest1">点一下看看mutations咯</button>
    <button @click="changeTest2">actions</button>
  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  import { useStore } from 'vuex'

  const store = useStore()
  console.log(store.state.msg);
  console.log(store.getters.getMsg);
  const changeTest1 = () => {
    store.commit('changeMsg', 'classListyayayaya')
    console.log(store.state.msg);
  }
  const changeTest2 = () => {
    store.dispatch('fetchMsg')
    console.log(store.state.msg);
    setTimeout(() => {
      console.log(store.state.msg);
    }, 2000)
  }
</script>

<style scoped lang='scss'>
</style>