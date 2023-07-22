<template>
  <button @click="buttonAction" class="btn w-fit flex justify-center items-center space-x-3">
    <slot></slot>
    <span>{{ props.text }}</span>
  </button>
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