<template>
  <div class="flex items-center select-none gap-1">
    <!-- 原生导航箭头 (前进/后退) -->
    <div class="flex items-center gap-2 text-gray-400 px-2 border-r border-gray-200 dark:border-gray-700 mr-2">
      <n-icon 
        size="16" 
        class="cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        @click="router.back()"
      >
        <ArrowBackOutline />
      </n-icon>
      <n-icon 
        size="16" 
        class="cursor-pointer hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
        @click="router.forward()"
      >
        <ArrowForwardOutline />
      </n-icon>
    </div>

    <n-breadcrumb separator="/">
      <n-breadcrumb-item 
        v-for="(item, index) in breadcrumbs" 
        :key="item.path"
        @click="handleLink(item, index)"
      >
        <div 
          class="flex items-center gap-1.5 transition-colors text-[13px]"
          :class="[
            index !== breadcrumbs.length - 1 && item.meta?.canClickBack ? 'cursor-pointer hover-link text-gray-500' : 'cursor-default',
            index === breadcrumbs.length - 1 ? 'font-medium text-gray-800 dark:text-gray-200' : 'text-gray-400 dark:text-gray-500'
          ]"
        >
          <template v-if="item.name && iconMap[item.name as string]">
             <component :is="iconMap[item.name as string]" class="w-3.5 h-3.5" />
          </template>
          <template v-else>
             <n-icon class="w-3.5 h-3.5"><FolderOutline /></n-icon>
          </template>
          <span>
            {{ item.meta?.title }}
          </span>
        </div>
      </n-breadcrumb-item>
    </n-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter, type RouteLocationMatched } from 'vue-router'
import { useAppStore } from '@/store/modules/app'
import { ArrowBackOutline, ArrowForwardOutline, FolderOutline } from '@vicons/ionicons5'
import { iconMap } from '@/hooks/useMenu'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

const breadcrumbs = computed(() => {
  return route.matched.filter(item => 
    item.meta && 
    item.meta.title && 
    item.meta.breadcrumb !== false && 
    !item.meta.hideBreadcrumb
  )
})

const handleLink = (item: RouteLocationMatched, index: number) => {
  if (index === breadcrumbs.value.length - 1) return
  if (item.meta?.canClickBack) {
    router.push(item.path)
  }
}

const getStyle = (index: number) => {
  // Breadcrumb colors now handled by Tailwind CSS classes in template.
  return {
    '--hover-color': appStore.themeColor
  }
}
</script>

<style scoped>
.hover-link:hover {
  color: var(--hover-color) !important;
}
</style>
