<template>
  <Toast :show="showToast" :message="message" :intent="intent"/>
  <RouterView/>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Toast from './components/Toast.vue'
import { onUnmounted, provide, ref } from 'vue'

const showToast = ref<boolean>(false)
const message = ref<string>('')
const intent = ref<'success' | 'error'>('success')

const toast = (text: string, type: string): void => {
  intent.value = type as 'success' | 'error'
  message.value = text
  showToast.value = true
  setTimeout(() => {
    hideToast()
  }, 2000)
}

provide('toast', toast)
const hideToast = () => {
  showToast.value = false
}

</script>
