<template>
  <div class="relative flex flex-col space-y-[10px]">
    <div v-show="favouriteContact.unreadMessages > 0"
         class="absolute grid place-items-center top-1 right-0 bg-[#F7E353] w-6 h-6 rounded-full">
      <p class="text-xs">{{ favouriteContact.unreadMessages }}</p>
    </div>
    <img
        :src="favouriteContact.profilePicture"
        :alt="favouriteContact.contactName"
        class="rounded-full w-14 h-14"/>
    <p class="text-center text-xs">{{ createExcerpt(favouriteContact.contactName, 9) }}</p>
  </div>
</template>

<script setup lang="ts">
import { createExcerpt } from '../../utils/easy'

defineProps({
  favouriteContact: {}
})
</script>