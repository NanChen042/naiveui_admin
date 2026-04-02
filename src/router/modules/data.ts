import type { RouteRecordRaw } from 'vue-router'

/**
 * 数据展示模块
 */
const DataRoutes: RouteRecordRaw = {
  path: 'data',
  name: 'DataDisplay',
  meta: { title: '数据展示', icon: 'GridOutline' },
  redirect: '/data/table',
  children: [
    {
      path: 'table',
      name: 'DataTable',
      component: () => import('@/views/data/table.vue'),
      meta: { title: '数据表格', canClickBack: true }
    },
    {
      path: 'form',
      name: 'DataForm',
      component: () => import('@/views/data/form.vue'),
      meta: { title: '数据表单', canClickBack: true }
    }
  ]
}

export default DataRoutes
