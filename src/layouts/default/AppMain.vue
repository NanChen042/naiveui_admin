<template>
  <div class="app-main h-full">
    <router-view v-slot="{ Component, route }">
      <transition 
        :name="appStore.enableTransition ? appStore.transitionType : 'none'" 
        mode="out-in" 
        appear
      >
        <component v-if="isRouterAlive" :is="Component" :key="route.fullPath" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()
const isRouterAlive = computed(() => appStore.isRouterAlive)
</script>

<style scoped>
.app-main {
  flex: 1;
}
</style>