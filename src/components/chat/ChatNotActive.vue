<template>
  <section class="relative grid place-items-center h-full w-full">
    <div class="absolute top-20 left-6">
      <p class="thin text-black">Welcome</p>
      <h1 class="font-bold">Kojo Trip!</h1>
    </div>
    <div class="grid place-items-center space-y-8">
      <div class="relative min-w-[314px] grid place-items-center mb-8">
        <img src="../../assets/imgs/chat-vector.png" height="184" width="165" class="absolute top-12 -left-4 -z-10" alt="chat-vector"/>
        <img src="../../assets/imgs/chat.png" height="296" width="296" alt="chat"/>
        <img src="../../assets/imgs/chat-union.png" height="140" width="80" class="absolute absolute right-8 -bottom-11" alt="chat-union"/>
      </div>
      <p class="text-gray-400">We hear say your mouth die hmmm</p>
      <SubmitButton text="Start chatting" :button-action="() => {
        getChats();
        getFavouriteContacts();
      }">
        <FeatherIcon icon-color="white"/>
      </SubmitButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import SubmitButton from '../../components/SubmitButton.vue'
import FeatherIcon from '../../components/icons/FeatherIcon.vue'
import { useChatStore } from '../../stores/chat'

const chatStore = useChatStore()
const { getChats, getFavouriteContacts } = chatStore
</script>

<style scoped>

</style>