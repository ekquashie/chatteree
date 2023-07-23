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
          <p v-if="chattereeIdValidation === false && !loading"
             class="absolute top-5 right-5 text-sm font-thin text-gray-500">
            {{ chattereeIdLength }}</p>
          <CircularProgressIndicator v-if="loading"
                                     class="absolute top-5 right-5 text-sm font-thin text-gray-500"/>
          <CheckIcon
              v-if="chattereeIdValidation === 'passed' && !loading"
              class="absolute top-4 right-5 w-6 h-6"/>
          <CloseCircleIcon
              v-else-if="chattereeIdValidation === 'failed' && !loading"
              class="absolute top-4 right-5 w-6 h-6"/>
          <input
              @keyup="() => {
                    loading = true
                    validateChattereeIdDebounced()
              }"
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
import { string } from 'yup'
import { useRouter } from 'vue-router'
import { URLS } from '../constants/routes'
import _ from 'lodash'
// Mixin
import { characterLengthWatcher } from '../mixins/characterLengthWatcher'
//  Store
import { useAuthStore } from '../stores/auth'
// Components Import
import ChattereeLogo from '../components/ChattereeLogo.vue'
import SubmitButton from '../components/SubmitButton.vue'
import CheckIcon from '../components/icons/CheckIcon.vue'
import CloseCircleIcon from '../components/icons/CloseCircleIcon.vue'
import CircularProgressIndicator from '../components/CircularProgressIndicator.vue'

const chattereeId = ref<string>('')
const chattereeIdValidation = ref<boolean | 'passed' | 'failed'>(false)
const loading = ref<boolean>(false)

const router = useRouter()
const authStore = useAuthStore()
const { updateChattereeId } = authStore
const validateChattereeIdDebounced = _.debounce(validateChattereeId, 300)

const { characterLength: chattereeIdLength, updateCharacterLength } = characterLengthWatcher(10)

// Watcher to track number of characters entered
watch(chattereeId, (newValue) => {
  updateCharacterLength(newValue)
})

// chatteree id validation schema
const chattereeIdSchema = string()
    .min(10, 'Enter minimum required characters')
    .max(10)
    .required('Chatteree ID is required')

// validate chatteree id based on schema provided
async function validateChattereeId () {
  try {
    await chattereeIdSchema.validate(chattereeId.value)
    chattereeIdValidation.value = 'passed'
  } catch (err: any) {
    chattereeIdValidation.value = 'failed'
  } finally {
    loading.value = false
    if (chattereeId.value.length === 0) {
      chattereeIdValidation.value = false
    }
  }
}

const submit = () => {
  if (chattereeIdValidation.value === 'passed') {
    // update chatteree id in store
    updateChattereeId(chattereeId.value)
    router.push(URLS.profile)
  }
}
</script>