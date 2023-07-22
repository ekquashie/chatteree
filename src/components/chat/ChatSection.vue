<template>
  <section class="flex-3 w-full">
    <ChatActive v-if="selectedContact?.contact_id" />
    <ChatNotActive v-else/>
  </section>
</template>

<script setup lang="ts">
import ChatNotActive from '../../components/chat/ChatNotActive.vue'
import ChatActive from '../../components/chat/ChatActive.vue'
import { useChatStore } from '../../stores/chat'
import { storeToRefs } from 'pinia'

const chatStore = useChatStore()
const { selectedContact } = storeToRefs(chatStore)
</script>