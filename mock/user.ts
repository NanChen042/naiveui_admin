import type { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'
import { resultSuccess } from './_utils'

const userList = Mock.mock({
  'list|50-80': [{
    'id|+1': 1,
    name: '@cname',
    'role|1': ['Admin', 'Operator', 'Viewer'],
    'status|1': ['Active', 'Locked', 'Pending'],
    createTime: '@datetime'
  }]
})

const mockMethods: MockMethod[] = [
  {
    url: '/api/user/list',
    method: 'get',
    response: (opt: { query: any }) => {
      const { page = 1, pageSize = 10 } = opt.query
      const p = parseInt(page as string)
      const ps = parseInt(pageSize as string)
      const index = (p - 1) * ps
      const total = userList.list.length
      const list = userList.list.slice(index, index + ps)
      return resultSuccess({
        list,
        total
      })
    }
  }
]

export default mockMethods
