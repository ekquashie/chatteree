<template>
  <transition leave-active-class="duration-300" leave-to-class="opacity-0">
    <div v-if="props.show" :class="containerClass">
      <p class="text-sm">
        {{ props.message }}
      </p>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { cva } from 'class-variance-authority'

const props = defineProps({
  intent: {
    type: String,
    validator(value: string) {
      return ['error', 'success'].includes(value)
    },
    default: 'error'
  },
  show: {
    type: Boolean,
    default: false
  },
  message: String,
})

const containerClass = computed(() => {
  return cva("fixed top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[9999] w-fit grid place-items-center rounded text-white py-2 px-4", {
    variants: {
      intent: {
        error: "bg-[#EB000E]",
        success: "bg-green-600"
      }
    }
  })({
    intent: props.intent as 'error' | 'success'
  })
})
</script>

<style scoped>

</style>