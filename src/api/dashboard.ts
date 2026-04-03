import request from '@/utils/request'

/**
 * 获取首页统计数据
 */
export function getDashboardStats() {
  return request.get('/api/dashboard/stats') as any
}

/**
 * 获取图表数据
 */
export function getDashboardChartData() {
  return request.get('/api/dashboard/chart-data') as any
}
