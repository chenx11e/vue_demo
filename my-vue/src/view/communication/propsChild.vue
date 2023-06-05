<template>
  <div>
    {{msg}}
  </div>
</template>

<script setup>
const props = defineProps({
  msg: {
    type: String,
    default: ''
  }
})
</script>

<style>

</style>