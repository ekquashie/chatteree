<template>
  <button
      @click="goBack"
      class="absolute grid place-items-center w-12 h-12 p-3 top-2 left-1 md:top-24 md:left-[142px] rounded-full shadow-xl">
    <v-icon name="co-arrow-left" scale="1"/>
  </button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack () {
  router.back()
}
</script>

<style scoped>

</style>