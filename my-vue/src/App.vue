<template>
  <propsParentVue />
  <EmitsParentVue />
  <ExposeRefParentVue />
  <nonPropsParent />
  <OneValueParent /> <el-button @click="sendMessage">发送消息</el-button>
</template>

<script setup>
  import propsParentVue from "./view/communication/propsParent.vue";
  import EmitsParentVue from "./view/communication/EmitsParent.vue"
  import ExposeRefParentVue from "./view/communication/exposeRefParent.vue"
  import nonPropsParent from './view/communication/nonPropsParent.vue'
  import OneValueParent from './view/communication/vModel/OneValueParent.vue'
  import MessageMixin from './components/Message.js';
  export default { mixins: [MessageMixin], methods: { sendMessage () { this.sendMessage('操作成功！', 'success'); }, }, }
</script>


<style scoped>

</style>