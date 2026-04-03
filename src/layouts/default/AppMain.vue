<template>
  <div class="app-main h-full">
    <router-view v-slot="{ Component, route }">
      <transition 
        :name="appStore.enableTransition ? appStore.transitionType : 'none'" 
        mode="out-in" 
        appear
      >
        <keep-alive :include="cachedTags">
          <component v-if="isRouterAlive" :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '@/store/modules/app'
import { useTagsViewStore } from '@/store/modules/tagsView'

const appStore = useAppStore()
const tagsViewStore = useTagsViewStore()
const isRouterAlive = computed(() => appStore.isRouterAlive)

// 获取需要缓存的标签页列表（以组件 name 为准）
const cachedTags = computed(() =>
  tagsViewStore.tags.filter((t) => t.keepAlive).map((t) => t.name)
)
</script>

<style scoped>
.app-main {
  flex: 1;
}
</style>