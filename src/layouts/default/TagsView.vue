<template>
  <div class="flex items-center  border-b border-gray-100 pr-5 select-none">
    <!-- 左侧：页签列表 -->
    <div class="flex-1 overflow-hidden px-6 py-2">
      <n-tabs v-model:value="activePath" type="card" @update:value="handleTabClick" @close="handleTabClose" :closable="tags.length > 1" size="small" class="tags-view-tabs">
        <n-tab v-for="tag in tags" :key="tag.path" :name="tag.path" :label="tag.title" />
      </n-tabs>
    </div>

    <!-- 右侧：功能按钮 -->
    <div class="flex items-center shrink-0 ml-2">
      <n-tooltip trigger="hover">
        <template #trigger>
          <div class="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg cursor-pointer transition-all duration-300 group" @click="handleRefresh">
            <n-icon size="20" class="text-gray-500 transition-transform duration-500 group-hover:color-primary" :class="{ 'rotate-180': refreshing }" :style="{ '--hover-color': appStore.themeColor }">
              <ReloadOutline />
            </n-icon>
          </div>
        </template>
        刷新当前页
      </n-tooltip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ReloadOutline } from '@vicons/ionicons5'
import { useTagsViewStore } from '@/store/modules/tagsView'
import { useAppStore } from '@/store/modules/app'

const router = useRouter()
const route = useRoute()
const tagsStore = useTagsViewStore()
const appStore = useAppStore()

const tags = computed(() => tagsStore.tags)
const activePath = computed({
  get: () => tagsStore.activePath,
  set: (val) => tagsStore.setActivePath(val)
})

const refreshing = ref(false)

// 监听路由变化，自动新增标签
watch(
  () => route.path,
  (newPath) => {
    if (route.meta?.title && !route.meta?.hideInTags) {
      tagsStore.addTag({
        name: route.name as string,
        path: newPath,
        title: route.meta.title as string
      })
    }
  },
  { immediate: true }
)

const handleTabClick = (path: string) => {
  router.push(path)
}

const handleTabClose = (path: string) => {
  const index = tags.value.findIndex((t) => t.path === path)
  if (index === -1) return

  if (path === activePath.value) {
    const nextTag = tags.value[index + 1] || tags.value[index - 1]
    if (nextTag) {
      router.push(nextTag.path)
    }
  }

  tagsStore.removeTag(path)
}

const handleRefresh = async () => {
  if (refreshing.value) return
  refreshing.value = true
  await appStore.reloadPage()
  // 模拟一个短暂的动画延时以增强体感
  setTimeout(() => {
    refreshing.value = false
  }, 500)
}
</script>

<style scoped>
.tags-view-tabs :deep(.n-tabs-tab) {
  border-radius: 4px 4px 0 0 !important;
  font-size: 13px !important;
}

:deep(.n-tabs-nav) {
  background-color: transparent !important;
}

.tags-view-tabs :deep(.n-tabs-tab--active) {
  background-color: #f0f7ff !important;
  border-bottom: 1px solid white !important;
}

.dark .tags-view-tabs :deep(.n-tabs-tab--active) {
  background-color: #262626 !important;
  border-bottom: 1px solid #262626 !important;
}

.group:hover .group-hover\:color-primary {
  color: var(--hover-color) !important;
}
</style>
