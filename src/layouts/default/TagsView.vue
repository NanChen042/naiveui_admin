<template>
  <div class="flex items-center border-b border-gray-100 pr-5 select-none relative z-10 transition-all duration-300">
    <!-- 左侧：页签列表 -->
    <div class="flex-1 overflow-hidden px-6 py-2">
      <n-tabs
        v-model:value="activePath"
        type="card"
        @update:value="handleTabClick"
        @close="handleTabClose"
        size="small"
        class="tags-view-tabs"
        :class="[`border-pos-${appStore.tabBorderPosition}`]"
      >
        <n-tab
          v-for="tag in tags"
          :key="tag.path"
          :name="tag.path"
          :label="tag.title"
          :closable="(appStore.showTabClose || tag.path === activePath) && !tag.affix"
          @contextmenu.prevent="handleContextMenu($event, tag)"
        />
      </n-tabs>
    </div>

    <!-- 右侧：功能按钮 -->
    <div v-if="appStore.showNavButtons" class="flex items-center shrink-0 ml-2">
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

    <!-- 右键菜单 -->
    <n-dropdown
      placement="bottom-start"
      trigger="manual"
      :x="x"
      :y="y"
      :options="options"
      :show="showDropdown"
      :on-clickoutside="onClickOutside"
      @select="handleSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, watch, ref, h, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  ReloadOutline,
  CloseOutline,
  SwapHorizontalOutline,
  ArrowBackOutline,
  ArrowForwardOutline,
  CloseCircleOutline,
  PinOutline,
  SaveOutline,
  LockClosedOutline
} from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { useTagsViewStore, type TagItem } from '@/store/modules/tagsView'
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

// 右键菜单状态
const showDropdown = ref(false)
const x = ref(0)
const y = ref(0)
const currentTag = ref<TagItem | null>(null)

const renderIcon = (icon: any) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const options = computed(() => [
  { label: '关闭', key: 'close', icon: renderIcon(CloseOutline), disabled: currentTag.value?.affix },
  { label: '关闭其他', key: 'close-others', icon: renderIcon(SwapHorizontalOutline) },
  { label: '关闭左侧', key: 'close-left', icon: renderIcon(ArrowBackOutline) },
  { label: '关闭右侧', key: 'close-right', icon: renderIcon(ArrowForwardOutline) },
  { label: '关闭所有', key: 'close-all', icon: renderIcon(CloseCircleOutline) },
  { type: 'divider', key: 'd1' },
  { label: currentTag.value?.affix ? '取消固定' : '固定标签页', key: 'affix', icon: renderIcon(PinOutline) },
  { label: currentTag.value?.keepAlive ? '关闭缓存' : '缓存标签页', key: 'cache', icon: renderIcon(SaveOutline) },
  { label: '锁定标签页', key: 'lock', icon: renderIcon(LockClosedOutline) }
])

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
  setTimeout(() => {
    refreshing.value = false
  }, 500)
}

const handleContextMenu = (e: MouseEvent, tag: TagItem) => {
  showDropdown.value = false
  nextTick(() => {
    showDropdown.value = true
    x.value = e.clientX
    y.value = e.clientY
    currentTag.value = tag
  })
}

const onClickOutside = () => {
  showDropdown.value = false
}

const handleSelect = (key: string) => {
  showDropdown.value = false
  if (!currentTag.value) return

  const path = currentTag.value.path

  switch (key) {
    case 'close':
      handleTabClose(path)
      break
    case 'close-others':
      tagsStore.closeOthers(path)
      if (path !== activePath.value) router.push(path)
      break
    case 'close-left':
      tagsStore.closeLeft(path)
      break
    case 'close-right':
      tagsStore.closeRight(path)
      break
    case 'close-all':
      tagsStore.closeAll()
      const firstTag = tags.value[0]
      if (firstTag) router.push(firstTag.path)
      break
    case 'affix':
    case 'lock':
      tagsStore.toggleAffix(path)
      break
    case 'cache':
      tagsStore.toggleKeepAlive(path)
      break
  }
}
</script>

<style scoped>
/* 标签样式优化 */
.tags-view-tabs :deep(.n-tabs-tab) {
  border-radius: 4px 4px 0 0 !important;
  font-size: 13px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  position: relative;
  overflow: hidden;
}

/* Tab 被删除时的平滑动画提示 (针对 n-tabs 的特性做补丁) */
.tags-view-tabs :deep(.n-tabs-tab--closable) {
  animation: tabFadeIn 0.3s ease-out;
}

@keyframes tabFadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

:deep(.n-tabs-nav) {
  background-color: transparent !important;
}

/* 激活状态边框与背景 */
.tags-view-tabs :deep(.n-tabs-tab--active) {
  background-color: #f0f7ff !important;
  border-bottom: 1px solid white !important;
}

.dark .tags-view-tabs :deep(.n-tabs-tab--active) {
  background-color: #262626 !important;
  border-bottom: 1px solid #262626 !important;
}

/* 动态边框位置逻辑 */
.tags-view-tabs :deep(.n-tabs-tab--active)::after {
  content: '';
  position: absolute;
  background-color: v-bind('appStore.themeColor');
  transition: all 0.3s;
}

/* Top Border */
.border-pos-top :deep(.n-tabs-tab--active)::after {
  top: 0; left: 0; right: 0; height: 2px;
}
/* Bottom Border */
.border-pos-bottom :deep(.n-tabs-tab--active)::after {
  bottom: 0; left: 0; right: 0; height: 2px;
}
/* Left Border */
.border-pos-left :deep(.n-tabs-tab--active)::after {
  top: 0; left: 0; bottom: 0; width: 2px;
}
/* Right Border */
.border-pos-right :deep(.n-tabs-tab--active)::after {
  top: 0; right: 0; bottom: 0; width: 2px;
}

.group:hover .group-hover\:color-primary {
  color: var(--hover-color) !important;
}
</style>
