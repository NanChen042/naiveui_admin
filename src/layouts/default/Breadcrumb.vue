<template>
  <n-breadcrumb separator="/" class="mb-5 text-sm font-medium select-none">
    <n-breadcrumb-item
      v-for="(item, index) in breadcrumbs"
      :key="index"
    >
      <template v-if="item.meta?.dropdownOptions">
        <n-dropdown :options="(item.meta.dropdownOptions as any[])" @select="handleSelect">
          <span :class="[
            'inline-flex items-center gap-1 px-1 rounded outline-none transition-colors ml-[-4px]',
            index !== breadcrumbs.length - 1 && item.meta?.canClickBack ? 'hover:text-[#1890ff] cursor-pointer' : 'cursor-default',
            index === breadcrumbs.length - 1 ? 'text-[#1890ff]' : ''
          ]">
            <n-icon v-if="index === 0" class="mr-1" size="16"><HomeOutline /></n-icon>
            <span>{{ item.meta?.title }}</span>
          </span>
        </n-dropdown>
      </template>
      <template v-else>
        <span
          v-if="index !== breadcrumbs.length - 1 && item.meta?.canClickBack"
          class="inline-flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-[#1890ff] cursor-pointer transition-colors"
          @click="handleItemClick(item)"
        >
          <n-icon v-if="index === 0" class="mr-1" size="16"><HomeOutline /></n-icon>
          <span>{{ item.meta?.title }}</span>
        </span>
        <span
          v-else
          :class="[
            'inline-flex items-center gap-1 cursor-default whitespace-nowrap',
            index === breadcrumbs.length - 1 ? 'text-[#1890ff] font-bold' : 'text-gray-400 dark:text-gray-600'
          ]"
        >
          <n-icon v-if="index === 0" class="mr-1" size="16"><HomeOutline /></n-icon>
          <span>{{ item.meta?.title }}</span>
        </span>
      </template>
    </n-breadcrumb-item>
  </n-breadcrumb>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NIcon } from 'naive-ui'
import { HomeOutline } from '@vicons/ionicons5'

const route = useRoute()
const router = useRouter()

const breadcrumbs = computed(() => {
  const matched = route.matched.filter(item => {
    const title = item.meta?.title as string
    return title && title.trim() !== '' && item.meta?.hideBreadcrumb !== true
  })
  
  // 去重逻辑：防止重定向导致出现重复的路径名称（如：商品分类 / 商品分类）
  const result: any[] = []
  const seenTitles = new Set()
  
  matched.forEach(item => {
    const title = item.meta?.title
    if (!seenTitles.has(title)) {
      result.push({
        path: item.path,
        meta: { ...item.meta }
      })
      seenTitles.add(title)
    }
  })
  
  return result
})

const handleSelect = (k: string) => k.startsWith('/') && router.push(k)
const handleItemClick = (i: any) => router.push(i.redirect || i.path)
</script>

<style scoped>
/* ── 面包屑垂直对齐修复 ── */

/* 1. 内部 <ul> 列表容器：强制单行 flex + 垂直居中 */
:deep(ul) {
  display: flex !important;
  align-items: center !important;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}

/* 2. 每个 <li> 项：inline-flex 保证图标/文字/分隔符共线 */
:deep(.n-breadcrumb-item) {
  display: inline-flex !important;
  align-items: center !important;
  line-height: 1.5;
}

/* 3. link 插槽 */
:deep(.n-breadcrumb-item__link) {
  display: inline-flex !important;
  align-items: center !important;
}

/* 4. 分隔符 "/" */
:deep(.n-breadcrumb-item__separator) {
  display: inline-flex !important;
  align-items: center !important;
  margin: 0 8px;
}

/* 5. 隐藏最后一项的尾部分隔符 */
:deep(.n-breadcrumb-item:last-child .n-breadcrumb-item__separator) {
  display: none !important;
}
</style>
