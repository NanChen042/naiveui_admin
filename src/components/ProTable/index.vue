<template>
  <div class="w-full h-full flex flex-col bg-white dark:bg-[#18181c] rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-300">
    <div v-if="showToolbar" class="flex justify-between items-center px-5 py-4 border-b border-gray-50 dark:border-gray-800">
      <div class="text-base font-semibold text-gray-800 dark:text-white/90">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="flex gap-2">
        <slot name="toolbar">
          <n-button v-if="showCreate" type="primary" size="small" @click="$emit('create')">添加记录</n-button>
          <n-button size="small" @click="refresh">刷新</n-button>
        </slot>
      </div>
    </div>

    <div class="flex-1 p-5 overflow-hidden">
      <n-data-table
        :columns="columns"
        :data="data"
        :loading="loading"
        :pagination="paginationConfig"
        :remote="true"
        @update:page="handlePageChange"
        @update:page-size="handlePageSizeChange"
        :scroll-x="scrollX"
        :max-height="fixedHeader ? 'calc(100vh - 280px)' : undefined"
        class="h-full"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { DataTableColumns } from 'naive-ui'
import { useTable } from '@/hooks/useTable'

const props = withDefaults(defineProps<{
  title?: string
  columns: DataTableColumns<any>
  requestApi: (params: { page: number, pageSize: number }) => Promise<{ list: any[], total: number }>
  showToolbar?: boolean
  showCreate?: boolean
  fixedHeader?: boolean
  scrollX?: number
}>(), {
  title: '业务数据表',
  showToolbar: true,
  showCreate: true,
  fixedHeader: true
})

defineEmits(['create'])

const { loading, data, total, page, pageSize, refresh, handlePageChange, handlePageSizeChange } = useTable({
  requestApi: props.requestApi
})

const paginationConfig = computed(() => ({
  page: page.value,
  pageSize: pageSize.value,
  itemCount: total.value,
  showSizePicker: true,
  pageSizes: [10, 20, 50],
  prefix: (i: any) => `共 ${i.itemCount} 项`
}))

defineExpose({ refresh })
</script>
