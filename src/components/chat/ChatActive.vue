<template>
  <section>
    <!--  Top Nav  -->
    <div class="px-6 py-4 flex justify-between items-center">
      <div class="flex justify-center items-center space-x-4">
        <img :src="selectedContact?.profilePicture" height="56" width="56" :alt="selectedContact?.contactName"/>
        <div>
          <p>{{ selectedContact?.contactName }}</p>
          <span
              :class="selectedContact?.lastSeen === 'online' ? 'text-green-500' : 'text-gray-500'"
              class="text-xs">{{ selectedContact?.lastSeen }}</span>
        </div>
      </div>
      <div class="flex justify-center items-center space-x-4">
        <FavouriteIconFill v-if="selectedContact?.isFavourite === true" class="w-6 h-6 cursor-pointer"/>
        <FavouriteIcon v-else class="w-6 h-6 cursor-pointer"/>
        <MenuIcon/>
      </div>
    </div>

    <!--  Chat Section  -->
    <section class="px-10 py-8 h-full border-red-400 border">

    </section>
    <!--  End Chat Section  -->

    <div class="">

    </div>
  </section>
</template>

<script setup lang="ts">
import { useChatStore } from '../../stores/chat'
import FavouriteIcon from '../../components/icons/FavouriteIcon.vue'
import FavouriteIconFill from '../../components/icons/FavouriteIconFill.vue'
import MenuIcon from '../../components/icons/MenuIcon.vue'
import { storeToRefs } from 'pinia'

const chatStore = useChatStore()
const { selectedContact } = storeToRefs(chatStore)
</script>