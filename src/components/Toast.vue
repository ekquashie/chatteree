<template>
  <div v-if="toastVisible" :class="[type, 'toast']">
    {{ toastMessage }}
  </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'

const { toastVisible, toastMessage, toastType } = defineProps(['toastVisible', 'toastMessage', 'toastType'])
const type = toastType === 'success' ? 'success' : 'error'

onUnmounted(() => {
  toastVisible.value = false
})
</script>

<style scoped>
.toast {
  position: fixed;
  top: 56px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 16px;
  border-radius: 4px;
  color: white;
}

.success {
  background-color: green;
}

.error {
  background-color: #EB000E;
}
</style>