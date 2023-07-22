<template>
  <main class="flex w-full h-full">
    <Sidebar/>
    <ChatSection/>
  </main>
</template>

<script setup lang="ts">
import Sidebar from '../components/chat/Sidebar.vue'
import ChatSection from '../components/chat/ChatSection.vue'
</script>