<template>
  <main class="relative w-full h-full flex justify-center items-center pt-24">
    <BackButton/>
    <section class="pl-1">
      <ChattereeLogo/>
      <h1 class="text-4xl mt-6 font-bold">Check your mail</h1>
      <p class="thin">Enter confirmation code sent to<br/> <b class="text-black">{{ email }}</b> to verify that it is
        you</p>
      <div ref="otpContainer" class="mt-10 flex items-center space-x-4">
        <input
            v-for="(n, index) in otpLength"
            type="text"
            maxlength="1"
            v-model="otpArray[n-1]"
            @keyup="handleValue($event, n-1)"
            class="w-12 h-14 md:w-14 md:h-16 bg-gray-100 rounded-md text-center text-[30px]" :key="index"/>
      </div>
      <div class="mt-10 flex justify-between items-center p-1">
        <p @click="resendOtp" class="cursor-pointer">Resend code</p>
        <SubmitButton text="Verify" :button-action="verifyOtp"/>
      </div>
      <div class="relative mt-16 w-full md:w-[382px] h-[259px]">
        <img
            src="src/assets/imgs/otp-image.png"
            width="292"
            height="226"
            alt="otp-image"/>
        <img
            src="src/assets/imgs/otp-vector.png"
            width="343"
            height="245"
            class="absolute top-3 right-0 -z-10"
            alt="otp-vector"/>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
//Import Components
import ChattereeLogo from '../components/ChattereeLogo.vue'
import BackButton from '../components/BackButton.vue'
import SubmitButton from '../components/SubmitButton.vue'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()
const encodedEmail = route.query.q as string
const email = ref<string>('')
const otpLength = 6
const otpArray = ref<null[]>([])
const otpContainer = ref()
let otpError = false

onMounted(() => {
  if (encodedEmail) {
    email.value = atob(encodedEmail)
    return alert(`OTP is: ${otp.value}`)
  }
  router.push('/')
})

// Auth Store
const authStore = useAuthStore()
const { otp } = storeToRefs(authStore)
const { updateEmail } = authStore

function resendOtp (): void {
  alert(`OTP is ${otp.value}`)
}

function verifyOtp (): void {
  if (!otpError) {
    if (otpArray.value.join('') === otp.value) {
      updateEmail(email.value)
      router.push('/chatteree-id')
    } else {
      console.log('Invalid OTP')
    }
  }
}

function handleValue (e: KeyboardEvent, inputIndex: number): void {
  const children = otpContainer?.value?.children
  const keyPressed = e.key
  if (inputIndex > 0 && (keyPressed === 'Backspace' || keyPressed === 'Delete')) {
    otpArray.value[inputIndex] = null
    setTimeout(() => {
      children[inputIndex - 1].focus()
    }, 100)
  } else {
    const isNumber = keyPressed.match(/[0-9]/)
    if (!isNumber) {
      otpArray.value[inputIndex] = null
      return
    } else if (inputIndex < otpLength - 1) {
      setTimeout(() => {
        children[inputIndex + 1].focus()
      }, 100)
    }
    validateOtp()
  }
}

function validateOtp (): void {
  const children = otpContainer.value.children
  otpError = false

  for (let i = 0; i < otpLength; i++) {
    if (otpArray.value[i] == null) {
      children[i].classList.add('border')
      children[i].classList.add('border-red-500')
      otpError = true
    } else {
      children[i].classList.remove('border')
      children[i].classList.remove('border-red-500')
    }
  }
}
</script>