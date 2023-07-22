<template>
  <section class="flex flex-col h-full">
    <!--  Top Nav  -->
    <div class="px-6 py-4 flex justify-between items-center border-b border-gray-100">
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
    <!--    End of Top Nav   -->

    <!--  Chat Section  -->
    <section class="flex-3 px-10 py-8 h-full overflow-y-scroll">
      <div v-for="(message, index) in currentChat" :class="message.sender_id === '15' ? 'justify-end' : ''"
           class="flex w-full space-x-2 py-1" :key="index">
        <img v-if="message.sender_id !== '15'" :src="selectedContact?.profilePicture" class="rounded-full w-8 h-8"
             alt="profile-picture"/>
        <Message :message="message"/>
        <img v-if="message.sender_id === '15'" :src="getProfilePicture" class="rounded-full w-8 h-8"
             alt="profile-picture-me"/>
      </div>
    </section>
    <!--  End Chat Section  -->

    <div class="flex space-x-4 justify-center items-center border-t border-gray-100 pt-4 pb-8 px-6 h-24">
      <div class="relative w-full">
        <input class="input font-thin" placeholder="Type your message"/>
        <div class="absolute top-1 right-4 flex justify-center items-center">
          <div class="cursor-pointer hover:bg-[#F1F1F1] grid place-items-center w-10 h-10 rounded-full">
            <SmileyIcon class="cursor-pointer w-6 h-6"/>
          </div>
          <Menu as="div" class="cursor-pointer hover:bg-[#F1F1F1] grid place-items-center w-10 h-10 rounded-full">
            <MenuButton>
              <AttachmentIcon class="w-6 h-6"/>
            </MenuButton>
            <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                  class="absolute bottom-16 right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-6 px-8"
              >
                <MenuItem>

                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
          <div class="hover:bg-[#F1F1F1] grid place-items-center w-10 h-10 rounded-full">
            <MicrophoneIcon class="cursor-pointer w-6 h-6"/>
          </div>
        </div>
      </div>
    <div class="bg-[#101C26] w-fit rounded-full p-3">
      <SendMessageIcon class="w-6 h-6" color="white"/>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useChatStore } from '../../stores/chat'
import { useAuthStore } from '../../stores/auth'
// Components import
import FavouriteIcon from '../../components/icons/FavouriteIcon.vue'
import FavouriteIconFill from '../../components/icons/FavouriteIconFill.vue'
import MenuIcon from '../../components/icons/MenuIcon.vue'
import SmileyIcon from '../../components/icons/SmileyIcon.vue'
import MicrophoneIcon from '../../components/icons/MicrophoneIcon.vue'
import AttachmentIcon from '../../components/icons/AttachmentIcon.vue'
import SendMessageIcon from '../../components/icons/SendMessageIcon.vue'
import Message from '../../components/chat/Message.vue'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

const authStore = useAuthStore()
const chatStore = useChatStore()
const { getProfilePicture } = storeToRefs(authStore)
const { selectedContact, currentChat } = storeToRefs(chatStore)
</script>