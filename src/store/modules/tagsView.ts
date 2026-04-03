import { defineStore } from 'pinia'
import { storage } from '@/utils/storage'

export interface TagItem {
  name: string
  path: string
  title: string
  affix?: boolean // 是否固定/锁定 (不可关闭)
  keepAlive?: boolean // 是否开启组件缓存
}

export const useTagsViewStore = defineStore('tagsView', {
  state: () => ({
    tags: (storage.get('visited_tags') || [
      { name: 'Dashboard', path: '/dashboard', title: '业务大盘', affix: true }
    ]) as TagItem[],
    activePath: '/dashboard'
  }),
  actions: {
    addTag(tag: TagItem) {
      if (this.tags.some((t) => t.path === tag.path)) {
        this.activePath = tag.path
        return
      }
      this.tags.push(tag)
      this.activePath = tag.path
      this.saveTags()
    },
    removeTag(path: string) {
      const tag = this.tags.find((t) => t.path === path)
      if (tag && tag.affix) return

      this.tags = this.tags.filter((t) => t.path !== path)
      this.saveTags()
    },
    // 切换固定状态
    toggleAffix(path: string) {
      const tag = this.tags.find((t) => t.path === path)
      if (tag) {
        tag.affix = !tag.affix
        this.saveTags()
      }
    },
    // 切换缓存状态
    toggleKeepAlive(path: string) {
      const tag = this.tags.find((t) => t.path === path)
      if (tag) {
        tag.keepAlive = !tag.keepAlive
        this.saveTags()
      }
    },
    // 关闭其他
    closeOthers(path: string) {
      this.tags = this.tags.filter((t) => t.path === path || t.affix)
      this.saveTags()
    },
    // 关闭左侧
    closeLeft(path: string) {
      const index = this.tags.findIndex((t) => t.path === path)
      if (index === -1) return
      this.tags = this.tags.filter((t, i) => i >= index || t.affix)
      this.saveTags()
    },
    // 关闭右侧
    closeRight(path: string) {
      const index = this.tags.findIndex((t) => t.path === path)
      if (index === -1) return
      this.tags = this.tags.filter((t, i) => i <= index || t.affix)
      this.saveTags()
    },
    // 关闭所有
    closeAll() {
      this.tags = this.tags.filter((t) => t.affix)
      this.saveTags()
    },
    setActivePath(path: string) {
      this.activePath = path
    },
    saveTags() {
      storage.set('visited_tags', this.tags)
    }
  }
})
