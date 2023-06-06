<template>
  <propsParentVue />
  <EmitsParentVue />
  <ExposeRefParentVue />
  <nonPropsParent />
  <OneValueParent />
  <MoreValueParent />
  <DefaultSlotParent />
  <NameSlotParent />
  <AreaSlotParent />
  <provideVue />
  <BusParent />
</template>

<script setup>
  import propsParentVue from "./view/communication/propsParent.vue";
  import EmitsParentVue from "./view/communication/EmitsParent.vue"
  import ExposeRefParentVue from "./view/communication/exposeRefParent.vue"
  import nonPropsParent from './view/communication/nonPropsParent.vue'
  import OneValueParent from './view/communication/vModel/OneValueParent.vue'
  import MoreValueParent from './view/communication/vModel/MoreValueParent.vue'
  import DefaultSlotParent from './view/communication/slot/DefaultSlotParent.vue'
  import NameSlotParent from './view/communication/slot/NameSlotParent.vue'
  import AreaSlotParent from './view/communication/slot/AreaSlotParent.vue'
  import provideVue from './view/communication/Provide.vue'
  import BusParent from './view/communication/bus/BusParent.vue'
</script>


<style scoped>

</style>