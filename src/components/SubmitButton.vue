<template>
  <button @click="buttonAction" class="btn w-fit">{{ props.text }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  buttonAction: {
    type: Function
  }
})
</script>