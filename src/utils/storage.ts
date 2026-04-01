/**
 * 本地存储封装，支持过期时间
 */
export const storage = {
  get(key: string) {
    const item = localStorage.getItem(key)
    if (!item) return null
    try {
      const data = JSON.parse(item)
      if (data.expire && data.expire < Date.now()) {
        localStorage.removeItem(key)
        return null
      }
      return data.value
    } catch (e) {
      return item
    }
  },
  set(key: string, value: any, expire?: number) {
    const data = {
      value,
      expire: expire ? Date.now() + expire * 1000 : null
    }
    localStorage.setItem(key, JSON.stringify(data))
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
  clear() {
    localStorage.clear()
  }
}
