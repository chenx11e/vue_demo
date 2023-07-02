<template>
  <div>
    <input v-focus />
    <input v-focus1 />
  </div>
</template>

<script>
  import { ref, reactive, defineComponent } from 'vue'
  import focus from './focus.js'
  export default defineComponent({
    directives: {
      focus: focus
    }
  })



</script>

<style scoped lang='scss'>
</style>