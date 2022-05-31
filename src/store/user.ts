import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  // id必填，且需要唯一
  id: 'user',
  state: () => ({
    name: '张三'
  }),
  actions: {
    updateName(name: string) {
      this.name = name
    }
  }
})
