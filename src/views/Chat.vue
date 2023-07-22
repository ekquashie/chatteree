<template>
  <main class="flex w-full h-full">
    <Sidebar/>
    <ChatSection/>
  </main>
</template>

<script setup lang="ts">

import { onBeforeMount } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { URLS } from '../constants/routes'
// Components import
import Sidebar from '../components/chat/Sidebar.vue'
import ChatSection from '../components/chat/ChatSection.vue'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
const router = useRouter()

onBeforeMount(() => {
  if(user.value.chattereeId === '')
    return router.push(URLS.signIn)
})
</script>