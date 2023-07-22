<template>
  <div
       class="grid place-items-center bg-[#F7E353] w-6 h-6 rounded-full">
    <p class="text-xs">{{ count }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  count: {
    type: Number,
  }
})
</script>