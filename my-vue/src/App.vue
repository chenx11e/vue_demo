<template>
  <propsParentVue />
  <EmitsParentVue />
  <ExposeRefParentVue />
  <nonPropsParent />
</template>

<script setup>
  import propsParentVue from "./view/communication/propsParent.vue";
  import EmitsParentVue from "./view/communication/EmitsParent.vue"
  import ExposeRefParentVue from "./view/communication/exposeRefParent.vue"
  import nonPropsParent from './view/communication/nonPropsParent.vue'
</script>


<style scoped>

</style>