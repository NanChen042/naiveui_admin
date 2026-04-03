import { createProdMockServer } from 'vite-plugin-mock/client'
import userMock from './user'

export function setupProdMockServer() {
  createProdMockServer([...userMock])
}
