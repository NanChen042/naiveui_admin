import type { RouteRecordRaw } from 'vue-router'

const UserRoutes: RouteRecordRaw = {
  path: 'user',
  name: 'User',
  component: () => import('@/views/user/list.vue'),
  meta: {
    title: '用户管理',
    roles: ['admin'],
    dropdownOptions: [
      { label: '安全审核', key: '/audit/logs' },
      { label: '权限分配', key: '/system/roles' }
    ]
  }
}

export default UserRoutes
