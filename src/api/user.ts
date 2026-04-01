import request from '@/utils/request'

/**
 * 获取用户列表
 */
export function getUserList(params: { page: number, pageSize: number }) {
  // 模拟接口返回，实际开发中会走 axios 请求
  // return request.get('/user/list', { params })
  
  // 为了演示例程，暂时保留 Mock 逻辑在此，但结构化导出
  return new Promise<{ list: any[], total: number }>(async (resolve) => {
    await new Promise(r => setTimeout(r, 800))
    const totalItems = Array.from({ length: 125 }).map((_, i) => ({
      id: i + 1,
      name: `User_${Math.random().toString(36).substr(2, 5).toUpperCase()}`,
      role: i % 3 === 0 ? 'Admin' : 'Operator',
      status: i % 4 === 0 ? 'Locked' : 'Active',
      createTime: new Date(Date.now() - Math.random() * 10000000000).toLocaleString()
    }))
    const start = (params.page - 1) * params.pageSize
    resolve({
      list: totalItems.slice(start, start + params.pageSize),
      total: totalItems.length
    })
  })
}
