<template>
  <div class="flex flex-col gap-4">
    <!-- 顶部说明卡片 -->
    <n-alert title="数据表格演示" type="info" closable>
      这是一个数据表格的例子，集成了搜索、筛选和分页功能。当前角色：<n-tag :type="userStore.role === 'admin' ? 'success' : 'warning'" size="small">{{ userStore.role }}</n-tag>
    </n-alert>

    <!-- 搜索表单卡片 -->
    <n-card :bordered="false" size="small" class="shadow-sm rounded-lg">
      <n-form inline :label-width="80" label-placement="left" class="flex flex-wrap gap-4">
        <n-form-item label="姓名">
          <n-input placeholder="请输入姓名" />
        </n-form-item>
        <n-form-item label="性别">
          <n-select placeholder="请选择" :options="[{label: '男', value: 1}, {label: '女', value: 2}]" style="width: 120px" />
        </n-form-item>
        <n-form-item label="公司">
          <n-input placeholder="请输入公司" />
        </n-form-item>
        <div class="ml-auto flex gap-2">
          <n-button type="primary">查询</n-button>
          <n-button>重置</n-button>
        </div>
      </n-form>
    </n-card>

    <!-- 数据表格卡片 -->
    <n-card :bordered="false" size="small" class="shadow-sm rounded-lg">
      <template #header>
        <div class="flex justify-between items-center w-full">
          <span class="font-bold text-lg">数据列表</span>
          <n-space>
            <!-- 按钮级权限控制：仅管理员可见 -->
            <n-button v-if="userStore.role === 'admin'" type="primary" secondary>新增数据</n-button>
            <n-button>导出 CSV</n-button>
          </n-space>
        </div>
      </template>
      
      <n-data-table
        :columns="columns"
        :data="data"
        :pagination="pagination"
        :bordered="false"
      />
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { NTag, NButton, useMessage } from 'naive-ui'
import type { DataTableColumns } from 'naive-ui'
import { useUserStore } from '@/store/modules/user'

const message = useMessage()
const userStore = useUserStore()

interface RowData {
  key: number
  id: string
  name: string
  age: number
  address: string
  company: string
  tags: string[]
}

const columns: DataTableColumns<RowData> = [
  { title: 'ID', key: 'id', width: 80 },
  { title: '姓名', key: 'name', width: 120 },
  { title: '年龄', key: 'age', width: 80 },
  { title: '公司', key: 'company' },
  { title: '地址', key: 'address' },
  {
    title: '标签',
    key: 'tags',
    render(row) {
      return row.tags.map((tag) => {
        return h(
          NTag,
          {
            style: { marginRight: '6px' },
            type: tag === '优秀' ? 'success' : 'info',
            bordered: false
          },
          { default: () => tag }
        )
      })
    }
  },
  {
    title: '操作',
    key: 'actions',
    render(row) {
      return h(
        'div',
        { class: 'flex gap-2' },
        [
          h(
            NButton,
            {
              size: 'small',
              quaternary: true,
              type: 'primary',
              onClick: () => message.info(`查看 ${row.name}`)
            },
            { default: () => '查看' }
          ),
          // 操作项权限控制：仅管理员可见
          userStore.role === 'admin' ? h(
            NButton,
            {
              size: 'small',
              quaternary: true,
              type: 'error',
              onClick: () => message.warning(`确认删除 ${row.name} 吗？`)
            },
            { default: () => '删除' }
          ) : null
        ]
      )
    }
  }
]

const data: RowData[] = Array.from({ length: 15 }).map((_, i) => ({
  key: i,
  id: `10${i}`,
  name: ['陆红 k', '楼呈轩', '市娜娜', '竹依诺', '宿治文', '邵治涛'][i % 6] || '匿名',
  age: 20 + i,
  company: '南码市义轩运输有限公司',
  address: `上海市浦东东运路 ${i + 1} 号`,
  tags: i % 3 === 0 ? ['优秀', '活跃'] : ['普通']
}))

const pagination = {
  pageSize: 10
}
</script>
