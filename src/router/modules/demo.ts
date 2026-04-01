import type { RouteRecordRaw } from 'vue-router'

/**
 * 演示模块：混合层级结构
 * - 肉类/海鲜：保持二级，直接平铺
 * - 饮品系列：恢复三级，通过“畅饮水单”进行收纳
 */
const DemoRoutes: RouteRecordRaw = {
  path: 'demo',
  name: 'Demo',
  meta: { title: '模块展示', icon: 'AppsOutline' },
  redirect: '/demo/meat',
  children: [
    // --- 二级平铺项 ---
    {
      path: 'meat',
      name: 'DemoMeat',
      component: () => import('@/views/user/list.vue'),
      meta: { title: '肉类生鲜', canClickBack: true }
    },
    {
      path: 'seafood',
      name: 'DemoSeafood',
      component: () => import('@/views/user/list.vue'),
      meta: { title: '水产海鲜', canClickBack: true }
    },
    // --- 三级嵌套项 (恢复层级) ---
    {
      path: 'beverage',
      name: 'DemoBeverage',
      meta: { title: '畅饮水单' },
      redirect: '/demo/beverage/whisky',
      children: [
        {
          path: 'whisky',
          name: 'DemoWhisky',
          component: () => import('@/views/dashboard/index.vue'),
          meta: { title: '威士忌', canClickBack: true }
        },
        {
          path: 'juice',
          name: 'DemoJuice',
          component: () => import('@/views/dashboard/index.vue'),
          meta: { title: '原味果汁', canClickBack: true }
        }
      ]
    }
  ]
}

export default DemoRoutes
