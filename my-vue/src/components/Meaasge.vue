<template>
  <div class="message-container">
    <el-message :message="message.content" :type="message.type" :duration="message.duration || 3000"
      :icon-class="typeToIconClass(message.type)" @close="onClose">
    </el-message>
  </div>
</template>
<script setup>
  import { defineComponent, toRefs, watch } from 'vue';
  defineComponent({
    props: {
      message:
        { type: Object, required: true, },
    }, setup (props) { const { message } = toRefs(props); function typeToIconClass (type) { switch (type) { case 'success': return 'iconfont icon-success'; case 'warning': return 'iconfont icon-warning'; case 'error': return 'iconfont icon-error'; default: return ''; } } function onClose () { const key = message.value.key; if (localStorage.getItem(key)) { localStorage.removeItem(key); } } return { typeToIconClass, onClose, }; },
  });</script>
<style scoped>
  .message-container {
    position: fixed;
    top: 16px;
    right: 16px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  .message-container .el-message {
    margin-top: 16px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
  }

  .message-container .el-message__content {
    margin-left: 8px;
  }

  .iconfont {
    font-size: 18px;
    margin-right: 8px;
  }

  .icon-success {
    color: #67c23a;
  }

  .icon-warning {
    color: #e6a23c;
  }

  .icon-error {
    color: #f56c6c;
  }
</style>