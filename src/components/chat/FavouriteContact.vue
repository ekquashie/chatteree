<template>
  <div class="relative flex flex-col space-y-[10px]">
    <MessageCount class="absolute top-1 right-0" v-show="favouriteContact?.unreadMessages > 0" :count="favouriteContact?.unreadMessages"/>
    <img
        :src="favouriteContact?.profilePicture"
        :alt="favouriteContact?.contactName"
        class="rounded-full w-14 h-14"/>
    <p class="text-center text-xs">{{ createExcerpt(favouriteContact?.contactName, 9) }}</p>
  </div>
</template>

<script setup lang="ts">
import { createExcerpt } from '../../utils/easy'
import MessageCount from '../../components/chat/MessageCount.vue'

defineProps({
  favouriteContact: Object
})
</script>