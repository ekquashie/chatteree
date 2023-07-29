<template>
  <div @click="() => {
    setSelectedContact(chat?.contact_id)
    getCurrentChat(chat?.contact_id)
  }"
       class="flex w-full items-center hover:bg-[#F7F7F7] space-x-4 py-3 px-6 cursor-pointer">
    <div class="relative">
      <img :src="chat?.profilePic" height="56" width="56" :alt="chat?.contactName"/>
      <div class="absolute bottom-0 right-0 bg-white rounded-full grid place-items-center w-4 h-4">
        <span
            :class="chat?.lastSeen === 'online' ? 'bg-green-500' : 'bg-gray-300'"
            class="rounded-full w-3 h-3"></span>
      </div>
    </div>
    <div class="w-full">
      <div class="flex justify-between items-center">
        <p>{{ chat?.contactName }}</p>
        <p class="thin mt-0">{{ chat?.timeStamp }}</p>
      </div>
      <div class="flex justify-between items-center">
        <p :class="chat?.isRead || chat?.contact_id === chat?.recipient_id ? 'font-thin' : 'font-semibold'"
           class="flex space-x-1 items-center text-sm">
          <SendIcon v-show="chat?.contact_id === chat?.recipient_id" :color="chat?.isRead ? '#289DFE' : '#79838B'"/>
          {{ createExcerpt(chat?.lastMessage, 39) }}
        </p>
        <MessageCount v-show="chat?.unreadMessages > 0" :count="chat?.unreadMessages"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MessageCount from '../../components/chat/MessageCount.vue'
import { createExcerpt } from '../../utils/easy'
import { useChatStore } from '../../stores/chat'
import SendIcon from '../icons/SendIcon.vue'

const chatStore = useChatStore()
const { setSelectedContact, getCurrentChat } = chatStore

defineProps({
  chat: Object as any
})
</script>