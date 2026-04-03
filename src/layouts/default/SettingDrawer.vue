<template>
  <n-drawer v-model:show="showDrawer" :width="350">
    <n-drawer-content title="系统设定" closable>
      <template #header-extra>
        <n-button quaternary circle size="small" @click="appStore.reloadPage">
          <template #icon>
            <n-icon>
              <RefreshOutline />
            </n-icon>
          </template>
        </n-button>
      </template>

      <div class="flex flex-col gap-6 pb-10">
        <!-- 主题颜色 -->
        <section>
          <n-divider title-placement="center">主题颜色</n-divider>
          <div class="px-2 text-center">
            <n-color-picker :value="appStore.themeColor" :show-alpha="false" @update:value="appStore.setThemeColor($event)" />
          </div>
        </section>

        <!-- 导航模式 -->
        <section>
          <n-divider title-placement="center">导航模式</n-divider>
          <div class="flex justify-around gap-4 px-2">
            <div class="relative w-24 h-18 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer border-2 transition-all p-1" :class="appStore.navMode === 'sider' ? 'selected-mode' : 'border-gray-200 dark:border-gray-800'" :style="appStore.navMode === 'sider' ? { borderColor: appStore.themeColor } : {}" @click="appStore.setNavMode('sider')">
              <div class="flex h-full w-full gap-1">
                <div class="w-1/4 h-full rounded-sm" :style="{ backgroundColor: appStore.themeColor + '44' }"></div>
                <div class="flex-1 flex flex-col gap-1">
                  <div class="h-1/5 w-full bg-gray-200 dark:bg-gray-700 rounded-sm"></div>
                  <div class="flex-1 w-full bg-gray-100 dark:bg-gray-800 rounded-sm"></div>
                </div>
              </div>
            </div>
            <div class="relative w-24 h-18 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer border-2 transition-all p-1" :class="appStore.navMode === 'top' ? 'selected-mode' : 'border-gray-200 dark:border-gray-800'" :style="appStore.navMode === 'top' ? { borderColor: appStore.themeColor } : {}" @click="appStore.setNavMode('top')">
              <div class="flex flex-col h-full w-full gap-1">
                <div class="h-1/4 w-full rounded-sm" :style="{ backgroundColor: appStore.themeColor + '44' }"></div>
                <div class="flex-1 w-full bg-gray-100 dark:bg-gray-800 rounded-sm"></div>
              </div>
            </div>
          </div>
        </section>

        <!-- 布局相关 -->
        <section>
          <n-divider title-placement="center">布局相关</n-divider>
          <div class="flex flex-col gap-3.5 px-2">
            <div class="setting-item cursor-pointer group hover:opacity-80 transition-opacity" @click="isSiderExpanded = !isSiderExpanded">
              <div class="flex items-center gap-1">
                <span>展开侧边菜单</span>
                <n-icon size="14" class="text-gray-400 transition-transform duration-300" :class="{ 'rotate-90': isSiderExpanded }">
                  <ChevronForwardOutline />
                </n-icon>
              </div>
              <n-switch :value="!appStore.sidebarCollapsed" @update:value="appStore.toggleSidebar" size="medium" @click.stop />
            </div>
            <n-collapse-transition :show="isSiderExpanded">
              <div class="flex flex-col gap-3 pl-4 pb-2 pt-1">
                <div class="flex justify-between items-center text-xs text-gray-500">
                  <span>侧边菜单宽度</span>
                  <n-input-number v-model:value="appStore.sidebarWidth" size="small" class="w-24" :min="160" :max="400" />
                </div>
                <div class="flex justify-between items-center text-xs text-gray-500">
                  <span>侧边菜单最大宽度</span>
                  <n-input-number v-model:value="appStore.sidebarMaxWidth" size="small" class="w-24" :min="400" :max="800" />
                </div>
              </div>
            </n-collapse-transition>

            <div class="setting-item cursor-pointer group hover:opacity-80 transition-opacity" @click="isTagsExpanded = !isTagsExpanded">
              <div class="flex items-center gap-1">
                <span>显示标签页</span>
                <n-icon size="14" class="text-gray-400 transition-transform duration-300" :class="{ 'rotate-90': isTagsExpanded }">
                  <ChevronForwardOutline />
                </n-icon>
              </div>
              <n-switch :value="appStore.showTabs" @update:value="appStore.setUI('show_tabs', $event)" size="medium" @click.stop />
            </div>
            <n-collapse-transition :show="isTagsExpanded">
              <div class="flex flex-col gap-3 pl-4 pb-2 pt-1">
                <div class="flex justify-between items-center text-xs text-gray-500">
                  <span>常显标签关闭按钮</span>
                  <n-switch :value="appStore.showTabClose" @update:value="appStore.setUI('show_tab_close', $event)" size="small" />
                </div>
                <div class="flex justify-between items-center text-xs text-gray-500">
                  <span>激活标签边框位置</span>
                  <n-select v-model:value="appStore.tabBorderPosition" size="small" :options="borderOptions" class="!w-24" />
                </div>
              </div>
            </n-collapse-transition>

            <div class="setting-item cursor-pointer group hover:opacity-80 transition-opacity" @click="isBreadExpanded = !isBreadExpanded">
              <div class="flex items-center gap-1">
                <span>显示面包屑</span>
                <n-icon size="14" class="text-gray-400 transition-transform duration-300" :class="{ 'rotate-90': isBreadExpanded }">
                  <ChevronForwardOutline />
                </n-icon>
              </div>
              <n-switch :value="appStore.showBreadcrumb" @update:value="appStore.setUI('show_breadcrumb', $event)" size="medium" @click.stop />
            </div>
            <n-collapse-transition :show="isBreadExpanded">
              <div class="flex flex-col gap-3 pl-4 pb-2 pt-1 text-xs text-gray-500">
                <div class="flex justify-between items-center">
                  <span>启用切换过渡效果</span>
                  <n-switch :value="appStore.enableTransition" @update:value="appStore.setUI('enable_transition', $event)" size="small" />
                </div>
              </div>
            </n-collapse-transition>

            <div class="setting-item">
              <span>显示顶部加载条</span>
              <n-switch :value="appStore.showLoadingBar" @update:value="appStore.setUI('show_loading_bar', $event)" size="medium" />
            </div>
            <div class="setting-item">
              <span>显示Logo</span>
              <n-switch :value="appStore.showLogo" @update:value="appStore.setUI('show_logo', $event)" size="medium" />
            </div>
            <div class="setting-item">
              <span>显示导航按钮</span>
              <n-switch :value="appStore.showNavButtons" @update:value="appStore.setUI('show_nav_buttons', $event)" size="medium" />
            </div>
            <div class="setting-item">
              <span>显示底部</span>
              <n-switch :value="appStore.showFooter" @update:value="appStore.setUI('show_footer', $event)" size="medium" />
            </div>

            <div class="setting-item cursor-pointer group hover:opacity-80 transition-opacity" @click="isTransitionExpanded = !isTransitionExpanded">
              <div class="flex items-center gap-1">
                <span>启用导航过渡效果</span>
                <n-icon size="14" class="text-gray-400 transition-transform duration-300" :class="{ 'rotate-90': isTransitionExpanded }">
                  <ChevronForwardOutline />
                </n-icon>
              </div>
              <n-switch :value="appStore.enableTransition" @update:value="appStore.setUI('enable_transition', $event)" size="medium" @click.stop />
            </div>
            <n-collapse-transition :show="isTransitionExpanded">
              <div class="flex flex-col gap-2 pl-4 pb-2 text-xs text-gray-500">
                <div class="flex justify-between items-center">
                  <span>过渡效果类型</span>
                  <n-select v-model:value="appStore.transitionType" size="small" :options="transitionOptions" class="w-32!" />
                </div>
              </div>
            </n-collapse-transition>
          </div>
        </section>

        <!-- 页面相关 -->
        <section>
          <n-divider title-placement="center">页面相关</n-divider>
          <div class="flex flex-col gap-3.5 px-2 text-sm">
            <div class="setting-item pb-10">
              <div class="flex items-center gap-2">
                <span>显示水印</span>
                <n-icon size="14" class="text-gray-400 transition-colors hover:text-primary cursor-pointer" @click="showWatermarkModal = true">
                  <CreateOutline />
                </n-icon>
              </div>
              <n-switch :value="appStore.showWatermark" @update:value="appStore.setUI('show_watermark', $event)" size="medium" />
            </div>
          </div>
        </section>
      </div>

      <template #footer>
        <div class="flex flex-col items-center gap-1 py-1 text-gray-400 border-t border-gray-100 dark:border-gray-800">
          <div class="flex items-center gap-2 text-xs">
            <n-icon>
              <SettingsOutline />
            </n-icon>
            <span>版本 v0.1.3</span>
            <span class="mx-2 text-gray-300">|</span>
            <span class="font-mono text-[9px]">POWERED BY NAN CHEN</span>
          </div>
        </div>
      </template>
    </n-drawer-content>
  </n-drawer>

  <!-- 水印配置弹窗 -->
  <WatermarkModal v-model:show="showWatermarkModal" />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useAppStore } from '@/store/modules/app'
import {
  NCollapseTransition,
  NSelect,
  NSwitch,
  NIcon,
  NButton,
  NDivider,
  NColorPicker,
  NInputNumber,
  NDrawer,
  NDrawerContent
} from 'naive-ui'
import {
  SettingsOutline,
  RefreshOutline,
  ChevronForwardOutline,
  CreateOutline
} from '@vicons/ionicons5'
import WatermarkModal from './components/WatermarkModal.vue'

const appStore = useAppStore()
const isTransitionExpanded = ref(false)
const isSiderExpanded = ref(false)
const isTagsExpanded = ref(false)
const isBreadExpanded = ref(false)

// 水印配置相关
const showWatermarkModal = ref(false)

// 选项数据
const transitionOptions = [
  { label: '左右滑动', value: 'fade-slide' },
  { label: '缩放', value: 'zoom-fade' },
  { label: '淡显', value: 'fade' },
  { label: '左淡显', value: 'fade-left' },
  { label: '右淡显', value: 'fade-right' }
]

const borderOptions = [
  { label: '顶部', value: 'top' },
  { label: '底部', value: 'bottom' },
  { label: '左侧', value: 'left' },
  { label: '右侧', value: 'right' }
]

const showDrawer = computed({
  get: () => appStore.showSettingDrawer,
  set: (val) => appStore.setUI('showSettingDrawer', val)
})
</script>

<style scoped>
@reference "../../assets/main.css";

.setting-item {
  @apply flex justify-between items-center text-[13px] text-gray-600 dark:text-gray-400 min-h-[30px];
}

.selected-mode {
  @apply shadow-md scale-[1.02];
}

section :deep(.n-divider) {
  margin-top: 12px !important;
  margin-bottom: 20px !important;
}

section :deep(.n-divider .n-divider__title) {
  font-size: 13px;
  font-weight: 600;
  color: #666;
}
</style>
