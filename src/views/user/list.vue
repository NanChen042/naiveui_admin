<template>
  <div class="h-full">
    <ProTable
      title="后台人员花名册"
      :columns="columns"
      :requestApi="getUserList"
      :scroll-x="1200"
      @create="handleCreate"
    />
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { NButton, NTag, NSpace, useMessage } from 'naive-ui'
import ProTable from '@/components/ProTable/index.vue'
import { getUserList } from '@/api/user'

const message = useMessage()

const handleCreate = () => message.success('打开新增弹窗')
const handleEdit = (r: any) => message.info(`编辑: ${r.name}`)
const handleDelete = (r: any) => message.warning(`清退: ${r.id}`)

const columns = [
  { title: '# UID', key: 'id', width: 80, fixed: 'left' as const, align: 'center' },
  { title: '账户名', key: 'name', width: 180 },
  { 
    title: '角色', 
    key: 'role', 
    width: 120,
    render: (r: any) => h(NTag, { type: r.role === 'Admin' ? 'warning' : 'info', bordered: false, round: true }, { default: () => r.role })
  },
  { 
    title: '状态', 
    key: 'status',
    width: 120,
    render: (r: any) => h(NTag, { type: r.status === 'Locked' ? 'error' : 'success' }, { default: () => r.status })
  },
  { title: '注册时间', key: 'createTime', width: 220 },
  { 
    title: '操作', 
    key: 'actions',
    width: 160,
    fixed: 'right' as const,
    align: 'center',
    render: (r: any) => h(NSpace, { justify: 'center' }, {
        default: () => [
          h(NButton, { size: 'small', quaternary: true, type: 'primary', onClick: () => handleEdit(r) }, { default: () => '修改' }),
          h(NButton, { size: 'small', quaternary: true, type: 'error', onClick: () => handleDelete(r) }, { default: () => '删除' })
        ]
    })
  }
]
</script>