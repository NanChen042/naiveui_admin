import { createProdMockServer } from 'vite-plugin-mock/client'
import userMock from './user'
import authMock from './auth'
import dashboardMock from './dashboard'

export function setupProdMockServer() {
  createProdMockServer([...userMock, ...authMock, ...dashboardMock])
}
