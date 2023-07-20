<template>
  <main class="flex justify-center pt-24">
    <div class="w-2/6">
      <ChattereeLogo/>
      <h1 class="mt-6">A Chatteree ID cos you're special</h1>
      <p class="thin">People will be able to find you with your unique ID</p>
      <div class="mt-10">
        <label class="thin">Chatteree ID</label>
        <div class="relative">
          <h3 class="absolute top-4 left-6 text-gray-300">@</h3>
          <p class="absolute top-5 right-5 text-sm font-thin text-gray-500">{{ chattereeIdLength }}</p>
          <input
              maxlength="10"
              v-model="chattereeId"
              class="input mt-1 pl-12 font-bold text-xl"/>
        </div>
      </div>
      <div class="mt-6 space-y-6 flex flex-col justify-end items-end">
        <SubmitButton text="Continue" :button-action="submit"/>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
//  Store
import { useAuthStore } from '../stores/auth'
// Components Import
import ChattereeLogo from '../components/ChattereeLogo.vue'
import SubmitButton from '../components/SubmitButton.vue'

const chattereeIdLength = ref<number>(10)
const chattereeId = ref<string>('')
const authStore = useAuthStore()
const { updateChattereeId } = authStore

// Watcher to track number of characters entered
watch(chattereeId, (newValue) => {
  // max chatteree id length
  const maxLength = 10
  // update chatteree id length if user enters
  chattereeIdLength.value = maxLength - newValue.length
})

function updateLength (e: KeyboardEvent) {
  const keyPressed = e.key
  const target = e.target as HTMLInputElement
  // Filter out non-alphanumeric characters and backspace
  const isAlphanumeric = /^[a-zA-Z0-9]$/.test(keyPressed)
  const isBackspace = keyPressed === 'Backspace'
  const isInputEmpty = chattereeId.value.trim() === ''

  // Only alphanumeric values should affect character length
  if (chattereeIdLength.value > 0 && !isBackspace && isAlphanumeric) {
    chattereeIdLength.value -= 1
    //   If backspace is pressed and the cursor is not at the beginning of the input field and the length is less than 10
  } else if (isBackspace && chattereeIdLength.value < 10 && !isInputEmpty && (!target || target.selectionStart !== 0)) {
    chattereeIdLength.value += 1
  }
}

const submit = () => {
  console.log('submitted')
  updateChattereeId(chattereeId.value)
}
</script>