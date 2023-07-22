<template>
  <main class="flex justify-center pt-24">
    <div class="w-full p-2 md:p-0 md:w-2/6">
      <ChattereeLogo/>
      <h1 class="mt-6">A Chatteree ID cos you're special</h1>
      <p class="thin">People will be able to find you with your unique ID</p>
      <div class="mt-10">
        <label class="thin">Chatteree ID</label>
        <div class="relative">
          <h3 class="absolute top-4 left-6 text-gray-300">@</h3>
          <p v-if="showCount" class="absolute top-5 right-5 text-sm font-thin text-gray-500">{{ chattereeIdLength }}</p>
          <p v-else class="absolute top-5 right-5 text-sm font-thin text-gray-500">{{ chattereeIdLength }}</p>
          <input
              @keyup="validateChattereeId"
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
import { characterLengthWatcher } from '../mixins/characterLengthWatcher'
import { string } from 'yup'
import { useRouter } from 'vue-router'
import { URLS } from '../constants/routes'

const showCount = ref<boolean>(true)
const chattereeId = ref<string>('')
const router = useRouter()
const authStore = useAuthStore()
const { updateChattereeId } = authStore

const { characterLength: chattereeIdLength, updateCharacterLength } = characterLengthWatcher(10)

// Watcher to track number of characters entered
watch(chattereeId, (newValue) => {
  updateCharacterLength(newValue)
})

// chatteree id validation schema
const chattereeIdSchema = string().min(10).max(10).required()

// Check if chatteree id meets number of required characters
const validateChattereeId = async (e: KeyboardEvent) => {
  try {
    await chattereeIdSchema.validate(chattereeId.value)
    return false
  } catch (err: any) {
    return true
  }
}

const submit = () => {
  console.log('submitted')
  // update chatteree id in store
  updateChattereeId(chattereeId.value)
  router.push(URLS.profile)
}
</script>