<template>
  <main class="flex justify-center pt-24">
    <div class="grid place-items-center w-full p-2 md:p-0 md:w-2/6">
      <ChattereeLogo/>
      <h1 class="mt-6">Help them identify you</h1>
      <div class="relative grid place-items-center mt-10 w-[240px] h-[240px] border rounded-full">
        <img
            v-if="!image.url"
            src="../assets/imgs/upload-default.png"
            height="208"
            width="208"
            alt="default"
            class="rounded-full"/>
        <img
            v-else
            :src="image?.url"
            height="208"
            width="208"
            alt="default"
            class="rounded-full"/>
        <label
            class="absolute flex justify-center items-center space-x-3 bottom-2 bg-white rounded-[32px] px-5 py-2 shadow-lg cursor-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5.5 3C4.11929 3 3 4.11929 3 5.5V18.5C3 19.8807 4.11929 21 5.5 21H18.5C19.8807 21 21 19.8807 21 18.5V5.5C21 4.11929 19.8807 3 18.5 3H5.5ZM20 15.2929V5.5C20 4.67157 19.3284 4 18.5 4H5.5C4.67157 4 4 4.67157 4 5.5V12.2929L7.14645 9.14645C7.34171 8.95118 7.65829 8.95118 7.85355 9.14645L13.5 14.7929L16.1464 12.1464C16.3417 11.9512 16.6583 11.9512 16.8536 12.1464L20 15.2929ZM20 16.7071L16.5 13.2071L13.8536 15.8536C13.6583 16.0488 13.3417 16.0488 13.1464 15.8536L7.5 10.2071L4 13.7071V18.5C4 19.3284 4.67157 20 5.5 20H18.5C19.3284 20 20 19.3284 20 18.5V16.7071ZM15 6H17C17.5523 6 18 6.44772 18 7V9C18 9.55228 17.5523 10 17 10H15C14.4477 10 14 9.55228 14 9V7C14 6.44772 14.4477 6 15 6ZM15 9V7H17V9H15Z"
                  fill="#101C26"/>
          </svg>
          <span>Upload photo</span>
          <input ref="imageRef" type="file" accept=".png, .jpg, .jpeg" @change="processImage" class="hidden"/>
        </label>
      </div>
      <div class="mt-10">
        <label class="thin">Your name</label>
        <div class="relative">
          <p class="absolute top-5 right-5 text-sm font-thin text-gray-500">{{ nameLength }}</p>
          <input @keyup="validateName" v-model="name" type="email" class="input mt-1"/>
          <p class="text-red-600 text-xs mt-1">{{ errorMessage }}</p>
        </div>
      </div>
      <SubmitButton text="Let's geauxxxx!" :button-action="createAccount" class="mt-10"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { characterLengthWatcher } from '../mixins/characterLengthWatcher'
import { URLS } from '../constants/routes'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { inject } from 'vue'
// Components import
import ChattereeLogo from '../components/ChattereeLogo.vue'
import SubmitButton from '../components/SubmitButton.vue'
import { string } from 'yup'

const name = ref<string>('')
const errorMessage = ref<string>('')
const imageRef = ref<any>()
const image = ref<object>({})
const router = useRouter()
const authStore = useAuthStore()
const { updateProfilePicture, updateName } = authStore

// Inject method to invoke toast
const toast = inject<((text: string, type: string) => void)>('toast')

const { characterLength: nameLength, updateCharacterLength } = characterLengthWatcher(18)

const nameSchema = string().required('Please enter your full name')

// Watcher to track number of characters entered
watch(name, (newValue) => {
  updateCharacterLength(newValue)
})

const processImage = () => {
  image.value = {
    size: imageRef.value.files[0].size,
    url: URL.createObjectURL(imageRef.value.files[0]),
    file: imageRef.value.files[0]
  }
}

async function validateName (): Promise<boolean> {
  try {
    await nameSchema.validate(name.value)
    errorMessage.value = ''
    return false
  } catch (err: any) {
    errorMessage.value = err.errors[0]
    return true
  }
}

const createAccount = async () => {
  const error = await validateName()
  if(imageRef.value.files[0] && !error) {
    updateProfilePicture(imageRef.value.files[0])
    updateName(name.value)
    await router.push(URLS.chat)
  } else {
    toast?.('Please enter your full name and upload your profile picture', 'error')
  }
}
</script>