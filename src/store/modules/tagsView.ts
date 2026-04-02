import { defineStore } from 'pinia'
import { storage } from '@/utils/storage'

export interface TagItem {
  name: string
  path: string
  title: string
}

export const useTagsViewStore = defineStore('tagsView', {
  state: () => ({
    tags: (storage.get('visited_tags') || [
      { name: 'Dashboard', path: '/dashboard', title: '业务大盘' }
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
      this.tags = this.tags.filter((t) => t.path !== path)
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
