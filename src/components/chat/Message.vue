<template>
  <div v-if="message.type==='text'" :class="message.sender_id !== '15' ? 'bg-[#F1F1F1]' : 'bg-blackPearl text-white'"
       class="px-4 py-2 w-fit max-w-[400px] rounded-full">
    <p class="font-thin text-[10px] text-right">{{ message.timestamp }}</p>
    <p class="font-thin text-sm">{{ message?.content }}</p>
  </div>
  <img v-else :src="message.content" width="264" height="164" alt="message-image"/>
</template>

<script setup lang="ts">
defineProps({
  message: Object
})
</script>