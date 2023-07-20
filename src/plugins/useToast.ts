import { ref } from 'vue'

export const useToast = () => {
  const toggleToast = ref(false);
  const toastMessage = ref<string>('');
  const toastType = ref<string>('');

  function showToast (message: string, type: 'success' | 'error') {
    toastType.value = type
    toastMessage.value = message
    toggleToast.value = true
    setTimeout(() => {
      hideToast()
    }, 1500)
  }

  function hideToast() {
    toggleToast.value = false
  }

  return {
    toggleToast,
    toastMessage,
    toastType,
    showToast,
    hideToast
  }
}