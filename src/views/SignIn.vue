<template>
  <main class="w-full h-full flex justify-center items-center p-12">
    <section class="flex md:space-x-28 justify-center items-center">
      <div class="hidden md:block flex justify-bottom items-center">
        <img src="src/assets/imgs/signin-img.png" width="537" height="429" alt="people" class="z-50"/>
      </div>
      <div class="w-[360px]">
        <ChattereeLogo/>
        <h1 class="mt-6">Howdy chatter! Your peeps are waiting</h1>
        <p class="thin">Enter your email address to start chatting</p>
        <div class="mt-10">
          <label class="thin">Email address</label>
          <input @keyup="validateEmail" v-model="email" type="email" class="input mt-1"/>
          <span class="text-red-600 text-xs mt-1">{{ errorMessage }}</span>
        </div>
        <div class="mt-6 space-y-6 flex flex-col justify-end items-end">
          <SubmitButton text="Next" :button-action="sendOtp"/>
          <hr class="w-full border-gray-100"/>
          <button
              @click="googleSignIn"
              class="flex justify-center items-center space-x-4 rounded-full w-full border border-1 py-3">
            <img src="src/assets/imgs/google-icon.png" alt="google-icon" class="w-6 h-6"/>
            <span>Continue with Google</span>
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { string } from 'yup'
import { URLS } from '../constants/routes'
// Components Import
import ChattereeLogo from '../components/ChattereeLogo.vue'
import SubmitButton from '../components/SubmitButton.vue'
import { useRouter } from 'vue-router'
import { googleOneTap } from 'vue3-google-login'
import { decodeCredential } from 'vue3-google-login'

const email = ref<string>('')
const errorMessage = ref<string>('')
const router = useRouter()

// Inject method to invoke toast
const toast = inject<((text: string, type: string) => void)>('toast')

// Email validation schema
const emailSchema = string().email('Please enter a valid email address').required('Please enter your email address')

// Check if entered email has valid format
async function validateEmail (): Promise<boolean> {
  try {
    await emailSchema.validate(email.value)
    errorMessage.value = ''
    return false
  } catch (err: any) {
    errorMessage.value = err.errors[0]
    return true
  }
}

async function sendOtp (): Promise<void> {
  const error = await validateEmail()
  // If email is valid, send otp and route to otp page
  if (!error) {
    await router.push({ path: URLS.otp, query: { q: btoa(email.value) } })
  }
}

async function googleSignIn (): Promise<void> {
  await googleOneTap()
      .then(async (response) => {
        const userData = await decodeCredential(response.credential) as any
        await router.push({ path: URLS.otp, query: { q: btoa(userData.email) } })
      })
      .catch(() => {
        toast?.('There was an issue. Please try again later', 'error')
      })
}
</script>