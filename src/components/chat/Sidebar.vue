<template>
  <aside class="flex flex-col h-full flex-1 min-w-[390px] border-r border-gray-100">
    <div class="px-6 pt-4">
      <div class="flex items-center justify-between">
        <div class="flex justify-center items-center space-x-4">
          <img src="../../assets/imgs/upload-default.png" alt="profile-picture" class="w-12 h-12"/>
          <button class="flex justify-center items-center">
            Kojo Trip
            <ChevronDownIcon/>
          </button>
        </div>
        <button class="grid place-items-center rounded-full bg-black text-yellow-600 w-12 h-12">
          <FeatherIcon icon-color="#F7E353"/>
        </button>
      </div>
      <!--  Search Input  -->
      <div class="relative mt-4">
        <SearchIcon class="absolute top-4 left-4"/>
        <input type="search" class="input mt-1 pl-12 thin" placeholder="Search for chatter or message"/>
      </div>
    </div>

    <div v-if="chats.length === 0 && favouriteContacts.length === 0"
         class="flex flex-col justify-center items-center h-full px-[82px]">
      <ChatIcon/>
      <p class="text-gray-300 mt-4 text-center">Your chatteree conversations live here</p>
    </div>
    <!--    Favourite Chatters  -->
    <div v-else class="w-full overflow-y-scroll">
      <div class="flex justify-between items-center px-6 mt-6">
        <p class="text-[#79838B] text-sm">Favourite chatters</p>
        <p class="text-[#79838B] text-sm">{{ favouriteContacts.length + 18 }}</p>
      </div>
      <!--      List of favourite chatterees    -->
      <div class="relative flex mx-6 mt-4 space-x-3">
        <button class="absolute left-0 grid place-items-center bg-white w-8 h-8 rounded-full z-50 top-7">
          <ChevronLeftIcon/>
        </button>
        <button class="absolute right-0 grid place-items-center bg-white w-8 h-8 rounded-full z-50 top-7">
          <ChevronRightIcon/>
        </button>
        <template v-for="(favouriteContact, index) in favouriteContacts" :key="index">
          <FavouriteContact :favourite-contact="favouriteContact"/>
        </template>
      </div>
      <!--      End of List of favourite chatterees    -->

      <!--      Recent chats    -->
      <div class="border-t border-gray-100">
        <template v-for="(chat, index) in chats" :key="index">
          <RecentChat :chat="chat"/>
        </template>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../../stores/auth'
import { useChatStore } from '../../stores/chat'
// Components Import
import FeatherIcon from '../../components/icons/FeatherIcon.vue'
import SearchIcon from '../icons/SearchIcon.vue'
import ChevronDownIcon from '../../components/icons/ChevrondownIcon.vue'
import ChatIcon from '../../components/icons/ChatIcon.vue'
import ChevronLeftIcon from '../../components/icons/ChevronLeftIcon.vue'
import ChevronRightIcon from '../../components/icons/ChevronRightIcon.vue'
import FavouriteContact from '../../components/chat/FavouriteContact.vue'
import RecentChat from '../../components/chat/RecentChat.vue'

const authStore = useAuthStore()
const chatStore = useChatStore()
const { user } = authStore
const { chats, favouriteContacts } = storeToRefs(chatStore)

</script>