import type { MockMethod } from 'vite-plugin-mock'
import { resultSuccess } from './_utils'

export default [
  // 首页统计卡片数据
  {
    url: '/api/dashboard/stats',
    method: 'get',
    response: () => {
      return resultSuccess([
        {
          title: '用户总数',
          value: 12430,
          trend: '+6.12%',
          desc: '较昨日增加 12 人',
          color: '#7B61FF'
        },
        {
          title: '今日访问',
          value: 15190,
          trend: '+2.14%',
          desc: '峰值出现在 10:00',
          color: '#00B2FF'
        },
        {
          title: '本月销售额',
          value: 2369670,
          trend: '+12.5%',
          desc: '本月预计达标',
          color: '#10B981',
          isMoney: true
        },
        {
          title: '待处理任务',
          value: 128,
          trend: '-2.16%',
          desc: '优先级较高',
          color: '#F59E0B'
        }
      ])
    }
  },
  // 首页大图表数据
  {
    url: '/api/dashboard/chart-data',
    method: 'get',
    response: () => {
      return resultSuccess({
        months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        series: [
          { name: '主要收入', data: [42000, 68000, 54000, 58000, 70000, 80000, 84000, 78000, 69000, 68000, 82000, 60000] },
          { name: '核心业务', data: [46000, 54000, 48000, 68000, 70000, 60000, 44000, 44000, 50000, 48000, 64000, 50000] },
          { name: '辅助收入', data: [42000, 44000, 44000, 46000, 44000, 48000, 36000, 40000, 38000, 48000, 48000, 46000] },
          { name: '订阅收入', data: [30000, 22000, 24000, 26000, 22000, 32000, 28000, 28000, 22000, 20000, 22000, 28000] },
          { name: '广告收入', data: [16000, 16000, 14000, 20000, 22000, 16000, 16000, 18000, 24000, 18000, 16000, 18000] }
        ]
      })
    }
  }
] as MockMethod[]
